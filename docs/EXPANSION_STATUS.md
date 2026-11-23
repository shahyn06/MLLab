# Guided learning expansion, source verification in progress

Work is on `feature/guided-learning`. The existing hosted File has not been changed. No new hosting account, paid service, deployment or repository visibility change has been made. This document is not a deployment or final completion claim.

## Current implementation

- Six levels, 34 map units, collapsible roadmap/list, search, prerequisite recommendations, course navigation, breadcrumbs and explicit-unit resume.
- Ten original bilingual micro-courses, 45 lessons and 180 exercises. Pandas has five lessons. Dedicated covariance/correlation, Jupyter workflow, optimizer update rules and classical ensemble/SVM/Bayes lessons fill gaps found during audit.
- Every map unit has a distinct original bilingual guide: practical purpose, concept steps, a real slider-driven numerical illustration, three guided experiments, rendered formula and persisted quiz. Some related units intentionally share a broader course lesson while preserving their own guide/title/quiz/navigation.
- Editable tutorial and exercise cells with Run, Check, Stop, reset/copy, real stdout/errors, inline figures, progressive hints, solution access after attempt/hint and downloadable completion image. Completion images make no external accreditation claim.
- Module-worker Python with pinned Pyodide 314.0.8, Seaborn 0.13.2 through micropip and Matplotlib Agg/PNG capture. Runtime/package state is cached between cells; learner namespaces are fresh. A 12-second execution and 150-second loading limit, Stop/reset and global concurrent-run guard prevent a cell from blocking the page.
- Six distinct runnable level projects.
- Guest progress, account registration/login/logout, explicit save/reload and opt-in merge. Guest copies remain intact. Snapshots are scoped to guest/account. Sessions are in memory, not persistent browser tokens.
- More than 2,100 legacy Arabic entries, all primary math/data/network/algorithm teaching tuples, translated controls and stable internal selector values. Arabic dictionary lazy-loads. Some computed legacy status/error messages remain English and are not claimed translated.
- Existing lab routes, numerical engines and snapshot validators/replay retained. No edits to a separate Math Lab project.
- Manual-only static deployment workflow and an account/hosting decision guide. Nothing triggered.

## Verified locally

- TypeScript and complete `npm test` suite pass.
- 360 official-solution / deliberate-wrong-answer checker cases pass. All 90 tutorial code cells actually execute in a scientific Python environment with zero exceptions. These check execution, not the absence of every possible teaching error.
- Backend: 56 tests pass, including authenticated progress/snapshot/resume and input limits. OpenAPI regenerated with progress endpoints.
- Actual browser Python: sklearn predictions, four estimators in the production build, Seaborn/Matplotlib PNG output, Pandas checker/type rejection, Stop, automatic timeout, recovery and second-cell cache reuse.
- Account register/login/merge/save/reload/logout and snapshot round-trip/logout isolation.
- 390 course/project route/language/width layout checks: no page errors or horizontal overflow. 192 retained-lab route/language/theme/layout/accessibility records: no page errors or overflow.
- 136 direct unit/language/theme checks: every slider changes a numerical result, no detected WCAG-tag rule violations, explicit-unit resume works. Another 68 guide/language/formula/width checks and quiz persistence pass.
- 32 expanded retained-lab accessibility scans pass. Bounded automated checks are not assistive-technology certification.
- Previous 70 snapshot replay/import/history checks pass; final rerun is still to be done after the last changes.
- Normal and portable production builds pass. Production four-model output and real Seaborn figures verified. Portable file works and explicitly disables Python in both languages.
- Actual mobile screenshots inspected: gradient, notebook execution state, neuron activation, Arabic teaching and production Matplotlib output. Optimizer illustration compares actual stateful update rules. Its Arabic production pixels were inspected; chart-label spacing was corrected afterward.

## Remaining before true finish

- Reinspect the chart-label spacing correction and representative dark/RTL widgets. Production/portable execution and 390 geometry checks passed after the content/localization changes, before this small spacing correction.
- Complete or clearly bound remaining computed legacy status/error localization. Current default-screen audit is under `tests/browser/localization-audit.mjs`; code, library names and Python output intentionally stay English. It does not cover every interaction/error branch.
- Review content-to-exercise alignment for shared lessons, learner-time estimates and the final exact specification checklist. Do not count a nearby title as full teaching coverage.
- Final regression rerun, source/archive safety inspection, documentation consistency and local commit. Latest source ZIP is local only and must be regenerated after final changes.
- Remote source update requires reconciling the parent's no-new-publication gate. No push occurred during the latest work. Deployment needs an explicit owner choice/approval; see `STATIC_DEPLOYMENT.md`.

## Reproduce

- Frontend: `npm ci && npm run dev`.
- Source: `npx tsc --noEmit && npm test`.
- Scientific code: `PYTHON=/path/to/python npm run test:courses` and `PYTHON=/path/to/python npm run test:tutorials`. Requires NumPy, Pandas, SciPy, scikit-learn, Matplotlib and Seaborn.
- Backend: install `backend[test]`, then `cd backend && pytest`.
- Build: `npm run build`; standalone Python-disabled copy: `npm run portable`.
- Browser scripts under `tests/browser/`: `unit-guides.mjs`, `unit-visuals.mjs`, `production-expansion.mjs`, `runtime-recovery.mjs`, `package-runtime.mjs`, `snapshot-account.mjs`, `arabic-effects.mjs`, `expanded-accessibility.mjs`, `legacy-expansion.mjs`, `expansion-visual.mjs` and `localization-audit.mjs`.

Browser scripts expect a disposable frontend on 5173; account tests expect a disposable auth-enabled backend on 8000. Production script starts/stops preview on 5179. Use fixture databases, not real learner data. Reports are under `docs/qa-expansion/`.

Runtime sources checked:
https://pyodide.org/en/stable/usage/webworker.html
https://pyodide.org/en/stable/usage/downloading-and-deploying.html
