# Local verification report

Date: 2026-11-21

Environment: Linux x86_64, Python 3.10.12, dedicated virtualenv; Bubblewrap, prlimit and libseccomp were available. Dependency versions are captured in `requirements.lock.txt`.

Command: `pytest -q`

**Result: 52 passed, 0 failed, 0 skipped in 47.41 seconds.**

Coverage includes:

- Health and generated OpenAPI response schemas.
- JSON/CSV/XLSX datasets, validation and request-size caps.
- Pagination, summary, sample variance, missingness, formula-safe CSV download, undefined correlation.
- Experiment create/read/replace/delete, comparison, JSON export and dataset-reference protection.
- Persistence across app recreation using the same SQLite database.
- Auth registration/login/logout, invalid credentials, duplicate accounts, per-owner data isolation and token revocation.
- Real fitting and trusted artifact round-trip for all 17 advertised scikit-learn estimators.
- Exact linear-data regression error near zero, known rank-one PCA explained variance, target leakage prevention and bounded hyperparameters.
- Local-origin CORS allowlist.
- Isolated stdout/NumPy, actual scikit-learn model fitting, Matplotlib PNG output.
- Hidden host private files and environment secrets; blocked network sockets, forks, subprocesses, file creation and directory creation.
- Enforced 512 MiB address-space cap, CPU limit, wall timeout, output cap and fresh globals.
- No-launcher and explicitly disabled fail-closed behavior (503 through the API).

Visual inspection: generated a real Matplotlib chart inside the sandbox, decoded the returned PNG, and inspected the 512 x 384 image. Title, labeled axes and points at (1,2), (2,4), (3,6) were readable and correct. This was local verification only; no website was deployed.

Observed caveats:

- The installed FastAPI/Starlette test bridge emits a deprecation warning about the future replacement of its httpx adapter. It did not fail tests; the exact working versions are locked.
- This local host's font stack emits a non-fatal `write cache: No such file or directory` message on stderr during Matplotlib startup. PNG output and computations were verified correct. Runtime status is based on exceptions/exit status, not the mere presence of warning text. The frontend should display stderr as diagnostics, not replace a successful run with a fabricated failure.
- Passing boundary tests is not an independent security audit. This is a local loopback prototype, not approved for public hostile multi-tenant hosting.
- CNN/RNN/LSTM and cloud persistence are not implemented. Capability responses disclose both limits.
