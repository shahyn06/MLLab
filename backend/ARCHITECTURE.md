# Architecture and implementation plan

The backend is an independent optional companion to the existing browser labs. The frontend owns chart interactions, educational explanations and browser-native training. This API owns local persistence, file validation, actual bounded scikit-learn training and isolated Python runs.

## Source map

```text
app/
  main.py         API factory, routes, request caps, CORS, owner dependencies
  config.py       startup environment configuration
  schemas.py      validated input and typed client response contracts
  store.py        parameterized SQLite operations and initial schema
  auth.py         salted scrypt, hashed expiring tokens, owner resolution
  datasets.py     bounded CSV/XLSX parsing, summary and CSV export
  training.py     real estimators, seeded evaluation and model artifacts
  playground.py   fail-closed namespace runner and child syscall filter
tests/
  conftest.py     isolated temporary databases and local API fixtures
  test_api.py     storage, ownership, upload, experiment and training tests
  test_sandbox.py execution and isolation boundary tests
```

## Database

- `users(id, username UNIQUE, password_hash, created_at)`
- `sessions(token_hash PRIMARY KEY, owner, expires_at)`
- `datasets(id, owner, name, columns_json, rows_json, created_at)`
- `experiments(id, owner, document, created_at, updated_at)`
- `models(experiment_id PRIMARY KEY, owner, artifact BLOB, metadata)`

Dataset and experiment queries are always owner-scoped. SQLite WAL supports local read/write concurrency, and connections commit or roll back as a unit. Model training saves the model and its immutable experiment in one transaction. Referenced datasets cannot be deleted until experiments are removed/detached. Schema creation is idempotent for this initial prototype; future schema changes need explicit migrations.

## Communication and visualization

HTTP JSON with generated OpenAPI is the integration contract. Uploads are bounded multipart files. Download endpoints return browser blobs. The frontend never needs raw database access. Charts are built from real result arrays: held-out actual/predicted values, confusion matrices, cluster labels/centers, PCA coordinates and score vectors. The playground returns only PNG chart images as data, while the existing labs remain interactive.

## Bounded work and unavailable features

One training fit and one playground run are allowed concurrently per API process. Dataset size and estimator hyperparameters are capped. The sandbox has its own process boundary, namespaces, seccomp rules and kernel limits. No arbitrary Python runs in the API process. Training uses only enumerated trusted estimator classes, not dynamic imports or uploaded serialized models.

The no-deployment/no-new-service constraint means local SQLite, not cloud persistence. Deep neural-network server training is not supplied by the installed scikit-learn runtime and is reported unsupported. There is no claim that a local endpoint or source archive constitutes a cloud deployment.
