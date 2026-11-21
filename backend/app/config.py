import os
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class Settings:
    data_dir: Path = Path(os.getenv('ML_LAB_DATA_DIR', './data')).resolve()
    auth_enabled: bool = os.getenv('ML_LAB_AUTH_ENABLED', 'false').lower() == 'true'
    playground_enabled: bool = os.getenv('ML_LAB_PLAYGROUND_ENABLED', 'true').lower() == 'true'
    cors_origins: tuple[str, ...] = tuple(os.getenv('ML_LAB_CORS_ORIGINS', 'http://localhost:5173,http://127.0.0.1:5173').split(','))
    upload_bytes: int = 5 * 1024 * 1024
    max_rows: int = 20000
    max_columns: int = 100
    playground_seconds: int = 8
    playground_memory_mb: int = 512
