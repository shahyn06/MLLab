"""Fail-closed Linux namespace runner. No subprocess fallback without bwrap."""
import base64
import json
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import sysconfig
import tempfile
import threading
import time

MAX_OUTPUT = 65536
_GATE = threading.BoundedSemaphore(1)

# Trusted launcher runs INSIDE the sandbox before user code. The parent sets
# kernel resource limits via prlimit before the namespace launcher starts.
WRAPPER = r'''
import sys, io, json, traceback, base64, os
os.environ['MPLBACKEND'] = 'Agg'
os.environ['MPLCONFIGDIR'] = '/work/.matplotlib'
os.makedirs('/work/.cache/fontconfig', exist_ok=True)
with open('/work/fonts.conf', 'w') as config:
    config.write('<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd"><fontconfig><dir>/usr/share/fonts</dir><cachedir>/work/.cache/fontconfig</cachedir></fontconfig>')
os.environ['FONTCONFIG_FILE'] = '/work/fonts.conf'
class Limited(io.StringIO):
    def write(self, value):
        left = max(0, 30000 - self.tell())
        return super().write(value[:left])
code = sys.stdin.read(30001)
output, errors, charts = Limited(), Limited(), []
success = True
original = sys.stdout
sys.stdout, sys.stderr = output, errors
try:
    import importlib.util
    if importlib.util.find_spec('matplotlib'):
        import matplotlib.pyplot as plt
        def show(*args, **kwargs):
            for n in plt.get_fignums()[:4-len(charts)]:
                data = io.BytesIO()
                plt.figure(n).savefig(data, format='png', dpi=80)
                if data.tell() <= 150000:
                    charts.append(base64.b64encode(data.getvalue()).decode('ascii'))
            plt.close('all')
        plt.show = show
    # Install a kernel filter before any user code. Blocking process creation
    # makes the address-space limit a whole-run limit, not a per-child loophole.
    import ctypes, errno
    sec = ctypes.CDLL('libseccomp.so.2', use_errno=True)
    sec.seccomp_init.argtypes = [ctypes.c_uint32]
    sec.seccomp_init.restype = ctypes.c_void_p
    sec.seccomp_syscall_resolve_name.argtypes = [ctypes.c_char_p]
    sec.seccomp_rule_add.argtypes = [ctypes.c_void_p, ctypes.c_uint32, ctypes.c_int, ctypes.c_uint]
    sec.seccomp_load.argtypes = [ctypes.c_void_p]
    sec.seccomp_release.argtypes = [ctypes.c_void_p]
    ctx = sec.seccomp_init(0x7fff0000)
    if not ctx: raise RuntimeError('Cannot initialize syscall filter')
    deny = 0x00050000 | errno.EPERM
    calls = ['clone', 'clone3', 'fork', 'vfork', 'execve', 'execveat', 'unshare', 'setns',
             'mount', 'umount2', 'pivot_root', 'ptrace', 'process_vm_readv', 'process_vm_writev',
             'socket', 'socketpair', 'bpf', 'userfaultfd', 'keyctl', 'add_key', 'request_key',
             'memfd_create', 'io_uring_setup', 'io_uring_enter', 'io_uring_register', 'perf_event_open', 'fanotify_init', 'open_by_handle_at', 'openat2', 'creat', 'mkdir', 'mkdirat', 'rmdir', 'unlink', 'unlinkat',
             'rename', 'renameat', 'renameat2', 'link', 'linkat', 'symlink', 'symlinkat',
             'mknod', 'mknodat', 'truncate', 'ftruncate', 'chmod', 'fchmod', 'fchmodat',
             'chown', 'fchown', 'lchown', 'fchownat']
    class Arg(ctypes.Structure):
        _fields_ = [('arg', ctypes.c_uint), ('op', ctypes.c_uint), ('datum_a', ctypes.c_uint64), ('datum_b', ctypes.c_uint64)]
    try:
        for name in calls:
            number = sec.seccomp_syscall_resolve_name(name.encode())
            if number >= 0 and sec.seccomp_rule_add(ctx, deny, number, 0) != 0:
                raise RuntimeError('Cannot install syscall restriction')
        # Open existing files for reading only. No user-created files or caches.
        for name, position in [('open', 1), ('openat', 2)]:
            number = sec.seccomp_syscall_resolve_name(name.encode())
            if number >= 0:
                for bit in [os.O_WRONLY, os.O_RDWR, os.O_CREAT]:
                    arg = Arg(position, 7, bit, bit)  # SCMP_CMP_MASKED_EQ
                    if sec.seccomp_rule_add(ctx, deny, number, 1, arg) != 0:
                        raise RuntimeError('Cannot restrict writable files')
        if sec.seccomp_load(ctx) != 0: raise RuntimeError('Cannot activate syscall filter')
    finally:
        sec.seccomp_release(ctx)
    exec(compile(code, '<playground>', 'exec'), {'__name__': '__main__'})
    if 'plt' in locals(): show()
except BaseException:
    success = False
    traceback.print_exc(file=errors)
finally:
    sys.stdout, sys.stderr = original, sys.__stderr__
    print(json.dumps({'stdout': output.getvalue(), 'stderr': errors.getvalue(), 'charts': charts, 'success': success}))
'''


class SandboxUnavailable(Exception):
    pass


def command(settings, work):
    bwrap, prlimit = shutil.which('bwrap'), shutil.which('prlimit')
    if sys.platform != 'linux' or not bwrap or not prlimit:
        raise SandboxUnavailable('Linux, bubblewrap, and util-linux prlimit are required')
    # Mount only system runtime files and the virtualenv, never the app, home,
    # current directory, database, credentials, or other host temporary files.
    args = [prlimit, f'--as={settings.playground_memory_mb*1024*1024}',
            f'--cpu={settings.playground_seconds}', '--fsize=1048576', '--nofile=64', '--nproc=1024', '--core=0', '--',
            bwrap, '--unshare-all', '--die-with-parent', '--new-session', '--cap-drop', 'ALL',
            '--clearenv', '--setenv', 'PATH', '/usr/bin', '--setenv', 'HOME', '/work',
            '--setenv', 'LANG', 'C.UTF-8', '--setenv', 'OPENBLAS_NUM_THREADS', '1',
            '--setenv', 'XDG_CACHE_HOME', '/work/.cache', '--setenv', 'JOBLIB_MULTIPROCESSING', '0', '--setenv', 'OMP_NUM_THREADS', '1', '--setenv', 'MKL_NUM_THREADS', '1',
            '--ro-bind', '/usr', '/usr']
    for path in ['/lib', '/lib64', '/bin']:
        if Path(path).exists(): args += ['--ro-bind', path, path]
    if Path('/etc/fonts').exists(): args += ['--ro-bind', '/etc/fonts', '/etc/fonts']
    args += ['--proc', '/proc', '--dev', '/dev', '--tmpfs', '/tmp', '--tmpfs', '/work', '--chdir', '/work']
    executable = sys.executable
    if sys.prefix != sys.base_prefix:
        args += ['--ro-bind', sys.prefix, '/opt/ml-runtime',
                 '--ro-bind', str(Path(sys.executable).resolve()), '/opt/ml-python']
        # Invoke the real interpreter with an isolated site path. This also
        # handles venv executables whose host symlink target is outside /usr.
        site_path = '/opt/ml-runtime/lib/python' + str(sys.version_info.major) + '.' + str(sys.version_info.minor) + '/site-packages'
        executable = '/opt/ml-python'
        wrapper = 'import sys; sys.path.insert(0, ' + repr(site_path) + ')\n' + WRAPPER
    elif not str(Path(executable).resolve()).startswith('/usr/'):
        raise SandboxUnavailable('Run the API from a virtualenv or a system Python under /usr')
    return args + ['--', executable, '-I', '-c', wrapper if sys.prefix != sys.base_prefix else WRAPPER]


def probe(settings):
    if not settings.playground_enabled:
        return {'available': False, 'reason': 'Disabled by ML_LAB_PLAYGROUND_ENABLED'}
    try:
        result = run('print(1)', settings, probe_only=True)
        if result['status'] != 'ok' or result['stdout'].strip() != '1':
            return {'available': False, 'reason': 'The isolation self-test failed; Python execution is disabled'}
        return {'available': True, 'reason': None}
    except SandboxUnavailable as e:
        return {'available': False, 'reason': str(e)}


def run(code, settings, probe_only=False):
    if not settings.playground_enabled:
        raise SandboxUnavailable('The playground is disabled')
    if not _GATE.acquire(blocking=False):
        raise SandboxUnavailable('Another playground run is in progress; retry shortly')
    started = time.monotonic()
    try:
        with tempfile.TemporaryDirectory(prefix='ml-lab-run-') as work:
            args = command(settings, work)
            # Anonymous temporary output files are not mounted into the sandbox.
            # RLIMIT_FSIZE caps direct writes even if code bypasses text capture.
            with tempfile.TemporaryFile() as out, tempfile.TemporaryFile() as err:
                process = subprocess.Popen(args, stdin=subprocess.PIPE, stdout=out, stderr=err, start_new_session=True,
                                           env={'PATH': '/usr/bin:/bin', 'LANG': 'C.UTF-8'})
                timed_out = False
                try:
                    process.communicate(code.encode(), timeout=settings.playground_seconds + 2)
                except subprocess.TimeoutExpired:
                    timed_out = True
                    os.killpg(process.pid, signal.SIGKILL)
                    process.communicate()
                finally:
                    # Kill any surviving descendants; each run gets its own PID namespace.
                    try: os.killpg(process.pid, signal.SIGKILL)
                    except ProcessLookupError: pass
                out.seek(0); raw = out.read(1048577)
                err.seek(0); raw_err = err.read(MAX_OUTPUT).decode('utf-8', errors='replace')
            if raw_err.startswith(('bwrap:', 'prlimit:')):
                raise SandboxUnavailable('The Linux isolation launcher failed; Python execution is unavailable')
            elapsed = round(time.monotonic()-started, 3)
            status = 'timeout' if timed_out or process.returncode in {-signal.SIGXCPU, 128+signal.SIGXCPU, 128+signal.SIGKILL} else 'ok' if process.returncode == 0 else 'error'
            stdout, stderr, charts = '', raw_err, []
            try:
                data = json.loads(raw)
                stdout = str(data.get('stdout',''))[:MAX_OUTPUT]
                stderr += str(data.get('stderr',''))[:MAX_OUTPUT]
                for item in data.get('charts', [])[:4]:
                    if isinstance(item, str) and len(item) <= 200000:
                        decoded = base64.b64decode(item, validate=True)
                        if decoded.startswith(b'\x89PNG\r\n\x1a\n'):
                            charts.append({'mime_type': 'image/png', 'base64': item})
                if not data.get('success', False) and status == 'ok': status = 'error'
            except (ValueError, TypeError, AttributeError):
                stdout = raw[:MAX_OUTPUT].decode('utf-8', errors='replace')
                if status == 'ok': status = 'error'
            if status == 'timeout': stderr += '\nRuntime limit exceeded.'
            elif process.returncode < 0: stderr += '\nProcess terminated by a resource limit or signal.'
            return {'status': status, 'stdout': stdout, 'stderr': stderr[:MAX_OUTPUT], 'charts': charts,
                    'elapsed_seconds': elapsed, 'exit_code': process.returncode,
                    'limits': {'wall_seconds': settings.playground_seconds+2, 'cpu_seconds': settings.playground_seconds,
                               'memory_mb': settings.playground_memory_mb, 'output_bytes': MAX_OUTPUT,
                               'network': False, 'persistent_files': False}}
    except OSError as e:
        raise SandboxUnavailable('The isolation runtime could not start') from e
    finally:
        _GATE.release()
