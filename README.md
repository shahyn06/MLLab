# ML Learning Lab

An English-language, browser-based Machine Learning learning website. Change parameters, inspect the results and understand the model.

## Core browser workspaces

- **Linear Regression:** adjustable slope and intercept, editable x/y data, ordinary least-squares fit, actual animated gradient-descent training with pause/restart/convergence, paired data and learning-curve plots, mean squared error and predictions.
- **Perceptron:** online training on AND and XOR, adjustable weights and bias, a decision-boundary plot and prediction table.
- **Gradient Descent:** a quadratic loss curve, configurable learning rate, single-step and ten-step updates, timed playback, paired objective/learning-curve plots and position history.
- Each lab includes an explanation, worked example, educational Python code and a quiz with feedback.
- A searchable roadmap covers 15 curriculum sections. Unbuilt topics are labeled Planned.
- Dashboard, nine lab families, sidebar, Settings, light/dark themes and rendered equations. Planned labs are clearly marked.
- Responsive design. Browser workbenches calculate locally; the optional Local execution workspace sends explicit requests to your own API.

## Development

Use Node.js 18 or newer and npm.

```sh
npm ci
npm run dev
```

Production build:

```sh
npm run build
npm run preview
```

Deploy the contents of `dist` to a static host. The browser labs need no backend, database, API key or subscription. An optional local backend is included separately. Hash routing works without server rewrite rules. The relative Vite base also supports project subpaths, such as GitHub Pages.

`ml-lab.html` is a self-contained copy. Download and open it in a modern browser, not a messaging app's document preview. It works without installation or an internet connection. The editable application is in `src`.

## Project structure

- `src/App.tsx`: app shell, routing and reference topic map.
- `src/labs.tsx`: interactive labs, explanations and quizzes.
- `src/dashboard.tsx`: dashboard, sidebar, lab categories and Settings.
- `src/mathlab.tsx`: mathematical workbenches and numerical functions.
- `src/Math.tsx`: KaTeX MathML equation rendering.
- `src/components.tsx`: reusable lab controls, charts and feedback.
- `src/curriculum.ts`: curriculum sections, readable topic names and available lab links.
- `src/ui.tsx`: small UI components and hash navigation.
- `src/style.css`: responsive visual design.
- `src/photos/network.png`: original abstract network illustration.
- `package-lock.json`: reproducible dependency versions.

## Scope and limitations

Three original algorithm labs, four mathematical workbenches, a 12-estimator supervised workbench, K-Means, dataset/evaluation tools and small neural-network workbenches are built. The remaining curriculum is a roadmap, not completed course material. Topic names follow the aibdaya.com concept-map image supplied for the project. The request described 217 topics; the total has not been reconciled item by item. The project does not copy paid course content or access a course account.

Lab state is temporary and resets when the page is reopened. Theme preferences are saved locally when browser storage is available. Python snippets in the browser lessons are educational. Only the optional local API workspace executes Python, after checking isolation capability. Examples are fictional and are not production models. Do not enter sensitive data. Browser workbenches do not upload their inputs. The Local execution workspace sends selected uploads, training configurations and Python to the explicit loopback API you connect.

## Educational references

- https://scikit-learn.org/stable/modules/linear_model.html
- https://scikit-learn.org/stable/modules/sgd.html

The regression lab uses MSE without a one-half factor. The gradient-descent lab optimizes `f(w) = (w - 3)^2`; its stated convergence interval applies to that function, not arbitrary objectives.

See `ARCHITECTURE.md` for the six-phase plan and current application boundaries. The backend API is implemented locally; cloud deployment is not.

## Mathematical foundations

Four working areas cover linear algebra, calculus, probability and statistics. There are 43 topic explanations that share the four simulations, not 43 independent labs. Matrix results include real eigendecomposition, SVD and reconstruction errors; probability includes four distributions and Bayes; statistics includes editable paired data, descriptive measures, z inference with assumptions and seeded bootstrap draws.

The workbenches use the MIT-licensed ml-matrix runtime. See src/vendor/MATRIX-LICENSE.txt.

## Next phases

Richer educational coverage, engineering requirements and full-specification checks remain in progress. The full specification is not yet complete.

## Classical ML workbench

Twelve estimators: multiple/polynomial linear regression, Ridge, Lasso, Elastic Net, logistic regression, KNN, CART decision tree, random forest, linear SVM, Gaussian Naive Bayes and gradient-tree boosting. Separate K-Means uses real alternating assignment and centroid updates. Iterative models support step, start, pause, continue and reset. Noniterative estimators correctly finish in one fit rather than inventing loss histories.

Small synthetic datasets and validated pasted rows are supported. Classification/regression use a seeded 75/25 train/test split. Metrics come from held-out data. Limits: 160 rows, 2 bounded input features, linear SVM only, small tree ensembles. Browser workbenches do not persist models automatically. The separate local API provides bounded server fitting and explicit experiment persistence.

Scientific checks compare predictions/metrics with NumPy and scikit-learn; implementation-specific objective conventions are noted in the interface.

References: https://scikit-learn.org/stable/supervised_learning.html and https://scikit-learn.org/stable/modules/clustering.html#k-means .

## Phase 4: Dataset and evaluation tools

- Local CSV and Excel (.xlsx, first worksheet) import. Browser limits: 3 MB, 5,000 rows, 40 columns. Missing cells, statistical summaries and pairwise correlations. Interactive table filtering, sorting and pagination.
- Real numeric histogram, IQR box plot, scatter plot and pair plots.
- Exploratory missing-value imputation, duplicate removal, scaling, label/one-hot encoding, selected-feature removal, square feature generation and IQR filtering. Reset preserves original data. Split before fitting preprocessing in actual model pipelines.
- Seeded random train/test CSV exports. Classification threshold, confusion matrix, ROC/AUC and precision-recall/average precision. Regression metrics and residuals.
- Real logistic-regression K-fold/stratified validation, nested-sample learning curves, and four-model comparison on the same fixed split. Browser demos, not claims of general algorithm superiority.
- Excel parsing uses read-excel-file, including its worker-based browser parser. The standalone build inlines dynamic modules; the source app remains modular.

Validation: 22 end-to-end checks plus 274 independent sklearn/NumPy numeric comparisons for this phase.

## Phase 5: Deep-learning workbenches

A trainable small MLP builder and two-filter CNN use actual forward/backpropagation and held-out metrics. MLP architecture has 0–4 hidden layers, with 1–8 neurons each. The CNN trains two 3×3 filters on synthetic 5×5 line images, not natural-image recognition. Scalar RNN and LSTM train on a synthetic moving-average memory task using full BPTT, independent LSTM gates, global norm clipping, parameter/gradient inspection and a six-sequence hold-out set. This is not a language model. `npm test` now runs 588 numerical/parser checks, including finite differences for every recurrent parameter. `npm run typecheck` checks the TypeScript source.

## Optional local backend

The `backend/` directory contains a separate FastAPI/SQLite service and security documentation. It has been independently tested with 52 passing tests. It is not deployed by opening the hosted page. Follow `backend/README.md` to run it locally. The source app has a Local execution workspace connected through an explicit loopback URL. No cloud persistence is included.


### Connect the local UI

1. Follow `backend/README.md` to start the API on `127.0.0.1:8000`.
2. In a second terminal at the repository root, run `npm ci` and `npm run dev`.
3. Open `http://localhost:5173/#/execution` and click **Connect local API**. Keep the default loopback URL unless you changed the local API port. The UI rejects non-loopback URLs.
4. Upload CSV/XLSX, choose features/target and train. Results come from real held-out predictions. The API saves the experiment and fitted artifact in local SQLite.
5. Use Experiments to inspect, compare, reopen configuration, export JSON, download model plus metadata, or confirm deletion. The list currently loads the first 50 records. Joblib is executable serialization: load only trusted models.
6. Python is enabled only when the API isolation self-test succeeds. Each run is a fresh process. No network, package installs or persistent kernel.

Set `ML_LAB_AUTH_ENABLED=true` before starting the backend for optional local accounts. Register and sign in from Connect. The token stays in page memory and is discarded on refresh/disconnect. No email verification or password recovery is provided. This is not an internet-facing identity service.

The hosted page's Local execution route explains setup only. It never tries to call your computer, and it does not host the API. The self-contained HTML contains browser labs and the local API client, but the supported API integration is the Vite development origin above, not a file URL.

Phase 6 integration checks: 40 actual frontend/API checks passed, covering uploads, fits, persistence UI, comparison, deletion, downloads and isolated Python/Matplotlib. Registration/login/logout UI checks passed separately. Backend regression: 52 tests passed after the runner startup correction. No cloud service or paid resource was created.


## Structure and projection workbench

Five real bounded browser methods complement K-Means: agglomerative clustering with single/complete/average linkage and a merge log; DBSCAN with core/border/noise expansion; diagonal Gaussian-mixture EM with responsibilities and actual likelihood; three-feature PCA with variance/loadings; and a small seeded isolation forest with corrected path lengths. All accept 8–100 custom three-feature rows. Rotatable orthographic 3D and 2D views share the same fitted geometry. Noise is excluded from silhouette. PCA is descriptive, not clustering. Library comparisons checked linkage distances/partitions, DBSCAN labels/core sets, PCA components/variance, mixture posterior/likelihood and silhouette. Isolation forest is an educational implementation, not a bit-for-bit sklearn clone.

## Optimizer landscape

Batch, stochastic and mini-batch gradients combine with plain GD, Momentum, Nesterov, RMSprop or Adam. Configure rate schedules, batch size, initial weight/bias and iteration budget. Actual parameter paths are overlaid on computed contours or a rotatable loss mesh with disclosed nonlinear height scaling. A seeded linear-regression task has a known OLS optimum; a tilted double well demonstrates distinct local and global minima. Every displayed loss is computed on the full objective. Iteration exhaustion and divergence are not called convergence.

`npm test` now runs 588 reproducible checks across the original numerical/parser suite, structure engines and optimizer engines. Additional UI suites checked all five structure modes and both optimizer views at 320/390/1280 pixels in both themes, with real step/pause/reset behavior.

### Sequence training and Python editor

The sequence lab learns `y_t = 0.65*y_previous + 0.35*x_t` from 18 seeded eight-step training sequences. Six additional sequences are held out. Both scalar cells use a linear output, full time-unrolled gradients and a 1,200-epoch maximum; an MSE threshold can stop earlier. Custom inspection sequences do not change the training set. Exact LSTM gate/state values and all parameter gradients are available. At seed 42 after 1,200 full-batch epochs, RNN training/hold-out MSE is approximately 0.00023/0.00053; LSTM is 0.00099/0.00138. These synthetic task scores are not general-purpose sequence performance.

The local execution workspace uses CodeMirror for highlighted Python editing, line numbers, undo/redo and indentation. Three preloaded examples, reset, copy and `.py` download are included. Examples run through the isolated process backend, not in the editor. Every run creates a fresh environment. The hosted `/execution` route remains setup-only and makes no loopback requests.

Validation for this increment: 45 recurrent numerical checks, 24 sequence UI checks at 320/390/1280 in both themes, 40 re-run local API UI checks and 15 editor checks including all three examples executed in the actual sandbox. Browser source build and TypeScript checking pass. The optional server does not claim PyTorch CNN/RNN/LSTM support; those educational training labs currently run in the browser.

### Device-local browser snapshots

Training workbenches include explicit capture of actual model state, parameters, history, metrics and data. Snapshots can be inspected, exported, compared without ranking unrelated tasks, or deleted after confirmation. Restore and resume rebuilds a validated schema-version-1 snapshot and opens paused; Open fresh lab deliberately resets to defaults. In the local source app the store is bounded to 12 records and 2 MB. In the hosted viewer it is bounded to 14 KB total; large snapshots require JSON export instead. Signed-in viewer storage is device-local, not cloud synchronization. Preview and anonymous sessions may be memory-only, and the actual storage-status caption remains visible. The dashboard review checklist is self-reported, not inferred mastery.

Snapshot validation: 57 persistence, metrics, comparison, export, deletion and responsive checks; nine initial-model capture smoke checks. Restoration/import now passes 88 engine and 62 UI checks. Learned states and scores are recomputed from the validated data/configuration and update count. Uploaded learned parameters, trees and metric claims are ignored. Legacy inspection exports without a schema version remain non-restorable. Manual line/perceptron/quadratic values are range-checked, and their current metrics are recomputed; manual regression trace is cleared.

### Snapshot restoration and recent history

Version-1 imports support all nine browser training routes. JSON files are limited to 2 MB, supported route/configuration enums and bounded numeric arrays. Recursive depth/size and unsafe object keys are rejected. Imports never execute source code. All learned models are replayed deterministically from validated data/configuration and update count, producing real parameters, history and metrics. The linear and perceptron demonstrations allow manual parameter editing; these values are range-checked instead of claiming a training provenance. Quadratic history is range-checked. The dashboard records the last six actually restored saved experiments with timestamps; it does not invent recent activity from available labs.

### Build targets, workers and hosted exports

`npm run build` creates a normal route-chunked site in `dist/`. Heavy labs and the Python editor load on demand. `npm run portable` builds the separately inlined `dist-portable/` target and packages `ml-lab.html` plus `ml-lab-source.zip`. Python 3 is used only by the packaging script; normal web builds need Node. The portable HTML is larger by design and does not need a web server.

Snapshot import/restoration, cross-validation and model comparison run in a disposable Web Worker in the source app. Progress is real per-fit progress, cancellation terminates the worker, and stale results are discarded on reset/unmount. If workers are unavailable, a clearly labeled bounded in-page fallback is used. The hosted viewer uses the bounded in-page path explicitly; it does not claim off-thread execution. The tiny live training ticks remain bounded browser computations.

The hosted viewer cannot make generated Blob file downloads. Its export controls instead show the exact JSON/CSV as text inside the page with the viewer's supported copy control. The local source app retains direct file downloads. A displayed export is not described as a successful download.

Worker checks: 47 engine parity/validation checks, 16 actual-browser worker checks (instances observed, main-thread heartbeat, cancellation, responsive states) and 62 re-run restore/import/history checks. Normal initial JavaScript is about 163 KB gzip, excluding deferred labs/editor; the portable target is about 426 KB gzip including deferred code and the worker source. Build warnings refer to uncompressed bundle size, not a failed build.
