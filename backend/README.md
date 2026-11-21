# ML Lab backend

Runnable, local-only FastAPI API for Phase 6 of ML Lab. No cloud account, paid API, container registry, deployment, or external service is used. This directory is independent of the frontend.

## Run locally

Python 3.10+ is required. Install Python dependencies into a **dedicated virtualenv**, not a shared environment containing private packages or secrets:

```sh
cd ml-lab-backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.lock.txt
pip install -e . --no-deps
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

The dependency lock records the versions tested with Python 3.10 on Linux. Alternatively, `pip install -e '.[test]'` resolves compatible versions from `pyproject.toml`. Installing dependencies downloads free packages; it does not create a hosted service. Once dependencies are installed, the API runs offline.

- API base: `http://127.0.0.1:8000/api/v1`
- Swagger UI: `http://127.0.0.1:8000/docs`
- Runtime OpenAPI: `http://127.0.0.1:8000/openapi.json`
- `openapi.json` in this source bundle is the generated client contract.
- SQLite database: `./data/ml-lab.sqlite3`, created automatically.

These are local development addresses, not deployed or shareable sites. Keep the bind address at `127.0.0.1`. Run a single API worker. This prototype is not a public multi-tenant execution service.

### Linux playground prerequisites

Install the free OS packages `bubblewrap`, `util-linux` (provides `prlimit`), and `libseccomp2` using your OS package manager. User namespaces must be enabled by the OS. The backend itself can run on other platforms, but Python execution returns **503** if safe isolation cannot start. No unsafe fallback exists. `GET /api/v1/capabilities` runs a small isolation self-test and reports `playground.available` and `reason`.

The sandbox uses only the host's installed Python runtime and the dedicated virtualenv, never host home, application source, database, host `/tmp`, or environment secrets. It starts a new PID/network/mount/user namespace and temporary filesystem for every run. Before running user code it installs a seccomp filter blocking process creation, network sockets, namespace changes, writable file opens and several high-risk kernel interfaces. Resource limits cap address space, CPU time, wall time, descriptors, files and returned output. NumPy, Pandas, scikit-learn and Matplotlib are installed locally; package installation and downloads inside a run are intentionally unavailable. See `SECURITY.md` for the boundary and limits.

Charts are returned as PNG base64 objects, not file paths. No files or Python variables survive to the next run. Use `plt.show()` or leave figures open at the end of a run. No raw code is ever evaluated in the API process.

## Configuration

Set environment variables **before** starting uvicorn; `.env.example` is documentation and is not automatically loaded.

| Variable | Default | Purpose |
|---|---|---|
| `ML_LAB_DATA_DIR` | `./data` | SQLite storage directory |
| `ML_LAB_AUTH_ENABLED` | `false` | `true` enables local accounts and owner-scoped data |
| `ML_LAB_PLAYGROUND_ENABLED` | `true` | `false` disables server Python execution |
| `ML_LAB_CORS_ORIGINS` | `http://localhost:5173,http://127.0.0.1:5173` | Comma-separated exact development origins |

Without accounts, all requests share a local workspace named `local`. With accounts enabled, register and log in, then send `Authorization: Bearer <access_token>`. Passwords use salted scrypt; only SHA-256 token hashes are stored. Sessions expire after seven days and logout revokes the current token. Existing local-mode data is not automatically assigned to a newly registered user. Do not toggle modes to treat local records as private user records.

## API surface

All routes below start with `/api/v1`. JSON field names are in `openapi.json`; see `INTEGRATION.md` for concrete request examples.

| Method | Route | Result |
|---|---|---|
| GET | `/health` | Process health, version, SQLite and auth mode |
| GET | `/capabilities` | Supported estimators, explicit unsupported features, isolation self-test, limits |
| POST | `/auth/register` | Create a local account, when enabled |
| POST | `/auth/login` | Seven-day bearer session |
| GET | `/auth/me` | Current owner ID and auth mode |
| POST | `/auth/logout` | Revoke token, 204 |
| POST | `/datasets` | Create from typed JSON rows |
| POST | `/datasets/upload` | Upload CSV or XLSX, multipart field `file` |
| GET | `/datasets` | Paged dataset metadata |
| GET | `/datasets/{id}` | Paged preview, `limit` up to 1000 and `offset` |
| GET | `/datasets/{id}/summary` | Types, missingness, descriptive statistics, outliers and correlation |
| GET | `/datasets/{id}/download` | Spreadsheet-safe CSV export |
| DELETE | `/datasets/{id}` | Delete unreferenced dataset, 204 |
| POST | `/experiments` | Save browser-computed or explicitly demonstration results |
| GET | `/experiments` | Paged saved experiment list |
| GET | `/experiments/{id}` | Full experiment |
| PUT | `/experiments/{id}` | Full replacement of a client-created experiment |
| DELETE | `/experiments/{id}` | Delete experiment and attached model, 204 |
| POST | `/experiments/compare` | Experiments and union of metric names |
| GET | `/experiments/{id}/export` | Versioned JSON download |
| POST | `/train` | Actually fit an estimator, evaluate it and atomically save model + experiment |
| GET | `/experiments/{id}/model` | Download server-trained joblib model |
| GET | `/experiments/{id}/model/metadata` | Feature order, target and library versions |
| POST | `/playground/run` | Isolated Python output, errors and PNG charts |
| GET | `/playground/examples` | Python basics, regression and plotting examples |

## Data and scientific behavior

- CSV is UTF-8 with headers. XLSX uses the first sheet, cached formula values, and no external links. Legacy `.xls` is not supported. Missing CSV cells become `null`; numeric strings are converted to finite numbers. Empty headers, duplicate headers, ragged rows and oversized input are rejected.
- Upload: at most 5 MiB, 20,000 data rows and 100 columns. XLSX expansion is capped at 25 MiB and 500 zip entries. Preview is paged, never silently truncated in storage.
- Summary variance and standard deviation are sample estimates (`ddof=1`). Correlation uses pairwise complete observations. Undefined correlations and statistics are JSON `null`, never invented zeroes. Outliers use the 1.5-IQR rule. Numeric charts can use the preview endpoint, requesting more pages as needed.
- Training accepts 5 to 5,000 rows and at most 30 numeric finite features, with an explicit smaller 2,000-row bound for SVM, hierarchical clustering and DBSCAN. Missing values must be handled before training. No rows are silently dropped.
- Supervised training uses a seeded held-out test split. Classification is stratified and rejects datasets that cannot support that split. Standardization fits only the training split. The target cannot be included as a feature. Results include split indices, predictions and actual held-out targets. Regression metrics are MAE/MSE/RMSE/R2; classification uses accuracy and macro precision/recall/F1 plus a confusion matrix.
- Unsupervised training standardizes the full dataset and explicitly labels its evaluation scope. K-Means returns centers in original feature units. PCA returns coordinates, components in standardized space and explained variance ratios. Clustering uses actual labels and silhouette where defined. Anomaly detection is Isolation Forest and returns scores and outlier labels.
- Available estimators: linear/ridge/lasso/elastic-net regression, logistic regression, KNN, decision tree, random forest, SVM, Gaussian Naive Bayes, gradient boosting, K-Means, hierarchical clustering, DBSCAN, Gaussian mixture, PCA and Isolation Forest.
- Client-created experiments are labeled `client_computed` or `demonstration`. The server does not claim to have verified their metrics. Only `/train` can write `server_computed`; these records are immutable so exported artifacts cannot drift from their recorded configuration.
- JSON export applies to every experiment. Model download exists only for actual server-trained models. The API never imports uploaded pickle/joblib objects. Joblib is executable serialization: load only trusted exports in a matching environment.
- Comparison returns metrics, but does not rank unlike tasks or invent a winner. Compare matching datasets, targets, split seeds and evaluation scopes.

## Tests and verification

```sh
. .venv/bin/activate
pytest -q
```

The suite exercises persistence after an app restart, ownership isolation, token revocation, invalid input, CSV/XLSX uploads, export, experiment CRUD/compare, every estimator, leakage prevention, CORS, and sandbox boundaries. Linux isolation tests skip explicitly when unavailable; a skip is not a passed isolation check. See `TEST_REPORT.md` for this delivery's actual run.

## Explicit limits and unfinished scope

This delivers the local Phase 6 backend, not the entire website. There is no deployment or cloud persistence, in line with the no-deployment/no-new-service instruction. SQLite persistence survives local restarts. CNN/RNN/LSTM and PyTorch training are not implemented; capabilities reports them as unsupported. Training is synchronous, bounded, and one-at-a-time; there is no distributed job queue or start/pause/resume training endpoint. Browser animation controls remain a frontend responsibility. This backend is not a hosted notebook platform, a hardened public execution cluster, or a replacement for production operational security.
