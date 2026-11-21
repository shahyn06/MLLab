export const pythonExamples:Record<string,string>={
'Quadratic chart':`import numpy as np
import matplotlib.pyplot as plt
x = np.linspace(-3, 3, 100)
plt.plot(x, x ** 2)
plt.title("Quadratic loss")
print("Mean:", np.mean(x ** 2))
plt.show()`,
'Linear regression':`import numpy as np
from sklearn.linear_model import LinearRegression
X = np.arange(8).reshape(-1, 1)
y = 2 * X.ravel() + 1
model = LinearRegression().fit(X, y)
print("Weight:", model.coef_)
print("Bias:", model.intercept_)
print("Predictions:", model.predict([[8], [9]]))`,
'PCA projection':`import numpy as np
from sklearn.decomposition import PCA
X = np.array([[1, 2, 3], [2, 4, 5], [3, 5, 7], [4, 8, 9]])
pca = PCA(n_components=2)
print("Projection:", pca.fit_transform(X))
print("Explained variance ratio:", pca.explained_variance_ratio_)`
};
