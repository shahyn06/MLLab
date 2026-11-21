# ML Lab: application architecture

## Release boundary

The current incremental phases 1–6 source is a client-side React + TypeScript application, with a Vite source build and a self-contained HTML export. It contains the original three demonstrations, mathematical workbenches, twelve supervised estimators and K-Means. Unbuilt algorithm entries remain explicit roadmap items. It is not a completed implementation of the full project specification.

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

As the application grows, each algorithm moves from `labs.tsx` into its own lazy-loaded module under `labs/`. Shared mathematics and model functions move into `engine/` with deterministic tests. The browser engine must not depend on the UI or future API transport.

## Navigation

Dashboard; Mathematical Foundations; Supervised Learning; Unsupervised Learning; Neural Networks; Data Preprocessing; Model Evaluation; Optimization; Dataset Explorer; Experiment Manager; Settings. The original 15-section image remains a separate reference map, rather than competing with the main lab-family navigation.

Every control must change something real. Planned features are labels, not Run buttons. Dashboard counts describe built features, not invented user progress. No fake experiment history is seeded.

## Shared algorithm-page contract

Each full algorithm module will provide:

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

The initial three labs cover explanations, fixed formulas, adjustable values, computed plots/results, reset or step controls, worked examples, Python and challenges. Dataset upload, general pause/resume and persistent experiment saving are later capabilities, not hidden functionality.

## Visualization engine

Use data-driven SVG for small scatter/line plots and real-time decision boundaries. Each chart takes explicit data, domains, labels and units. Fixed equations are rendered with KaTeX to MathML. Do not send uploaded dataset contents into formula rendering.

Add Plotly for dense exploratory charts and 3D surfaces when implemented, D3 for specialized diagrams, and Three.js only when 3D clarifies the mathematics. Heavy algorithms or parsing belong in Web Workers. Cancel stale jobs when data or parameters change. Charts must remain usable at 320 CSS pixels.

## Future execution boundary

Small deterministic examples run in TypeScript. Large datasets and advanced neural-network training will use an explicitly configured FastAPI service. The separate backend implements bounded local fitting, uploads, SQLite persistence, model exports, optional accounts and isolated Python. It is not hosted by the File. No paid hosting or resource reservation is authorized.

Proposed versioned endpoints:

- `POST /api/v1/datasets`: upload and validate a dataset, returning its ID and schema.
- `GET /api/v1/datasets/{id}/summary`: dimensions, types, missingness and statistics.
- `POST /api/v1/runs`: algorithm, dataset ID, validated parameters, random seed and execution limits.
- `GET /api/v1/runs/{id}`: lifecycle state, completed iterations and metrics.
- `POST /api/v1/runs/{id}/pause`, `/resume`, `/cancel`: supported lifecycle controls.
- `GET /api/v1/runs/{id}/events`: bounded progress stream.
- `GET/POST /api/v1/experiments`: list or save experiments under an authenticated owner.

Results include dataset version/hash, model version, seed, split definition, metrics and warnings. Training metrics and test metrics must stay distinct. Never return a placeholder metric as a completed run.

## Proposed storage schema

This schema is a design, not an installed database.

- `users(id, created_at, identity_provider, provider_subject)` when accounts are introduced.
- `datasets(id, owner_id, name, format, content_hash, schema_json, row_count, column_count, storage_uri, created_at)`.
- `experiments(id, owner_id, name, algorithm_id, algorithm_version, dataset_id, parameters_json, split_json, seed, created_at, updated_at)`.
- `runs(id, experiment_id, status, started_at, finished_at, iterations, metrics_json, warnings_json, artifact_uri)`.
- `run_events(id, run_id, sequence, step, progress_json, created_at)` with unique `(run_id, sequence)`.
- `preferences(owner_id, key, value_json, updated_at)`.

SQLite is sufficient for a single-user local prototype. PostgreSQL and object storage are later deployment choices, not current commitments. Uploaded data must be owner-scoped and deletable. Large artifacts are stored by reference, not inside metric JSON.

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

Local Python editing uses CodeMirror 6. The hosted setup-only workspace does not import the editor packages because it never exposes an editor or execution connection. That hosted adapter omits the unused component, while the repository contains the full editor. The source Vite build currently inlines dynamic imports for the downloadable one-file HTML; this increases bundle size. Route chunking and worker execution remain performance work, not completed claims.

The browser sequence engine has analytical full BPTT for scalar RNN and LSTM, independent gate parameters, a linear output, global norm clipping and fresh zero state per sequence. The synthetic exponential moving-average targets are deterministic, not predictions disguised as training data. Held-out sequences never enter gradients. UI inspection inputs are separate from training. The local FastAPI training API continues to list deep-learning models as unsupported.
