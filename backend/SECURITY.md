# Local security boundary

## Supported use

Run on loopback for local learning. Use a dedicated virtualenv containing only this project's dependencies. The API process must run as an unprivileged OS user. Do not expose this prototype to the internet or place secrets in the dedicated Python runtime/virtualenv. No deployment is included.

Local mode intentionally shares one workspace. Account mode separates dataset, experiment and model queries by an authenticated owner. It is not a public identity service: there is no email verification, password reset, MFA, TLS termination, distributed rate limiting or administration interface.

## Python execution

User code is passed as input to a separate Python process launched inside Bubblewrap, not executed with `exec` in the API server. The `exec` call in the trusted runner is inside the child namespace only. There is no non-isolated subprocess fallback.

Isolation combines:

- New Linux network, mount, PID, IPC, UTS, user and cgroup namespaces from Bubblewrap `--unshare-all`.
- Read-only system runtime and dedicated virtualenv mounts. App/database/home/host temporary directories are absent.
- Cleared environment, no credentials, dropped capabilities, new session, death with parent.
- Seccomp rules installed before user code. Process creation/execution, sockets, filesystem mutation, namespace changes, ptrace, io_uring and several other high-risk interfaces are denied. Existing files may be opened only for reading. This intentionally prevents package installation, saving files, subprocess tools and multiprocessing.
- Kernel hard limits: 512 MiB address space, 8 seconds CPU, 1 MiB per output file, 64 file descriptors, and 32 process ceiling. Seccomp further prevents user code from creating any child process/thread.
- Parent wall-clock timeout of 10 seconds, process-group kill and fresh per-run namespaces.
- One active run per API process. Returned stdout and stderr each have a 64 KiB cap. Python text capture uses a stricter 30,000-character bound each. Charts: up to four PNGs, at most 150 KB binary each. Raw output capture is bounded by the file-size hard limit.

The API imports Matplotlib and installs chart capture in the child before seccomp is active, because trusted font initialization needs temporary caches. User code starts only after the filter succeeds. A missing library, failed seccomp load, disabled user namespaces or unavailable launcher produces no user-code execution. Capabilities self-tests this route. Do not claim that merely installing Bubblewrap proves the current OS can run it.

Linux namespaces and seccomp share the host kernel; they are not a VM and do not remove kernel-vulnerability risk. This implementation has local boundary tests, not an independent security audit. A public hostile multi-tenant service would require a separately reviewed execution service, stronger OS/container quotas and operational monitoring. That is outside the authorized no-service/no-deployment scope.

## Data handling

- SQL parameters are bound, never assembled from user values.
- Upload names are metadata, not filesystem paths. Upload contents and models are stored in SQLite, not under user-selected filenames.
- Request bodies, zip expansion, dimensions, preview and computation sizes are bounded.
- CSV exports prefix spreadsheet formula-looking string values with an apostrophe. Stored values are unchanged.
- Responses use `nosniff` and `no-store`. CORS accepts only configured exact origins. CORS is not authentication.
- Passwords are scrypt hashes with random salts; tokens are high-entropy and stored hashed. Logout revokes the token. SQLite remains private local data and is not encrypted by this app.
- Only server-created models are downloadable. No untrusted pickle/joblib model import endpoint exists.
- Preserve the SQLite database and its WAL/SHM consistently when backing it up. Do not ship runtime databases, tokens or uploaded data in source archives.
