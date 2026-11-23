# Guided learning expansion, in progress

Source work is on `feature/guided-learning`. This is not a completion or deployment claim. The existing hosted File has not been changed. No new hosting account, paid service or deployment has been created.

## Implemented

- A six-level, 34-unit path, collapsible roadmap/list, search, prerequisite recommendations, course navigation, breadcrumbs and resume.
- Ten original bilingual micro-courses with 42 lessons and 168 exercises. Pandas has five lessons. Statistics now includes a dedicated covariance/correlation lesson rather than incorrectly routing that unit to inference.
- Editable Python tutorial and exercise cells with Run, Check, Stop, reset/copy, real stdout/errors, figures, hints, solutions after an attempt/hint and completion-image download.
- Disposable module-worker Python, pinned Pyodide 314.0.8. Seaborn 0.13.2 loads through micropip. Matplotlib uses Agg with PNG capture. Runtime/package state is shared across cells; learner namespaces are fresh.
- A 12-second execution timeout, 150-second loading timeout, Stop/worker reset, recovery and global concurrent-run guard.
- Six distinct level projects with runnable cells, goals, steps and self-checks.
- Guest progress, account login/logout, explicit account save/reload and opt-in merge. Saved browser snapshots are scoped to guest/account; login merge preserves the guest copy. Legacy quiz results are recorded.
- Over 1,700 legacy Arabic text entries, including every math/data/network worked-example tuple and algorithm derivation tuple. Shared controls and 188 literal props use locale hooks. Arabic data selectors retain stable internal values. Arabic dictionary lazy-loads instead of inflating the initial English bundle.
- Existing lab routes, deterministic numerical engines and snapshot validators/replay retained. Removed duplicated placeholder UnitFrame sections, leaving the actual lab and links to actual lessons.
- Manual-only static deployment workflow and deployment guide. Nothing has been triggered.

## Verified locally

- TypeScript and the complete `npm test` suite pass after the current changes.
- 336 official-solution / deliberate-wrong-answer checker cases pass.
- Backend: 55 tests pass. The browser fixture backend was restarted after schema changes before the account snapshot check.
- Real Python output, Pandas DataFrame checker/type rejection, Stop, automatic timeout, fresh-worker recovery, second-cell runtime reuse, sklearn tree prediction `[0 1]`, Seaborn and Matplotlib figure output.
- Account register/login/merge/save/reload/logout, snapshot round-trip and logout isolation.
- 372 new route/language/width geometry checks: no JS errors or horizontal overflow. 192 legacy route/language/theme/layout/accessibility records: no JS errors or overflow.
- 32 expanded-disclosure legacy accessibility scans across both languages/themes: no detected WCAG-tag rule violations after light-mode quiz/nav fixes. This is bounded automated coverage, not assistive-technology certification.
- 70 legacy replay/import/history UI checks pass, including unchanged learned-state replay and malicious/invalid import rejection.
- Keyboard course tabs, Home/arrow keys, resume destination, Arabic math selectors and advanced teaching, quiz persistence.
- Normal and portable production builds pass. Portable HTML intentionally does not run Python. Generated source ZIP is local only.
- Arabic mobile header/legacy math/classical/neural and detailed statistics/classical teaching screenshots were inspected. Prior Pandas, output-figure and certificate screenshots were inspected.

## Still to finish before calling the expansion complete

- Close the remaining curriculum depth gaps. In particular, the map's Jupyter workflow currently maps to Python functions, which is not an adequate dedicated lesson. Some units share related lessons. Audit all exact advertised topics and add missing teaching/widgets rather than claiming coverage from a nearby title.
- Review course-level template/content depth against the requested shared unit template. Do not reinsert generic placeholder prose to satisfy headings. Course intros, original lab links, exercises and mini-challenges exist, but the full why/concept/visual/math/task/quiz progression needs a final content pass.
- Finish legacy dynamic text localization, especially computed detail/error/status strings, some quiz option arrays and developer-facing API messages. The UI explicitly warns that some detailed computation messages remain English. Do not claim every string is Arabic.
- Add unit-specific guided experiments where a generic mini-challenge is still too shallow. Keep genuine computational checks and solutions.
- Update older README claims and OpenAPI/deployment instructions to distinguish browser Python from optional backend Python. Keep the original project's historical acceptance record distinct from this new expansion.
- Final production/portable browser sanity check, full frontend/backend/checker tests, inspect final screenshots and rebuild source archive after the last content changes.
- Deployment requires owner selection/approval. See `STATIC_DEPLOYMENT.md`. A private repo must not be made visible to anyone just to enable free hosting.

## Reproduce

Frontend: `npm ci && npm run dev`.

Source checks: `npx tsc --noEmit && npm test`.

Python checker parity: `PYTHON=/path/to/python npm run test:courses`, with NumPy, Pandas, SciPy, scikit-learn, Matplotlib and Seaborn installed.

Backend tests: install `backend[test]`, then `cd backend && pytest`.

Build: `npm run build`; standalone read-only Python-disabled copy: `npm run portable`.

Browser scripts under `tests/browser/` include `runtime-recovery.mjs`, `package-runtime.mjs`, `snapshot-account.mjs`, `arabic-effects.mjs`, `expanded-accessibility.mjs`, `legacy-expansion.mjs` and `expansion-visual.mjs`. They expect the dev frontend on 5173; the account test expects a disposable auth-enabled backend on 8000. They write local test records and evidence only. Use a fixture database, not a real user database.

Pyodide documentation checked for this implementation:
https://pyodide.org/en/stable/usage/webworker.html
https://pyodide.org/en/stable/usage/downloading-and-deploying.html
