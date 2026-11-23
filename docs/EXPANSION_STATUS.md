# Guided learning expansion, verified source delivery

Work is on `feature/guided-learning`. The existing hosted File has not been changed. No new hosting account, paid service, deployment or repository visibility change has been made. This is a source-delivery record, not a deployed-site claim.

## Current implementation

- Six levels, 34 map units, collapsible roadmap/list, search, prerequisite recommendations, course navigation, breadcrumbs and explicit-unit resume.
- Ten original bilingual micro-courses, 45 lessons and 180 exercises. Pandas has five lessons. Dedicated covariance/correlation, Jupyter workflow, optimizer update rules and classical ensemble/SVM/Bayes lessons fill gaps found during audit.
- Every map unit has a distinct original bilingual guide: practical purpose, concept steps, a real slider-driven numerical illustration, three guided experiments, rendered formula and persisted quiz. Some related units intentionally share a broader course lesson while preserving their own guide/title/quiz/navigation.
- Editable tutorial and exercise cells with Run, Check, Stop, reset/copy, real stdout/errors, inline figures, progressive hints, solution access after attempt/hint and downloadable completion image. Completion images make no external accreditation claim.
- Module-worker Python with pinned Pyodide 314.0.8, Seaborn 0.13.2 through micropip and Matplotlib Agg/PNG capture. Runtime/package state is cached between cells; learner namespaces are fresh. A 12-second execution and 150-second loading limit, Stop/reset and global concurrent-run guard prevent a cell from blocking the page.
- Six distinct runnable level projects.
- Guest progress, account registration/login/logout, explicit save/reload and opt-in merge. Guest copies remain intact. Snapshots are scoped to guest/account. Sessions are in memory, not persistent browser tokens.
- More than 2,200 legacy Arabic entries, all primary math/data/network/algorithm teaching tuples, translated controls and stable internal selector values. Arabic dictionary lazy-loads. Some computed legacy status/error messages remain English and are not claimed translated.
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
- 70 snapshot replay/import/history checks pass, rerun after the final teaching changes.
- Normal and portable production builds pass. Production four-model output and real Seaborn figures verified. Portable file works and explicitly disables Python in both languages.
- Actual mobile screenshots inspected: gradient, notebook execution state, neuron activation, Arabic teaching and production Matplotlib output. Optimizer illustration compares actual stateful update rules. Its corrected Arabic production pixels and representative dark Arabic NumPy/PCA/hypothesis/CNN pixels were inspected.

## Delivery boundary and known limits

- The requested learning implementation is delivered as source. Deployment is not approved or performed, so there is no new online Python URL. The earlier hosted File remains unchanged. Private-repository push is separate from deploying a site.
- First-run Python needs internet/CDN downloads and a browser supporting module workers/WebAssembly. Runtime/package download can fail on restricted networks. Python is disabled in the portable HTML by design. This editor intentionally runs each cell in a fresh namespace and is not a complete Jupyter notebook service.
- Account sync needs the separately running API. It is explicit Save/Reload, not automatic multi-device conflict resolution. Sessions require login after refresh. A static deployment alone does not provide cloud accounts.
- The UI and core teaching are bilingual. Code/library names/output remain English by design. Default expanded-screen audit across 15 retained routes found technical names/formula text rather than untranslated prose. Some backend/provider errors and less common computed interaction messages may still be English. This is not a claim that every possible string/error branch is translated or that every bilingual phrase lives in a single locale module.
- Some map units share a related course lesson/exercise set while retaining distinct guides, numerical illustrations, quizzes, titles and navigation. Legacy labs are preserved behind links, rather than embedded twice in the tutorial. Widgets are intentionally bounded teaching models with disclosed assumptions, not production estimators.
- All 45 lesson time estimates are 10–20 minutes. Every mini-challenge has a topic-specific expected result and self-check; 41 earlier generic challenge targets were replaced and given independent starter inputs. Thirteen ML lessons now explicitly ask learners to change/observe lab parameters before their calculation.
- Automated accessibility coverage is bounded, not certification. No broad assistive-technology user study or remote-host production acceptance has been performed. Large plotting/legacy-lab chunks still produce build warnings, but are lazy-loaded; initial English production JS is about 312 KB, 97 KB gzip.
- No new server, paid resource, custom domain or repository visibility change was created. See `STATIC_DEPLOYMENT.md` for the owner account decision and exact next step.

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
