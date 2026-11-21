# Full-specification status, November 21, 2026

This is an implementation checklist, not a completion certificate. The full supplied specification remains open. Tests exercise the stated small educational models; they do not certify production deployment or general ML performance.

## Implemented and checked

- Responsive React/TypeScript scientific dashboard, sidebar, light/dark theme and KaTeX math.
- Mathematical workbenches for matrix/vector operations, differential calculus, probability and statistics. Individual-topic depth still needs audit.
- Simple regression and perceptron demos; twelve additional supervised estimators, real parameter updates/fitting, metrics, synthetic/custom data and educational explanations.
- K-Means plus hierarchical linkage, DBSCAN, diagonal Gaussian-mixture EM, 3-feature PCA and a small isolation forest. Two-dimensional and orthographic 3D views use computed coordinates.
- Optimization methods GD, Momentum, Nesterov, RMSprop and Adam; batch/stochastic/mini-batch sampling, schedules, contour/surface paths and actual gradients.
- Trainable configurable MLP, tiny trainable CNN and scalar RNN/LSTM with full BPTT, independent gates and hold-out metrics.
- CSV/XLSX data explorer, preprocessing, metrics and actual cross-validation/model comparison.
- Optional local FastAPI/SQLite backend, dataset storage, bounded sklearn training, saved experiments, JSON/model downloads and optional accounts.
- Resource-limited isolated Python process execution, real stdout/stderr and PNG charts. CodeMirror editor, runnable examples, copy/reset/download.
- Explicit snapshots from nine browser training routes, saved configuration/model/history/data inspection, export, comparison and confirmed deletion. Local app: 12 records/2 MB; hosted viewer: 14 KB total. Large states can be exported without storing them. Hosted previews are memory-only and show that status.
- Device-local theme and an explicitly self-reported six-workbench review checklist. No mastery is inferred from visits.
- TypeScript checking and 726 reproducible numerical/parser/replay/compute checks. Recent UI checks include sequence 24, local API 40, Python editor 15, snapshots 57 and nine initial-model capture smoke checks.

## Not finished, next priorities

1. **Restore saved browser state: implemented for nine training routes.** Schema-version-1 snapshots are validated, learned states are replayed deterministically and metrics recomputed. Legacy inspection-only exports are rejected for restoration. Manual parameter controls are range-checked, not misrepresented as trained models. Check worker-based replay responsiveness and additional boundary inputs in the final audit.
2. **History and progress: core implemented.** Dashboard records up to six actually restored experiments with timestamps, alongside explicit review marks. A richer adaptive learning path remains optional work, not a claim of mastery.
3. **Unified educational interface.** Existing lessons have equations, assumptions, practical uses and challenges, but all eleven requested sections and beginner/intermediate/advanced levels are not uniformly present. Audit every algorithm and every named mathematical topic against the original spec. Fill derivations and step-by-step examples where thin.
4. **Broader dataset reuse: core implemented.** Explorer can share an explicit session-only table copy into classical models, structure discovery and the MLP. Columns/row counts/ranges/targets are validated, target-as-feature is blocked, no rows silently drop and no preprocessing is fitted during transfer. Custom MLP data survives validated replay. CNN and sequence remain specialized synthetic tasks. Whole-data explorer preprocessing is still exploratory, not a leakage-safe fitted pipeline.
5. **Performance: core implemented.** Normal route-chunked and separate portable targets are available. Source-app snapshot rebuilding, CV and model comparison run in disposable workers, with progress, cancellation and stale-result guards. Hosted viewer uses a labeled bounded in-page fallback. Small animated training ticks and table exploration remain on the page thread; assess their bounded worst cases in the final audit.
6. **Declared stack alignment.** React, TypeScript, Vite, KaTeX, FastAPI, NumPy, Pandas and sklearn are present. Tailwind/shadcn, Framer Motion, Plotly, D3, Three.js and PyTorch are not fully adopted. Current SVG/orthographic visualizations are real computation, but do not silently claim these libraries are used. ONNX is conditional, not currently needed.
7. **Advanced server training.** Local API explicitly reports CNN/RNN/LSTM unsupported. Their tiny educational browser implementations work, but larger PyTorch training/exports are not provided.
8. **Cloud persistence and deployment.** None is configured. SQLite is a local prototype and must not be described as cloud storage. No spending, subscriptions or paid infrastructure are authorized. Decide on an authorized free deployment route and verify production security before hosting accounts or execution.
9. **Final acceptance audit.** Check all routes and controls, dataset edge cases, keyboard/focus behavior, formula rendering, storage denied/over-quota behavior, exported artifacts, clean installation, backend isolation, and every original-spec item. Only then report the entire project complete.

## Boundaries

The hosted File provides browser workbenches and a setup-only local-execution page. It never connects to the viewer's loopback API. The local source app contains the full editor and backend client. Device-local snapshots are not cloud synchronization. Agent-preview persistence is not owner-persistence evidence. Model JSON is inspection data, not an executable trained-model format. Joblib exports from the optional backend must be treated as executable content and loaded only from trusted sources.

Hosted generated exports now show their exact text in-page with the supported copy control. They do not claim a Blob file download. Source-app file downloads remain available. Verified hosted import/rebuild, copy result, CV and comparison; source worker test observed real workers and main-thread heartbeat.
