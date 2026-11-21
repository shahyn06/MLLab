import type {OptConfig} from './optimization-engine';
export function optimizerPython(c:OptConfig,w:number,b:number){return `import numpy as np
# X, y must contain only training observations for the regression objective.
# Use your actual data; this template does not reproduce the browser RNG.
theta = np.array([${w}, ${b}], dtype=float)
m = np.zeros(2)
v = np.zeros(2)
base_rate, beta1, beta2 = ${c.rate}, ${c.beta}, ${c.beta2}
rng = np.random.default_rng(${c.seed})

def gradient(theta, indices=None):
    w, b = theta
${c.objective==='Tilted double well'?'    return np.array([4*w*(w*w-1)+0.2, 2*b])':'    xx, yy = (X, y) if indices is None else (X[indices], y[indices])\n    error = w * xx + b - yy\n    return np.array([2*np.mean(error*xx), 2*np.mean(error)])'}

def objective(theta):
    w, b = theta
${c.objective==='Tilted double well'?'    return (w*w-1)**2+0.2*w+b*b':'    return np.mean((w * X + b - y)**2)'}

for step in range(${c.maxSteps}):
    rate = base_rate${c.schedule==='Inverse time'?` / (1 + ${c.decay}*step)`:c.schedule==='Step decay'?' * 0.5**(step//50)':c.schedule==='Cosine'?` * 0.5 * (1 + np.cos(np.pi*min(step,${c.maxSteps})/${c.maxSteps}))`:''}
    indices = ${c.objective!=='Linear regression'||c.batch==='Batch'?'None':`rng.permutation(len(X))[:${c.batch==='Stochastic'?1:c.batchSize}]`}
    g = gradient(${c.method==='Nesterov'?'theta - beta1*m':'theta'}, indices)
${c.method==='Momentum'||c.method==='Nesterov'?'    m = beta1*m + rate*g\n    delta = m':c.method==='RMSprop'?'    v = beta2*v + (1-beta2)*g*g\n    delta = rate*g/(np.sqrt(v)+1e-8)':c.method==='Adam'?'    m = beta1*m + (1-beta1)*g\n    v = beta2*v + (1-beta2)*g*g\n    m_hat = m/(1-beta1**(step+1))\n    v_hat = v/(1-beta2**(step+1))\n    delta = rate*m_hat/(np.sqrt(v_hat)+1e-8)':'    delta = rate*g'}
    candidate = theta - delta
    loss = objective(candidate)
    if not np.isfinite(loss) or np.any(np.abs(candidate) > 30):
        print('Rejected unstable update; lower the rate.')
        break
    theta = candidate
    print(step+1, theta.copy(), loss)
    if np.linalg.norm(gradient(theta)) < 1e-5:
        break
# The browser uses this update convention. NumPy and browser sampling seeds differ.
`}
