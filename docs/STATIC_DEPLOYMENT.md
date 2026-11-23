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

## Recommended no-backend route, pending approval

Cloudflare Pages currently supports private GitHub repositories on its Free plan. The documented Free limit is 500 builds/month, 20,000 site files and 25 MiB per asset. This project builds below those asset limits. Terms and the actual account plan must still be checked when setting it up.

Owner step: sign into the chosen Cloudflare account, open Workers & Pages > Create application > Pages > Connect to Git, and authorize the Cloudflare GitHub app for **only shahyn06/MLLab**. Select `feature/guided-learning` as the initial production branch (or merge and choose main only after a separate merge decision). Choose React (Vite), build command `npm run build`, output `dist`, root repository directory, Node 22. Then approve Save and Deploy. We have not done any of these account/disclosure/deployment actions. The repository stays private, but the resulting website's frontend assets will be accessible to visitors; a private source repo does not make a private website.

Git integration enables automatic future builds on pushes. Disable automatic production/preview deployments if the owner wants manual release control. The existing repository workflow itself is manual-only and is not required for Cloudflare Pages. No custom domain or paid service is needed for the default host subdomain. No paid upgrade should be accepted without a new owner decision.

After the owner approves and deployment returns its real URL, verify that URL's actual Python worker/package/figure behavior. Do not describe local production checks as a tested remote deployment. Static browser Python needs no backend server; account synchronization remains a separate API-hosting decision.

Current source documentation checked November 23, 2026:
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/platform/limits/
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

GitHub's current documentation says GitHub Free requires a visible-to-anyone repository for Pages. Pages sites are ordinarily internet-visible even when the source repository is private. Private-repository builds may incur Actions charges beyond the plan's included usage. Do not change source visibility or buy a plan to avoid the Cloudflare account step.
