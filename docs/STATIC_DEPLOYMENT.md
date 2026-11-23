# Optional online deployment, not enabled

The repository includes a manual GitHub Pages workflow. It does not run on push and has not been triggered. No new site is published by this change.

## Account decision

This repository is private. GitHub Pages availability for a private repository depends on the account plan. Do not assume it is free or change repository visibility. Before deployment, the owner must choose one of:

1. If their current GitHub plan already supports Pages for this private repo, enable Settings > Pages > Build and deployment > GitHub Actions, then approve running the manual Deploy ML Lab workflow after the feature branch is reviewed/merged.
2. Keep the repo private and import it into a free static-host account (for example Cloudflare Pages) under the owner's chosen account and approved terms. Build command `npm ci && npm run build`, output directory `dist`, Node 22. No payment or new account has been created.
3. Explicitly choose to make the source repository visible to anyone, only if the owner wants to disclose all code and commit history. This is not required for continued local use and must never be done implicitly.

A static frontend does not deploy the optional account/Python backend. Browser Pyodide execution works without that backend. User accounts still need a separately running API, configured CORS and HTTPS for remote use.

## Static host requirements

- JavaScript modules, Web Workers including blob module workers, WebAssembly, and data: PNG figures.
- Outbound runtime/package downloads from `https://cdn.jsdelivr.net` and pinned Seaborn wheel retrieval through micropip. The CDN sees ordinary download requests; learner code runs on-device.
- No restrictive content policy that blocks module imports or worker scripts. If adding CSP, test the complete runtime before rollout.
- Vite base is relative and routing uses hashes, so no route rewrite is needed.
- HTTPS required. Do not add secrets or runtime credentials to the frontend.

## Verify after the owner approves deployment

Use the exact deployment URL returned by the host. Test home, direct unit routes, Arabic/RTL and both themes. Run a Pandas checker, Seaborn/Matplotlib figure, sklearn exercise, an infinite loop with Stop, timeout recovery, guest persistence and certificate download. Keep accounts disabled unless a backend is deliberately deployed and verified.
