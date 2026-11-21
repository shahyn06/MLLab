# ML Learning Lab

An English-language, browser-based Machine Learning learning website. Change parameters, inspect the results and understand the model.

## Implemented phases 1–3

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
- `src/mathlab.tsx`: mathematical workbenches and numerical functions.
- `src/Math.tsx`: KaTeX MathML equation rendering.
- `src/components.tsx`: reusable lab controls, charts and feedback.
- `src/curriculum.ts`: curriculum sections, readable topic names and available lab links.
- `src/ui.tsx`: small UI components and hash navigation.
- `src/style.css`: responsive visual design.
- `src/photos/network.png`: original abstract network illustration.
- `package-lock.json`: reproducible dependency versions.

## Scope and limitations

Three original algorithm labs, four mathematical workbenches, a 12-estimator supervised workbench and K-Means are built. The remaining curriculum is a roadmap, not completed course material. Topic names follow the aibdaya.com concept-map image supplied for the project. The request described 217 topics; the total has not been reconciled item by item. The project does not copy paid course content or access a course account.

Lab state is temporary and resets when the page is reopened. Theme preferences are saved locally when browser storage is available. Displayed Python code is educational and is not executed by the website. Examples are fictional and are not production models. Do not enter sensitive data. This source application does not transmit lab inputs to a service.

## Educational references

- https://scikit-learn.org/stable/modules/linear_model.html
- https://scikit-learn.org/stable/modules/sgd.html

The regression lab uses MSE without a one-half factor. The gradient-descent lab optimizes `f(w) = (w - 3)^2`; its stated convergence interval applies to that function, not arbitrary objectives.

See `ARCHITECTURE.md` for the complete six-phase plan, future API boundary and proposed data model. These are designs, not implemented services.

## Mathematical foundations

Four working areas cover linear algebra, calculus, probability and statistics. There are 43 topic explanations that share the four simulations, not 43 independent labs. Matrix results include real eigendecomposition, SVD and reconstruction errors; probability includes four distributions and Bayes; statistics includes editable paired data, descriptive measures, z inference with assumptions and seeded bootstrap draws.

The workbenches use the MIT-licensed ml-matrix runtime. See src/vendor/MATRIX-LICENSE.txt.

## Next phases

Dataset processing and evaluation, remaining unsupervised models, neural networks, and advanced execution/persistence remain in progress. The full specification is not yet complete.

## Classical ML workbench

Twelve estimators: multiple/polynomial linear regression, Ridge, Lasso, Elastic Net, logistic regression, KNN, CART decision tree, random forest, linear SVM, Gaussian Naive Bayes and gradient-tree boosting. Separate K-Means uses real alternating assignment and centroid updates. Iterative models support step, start, pause, continue and reset. Noniterative estimators correctly finish in one fit rather than inventing loss histories.

Small synthetic datasets and validated pasted rows are supported. Classification/regression use a seeded 75/25 train/test split. Metrics come from held-out data. Limits: 160 rows, 2 bounded input features, linear SVM only, small tree ensembles. Large-data training and experiment persistence are not provided by this client-only release.

Scientific checks compare predictions/metrics with NumPy and scikit-learn; implementation-specific objective conventions are noted in the interface.

References: https://scikit-learn.org/stable/supervised_learning.html and https://scikit-learn.org/stable/modules/clustering.html#k-means .

## Phase 4: Dataset and evaluation tools

- Local CSV and Excel (.xlsx, first worksheet) import. Browser limits: 3 MB, 5,000 rows, 40 columns. Missing cells, statistical summaries and pairwise correlations. Interactive table filtering, sorting and pagination.
- Real numeric histogram, IQR box plot, scatter plot and pair plots.
- Exploratory missing-value imputation, duplicate removal, scaling, label/one-hot encoding, selected-feature removal, square feature generation and IQR filtering. Reset preserves original data. Split before fitting preprocessing in actual model pipelines.
- Seeded random train/test CSV exports. Classification threshold, confusion matrix, ROC/AUC and precision-recall/average precision. Regression metrics and residuals.
- Real logistic-regression K-fold/stratified validation, nested-sample learning curves, and four-model comparison on the same fixed split. Browser demos, not claims of general algorithm superiority.
- Excel parsing uses read-excel-file, including its worker-based browser parser. The standalone build inlines dynamic modules; the source app remains modular.

Validation: 22 end-to-end checks plus 274 independent sklearn/NumPy numeric comparisons for this phase.
