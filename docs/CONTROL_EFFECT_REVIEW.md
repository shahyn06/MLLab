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
