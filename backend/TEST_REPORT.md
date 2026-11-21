# Local verification report

Date: 2026-11-21

Environment: Linux x86_64, Python 3.10.12, dedicated virtualenv; Bubblewrap, prlimit and libseccomp were available. Dependency versions are captured in `requirements.lock.txt`.

Command: `pytest -q`

**Result: 52 passed, 0 failed, 0 skipped in 48.62 seconds.**

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
- Backend CNN/RNN/LSTM estimators and cloud persistence are not implemented. The separate browser app has a tiny MLP/CNN trainer and scalar RNN/LSTM trainers with full BPTT.


## Frontend integration verification

The source app was exercised against a fresh running local API and temporary SQLite database. 40 end-to-end checks passed: upload/preview/summary, linear and Ridge fits with held-out R2 above 0.99 on known linear data, saved records, comparison, confirmed deletion, JSON export, fitted model and metadata downloads, Python stdout 6 and a real Matplotlib chart. No JavaScript page errors were observed. Optional-account registration, password-field clearing, login, logout and 401 after logout passed in a separate run. Four tabs were inspected at 320, 390 and 1280 pixels in dark and light themes.

The regression was repeated after raising the launcher RLIMIT_NPROC ceiling to 1024 to account for host-UID process counting. User-code process/network/write seccomp restrictions and other resource limits were retained. All 52 tests passed, including denied process creation and fail-closed startup.

## Full-spec acceptance checkpoint

Re-ran all 52 backend tests on November 21, 2026 after the browser visualization and regression increments: 52 passed in 49.15 seconds. One Starlette test-client deprecation warning remained. No backend code changed. Separate clean frontend npm ci, typecheck, all 1,611 source checks and production build passed. The original-spec ledger is docs/SPEC_ACCEPTANCE.md; it records mapped items separately from accepted behavior. The full specification is not complete.
