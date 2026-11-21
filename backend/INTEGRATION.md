# Frontend integration

Use `http://127.0.0.1:8000/api/v1` as a configurable base URL. `openapi.json` is the exact generated request/response contract. Anonymous local mode is the default. Bearer tokens are needed only when capabilities reports `auth_enabled: true`. Do not place tokens in query strings or downloadable experiment files.

## Startup and errors

1. Fetch `/health`, then `/capabilities`.
2. If the server is unreachable, show an offline message and instructions to run the local API. Browser-only labs can keep working.
3. If `playground.available` is false, show its `reason` and disable Run. Never substitute canned output for an execution result.
4. Preserve entered code/data after failures. Show API `detail` strings or Pydantic validation details. Handle 401 (login), 404 (not found/other owner's record), 409 (conflict), 413 (size limit), 415 (format), 422 (validation), 429 (training busy), and 503 (sandbox disabled/unavailable/busy).
5. `DELETE` and logout return empty 204 bodies. Do not call `.json()` on them. All other endpoints documented as JSON return JSON; downloads return CSV/JSON/binary as noted.

The default origin allowlist is Vite on port 5173. Set `ML_LAB_CORS_ORIGINS` for another local development port. No wildcard origins are enabled.

## Dataset create and upload

```json
POST /datasets
{
  "name": "Linear sample",
  "columns": ["x", "y"],
  "rows": [[1, 3], [2, 5], [3, 7], [4, 9], [5, 11], [6, 13], [7, 15], [8, 17], [9, 19], [10, 21]]
}
```

The response includes `id`, `name`, `columns`, `row_count`, `column_count`, `created_at`. For file upload, use `FormData` with field name `file`. Do not manually set multipart Content-Type; the browser supplies its boundary. Accept `.csv,.xlsx` in the file picker. The server validates actual parsing, not just the extension.

`GET /datasets/{id}?limit=100&offset=0` returns metadata plus `rows`, `offset`, `limit`; `row_count` is the full stored count. Paginate when building larger visualizations and label sampled plots honestly. `GET /datasets/{id}/summary` returns per-column summaries and a named correlation matrix. Null numeric statistics mean undefined, not zero.

## Save an experiment

```json
POST /experiments
{
  "name": "Browser gradient descent",
  "algorithm": "linear_regression",
  "dataset_id": null,
  "hyperparameters": {"learning_rate": 0.01},
  "training_config": {"iterations": 100},
  "metrics": {"mse": 0.012},
  "results": {"weights": [2.0], "bias": 1.0},
  "history": [{"step": 1, "loss": 0.6}, {"step": 100, "loss": 0.012}],
  "provenance": "client_computed"
}
```

Supply actual browser-computed values. Set `demonstration` for illustrative results. Do not send `server_computed`; only the training endpoint owns that value. `dataset_id` is optional but, when provided, must identify a dataset in the current owner's workspace. PUT uses the same full input schema. Dates/IDs come from the server.

`POST /experiments/compare` takes `{"ids":["first-id","second-id"]}`. The result includes full `items`, `metric_names`, and a comparison warning. Do not rank metrics across unrelated task types or datasets.

## Real server training

```json
POST /train
{
  "dataset_id": "dataset-id-from-upload",
  "name": "Linear fit",
  "algorithm": "linear_regression",
  "features": ["x"],
  "target": "y",
  "test_fraction": 0.2,
  "seed": 42,
  "hyperparameters": {}
}
```

The response is a saved experiment. Predictions and actual targets are held-out test data for supervised tasks, with original `test_indices`. Unsupervised results use the full dataset and state that scope. Training is synchronous with a busy guard; show a loading state and do not offer a server pause button. Cancellation of a frontend request is not cancellation of the local fit.

Supported hyperparameters (all optional, checked against bounded ranges):

| Algorithm | Parameters |
|---|---|
| `linear_regression`, `naive_bayes` | none |
| `ridge`, `lasso` | `alpha` |
| `elastic_net` | `alpha`, `l1_ratio` |
| `logistic_regression` | `C` |
| `knn` | `n_neighbors` |
| `decision_tree` | `max_depth` |
| `random_forest`, `gradient_boosting` | `n_estimators`, `max_depth` |
| `svm` | `C`, `kernel` (`linear`, `rbf`, `poly`, `sigmoid`) |
| `kmeans`, `hierarchical` | `n_clusters` |
| `dbscan` | `eps`, `min_samples` |
| `gmm` | `n_components` |
| `pca` | `n_components` |
| `anomaly_detection` | `contamination` |

Unsupervised algorithms do not need `target`; use `null`. Classification estimators train classifiers, not regressors. CNN/RNN/LSTM are explicitly unsupported in this backend.

For model download, use `GET /experiments/{id}/model` as a blob. Fetch `/model/metadata` separately and offer the metadata with the model; it records feature order and library versions. Warn about loading executable joblib serialization. A missing attached model returns 404, rather than a fake export. JSON experiment export is available to all experiments at `/export`.

## Playground

```json
POST /playground/run
{"code":"import numpy as np\nprint(np.mean([1, 2, 3]))"}
```

A completed run returns HTTP 200 even when the user's program errors or reaches its timeout. Inspect `status`: `ok`, `error`, or `timeout`. Show `stdout` and `stderr` as text, never `innerHTML`. The response includes `elapsed_seconds`, `exit_code`, actual `limits`, and `charts` as `{mime_type: "image/png", base64: "..."}`. Render chart sources as `data:image/png;base64,...`; use no user-supplied HTML or SVG. Infrastructure failures return HTTP 503.

Each run is fresh. Reset clears editor/output state on the frontend; there is no persistent Python kernel to reset. Filesystem writes, networking, subprocesses, package installation and multiprocessing are intentionally forbidden. Long/deep-learning training will hit enforced limits. `/playground/examples` contains working starter code with no network dependency.

## Accounts

Registration and login both accept `{"username":"learner","password":"at-least-ten-characters"}`. Registration returns `{id, username}`; login returns `{access_token, token_type, expires_at}`. Send the token as `Authorization: Bearer ...`. There is no password recovery or email workflow in this local prototype. Do not label this as a cloud account.
