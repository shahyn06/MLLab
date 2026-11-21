from pathlib import Path
import pytest
from fastapi.testclient import TestClient
from app.main import create_app
from app.config import Settings


@pytest.fixture
def client(tmp_path):
    return TestClient(create_app(Settings(data_dir=tmp_path)))


@pytest.fixture
def secured(tmp_path):
    return TestClient(create_app(Settings(data_dir=tmp_path,auth_enabled=True)))


def dataset(client, columns=None, rows=None, headers=None):
    response=client.post('/api/v1/datasets',json={
        'name':'test data','columns':columns or ['x','y','label'],
        'rows':rows if rows is not None else [[i,2*i+1,'a' if i<20 else 'b'] for i in range(40)]},headers=headers or {})
    assert response.status_code==201,response.text
    return response.json()['id']
