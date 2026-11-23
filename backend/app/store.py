import json
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from uuid import uuid4


def now():
    return datetime.now(timezone.utc).isoformat()


def uid():
    return str(uuid4())


class Store:
    def __init__(self, path):
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        with self.connect() as db:
            db.executescript('''
                PRAGMA journal_mode=WAL;
                CREATE TABLE IF NOT EXISTS users (
                    id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL,
                    password_hash TEXT NOT NULL, created_at TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS sessions (
                    token_hash TEXT PRIMARY KEY, owner TEXT NOT NULL,
                    expires_at TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS datasets (
                    id TEXT PRIMARY KEY, owner TEXT NOT NULL, name TEXT NOT NULL,
                    columns_json TEXT NOT NULL, rows_json TEXT NOT NULL,
                    created_at TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS experiments (
                    id TEXT PRIMARY KEY, owner TEXT NOT NULL, document TEXT NOT NULL,
                    created_at TEXT NOT NULL, updated_at TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS models (
                    experiment_id TEXT PRIMARY KEY, owner TEXT NOT NULL,
                    artifact BLOB NOT NULL, metadata TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS learning_progress (
                    owner TEXT PRIMARY KEY, document TEXT NOT NULL, updated_at TEXT NOT NULL
                );
                CREATE INDEX IF NOT EXISTS dataset_owner ON datasets(owner);
                CREATE INDEX IF NOT EXISTS experiment_owner ON experiments(owner);
            ''')

    @contextmanager
    def connect(self):
        db = sqlite3.connect(self.path, timeout=10)
        db.row_factory = sqlite3.Row
        try:
            db.execute('PRAGMA foreign_keys=ON')
            yield db
            db.commit()
        except BaseException:
            db.rollback()
            raise
        finally:
            db.close()

    def dataset(self, dataset_id, owner):
        with self.connect() as db:
            row = db.execute('SELECT * FROM datasets WHERE id=? AND owner=?', (dataset_id, owner)).fetchone()
        if not row:
            return None
        return dict(row) | {'columns': json.loads(row['columns_json']), 'rows': json.loads(row['rows_json'])}

    def experiment(self, experiment_id, owner):
        with self.connect() as db:
            row = db.execute('SELECT * FROM experiments WHERE id=? AND owner=?', (experiment_id, owner)).fetchone()
        return dict(row) | json.loads(row['document']) if row else None
