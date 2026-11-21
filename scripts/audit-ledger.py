from pathlib import Path
import re,json,collections
root=Path(__file__).resolve().parents[1]
source=root/'docs/PROJECT_SPEC.md'
lines=source.read_text().splitlines();rows=[];section=0;sub=''
for number,line in enumerate(lines,1):
 match=re.match(r'^(\d+)\. (.+)$',line)
 if match and (match[2] in ['Project Overview','Main Platform Architecture','Mathematical Foundation Laboratory','Interactive Visualization Engine','Unified Algorithm Interface','Website Design & User Experience','Technology Stack','Code Playground','Educational Experience','Performance & Engineering Requirements','Development Strategy','Final Instructions']):section=int(match[1]);sub=match[2];continue
 if not line.strip():continue
 if line.startswith('- '):requirement=line[2:]
 elif match and (section in [1,5,12]):requirement=line
 else:
  if re.match(r'^[A-H]\. ',line) or line in ['Linear Regression','K-Means','Decision Trees','Neural Networks','PCA','Linear Algebra','Calculus','Probability','Statistics']:sub=line
  continue
 status='MAPPED, REVIEW OPEN';evidence='See implementation map below; individual acceptance remains open.'
 if section==2:
  if sub.startswith('A.'):evidence='src/classical.tsx, classical-engine.ts; tests/numerical.mjs; source UI routes classical/regression.'
  elif sub.startswith('B.'):evidence='src/unsupervised.tsx, unsupervised-engine.ts, classical-engine.ts; tests/structure.mjs; clustering/unsupervised routes.'
  elif sub.startswith('C.'):evidence='src/neural.tsx, convolution.tsx, sequence.tsx and their engines; numerical/sequence tests; bounded tiny-model scope.'
  elif sub.startswith('D.'):evidence='src/datalab.tsx, pipeline-engine.ts; tests/pipeline.mjs; preprocessing/evaluation routes.'
  elif sub.startswith('E.'):evidence='src/datalab.tsx, compute-engine.ts; tests/compute.mjs, pipeline.mjs; evaluation route.'
  elif sub.startswith('F.'):evidence='src/optimization.tsx, optimization-engine.ts; tests/optimization.mjs; optimization route.'
  elif sub.startswith('G.'):evidence='src/datalab.tsx, data-engine.ts; tests/numerical.mjs; datasets route.'
  elif sub.startswith('H.'):evidence='src/browser-experiments.tsx, snapshot-engine.ts, backend/app; tests/snapshots.mjs and backend/tests/test_api.py.'
 if section==3:status='INTERACTION VERIFIED, REVIEW OPEN';evidence='src/mathlab.tsx and math-stories.ts; tests/education.mjs checks topic content/formula parsing. Direct UI audit changed a relevant control for all 43 named topics and observed changed computed outputs (146 checks). docs/math-topic-interaction-audit.json records each input/output; final content and visual acceptance remains open.'
 if section==4:evidence={'Linear Regression':'src/labs.tsx, regression-tools.ts; tests/regression-tools.mjs; 19 point/residual UI checks and core training checks.','K-Means':'src/classical.tsx, classical-engine.ts; actual assignments and centroid updates; source tests and clustering UI checks.','Decision Trees':'src/classical.tsx and classical-engine.ts; tree split structure, criterion selection and impurity values.','Neural Networks':'src/neural.tsx, neural-engine.ts; actual weights, activations, biases and gradients.','PCA':'src/unsupervised.tsx, unsupervised-engine.ts; source structure tests and projection UI checks.'}.get(sub,'Interactive source workbenches; final all-route visual and keyboard audit still open.')
 if section==5:evidence='src/lesson-sections.tsx; tests/sections.mjs and 160 UI checks verify all eleven headings/navigation. Semantic completeness still needs per-algorithm review.'
 if section==6:evidence='src/App.tsx and style.css; theme/navigation/responsive UI tests. Preferences are device-local; preview state is not owner-persistence evidence.'
 if section==7:evidence='package.json, package-lock.json, src/vendor, backend/pyproject.toml; clean npm ci/typecheck/test/build verified 2026-11-21. See documented local-only backend boundary.'
 if section==8:evidence='src/python-editor.tsx, backend/app; 52 backend tests and actual local API stdout/Matplotlib checks. Linux namespace/seccomp fail-closed runner, not a public execution service.'
 if section==9:evidence='src/math-stories.ts, algorithm-depth.tsx; education content/render checks. Review mathematical assumptions and interactive relevance individually.'
 if section==10:evidence='Source modules, compute worker and validation tests. Source production routes/lazy chunks checked; portable bundle intentionally embeds renderers. Final edge-case/accessibility audit open.'
 if section==11:evidence='SPEC_STATUS.md maps implemented phases and explicit remaining scope. A phase name is not a completion certificate.'
 if section==12:evidence='ARCHITECTURE.md, backend/ARCHITECTURE.md, source tests and documented operating limits. Whole-project acceptance remains open.'
 lower=requirement.lower()
 if 'cloud persistence' in lower:status='SCOPE DECISION';evidence='Not deployed. No-deployment/no-paid-resource boundary; local SQLite and browser snapshots are not cloud persistence.'
 if 'pytorch' in lower:status='SCOPE DECISION';evidence='Equivalent educational PyTorch snippets exist, but no advanced server deep-learning trainer. Advanced server training is a recommendation question, not an implementation commitment.'
 if 'onnx' in lower:status='CONDITIONAL';evidence='Not required for directly computed lightweight trainers. No ONNX runtime or pretrained inference is claimed.'
 if 'animate forward' in lower or 'information travels' in lower:status='VERIFIED, BOUNDED';evidence='src/propagation-player.tsx and propagation-engine.ts; opt-in forward/backward layer playback with actual fixed-sample values, numeric arithmetic, pause/resume/manual stages, snapshot isolation; 660 gradient parity checks and 19 UI checks.'
 if 'gini impurity and entropy calculations' in lower:status='VERIFIED, BOUNDED';evidence='src/tree-arithmetic.tsx and tree-arithmetic-engine.ts expose actual per-node class counts, both numeric formulas, child weighted impurity and gain; 589 source parity/membership checks and 17 UI checks.'
 if section==3 and requirement.rstrip('.') in ['Jacobian','Hessian','Hypothesis Testing','Statistical Inference','Singular Value Decomposition (SVD)']:evidence+=' These priority topics were directly exercised, not inferred from cards.'
 if section==4 and sub=='Linear Regression':status='VERIFIED, BOUNDED'
 rows.append({'id':f'R{len(rows)+1:03}','line':number,'section':section,'context':sub,'requirement':requirement,'status':status,'evidence':evidence})
(root/'docs/spec-acceptance.json').write_text(json.dumps({'date':'2026-11-21','completed':False,'items':rows},indent=2)+'\n')
counts=collections.Counter(r['status'] for r in rows)
out=['# Original specification acceptance ledger','', 'This is a line-addressed review ledger, not a completion certificate. It includes every dash bullet and the numbered workflow/interface requirements. Source references map likely implementation ownership; they are not proof of full acceptance. Only the explicitly bounded regression visualization checks are marked verified. All other mappings require final item-by-item review.','', '## Latest verification','', '- Clean dependency installation: npm ci, typecheck, all 1,611 source checks and normal production build passed in a separate directory. Zero npm audit findings at this check.', '- Backend: 52 tests passed with one non-failing Starlette test-client deprecation warning. No server deployment.', '- Production: 20 route/lazy-chunk checks. Regression: 19 point/residual UI checks, 36 source checks with 4,000 real optimization steps. Library checks exercise actual Plotly and WebGL, not screenshots alone.', '- Tailwind utility generation now excludes automatic directory scanning; independent source directories produce identical generated CSS hashes.', '', '## Remaining decisions and acceptance priorities','', '1. Propagation playback implemented and bounded checks passed. Continue final integration/replay and all-route checks.', '2. Numeric tree impurity arithmetic implemented and bounded checks passed. Continue final integration checks.', '3. All 43 math topics directly exercised with changing numeric output. Final content/visual checks remain; shared family workbenches are explicitly labeled.', '4. Python now uses selected data/settings. Classical programs executed with browser parity across 26 variants; math/structure examples executed. Three PyTorch examples syntax-checked only because PyTorch is not installed; no runtime pass is claimed. Remaining state/replay/storage/keyboard/all-route checks remain.', '5. PyTorch advanced server execution: recommend only if needed for larger training. Requires a separate scope decision; no commitment made.', '6. Cloud persistence: not configured; cannot be closed under the current no-deployment boundary.', '', '## Status counts','']+[f'- {k}: {v}' for k,v in counts.items()]+['','## Item ledger','', '| ID / spec line | Context | Requirement | Status | Evidence / next check |','|---|---|---|---|---|']
for r in rows:out.append('| '+ ' | '.join(str(v).replace('|','/').replace('\n',' ') for v in [r['id']+' / '+str(r['line']),r['context'],r['requirement'],r['status'],r['evidence']])+' |')
(root/'docs/SPEC_ACCEPTANCE.md').write_text('\n'.join(out)+'\n')
print(f'Mapped {len(rows)} requirements, completion remains false. {dict(counts)}')
