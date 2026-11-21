import hashlib
import hmac
import secrets
import sqlite3
from datetime import datetime, timedelta, timezone
from fastapi import HTTPException
from .store import now, uid


def hash_password(password, salt=None):
    salt = salt or secrets.token_hex(16)
    digest = hashlib.scrypt(password.encode(), salt=bytes.fromhex(salt), n=16384, r=8, p=1).hex()
    return salt + ':' + digest


def digest_token(token):
    return hashlib.sha256(token.encode()).hexdigest()


def register(store, credentials):
    owner = uid()
    try:
        with store.connect() as db:
            db.execute('INSERT INTO users VALUES (?,?,?,?)', (owner, credentials.username.lower(), hash_password(credentials.password), now()))
    except sqlite3.IntegrityError:
        raise HTTPException(409, 'Username is already registered')
    return {'id': owner, 'username': credentials.username.lower()}


def login(store, credentials):
    with store.connect() as db:
        user = db.execute('SELECT * FROM users WHERE username=?', (credentials.username.lower(),)).fetchone()
        # Do equal-cost password work even for unknown usernames.
        stored = user['password_hash'] if user else hash_password('invalid-password')
        salt, _ = stored.split(':', 1)
        ok = hmac.compare_digest(stored, hash_password(credentials.password, salt))
        if not user or not ok:
            raise HTTPException(401, 'Invalid username or password')
        token = secrets.token_urlsafe(32)
        expires = (datetime.now(timezone.utc) + timedelta(days=7)).isoformat()
        db.execute('DELETE FROM sessions WHERE expires_at < ?', (now(),))
        db.execute('INSERT INTO sessions VALUES (?,?,?)', (digest_token(token), user['id'], expires))
    return {'access_token': token, 'token_type': 'bearer', 'expires_at': expires}


def resolve_owner(store, auth_enabled, authorization):
    if not auth_enabled:
        return 'local'
    if not authorization or not authorization.startswith('Bearer '):
        raise HTTPException(401, 'A bearer token is required', headers={'WWW-Authenticate': 'Bearer'})
    token = authorization[7:]
    with store.connect() as db:
        session = db.execute('SELECT owner FROM sessions WHERE token_hash=? AND expires_at>?', (digest_token(token), now())).fetchone()
    if not session:
        raise HTTPException(401, 'Session is invalid or expired')
    return session['owner']
