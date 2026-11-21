# Final cross-cutting review, 2026-11-21

This review is evidence, not whole-project acceptance. The 419-row ledger remains authoritative about open, partial and exception statuses.

## Runtime evidence already inspected

- Actual application: source React routes, pure numerical engines, local worker orchestration and optional FastAPI service exist. The hosted viewer intentionally has no remote Python service. Automated real-fit and isolated-Python tests are recorded in the source and QA files.
- Metrics: inspected every `Metrics` call in the browser workbenches. Regression uses current points and residual loss; perceptron uses actual predictions; scalar descent uses the analytic objective and derivative; classical results use held-out predictions; structure results use computed labels, silhouettes and PCA ratios; neural/CNN/sequence panels use current weights and actual losses; optimizer values use the actual objective/gradient; dataset values use the current table; evaluation uses the entered prediction rows; pipeline/CV values use fresh held-out fits. No fixed accuracy or loss value was found masquerading as a trained result. Synthetic/example datasets and fixed teaching calculations are explicitly identified. This inspection is not a proof about arbitrary future code.
- Dashboard counts are generated from its actual family/workspace catalogue. Review progress is self-reported, not an invented mastery score. The experiment panel has an honest empty state.
- Generic SVG plots consume current numeric arrays, not screenshots. Plotly contours and Three.js surfaces are generated from the optimizer objective. Direct UI tests independently exercise inputs, actual plotted updates and real rendering.
- Formula coverage has distinct evidence: 43 mathematical lessons, 29 algorithm/update-rule lessons, 30 data concept guides, strict formula parsing, independent worked-example arithmetic, finite-difference gradients and engine parity. These are small educational models, not general statistical or scientific certification.
- Current source suite: 5,350 passing checks; typecheck, production build and standalone build pass. The total includes 389 mathematical content checks and 147 algorithm content checks whose output uses named prefixes.

## Historical planning evidence and its limit

The root commit `7eb3470` contains `ARCHITECTURE.md`, not the full specification file. Direct tree inspection establishes that the complete specification file was added later in `2271bbc`. The root architecture records: module/folder plan, shared page contract, visualization engine plan, proposed frontend/backend endpoints, proposed storage schema and engineering sequence. The later public-to-this-repository commit sequence adds mathematics, classical learning, data/evaluation, neural/backend work and API integration in separate increments.

This establishes that an architecture plan was recorded in the foundational commit before those later modules, not that the full requirement analysis was preserved there. It does not establish that every planning step occurred before the first line of the foundational implementation. Those rows are now individually dispositioned as HISTORICAL ORDER UNVERIFIABLE in the ledger. The current architecture document now describes actual routes and storage, with separate backend architecture documentation.

## Remaining literal scope gaps, not paperwork

1. Dataset and training universality. The specification's universal dataset/upload and start/pause/resume/reset wording has declared exceptions: specialized CNN and sequence training tasks, truth-table perceptron, dataset-free scalar analytic descent and exact one-shot PCA. Current controls do real computation, but exceptions are not literal implementation of universal wording. PCA should not receive fake iterative training merely to make a checkbox green. Any revised interpretation requires an explicit scoped decision; the user has not waived the whole specification.
2. Advanced/large-data backend. The local backend is real and bounded. It is not a large-dataset or general advanced deep-training service. PyTorch is recommendation-only under the current project boundary. Increasing limits without profiling and safe cancellation is not implementation of that requirement.
3. Accessibility. Axe is clean for 19 routes in both themes. Keyboard tests and contrast audits are substantial, including an actual hero contrast repair. A real screen-reader/manual audit is still unperformed. Generic SVG image labels do not by themselves prove that every scientific visualization is usable nonvisually. Review chart alternatives, reading order, focus return and dynamic announcements using assistive technology before closing the manual item.
4. Final controls and global semantics. Existing feature-specific UI suites cover many real actions. The new TypeScript-AST inventory records 282 source control sites: 113 shared buttons, 15 native buttons, one forwarded UI button, 36 inputs, 18 selects, nine textareas, 58 ranges, nine selected-field components, 21 links and two copy controls. No button site lacks a handler or forwarding contract. The subsequent docs/CONTROL_EFFECT_MAP.md maps all original sites to reviewed bounded direct/shared-family effects, with explicit limits. Do not interpret aggregate passing counts as that inventory.
5. Expandability and maintainability. Engines and UI modules are separated and new algorithms have been added incrementally without replacing the shell. Several JSX files still use very dense formatting. Long-term maintainability is a review judgment, not established solely by a typecheck.

## Efficient continuation

- Preserve the working publication and repository. Do not change deployment, spend money, or enable public execution.
- Resolve the universal-interface and advanced-backend interpretation with the user before claiming whole-project completion. Independent code/test work can continue meanwhile.
- Complete an actual control/effect inventory and chart-accessibility/manual review.
- Apply final ledger decisions individually using the recorded evidence, retaining historical unknowns and scope exceptions rather than deleting them.
- Rerun affected interaction tests, visually inspect changed views, and publish only the exact inspected revision. Never send the requested completion signal while substantive requirements remain unimplemented or unresolved.
