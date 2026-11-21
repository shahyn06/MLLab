"""Real, bounded scikit-learn computations. No uploaded executable models."""
import io
import math
import platform
import warnings
import joblib
import numpy as np
import sklearn
from fastapi import HTTPException
from sklearn.cluster import KMeans, AgglomerativeClustering, DBSCAN
from sklearn.decomposition import PCA
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, IsolationForest
from sklearn.linear_model import LinearRegression, LogisticRegression, Ridge, Lasso, ElasticNet
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, mean_absolute_error, mean_squared_error, r2_score, silhouette_score
from sklearn.mixture import GaussianMixture
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from threadpoolctl import threadpool_limits

ALGORITHMS = ['linear_regression', 'ridge', 'lasso', 'elastic_net', 'logistic_regression', 'knn', 'decision_tree', 'random_forest', 'svm', 'naive_bayes', 'gradient_boosting', 'kmeans', 'hierarchical', 'dbscan', 'gmm', 'pca', 'anomaly_detection']
UNSUPERVISED = {'kmeans', 'hierarchical', 'dbscan', 'gmm', 'pca', 'anomaly_detection'}
REGRESSION = {'linear_regression', 'ridge', 'lasso', 'elastic_net'}


def clean(value):
    if isinstance(value, np.ndarray):
        return clean(value.tolist())
    if isinstance(value, np.generic):
        return clean(value.item())
    if isinstance(value, float):
        return value if math.isfinite(value) else None
    if isinstance(value, dict):
        return {str(k): clean(v) for k, v in value.items()}
    if isinstance(value, (list, tuple)):
        return [clean(v) for v in value]
    return value


def bounded(hp, name, default, low, high, integer=False):
    value = hp.get(name, default)
    if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value) or not low <= value <= high or (integer and int(value) != value):
        raise HTTPException(422, f'{name} must be {"an integer" if integer else "a number"} between {low} and {high}')
    return int(value) if integer else float(value)


def estimator(request, n):
    hp, a, seed = request.hyperparameters, request.algorithm, request.seed
    allowed = {'linear_regression': set(), 'ridge': {'alpha'}, 'lasso': {'alpha'}, 'elastic_net': {'alpha', 'l1_ratio'},
               'logistic_regression': {'C'}, 'knn': {'n_neighbors'}, 'decision_tree': {'max_depth'},
               'random_forest': {'n_estimators', 'max_depth'}, 'svm': {'C', 'kernel'}, 'naive_bayes': set(),
               'gradient_boosting': {'n_estimators', 'max_depth'}, 'kmeans': {'n_clusters'}, 'hierarchical': {'n_clusters'},
               'dbscan': {'eps', 'min_samples'}, 'gmm': {'n_components'}, 'pca': {'n_components'}, 'anomaly_detection': {'contamination'}}
    unknown = set(hp) - allowed[a]
    if unknown:
        raise HTTPException(422, 'Unknown hyperparameters: ' + ', '.join(sorted(unknown)))
    def b(name, default, low, high, integer=False):
        return bounded(hp, name, default, low, high, integer)
    if a == 'linear_regression': return LinearRegression()
    if a == 'ridge': return Ridge(alpha=b('alpha', 1, 0, 10000))
    if a == 'lasso': return Lasso(alpha=b('alpha', 0.1, 0.000001, 10000), max_iter=1000)
    if a == 'elastic_net': return ElasticNet(alpha=b('alpha', 0.1, 0.000001, 10000), l1_ratio=b('l1_ratio', 0.5, 0, 1), max_iter=1000)
    if a == 'logistic_regression': return LogisticRegression(C=b('C', 1, 0.001, 1000), max_iter=300, random_state=seed)
    if a == 'knn': return KNeighborsClassifier(n_neighbors=b('n_neighbors', min(5, n), 1, n, True))
    if a == 'decision_tree': return DecisionTreeClassifier(max_depth=b('max_depth', 5, 1, 20, True), random_state=seed)
    if a == 'random_forest': return RandomForestClassifier(n_estimators=b('n_estimators', 50, 1, 100, True), max_depth=b('max_depth', 5, 1, 20, True), random_state=seed, n_jobs=1)
    if a == 'gradient_boosting': return GradientBoostingClassifier(n_estimators=b('n_estimators', 50, 1, 100, True), max_depth=b('max_depth', 3, 1, 8, True), random_state=seed)
    if a == 'svm':
        kernel = hp.get('kernel', 'rbf')
        if kernel not in ['linear', 'rbf', 'poly', 'sigmoid']: raise HTTPException(422, 'Invalid SVM kernel')
        return SVC(C=b('C', 1, 0.001, 1000), kernel=kernel, max_iter=1000, random_state=seed)
    if a == 'naive_bayes': return GaussianNB()
    if a == 'kmeans': return KMeans(n_clusters=b('n_clusters', min(3,n), 2, min(30,n), True), n_init=10, max_iter=100, random_state=seed)
    if a == 'hierarchical': return AgglomerativeClustering(n_clusters=b('n_clusters', min(3,n), 2, min(30,n), True))
    if a == 'dbscan': return DBSCAN(eps=b('eps', 0.5, 0.000001, 1000), min_samples=b('min_samples', min(5,n), 1, n, True), n_jobs=1)
    if a == 'gmm': return GaussianMixture(n_components=b('n_components', min(3,n), 1, min(20,n), True), random_state=seed, max_iter=100)
    if a == 'pca': return PCA(n_components=b('n_components', min(2, len(request.features),n), 1, min(len(request.features),n), True), random_state=seed)
    if a == 'anomaly_detection': return IsolationForest(n_estimators=100, contamination=b('contamination', 0.1, 0.001, 0.5), random_state=seed, n_jobs=1)
    raise HTTPException(422, 'Unsupported algorithm')


def train(request, dataset):
    columns, rows = dataset['columns'], dataset['rows']
    # Avoid quadratic clustering exhausting this local API process.
    row_limit = 2000 if request.algorithm in {'hierarchical', 'dbscan', 'svm'} else 5000
    if not 5 <= len(rows) <= row_limit:
        raise HTTPException(422, f'This trainer accepts 5 to {row_limit} rows; select a smaller dataset')
    if any(c not in columns for c in request.features):
        raise HTTPException(422, 'Unknown feature column')
    if request.target in request.features:
        raise HTTPException(422, 'The target must not be included in features')
    try:
        X = np.array([[r[columns.index(c)] for c in request.features] for r in rows], dtype=float)
        if not np.isfinite(X).all() or np.abs(X).max() > 1e100:
            raise ValueError('Non-finite or excessively large feature values')
        metrics, result = {}, {}
        with threadpool_limits(limits=1), warnings.catch_warnings(record=True) as caught:
            warnings.simplefilter('always')
            if request.algorithm in UNSUPERVISED:
                model = make_pipeline(StandardScaler(), estimator(request, len(rows)))
                transformed = model[0].fit_transform(X)
                final = model[-1]
                if request.algorithm == 'pca':
                    coordinates = final.fit_transform(transformed)
                    result = {'coordinates': clean(coordinates), 'components': clean(final.components_), 'explained_variance_ratio': clean(final.explained_variance_ratio_)}
                    metrics = {'explained_variance_ratio_sum': float(final.explained_variance_ratio_.sum())}
                else:
                    labels = final.fit_predict(transformed)
                    result = {'labels': clean(labels)}
                    if request.algorithm == 'kmeans':
                        metrics['inertia'] = float(final.inertia_)
                        result['centers'] = clean(model[0].inverse_transform(final.cluster_centers_))
                    if request.algorithm == 'gmm': metrics |= {'aic': float(final.aic(transformed)), 'bic': float(final.bic(transformed))}
                    if request.algorithm == 'anomaly_detection':
                        result['scores'] = clean(final.decision_function(transformed))
                        metrics['outlier_count'] = int(np.sum(labels == -1))
                    else:
                        valid = labels != -1
                        unique = len(set(labels[valid]))
                        metrics['cluster_count'] = unique
                        metrics['noise_count'] = int(np.sum(~valid))
                        if 1 < unique < int(np.sum(valid)):
                            metrics['silhouette'] = float(silhouette_score(transformed[valid], labels[valid], sample_size=min(1000,int(np.sum(valid))), random_state=request.seed))
                result |= {'evaluation_scope': 'full_dataset_unsupervised', 'feature_scaling': 'standardization'}
            else:
                if request.target not in columns:
                    raise HTTPException(422, 'A valid target column is required')
                y = np.array([r[columns.index(request.target)] for r in rows])
                if any(v is None for v in y): raise ValueError('Target values cannot be missing')
                if request.algorithm in REGRESSION:
                    y = y.astype(float)
                    if not np.isfinite(y).all(): raise ValueError('Target must be finite')
                else:
                    y = y.astype(str)
                    if not 2 <= len(set(y)) <= 50: raise ValueError('Classification needs 2 to 50 target classes')
                # Scaler fits training data only, never the held-out test set.
                indexes = np.arange(len(rows))
                tr, te = train_test_split(indexes, test_size=request.test_fraction, random_state=request.seed,
                                         stratify=y if request.algorithm not in REGRESSION else None)
                model = make_pipeline(StandardScaler(), estimator(request, len(tr)))
                model.fit(X[tr], y[tr])
                predictions = model.predict(X[te])
                if request.algorithm in REGRESSION:
                    mse = mean_squared_error(y[te], predictions)
                    metrics = {'mae': mean_absolute_error(y[te], predictions), 'mse': mse, 'rmse': math.sqrt(mse)}
                    if len(te) > 1: metrics['r2'] = r2_score(y[te], predictions)
                else:
                    metrics = {'accuracy': accuracy_score(y[te], predictions),
                               'precision_macro': precision_score(y[te], predictions, average='macro', zero_division=0),
                               'recall_macro': recall_score(y[te], predictions, average='macro', zero_division=0),
                               'f1_macro': f1_score(y[te], predictions, average='macro', zero_division=0)}
                    result['confusion_matrix'] = clean(confusion_matrix(y[te], predictions, labels=model.classes_))
                    result['classes'] = clean(model.classes_)
                result |= {'test_indices': clean(te), 'actual': clean(y[te]), 'predictions': clean(predictions),
                           'train_rows': len(tr), 'test_rows': len(te), 'evaluation_scope': 'held_out_test_set',
                           'feature_scaling': 'training_split_standardization'}
            result['warnings'] = list(dict.fromkeys(str(w.message) for w in caught))[:10]
        result['features'] = request.features
        result['target'] = request.target
        buffer = io.BytesIO()
        joblib.dump(model, buffer, compress=3)
        metadata = {'format': 'joblib', 'sklearn_version': sklearn.__version__, 'python_version': platform.python_version(),
                    'features': request.features, 'target': request.target,
                    'warning': 'Only load models you trust. Joblib/pickle loading can execute code. This API never accepts model uploads.'}
        return clean(metrics), clean(result), buffer.getvalue(), metadata
    except HTTPException:
        raise
    except (ValueError, TypeError, ArithmeticError) as e:
        raise HTTPException(422, str(e)[:500]) from e
