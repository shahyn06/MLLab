# Final individual dispositions

Review date: 2026-11-21. The project is not marked complete.

## Ledger state

The line-addressed ledger contains all 419 obligations: 364 R rows and 55 P prose rows.

- 401 verified within the explicitly stated small educational/local implementation bounds.
- 4 verified with declared interface exceptions, not literal universal compliance.
- 9 historical-order requirements cannot be verified.
- 1 automated accessibility pass with human assistive-technology review open.
- 1 partial advanced/large-data backend requirement.
- PyTorch recommendation-only, ONNX conditional and cloud persistence outside the implementation, one row each.

The 21 formerly mapped/final rows were individually reviewed. Twelve now have separate bounded acceptance evidence. The nine historical rows were not promoted. See the exact per-row explanations in `docs/SPEC_ACCEPTANCE.md` and `docs/spec-acceptance.json`.

## Runtime control review

`docs/CONTROL_EFFECT_MAP.md` and `docs/qa/control-effect-map.json` assign every one of the original 282 source sites across 27 modules to reviewed runtime-effect evidence. The map has 205 named-control locator leads; the remaining sites are repeated, dynamic or shared implementation families with explicit scoped evidence. Literal text appearing in a test is a lookup aid, not the acceptance proof. The effect assertions and source handlers were reviewed together.

This is bounded family-level runtime acceptance, not exhaustive input/state-space testing. It does not mean every generated pixel, column, saved record or browser-specific timing interleaving was individually clicked. Native disclosure summaries and third-party CodeMirror/Plotly controls are outside that source-site count and have separate direct disclosure/editor/renderer checks. Current disabled/loading/error/cancel states are exercised by the relevant feature suites. No decorative or unavailable feature is passed off as a working action.

New direct evidence includes actual learned-state comparisons, held-out/query outputs, SVG geometry, WebGL pixel changes, timed pause/resume/caps, exact selected raw column/row transfers, safe cancellation, actual API/SQLite accounts and model artifacts, clipboard fallback and exact downloaded bytes. A piecewise-constant discrete CDF is tested across an integer cutoff; a depth control is tested on XOR rather than already depth-one separable data. These distinctions avoid mistaking a valid unchanged result for a dead control, or a changed input echo for a computed effect.

## Individual final semantic decisions

- R358, functional application: actual fitting, evaluation, data pipelines, persistence, isolated Python and model artifacts are exercised. The hosted/local execution split is explicit.
- R359, no dead buttons: 282 original source sites map to direct or shared-family runtime effects; unavailable actions have disabled states or honest local-only guidance. The map retains its limits.
- R360 and P049, no fake training: small models actually update or fit. PCA remains exact one-shot computation. Synthetic training tasks and fixed teaching calculations are labeled.
- R361, no screenshot replacement: browser scientific views are generated from current numeric state. Actual Plotly/WebGL renderers and parameter-dependent geometry are tested. Python PNG output is a separate real execution result.
- R362, mathematical correctness: all 43 math topics, 29 algorithm/update lessons and 30 data concept guides have content/example/formula review, known-answer arithmetic, strict rendering and appropriate engine/gradient/parity tests. This is bounded educational validation, not a general scientific certification.
- R363, modular/maintainable: UI, engines, storage, transport and workers are separated and have accepted incremental extensions. Several JSX modules remain densely formatted. That readability limitation is documented; no late cosmetic rewrite was made.
- R364, scientific priority: real scientific behavior, leakage/gradient/tree checks, safe local execution and accessibility repairs precede final decoration. No numeric design score is invented.
- P030, responsive/interactive visualization: current views fit 320/390/1280 in both themes, respond to actual adjacent inputs and expose actual numeric state. Interactivity does not mean that every plotted mark is draggable. Human nonvisual acceptance remains separate.
- P050, metric provenance: every current Metrics call, dashboard count, saved result and API provenance was traced to actual computation or a labeled demonstration. Imported metrics are recomputed; review progress is explicitly self-reported.
- P054, professional combination: accepted as a bounded design analogy, not compatibility with Jupyter/MATLAB. Real code execution, numerical workbenches and sklearn-style experiments support the analogy. No persistent notebook kernel or MATLAB runtime is claimed.
- P055, expandability: git history demonstrates multiple new scientific modules and renderers added without replacing the application shell. Arbitrary future extension is not promised to require no design work.

## Exact items not fully closed

### Universal-interface exceptions

- R227, dataset selection: specialized CNN/sequence tasks, fixed truth-table perceptron and analytic scalar GD do not universally accept arbitrary uploaded training datasets.
- R228, training lifecycle: PCA is a direct exact decomposition, and one-shot estimators/local synchronous fits do not universally implement iterative pause/resume.
- P031, every algorithm consistent: shared structure is implemented, but the dataset/lifecycle exceptions prevent literal universality.
- P032, every page has the same semantics: the eleven real sections exist, but some dataset/training sections explain meaningful exceptions rather than pretending those capabilities.

### Historical order

Direct commit inspection corrected an earlier note: `7eb3470` contains the architecture plan and foundational implementation, not the complete specification file. The complete specification was added in `2271bbc`. The root plan clearly precedes later substantive module commits, but git cannot establish order within the foundational commit.

- R351, complete analysis first: full preimplementation requirements analysis is not established by the preserved record.
- R352, architecture first: architecture and foundational implementation coexist in the root commit; their internal order is unknown.
- R353, folders first: the module/folder plan is recorded with the first source tree, not independently timestamped before it.
- R354, reusable components first: the shared-component plan and components coexist in the same first commit.
- R355, schema first: a proposed schema precedes the later backend, but not demonstrably all initial implementation; the actual SQLite schema evolved.
- R356, transport first: proposed endpoints precede the later API, but their order relative to foundational frontend code is not established.
- R357, visualization plan first: the root plan describes renderers and workers while SVG already exists in that same commit.
- P052, before implementing: the umbrella chronological condition cannot be reconstructed from the preserved history.
- P053, then start: the record cannot prove that implementation began only after all seven planning steps.

### Capability and review limits

- R317, accessible UI: automated A/AA, keyboard, contrast, chart-data, focus-return and status tests pass, but actual human assistive-technology acceptance remains unperformed.
- P039, large/advanced backend: the real local backend is bounded sklearn plus isolated Python, not a large-data/general advanced deep-training service.
- R280, PyTorch: recommendation and syntax-checked examples only under the current boundary, not an implemented/tested server deep-learning trainer.
- R281, ONNX: no runtime is implemented; the chosen direct lightweight trainers do not require pretrained ONNX inference, and no inference capability is claimed.
- R350, cloud persistence: no cloud service is deployed; local SQLite and browser snapshots are not cloud persistence.

These are 18 non-fully-closed ledger rows. They are not silently waived. A user-facing decision about these boundaries belongs before any whole-project completion signal.

## Feasible accessibility layer completed

Shared SVG charts have descriptions and adjacent exact-coordinate tables with no plotted-value truncation. Tables are created only while expanded; narrow views have explicit horizontal-scroll guidance and keyboard-focusable regions. Generated exports receive focus and return it to the triggering control on close. Lesson jumps focus the actual target heading. Actual numerical training messages and cancellation statuses are exposed as status regions. Automatic announcements are not attached to every changing metric or animation frame, avoiding a continuous flood.

Bespoke scientific diagrams retain their dedicated computed tables/readouts. The 81 new chart-data/focus/status/reading-order checks and all-route axe/keyboard/contrast work improve feasible access; they do not establish how a real screen-reader user experiences every diagram, reading order or dynamic announcement. That remains explicit in R317.

## Reproduction and delivery

Source tests: 5,350 checks. Typecheck, production and standalone builds pass. The latest runtime effects and direct regressions are checked into `tests/browser/` with QA records in `docs/qa/`. API suites use disposable temporary databases and their own loopback processes; Python suites require the documented supported Linux isolation prerequisites. No public execution endpoint, cloud deployment or paid resource was added.

Hosted application generation 35 remains PRIVATE. No application change is made by this documentation/audit disposition increment. The GitHub repository contains the full source and reproducible review evidence. The ledger's `completed` flag remains false.
