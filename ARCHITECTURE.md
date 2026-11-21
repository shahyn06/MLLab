# ML Lab: application architecture

## Release boundary

The current incremental phases 1–6 source is a client-side React + TypeScript application, with a Vite source build and a self-contained HTML export. It contains the original three demonstrations, four mathematical workbenches, twelve supervised estimators plus K-Means, five structure estimators, a configurable MLP, a tiny CNN and scalar RNN/LSTM, optimizer comparison, dataset/preprocessing/evaluation tools and explicit browser snapshots. The optional local backend adds bounded sklearn training, SQLite persistence, accounts, exports and isolated Python. The separate reference-image topic map retains unbuilt roadmap entries. It is not a completed implementation of the full project specification.

The official project name is **ML Lab - Machine Learning Laboratory**. All content is in English. The latest complete project specification overrides the earlier curriculum-image summary.

## Module plan

```text
src/
  App.tsx              Application composition and routes
  components.tsx       Controls, metrics, plots, quizzes, code panels
  labs.tsx             Initial working algorithms and their lesson content
  dashboard.tsx        Lab-family catalogue and release status
  curriculum.ts        Reference-image topic names
  mathlab.tsx          Four mathematical workbenches
  classical-engine.ts  Pure deterministic small-data ML engine
  classical.tsx        Training lifecycle, boundary plots and held-out results
  Math.tsx             KaTeX-generated MathML, fixed trusted formulas
  ui.tsx               Portable UI and routing primitives
  vendor/              KaTeX runtime and license
  photos/              Local illustration assets
  style.css            Responsive layout and light/dark themes
```

Algorithm families are separate lazy-loaded components with adjacent pure `*-engine.ts` modules and independent numerical tests. Shared plot/control/code components, typed dataset transfer and deterministic snapshot validation connect them. Pure engines do not import UI or API transport. Heavy compare/CV/replay work runs through the disposable compute worker in the source app; the hosted adapter uses a labeled bounded fallback.

## Navigation

Dashboard; Mathematical Foundations; Supervised Learning; Unsupervised Learning; Neural Networks; Data Preprocessing; Model Evaluation; Optimization; Dataset Explorer; Experiment Manager; Settings. The original 15-section image remains a separate reference map, rather than competing with the main lab-family navigation.

Every control must change something real. Planned features are labels, not Run buttons. Dashboard counts describe built features, not invented user progress. No fake experiment history is seeded.

## Shared algorithm-page contract

The implemented browser workbenches use this contract:

1. Overview and assumptions.
2. Mathematical foundation and derivation.
3. Step-by-step method.
4. Interactive simulation.
5. Parameter controls.
6. Dataset choice and provenance.
7. Training lifecycle: idle, running, paused, completed, failed.
8. Computed results and evaluation.
9. Equivalent Python implementation.
10. Practical uses and limitations.
11. Challenges with explanatory feedback.

The workbenches provide real fitting/steps, parameters, computed results, explanations, worked arithmetic, three teaching levels and selected-data Python or explicitly scoped library equivalents. Nine routes support validated explicit snapshots. Exceptions are named: fixed CNN/sequence training tasks, truth-table perceptron, analytic GD and exact one-shot PCA do not claim arbitrary upload or invented iterative pause semantics.

## Visualization engine

Use data-driven SVG for small scatter/line plots and real-time decision boundaries. Each chart takes explicit data, domains, labels and units. Fixed equations are rendered with KaTeX to MathML. Do not send uploaded dataset contents into formula rendering.

D3 scales drive shared SVG plots. Plotly supplies an on-demand computed optimizer contour/path; Three.js supplies a computed loss surface and rotated 3-feature view, with SVG/numeric fallbacks and disposal. The source app cancels stale workers when input changes. CSV/XLSX exploration is bounded; it is not a large-data engine.

## Future execution boundary

Small deterministic examples run in TypeScript. Large datasets and advanced neural-network server training remain outside the bounded implementation. A PyTorch expansion is recommendation-only, not an implemented service. The separate backend implements bounded local fitting, uploads, SQLite persistence, model exports, optional accounts and isolated Python. It is not hosted by the File. No paid hosting or resource reservation is authorized.

Implemented local API contracts are defined in `backend/app/main.py` and typed payloads in `schemas.py`:

- `/api/v1/health` and `/capabilities`: runtime limits, available estimators, isolation self-test and explicit unsupported deep trainers.
- `/api/v1/auth/register`, `/login`, `/me`, `/logout`: optional local scrypt/hash-token accounts.
- `/api/v1/datasets` and `/datasets/upload`: validated JSON or CSV/XLSX ingestion; preview, summary, CSV download and owner-scoped deletion routes.
- `/api/v1/train`: one synchronous bounded sklearn fit, returning an immutable computed experiment. No server pause/resume or progress stream is claimed.
- `/api/v1/experiments`: owner-scoped create/list/read/update/delete; comparison, versioned JSON export and trusted-source-only joblib/model metadata export routes. Server-computed experiment values are immutable.
- `/api/v1/playground/run` and `/playground/examples`: isolated fresh-process Python execution and provided examples.

The current installed SQLite schema is documented in `backend/ARCHITECTURE.md`: users, hashed-token sessions, owner-scoped datasets, experiment JSON documents and attached model artifacts. Store transactions keep each computed experiment and artifact atomic. This is a bounded local prototype, not PostgreSQL/object storage or cloud persistence.

## Python execution safety

The local playground runs in a fresh Bubblewrap process with namespaces, seccomp, memory, CPU, output and wall-clock limits. It never evaluates learner code inside the API process. The UI checks the capability self-test before enabling Run. It fails closed when isolation is unavailable. See backend/SECURITY.md.

## Engineering sequence

Phase 1: dashboard, navigation, themes, equation rendering, reusable controls/charts, accessibility and deterministic tests.
Phase 2: vector/matrix operations, derivatives, distributions and descriptive statistics.
Phase 3: expand the current regression lab, then Logistic Regression, KNN, K-Means, Decision Trees and SVM.
Phase 4: validated CSV/Excel ingestion, preprocessing, held-out evaluation and model comparisons.
Phase 5: expand the Perceptron into MLP, forward/backpropagation visualizers, then CNN examples.
Phase 6: isolated Python playground, experiment persistence, model exports and optional accounts/cloud storage.

Before persistent cloud data or compute is enabled, confirm the user's deployment, privacy and cost choices. No fake training, dead controls or silent paid services.


## Current Phase 6 transport

`api-client.ts` handles explicit loopback fetches, page-memory bearer sessions, structured errors and downloads. `api-workspace.tsx` provides connection, datasets/training, experiments and Python views. The hosted build selects its setup-only branch and exposes no local connection controls. All API actions are explicit, with no automatic upload from browser workbenches. SQLite is local persistence, not cloud synchronization. Reopening an experiment restores configuration for review, not a running kernel or optimizer state.

## Python editor and sequence release

Local Python editing uses CodeMirror 6. The hosted setup-only workspace does not import the editor packages because it never exposes an editor or execution connection. That hosted adapter omits the unused component, while the repository contains the full editor. The normal source Vite build has lazy route and heavy-renderer chunks. A separate portable target embeds them in a downloadable one-file HTML, with a documented bundle-size warning. Compute workers are used in the source app; the hosted viewer has a labeled bounded fallback.

The browser sequence engine has analytical full BPTT for scalar RNN and LSTM, independent gate parameters, a linear output, global norm clipping and fresh zero state per sequence. The synthetic exponential moving-average targets are deterministic, not predictions disguised as training data. Held-out sequences never enter gradients. UI inspection inputs are separate from training. The local FastAPI training API continues to list deep-learning models as unsupported.
