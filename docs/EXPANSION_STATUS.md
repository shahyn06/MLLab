# Guided learning expansion checkpoint

This is an implementation checkpoint, not a finished release. Existing published File is unchanged.

Implemented:
- One six-level, 34-unit path model; visual/collapsible roadmap and list view; unified navigation.
- Arabic/English platform scaffold, course text and instructions; RTL and dark/light/system themes.
- Guest progress; explicit account progress save/reload and opt-in merge. Owner-scoped backend endpoints, validation and login throttling.
- Ten original micro-courses, 41 lessons, 164 exercises. Pandas has five lessons.
- Editable tutorial/exercise cells; lazy Pyodide module worker; package loading; real output; checker feedback; hints and gated solutions; inline figure support; stop/timeout paths.
- Per-exercise attempted/solved/hints/solution tracking; course completion image.
- Synthetic CC0 teaching data and 328 passing checker solution/wrong-answer checks.

Not complete / must verify before release:
- Full legacy lab translation: original advanced workspaces remain English. The UI explicitly says so.
- Unit template depth and per-unit mapping need a content pass. Several units share the same old workbench; new micro-courses are mapped at course rather than individual-lesson granularity.
- Add explicit level mini-projects beyond lesson-specific mini-challenges. Review all teaching explanations, hints and exercise difficulty.
- Browser QA across all routes, three widths, both themes/languages; real Pyodide stop/timeouts, all packages and inline figures; course completion download; account navigation persistence and merge behavior.
- Minimize first-load JS further. Plotly/Three are deferred, but initial bundle is still large because existing experiment provider imports heavy components.
- Hosted compatibility and publication. The existing File sandbox may block Pyodide workers/CDN imports; test an unpublished preview before claiming online execution there. No backend deployment or paid hosting is configured.
- Portable build, generated documentation and exact reproducible checker export script.
- Verify all old routes/snapshots and final tsc/npm/backend suites again after remaining fixes.

Run frontend: `npm ci && npm run dev`.
Run tests: `npx tsc --noEmit && npm test`.
Run backend tests: install `backend[test]`, then `cd backend && pytest`.
Run checker parity: install NumPy/Pandas/SciPy/scikit-learn/Matplotlib/Seaborn, then `python tests/check_course_solutions.py`.

Pyodide reference checked 23 November 2026:
https://pyodide.org/en/stable/usage/webworker.html
https://pyodide.org/en/stable/usage/downloading-and-deploying.html
Runtime is pinned to 314.0.8. Python is in a module worker; learner code is local, not sent to a Python server. Runtime downloads go to jsDelivr. Do not execute untrusted code.

## Runtime QA update
- Real Pandas tutorial output, correct DataFrame checker and wrong-type rejection verified in Chromium.
- Infinite-loop Stop verified: worker terminates and editor text remains.
- Seaborn is not in Pyodide's built-in package index. Runtime now loads it with pinned micropip (0.13.2, dependencies already loaded), not loadPackage.
- Matplotlib must use Agg inside the worker. Native Pyodide browser backend expects window and fails there. Corrected to Agg and collect PNGs inline.
- Full backend suite passes 55 tests.
- English and Arabic Pandas exercise mobile screenshots visually inspected; no horizontal overflow.

## Integration update
- Every map unit now opens a specific real lesson. Unit lessonId/codeId/taskIds/quizId are populated from the shared lesson metadata. All map states reflect checked exercise completion rather than review checkboxes.
- Added six distinct level projects with dataset, steps, expected results and independent self-check criteria.
- Initial bundle reduced to about 300 KB (93 KB gzip), with courses, advanced labs, Plotly and Three.js deferred.
- 366 route/language/viewport layout checks passed with zero page errors and no horizontal overflow. This is geometry coverage, not a claim that every pixel has been manually inspected.
- Account browser workflow passed register/login/opt-in merge/save/navigate/reload/logout.
- Portable build succeeds. Python execution is intentionally disabled in portable mode.
- Static-host workflow/config is ready but manual-only; no deployment enabled or triggered. See STATIC_DEPLOYMENT.md.
- Snapshot integration now scopes browser snapshots to the logged-in progress document, with guest-to-account merge preserving IDs and existing guest data. Needs final backend round-trip and UI QA.
