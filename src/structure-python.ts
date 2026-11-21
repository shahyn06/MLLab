export function structurePython(algorithm:string,raw:number[][],c:{scaled:boolean,k:number,eps:number,minPoints:number,linkage:string,contamination:number}){const header=`# Requires NumPy and scikit-learn. Selected raw rows and visible controls.
# Matching estimator family, not identical initialization/tie handling.
import numpy as np
from sklearn.preprocessing import StandardScaler
X = np.array(${JSON.stringify(raw)}, dtype=float)
${c.scaled?'X = StandardScaler().fit_transform(X)':'# No scaling selected. PCA will still center its input.'}
`;
return header+(algorithm==='Hierarchical Clustering'?`from sklearn.cluster import AgglomerativeClustering
model = AgglomerativeClustering(n_clusters=${c.k}, linkage=${JSON.stringify(c.linkage.toLowerCase())})
labels = model.fit_predict(X)
print(labels)
`:algorithm==='DBSCAN'?`from sklearn.cluster import DBSCAN
model = DBSCAN(eps=${c.eps}, min_samples=${c.minPoints})
labels = model.fit_predict(X)
print(labels)  # -1 means noise
`:algorithm==='Gaussian Mixture'?`from sklearn.mixture import GaussianMixture
model = GaussianMixture(n_components=${c.k}, covariance_type='diag', reg_covar=0.0001, random_state=42)
model.fit(X)
print(model.predict_proba(X))
# sklearn covariance regularization/initialization differ from browser variance floor.
`:algorithm==='PCA'?`from sklearn.decomposition import PCA
model = PCA(n_components=3, svd_solver='full')
coordinates = model.fit_transform(X)
print(coordinates, model.explained_variance_ratio_)
# Component signs may reverse without changing the projection.
`:`from sklearn.ensemble import IsolationForest
model = IsolationForest(n_estimators=40, max_samples=min(64,len(X)), contamination=${c.contamination}, random_state=42)
print(model.fit_predict(X))  # -1 denotes outlier
# Library tree initialization and score corrections differ from the educational engine.
`)}
