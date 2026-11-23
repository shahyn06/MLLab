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
