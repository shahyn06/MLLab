# Runtime control-effect review

## Contract

Review the 282 source control sites in `docs/qa/control-source-inventory.json`. A source site may expand to many controls (matrix entries, layers, dataset columns, saved rows) or appear only in a conditional state. Wrapper components are not separate user actions. Source event handlers alone do not establish runtime behavior. Existing feature suites supply evidence, but aggregate test counts are not an exhaustive effect map.

For each control family, record the rendered variants, action, observable promised effect, rejection/disabled behavior when applicable, direct test and remaining limits. Do not count changing only the control's own value as proof that a scientific result changed. Hyperparameters that apply on the next step need a real step before comparison.

## Completed additional runtime pass

`tests/browser/math-control-effects.mjs`, output `docs/qa/math-control-effects-ui.json`: 32 direct effect records. The test compares computed metrics, matrix outputs, plotted geometry and scientific status while excluding input elements themselves.

- Linear algebra: all four A entries, all four B entries, both vector coordinates and scalar change computed output. Reset restores exact default output.
- Calculus: a/b/c, x/y, direction angle and finite-difference h change computed output. The real gradient-step button changes computed results; reset restores defaults.
- Probability: success probability, binomial trial count, cutoff, prior, sensitivity, false-positive rate, Poisson rate, Normal mean and Normal standard deviation change computed distribution/Bayes results. Every distribution is selected to expose its conditional controls.
- Statistics: known sigma and null mean affect computed inference. Apply data changes statistics, and bootstrap draw generates an actual displayed sample.
- Discrete cutoff note: a change smaller than one integer need not change a discrete CDF. The acceptance input crosses an integer rather than incorrectly flagging a valid piecewise-constant result.
- Browser page-error list is empty.

Shared math area/topic/learning-level selection already has separate 819 topic/level/control/viewport checks. Those existing checks are not relabeled as new runtime effect records.

## Next

1. Add explicit effect coverage for all remaining original regression/perceptron/scalar-GD controls, including random data, point edits, custom input, resets and timing.
2. Extend runtime coverage and per-site effect mapping through classical, structure, neural/CNN/sequence, optimizers, dataset/evaluation/pipelines and shared-table flows. Reuse current feature-specific test evidence where the actual promised effect is asserted; add tests for the uncovered sites and conditional variants.
3. Browser snapshots, imports/downloads/comparisons/deletion and local API/account/editor effects need their real storage/download/service states, not mocks that only return success.
4. Finish shell, curriculum, exported-text panel, copy fallback, lazy-view toggles, errors and recovery. Retain bounded execution limits and intentionally disabled states.
5. Only then individually disposition global/final requirements. The nine historical-planning items, four declared interface exceptions, advanced-backend partial item and human assistive-technology review keep their separate honest statuses.

## Subsequent passes in this increment

- `original-control-effects.mjs`: 35 records for every original regression/perceptron/scalar-GD control family, actual timing, data operations, reproducible random generation and quiz feedback.
- `parameter-control-effects.mjs`: 28 records. Matching-update comparisons include actual learned state or scientific output. IDs in SVG markup are normalized so generated identifiers cannot produce false differences. Decision-tree depth uses XOR rather than an already depth-one separable dataset. Inspection-only controls compare the actual graph/state.
- `view-lifecycle-effects.mjs`: 18 records. Actual step caps, seed regeneration, responsibility inspection, SVG rotations, WebGL pixel changes, renderer close/disposal, propagation duration/pause/resume, pagination and split membership.
- `shared-pipeline-effects.mjs`: 17 records. Real selected column order/row transfer into classical, structure, neural and raw pipelines; real fitted transforms/CV; reset; four actual UI cancellation paths; regression comparison. Test navigation preserves the session's source document so the shared table is not accidentally lost through a page reload.
- `api-account-effects.mjs`: 42 assertions on disposable real local API/SQLite. Account creation/session revocation, rejected password, selection/refresh/export, exact known fit, nondefault ridge alpha, experiment comparison/restore/delete and persisted artifacts are checked. Test credentials are fixed disposable fixtures in a temporary database, never real account secrets.
- `python-acceptance.mjs`: expanded to 15 checks including all three editor example selections, actual isolated stdout/Matplotlib, exact downloads and keyboard exit.
- `chart-accessibility.mjs`: 81 checks of actual chart values, descriptions, reading order, lesson focus, generated-panel focus/return, real update status and six-state containment. The numeric alternatives improve feasible access without claiming a screen-reader certification.

All these passes succeeded on the current application. Existing full-route, restore/import/history, export and axe regressions were rerun successfully. A source-site-to-evidence map and final conditional gaps are the next step, not implied complete by these counts.
