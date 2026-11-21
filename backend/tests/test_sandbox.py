import base64
import json
from dataclasses import replace
from pathlib import Path
import pytest
from app import playground
from app.config import Settings


@pytest.fixture(scope='module')
def settings():
    result=Settings()
    availability=playground.probe(result)
    if not availability['available']:
        pytest.skip('Linux isolation is unavailable: '+str(availability['reason']))
    return result


def test_stdout_and_real_numpy(settings):
    result=playground.run('import numpy as np\nprint(np.mean([1,2,3,4]))',settings)
    assert result['status']=='ok',result
    assert result['stdout'].strip()=='2.5'


def test_installed_sklearn_inside_sandbox(settings):
    result=playground.run('from sklearn.linear_model import LinearRegression\nmodel=LinearRegression().fit([[1],[2],[3]],[3,5,7])\nprint(round(float(model.coef_[0]),6))',settings)
    assert result['status']=='ok',result
    assert result['stdout'].strip()=='2.0'


def test_chart_capture(settings,tmp_path):
    result=playground.run('import matplotlib.pyplot as plt\nplt.plot([1,2,3],[2,4,6]); plt.title("Sandbox chart"); plt.show()',settings)
    assert result['status']=='ok',result
    assert len(result['charts'])==1
    assert base64.b64decode(result['charts'][0]['base64']).startswith(b'\x89PNG')


def test_host_files_secrets_and_network_are_not_visible(settings,tmp_path,monkeypatch):
    secret=tmp_path/'private.txt'; secret.write_text('not-for-the-sandbox')
    monkeypatch.setenv('ML_TEST_SECRET','not-for-the-sandbox')
    code=f'import os, pathlib, socket\nprint(pathlib.Path({str(secret)!r}).exists())\nprint(os.getenv("ML_TEST_SECRET"))\nsocket.socket()'
    result=playground.run(code,settings)
    assert result['stdout'].splitlines()==['False','None']
    assert result['status']=='error'
    assert 'PermissionError' in result['stderr']


@pytest.mark.parametrize('code',[
    'import os\nos.fork()',
    'import subprocess\nsubprocess.run(["/usr/bin/true"])',
    'open("/work/test.txt", "w").write("x")',
    'import os\nos.mkdir("/tmp/test")',
])
def test_process_and_disk_creation_are_blocked(settings,code):
    result=playground.run(code,settings)
    assert result['status']=='error',result
    assert 'PermissionError' in result['stderr']


def test_memory_limit_enforced(settings):
    result=playground.run('block=bytearray(1024*1024*1024)',settings)
    assert result['status']=='error',result
    assert 'MemoryError' in result['stderr']
    assert result['limits']['memory_mb']==512


def test_wall_limit_enforced(settings):
    result=playground.run('import time\ntime.sleep(60)',settings)
    assert result['status']=='timeout',result
    assert result['elapsed_seconds']<13


def test_cpu_limit_enforced(settings):
    result=playground.run('while True: pass',settings)
    assert result['status'] in ['error','timeout'],result
    assert result['exit_code']<0 or result['exit_code']>=128
    assert result['elapsed_seconds']<13


def test_output_bound_and_fresh_environment(settings):
    result=playground.run('print("x"*100000)',settings)
    assert len(result['stdout'])<=65536
    result=playground.run('print("leaked_global" in globals())',settings)
    assert result['stdout'].strip()=='False'


def test_fail_closed_without_launcher(monkeypatch):
    monkeypatch.setattr(playground.shutil,'which',lambda name:None)
    with pytest.raises(playground.SandboxUnavailable):
        playground.run('print(1)',Settings())
    assert not playground.probe(Settings())['available']


def test_disabled_never_executes():
    with pytest.raises(playground.SandboxUnavailable):
        playground.run('print(1)',Settings(playground_enabled=False))


def test_disabled_api_returns_503(tmp_path):
    from fastapi.testclient import TestClient
    from app.main import create_app
    client=TestClient(create_app(Settings(data_dir=tmp_path,playground_enabled=False)))
    assert client.post('/api/v1/playground/run',json={'code':'print(1)'}).status_code==503
    assert client.get('/api/v1/capabilities').json()['playground']['available'] is False
