# ML Learning Lab

An English-language, browser-based Machine Learning learning website. Change parameters, inspect the results and understand the model.

## Stage 1

- **Linear Regression:** adjustable slope and intercept, editable x/y data, ordinary least-squares fit, actual animated gradient-descent training with pause/restart/convergence, paired data and learning-curve plots, mean squared error and predictions.
- **Perceptron:** online training on AND and XOR, adjustable weights and bias, a decision-boundary plot and prediction table.
- **Gradient Descent:** a quadratic loss curve, configurable learning rate, single-step and ten-step updates, timed playback, paired objective/learning-curve plots and position history.
- Each lab includes an explanation, worked example, educational Python code and a quiz with feedback.
- A searchable roadmap covers 15 curriculum sections. Unbuilt topics are labeled Planned.
- Dashboard, nine lab families, sidebar, Settings, light/dark themes and rendered equations. Planned labs are clearly marked.
- Responsive design. All lab calculations run locally in the browser.

## Development

Use Node.js 18 or newer and npm.

```sh
npm ci
npm run dev
```

Production build:

```sh
npm run build
npm run preview
```

Deploy the contents of `dist` to a static host. There is no backend, database, API key or subscription requirement. Hash routing works without server rewrite rules. The relative Vite base also supports project subpaths, such as GitHub Pages.

`ml-lab.html` is a self-contained copy. Download and open it in a modern browser, not a messaging app's document preview. It works without installation or an internet connection. The editable application is in `src`.

## Project structure

- `src/App.tsx`: app shell, routing and reference topic map.
- `src/labs.tsx`: interactive labs, explanations and quizzes.
- `src/dashboard.tsx`: dashboard, sidebar, lab categories and Settings.
- `src/Math.tsx`: KaTeX MathML equation rendering.
- `src/components.tsx`: reusable lab controls, charts and feedback.
- `src/curriculum.ts`: curriculum sections, readable topic names and available lab links.
- `src/ui.tsx`: small UI components and hash navigation.
- `src/style.css`: responsive visual design.
- `src/photos/network.png`: original abstract network illustration.
- `package-lock.json`: reproducible dependency versions.

## Scope and limitations

Only three labs are built. The remaining curriculum is a roadmap, not completed course material. Topic names follow the aibdaya.com concept-map image supplied for the project. The request described 217 topics; the total has not been reconciled item by item. The project does not copy paid course content or access a course account.

Lab state is temporary and resets when the page is reopened. Theme preferences are saved locally when browser storage is available. Displayed Python code is educational and is not executed by the website. Examples are fictional and are not production models. Do not enter sensitive data. This source application does not transmit lab inputs to a service.

## Educational references

- https://scikit-learn.org/stable/modules/linear_model.html
- https://scikit-learn.org/stable/modules/sgd.html

The regression lab uses MSE without a one-half factor. The gradient-descent lab optimizes `f(w) = (w - 3)^2`; its stated convergence interval applies to that function, not arbitrary objectives.

See `ARCHITECTURE.md` for the complete six-phase plan, future API boundary and proposed data model. These are designs, not implemented services.

## Suggested next stage

Descriptive statistics and distributions; vectors, dot products and derivatives; Logistic Regression; train/test splits and a Confusion Matrix. Reconcile the full source topic map before declaring a topic count complete.
