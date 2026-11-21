# Full-specification status, November 21, 2026

This is an implementation checklist, not a completion certificate. The full supplied specification remains open. Tests exercise the stated small educational models; they do not certify production deployment or general ML performance.

## Implemented and checked

- Responsive React/TypeScript scientific dashboard, sidebar, light/dark theme and KaTeX math.
- Mathematical workbenches for matrix/vector operations, differential calculus, probability and statistics. All 43 named topics now have Beginner/Intermediate/Advanced teaching depth, equations, worked examples, ML uses and guided experiments.
- Simple regression and perceptron demos; twelve additional supervised estimators, real parameter updates/fitting, metrics, synthetic/custom data and educational explanations.
- K-Means plus hierarchical linkage, DBSCAN, diagonal Gaussian-mixture EM, 3-feature PCA and a small isolation forest. Two-dimensional and orthographic 3D views use computed coordinates.
- Optimization methods GD, Momentum, Nesterov, RMSprop and Adam; batch/stochastic/mini-batch sampling, schedules, contour/surface paths and actual gradients.
- Trainable configurable MLP, tiny trainable CNN and scalar RNN/LSTM with full BPTT, independent gates and hold-out metrics.
- CSV/XLSX data explorer, preprocessing, metrics and actual cross-validation/model comparison.
- Optional local FastAPI/SQLite backend, dataset storage, bounded sklearn training, saved experiments, JSON/model downloads and optional accounts.
- Resource-limited isolated Python process execution, real stdout/stderr and PNG charts. CodeMirror editor, runnable examples, copy/reset/download.
- Explicit snapshots from nine browser training routes, saved configuration/model/history/data inspection, export, comparison and confirmed deletion. Local app: 12 records/2 MB; hosted viewer: 14 KB total. Large states can be exported without storing them. Hosted previews are memory-only and show that status.
- Device-local theme and an explicitly self-reported six-workbench review checklist. No mastery is inferred from visits.
- TypeScript checking and 4,542 reproducible source checks pass. Current browser suites: 36 storage/failure/confirmation, 70 actual-step replay/import/history, 57 comparison/export/delete, 38 exact-content exports and 202 all-route/labels/keyboard/empty-state checks. Source evidence lives in docs/qa; reproducible browser scripts live in tests/browser.

- Simple regression now supports individual bounded numeric point addition, reproducible random-data generation, visible residual segments/table, one computed gradient step, and Python OLS code derived from the selected observations. Edits pause training and clear stale history.

## Not finished, next priorities

1. **Restore saved browser state: implemented for nine training routes.** Schema-version-1 snapshots are validated, learned states are replayed deterministically and metrics recomputed. Legacy inspection-only exports are rejected for restoration. Manual parameter controls are range-checked, not misrepresented as trained models. Check worker-based replay responsiveness and additional boundary inputs in the final audit.
2. **History and progress: core implemented.** Dashboard records up to six actually restored experiments with timestamps, alongside explicit review marks. A richer adaptive learning path remains optional work, not a claim of mastery.
3. **Unified educational interface.** Lessons have equations, assumptions, practical uses and challenges. Audit semantic completeness of every algorithm against the original spec. All 43 mathematical topics and 29 algorithm/update-rule lessons now have three learning levels, fixed worked examples, derivations and advanced assumptions/challenges. 938 new level-switch/render/responsive UI checks pass. All nine training routes now contain exactly one of each of the eleven requested section headings, real jump/focus navigation, existing live controls and scoped result explanations. The controlled navigation audit covers all selectable algorithms. Selected optimizer Python code now follows the actual method/objective/schedule; MLP and CNN templates reflect current settings. Final full-spec acceptance remains open.
4. **Broader dataset reuse: core implemented.** Explorer can share an explicit session-only table copy into classical models, structure discovery and the MLP. Columns/row counts/ranges/targets are validated, target-as-feature is blocked, no rows silently drop and no preprocessing is fitted during transfer. Custom MLP data survives validated replay. CNN and sequence remain specialized synthetic tasks. Whole-data explorer preprocessing remains exploratory. A separate pasted-row Evaluation pipeline now splits before fitting imputation/scaling, uses only training statistics, exposes raw/transformed held-out rows and source indices, and trains real logistic/linear models. It now consumes explicit shared Explorer columns while preserving raw missing cells. Its own K-fold/stratified K-fold path refits preprocessing and model inside each fold and exposes source-row membership. The original synthetic CV demo remains separately labeled.
5. **Performance: core implemented.** Normal route-chunked and separate portable targets are available. Source-app snapshot rebuilding, CV and model comparison run in disposable workers, with progress, cancellation and stale-result guards. Hosted viewer uses a labeled bounded in-page fallback. Small animated training ticks and table exploration remain on the page thread; assess their bounded worst cases in the final audit.
6. **Declared stack alignment: browser libraries adopted.** D3 linear scales drive shared SVG coordinates. A source-owned Radix/CVA shadcn button pattern uses generated Tailwind utilities. Framer Motion handles reduced-motion-aware lesson navigation. Plotly renders an on-demand actual loss contour/path; Three.js renders actual three-feature coordinates with camera controls and disposal, preserving SVG/numeric fallbacks. Runtimes are local and reproducibly bundled; normal builds lazy-load the heavy renderers and portable builds embed them. Larger PyTorch server training is a written recommendation only, outside this implementation. ONNX remains conditional, not needed for these directly implemented trainers.
7. **Advanced server training.** Local API explicitly reports CNN/RNN/LSTM unsupported. Their tiny educational browser implementations work, but larger PyTorch training/exports are not provided.
8. **Cloud persistence and deployment.** None is configured. SQLite is a local prototype and must not be described as cloud storage. No spending, subscriptions or paid infrastructure are authorized. Cloud persistence is outside this implementation. Any later deployment needs separate authorization and a security review.
9. **Final acceptance audit.** Check all routes and controls, dataset edge cases, keyboard/focus behavior, formula rendering, storage denied/over-quota behavior, exported artifacts, clean installation, backend isolation, and every original-spec item. Only then report the entire project complete.

## Boundaries

The hosted File provides browser workbenches and a setup-only local-execution page. It never connects to the viewer's loopback API. The local source app contains the full editor and backend client. Device-local snapshots are not cloud synchronization. Agent-preview persistence is not owner-persistence evidence. Model JSON is inspection data, not an executable trained-model format. Joblib exports from the optional backend must be treated as executable content and loaded only from trusted sources.

Hosted generated exports now show their exact text in-page with the supported copy control. They do not claim a Blob file download. Source-app file downloads remain available. Verified hosted import/rebuild, copy result, CV and comparison; source worker test observed real workers and main-thread heartbeat.

## Original-spec acceptance ledger

`docs/SPEC_ACCEPTANCE.md` and its JSON companion map 419 original bullet/numbered and normative prose requirements to source ownership. Mapped means review remains open, not a pass. Propagation playback, tree arithmetic, topic-specific interaction checks and settings-matched Python updates have now landed. Final semantic item-by-item acceptance remains open. Advanced PyTorch server work is a written recommendation only; cloud persistence is outside this implementation. Clean npm ci/typecheck/tests/build and 52 local backend tests were rerun successfully. Tailwind generation is now deterministic across source directories.

Layer-by-layer MLP propagation now captures a fixed actual sample/parameter snapshot, pauses training and plays forward activations then reverse analytical deltas. Read-only playback has manual stages, pause/resume/restart, adjustable duration, exact per-neuron arithmetic and frozen epoch labeling. Gradient parity checked across zero to four hidden layers and all activation choices; it does not claim playback trains weights.

Fitted decision trees expose every actual node's training-only class counts, numeric Gini/entropy substitutions, weighted child impurities and chosen split gain. Leaves explicitly have no split gain. 589 source parity/membership tests and 17 UI checks cover criterion changes, depth, leaf states, keyboard and responsive rendering. Random-forest bootstrap membership is not misrepresented by reusing non-bootstrap rows.

Direct math interaction audit exercised all 43 topic controls and changed actual relevant outputs, 146 checks with per-topic evidence in docs/math-topic-interaction-audit.json. Calculus gradient steps now stop at the labeled coordinate-domain boundary rather than growing outside its controls. Classical Python is a standalone standard-library reproduction using selected rows, exact split, settings and update count: 506 parity checks across 26 executed variants. Structure/math Python now reflects selected inputs/settings and executes; deep-learning PyTorch templates define actual training tensors and selected architecture/rate/clip, but were syntax-checked only (PyTorch not installed). This is not a PyTorch backend commitment. Tests require Python 3 for classical parity checks.

## Storage and visual audit increment

Device storage reads and writes now handle denial, quota, malformed JSON, oversize collections and unsafe history routes without a render crash. Session-only state is clearly labeled. Four browser suites were rerun from the checked-in configurable scripts. All 18 route tops were inspected in both themes at 320/390/1280; complete light-theme routes were visually inspected at those widths. Dark-theme full-page content was not separately inspected. CNN paused wording was corrected, rebuilt and re-inspected at all three widths. Basic keyboard reachability is not a full assistive-technology certification. The semantic item-by-item acceptance ledger remains open.

## Semantic acceptance, supervised models and math repair

The supervised-model entries now have scoped acceptance evidence: 91 independent arithmetic/partition checks and 201 direct algorithm UI checks. These cover all 13 classical workbench choices, real fitting/query/results, eleven lesson sections, three learning levels, selected-data Python and snapshots. This is bounded educational acceptance, not production-model certification. The formerly fixed Naive Bayes variance-floor gap was closed in generation 27.

Math content review found and fixed two real teaching/control mismatches: the algebra workbench now accepts B and computes A+B, AB and BA, with matching Python; Limits now exposes a positive-h forward quotient, absolute error and approach curve, separately from the quadratic-exact symmetric quotient. The chain rule has a numerical check and the bootstrap prompt names its actual advancing-seed button. Added 50 independent math known-answer checks and 20 UI repair checks. Updated algebra and calculus full contents inspected in both themes at 320/390/1280. Other semantic ledger items remain open.

## Adjustable Naive Bayes variance

The fixed-floor gap is closed: Gaussian Naive Bayes now exposes an absolute per-class-feature variance floor in [0.000001,1], distinct from sklearn relative smoothing. Changing it resets old fitted results. Selected Python uses it; snapshot validation preserves it, while older snapshots default to the former 0.00001. Two independently calculated near-constant likelihood checks, Python parity at nondefault floor and 12 direct edit/save/Python/replay/responsive checks pass. The existing 70 replay and 201 classical interaction suites were rerun. This closes the supervised adjustable-parameters requirement, not the whole acceptance ledger.

## Separate K-Means phases and original-space PCA directions

K-Means now visibly alternates assignment with fixed centroids, then centroid movement using that exact membership. Each timed phase lasts 700 ms; manual phase controls and Pause permit inspection. Only completed centroid updates enter the objective history. Current membership and coordinates, plus previous-to-current movement segments, are shown. Snapshots preserve half-cycle state through deterministic validation/replay; older atomic snapshots remain compatible. Python reproduces completed centroid updates.

PCA draws PC1/PC2/PC3 arrows in the centered and optionally standardized input feature space. Each extends plus/minus one component standard deviation; the 3D view rotates arrows and points together. PC3 can project to zero in 2D, explicitly explained. This is separate from the transformed PC-coordinate chart.

588 new exact engine/replay/direction checks, 13 K-Means phase UI checks and 11 PCA arrow/rotation/scaling checks pass, with updated areas visually checked in both themes at all three widths. Existing classical interaction and nine-route replay suites were rerun. Semantic acceptance of these visualization requirements is bounded to the implemented small models. Remaining ledger items stay open.

## Semantic acceptance: structure, neural and data workspaces

Inspected the engines and educational assumptions for all structure estimators, bounded MLP/CNN/scalar RNN/LSTM, explorer/preprocessing and evaluation workspaces. Added 430 independent source checks: 165 unsupervised, 131 deep-learning and 134 data/statistics/metrics. Added reproducible browser suites with 85 structure, 30 deep-learning and 42 data/evaluation checks. These include real CSV/XLSX import, every preprocessing operation, exact phase controls, layer editing, prediction/gradient changes, per-fold fitting and held-out evaluation.

Derived columns now reject name collisions: repeated squaring and one-hot names overlapping another feature produce a visible error without overwriting or corrupting the table. The two-row Excel fixture is part of the tests, not an external dependency.

Re-ran the local backend: all 52 tests passed in 50.46 seconds with no skips. One non-failing Starlette test-client deprecation warning remains. This includes actual isolated stdout, sklearn and Matplotlib plus fail-closed/resource/ownership/persistence checks, not public-service approval. No deployment or cloud persistence. PyTorch is still recommendation-only.

These are bounded semantic acceptances, not a whole-project completion. Educational depth, remaining engineering/interaction requirements and the full final ledger still require closure.

## Semantic acceptance: optimization, Python and bounded engineering

All five optimizer update rules and all three sampling modes, four schedules, initial parameters, actual timed pause/reset, computed minima, real Plotly contour and Three.js mesh were exercised (44 direct UI checks). Existing independent finite-difference/update/stationary-point tests remain green. Light-theme generic SVG styles no longer erase the minima crosses or negative-gradient arrow; both themes were visually inspected at 320/390/1280.

A reproducible 14-check browser suite launches a temporary loopback API and SQLite directory, runs actual isolated Python, verifies stdout and a computed Matplotlib PNG, exercises CodeMirror syntax/keyboard/reset/clear/copy or honest fallback, downloads the editor source and disconnects. Each execution has a fresh environment. This is a supported local Linux workflow, not a deployed service or hosted-viewer Python runtime.

A route-scoped error boundary now contains render/lazy-module failures while keeping navigation usable. A real blocked production chunk test verifies containment, changing route and reload recovery (10 checks). The fallback was visually checked in both themes at all three widths. The full route suite now waits for lazy loading to finish and explicitly rejects a hidden route error, rather than accepting a navigation shell alone (220 checks). The 70-check replay suite was rerun.

16 new browser checks directly observe real worker results/progress and resource cleanup, pre-flight and in-flight cancellation, worker validation errors, labeled worker-construction fallback and fallback cancellation. These do not replace a full assistive-technology audit. Remaining content, interface, experiment and math semantic ledger entries remain open. PyTorch stays recommendation-only; no deployment, spending or cloud persistence.

## Experiment manager, technology and contrast acceptance

Added a reproducible temporary-local-API manager suite (33 checks): actual CSV upload/summary, two server fits, independently known exact-line held-out MSE, required saved fields, same-context comparison, JSON/model plus metadata downloads, feature/target configuration reopening, persistence after reload/reconnect and confirmed deletion. Full manager content was visually inspected at 320/390/1280 in both themes. Existing replay/import/export and backend owner/restart/model-load checks remain the evidence for the separate browser snapshots and local SQLite records. Server fits remain synchronous and cannot be paused. No cloud service is claimed.

Inspected the actual dependency/runtime paths and bounded tree visualization requirements, and recorded their existing executable evidence. A new text-contrast sweep examines 4,630 visible leaf text instances across all 18 routes in both themes. It found real CNN pixel-label and light missing-cell contrast failures. Editable CNN cells now have opaque dark-blue luminance values with white labels, preserving pixel intensity differences without unreadable numbers; missing-cell labels use a darker light-theme color. Rerun finds zero failures within this limited sweep. SVG/KaTeX text, gradient backgrounds, disabled controls and complex transparency are excluded, so this is not a WCAG certification. Changed views were inspected in both themes at 320/390/1280, and deep interactions reran successfully.

Whole-project completion remains false. Remaining: math and educational content acceptance, unified-interface semantic review, overall design/phase/final-instruction review and a fuller accessibility audit. PyTorch advanced execution remains a recommendation, not an implementation commitment.

## Full prose accounting and accessibility repairs

The acceptance generator now includes 55 separately identified normative prose obligations, including cross-cutting and container requirements. Existing R001-R364 identities are stable; new P001-P055 rows bring the total to 419. Each prose row begins open, not inferred from neighboring bullets. A 457-check accounting regression ensures every original dash bullet and each enumerated prose line has a unique stable row; completion remains false.

Axe-core WCAG 2/2.1 A/AA automation with disclosures open across 19 routes in both themes found real issues beyond the earlier leaf-text contrast sweep. Repaired scrollable code/table keyboard focus, visible-number/accessibility-name mismatches in CNN and recurrent steps, interactive buttons inside an image role, prohibited equation ARIA, and curriculum button/number contrast. Added a 28-check direct keyboard/scroll/toggle/responsive suite; 38 automated states now report no violations. Color-contrast and empty-table incomplete results remain explicitly manual-review items. This is not assistive-technology certification.

All 4,999 source/accounting checks, typecheck, production/portable builds, 30 deep interactions and 220 route checks pass. Updated recurrent/CNN/curriculum areas were inspected in both themes at 320/390/1280. No final completion, no deployment, no paid resources, no cloud synchronization. PyTorch remains recommendation-only.

## Mathematical content and interface semantics

All 43 mathematical explanations, formulas, worked calculations, assumptions and ML uses were reviewed against their real family workbenches. Added 58 independent known-answer teaching checks and 819 direct topic/control/level/viewport checks. Every explanation card was visually inspected in both themes at 320/390/1280. The fixed worked examples are separate from live inputs; known-sigma Normal inference and other assumptions remain explicit. Removed a misleading tangent color reference.

All 29 algorithm/update-rule teaching examples were independently checked with 63 arithmetic assertions. A further 785 browser checks exercise all three teaching levels, selected lesson content, eleven actual interface sections and six theme/width states. Actual section text, controls and charts were inventoried and inspected in all nine workbench components. Current source suite: 5,120 checks, typecheck and both builds pass. These tests verify the small educational implementations, not general scientific certification.

The 419-row ledger now includes 55 explicit prose requirements. It records 291 bounded verified rows and four rows with declared interface exceptions. The fixed CNN/sequence tasks, truth-table perceptron, analytic GD and one-shot PCA do not claim universal uploaded-data or iterative pause behavior. The large-dataset/advanced-training backend prose is partial: the local API is real but bounded, and PyTorch remains recommendation-only. Remaining design, global educational coverage, accessibility/manual review, phase and final acceptance items remain open. No whole-project completion is claimed.
