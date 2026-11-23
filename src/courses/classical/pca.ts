import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "classical-pca",
  "title": {
    "en": "PCA and compressed coordinates",
    "ar": "PCA والإحداثيات المختصرة"
  },
  "minutes": 15,
  "intro": {
    "en": "PCA centers the data and finds orthogonal directions of maximum variance. It does not use class labels. Explained variance measures retained spread, not necessarily useful prediction signal. A component can flip sign without changing the represented subspace.",
    "ar": "يوسّط PCA البيانات ويجد اتجاهات متعامدة لأكبر تباين دون استخدام الفئات. التباين المحتفظ به ليس بالضرورة إشارة تنبؤ مفيدة. تغير إشارة المكون لا يغير فضاءه."
  },
  "cells": [
    {
      "id": "classical-pca-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from sklearn.decomposition import PCA\nX=[[1,1],[2,2],[3,3],[4,4]]\nm=PCA(1).fit(X)\nprint(m.explained_variance_ratio_)"
    },
    {
      "id": "classical-pca-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from sklearn.decomposition import PCA\nX=[[1,1],[2,2],[3,3],[4,4]]\nm=PCA(1).fit(X)\nprint(m.explained_variance_ratio_)\n\nprint(m.transform(X).shape)"
    }
  ],
  "exercises": [
    {
      "id": "classical-pca-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Fit one-component PCA on [[1,1],[2,2],[3,3],[4,4]] and return explained variance ratio.",
        "ar": "درب PCA بمكون واحد واحفظ نسبة التباين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1
      },
      "hints": [
        {
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.decomposition import PCA\nresult=PCA(1).fit([[1,1],[2,2],[3,3],[4,4]]).explained_variance_ratio_[0]",
      "explanation": {
        "en": "Fit one-component PCA on [[1,1],[2,2],[3,3],[4,4]] and return explained variance ratio. The solution computes this using from sklearn.decomposition import PCA; result=PCA(1).fit([[1,1],[2,2],[3,3],[4,4]]).explained_variance_ratio_[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب PCA بمكون واحد واحفظ نسبة التباين. يحسب الحل ذلك باستخدام from sklearn.decomposition import PCA; result=PCA(1).fit([[1,1],[2,2],[3,3],[4,4]]).explained_variance_ratio_[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/unsupervised"
    },
    {
      "id": "classical-pca-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Return transformed shape as a list.",
        "ar": "أعد أبعاد البيانات بعد الإسقاط."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          4,
          1
        ]
      },
      "hints": [
        {
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return value output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.decomposition import PCA\nresult=list(PCA(1).fit_transform([[1,1],[2,2],[3,3],[4,4]]).shape)",
      "explanation": {
        "en": "Return transformed shape as a list. The solution computes this using from sklearn.decomposition import PCA; result=list(PCA(1).fit_transform([[1,1],[2,2],[3,3],[4,4]]).shape). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أعد أبعاد البيانات بعد الإسقاط. يحسب الحل ذلك باستخدام from sklearn.decomposition import PCA; result=list(PCA(1).fit_transform([[1,1],[2,2],[3,3],[4,4]]).shape). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/unsupervised"
    },
    {
      "id": "classical-pca-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Center [[1,1],[3,3]] by its column means.",
        "ar": "اطرح متوسط كل عمود."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          [
            -1,
            -1
          ],
          [
            1,
            1
          ]
        ]
      },
      "hints": [
        {
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return array output with shape [2, 2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2, 2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "x=np.array([[1.,1.],[3.,3.]])\nresult=x-x.mean(axis=0)",
      "explanation": {
        "en": "Center [[1,1],[3,3]] by its column means. The solution computes this using x=np.array([[1.,1.],[3.,3.]]); result=x-x.mean(axis=0). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اطرح متوسط كل عمود. يحسب الحل ذلك باستخدام x=np.array([[1.,1.],[3.,3.]]); result=x-x.mean(axis=0). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/unsupervised"
    },
    {
      "id": "classical-pca-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Open the structure lab, choose PCA and change the displayed projection angle. Distinguish changing the view from refitting the principal components. Answer below. Store whether PCA uses the target labels to find components.",
        "ar": "افتح معمل البنية واختر PCA وغير زاوية العرض. ميز تغيير المنظور من إعادة ملاءمة المكونات الرئيسية ثم أجب أدناه. هل يستخدم PCA الفئات الهدف لإيجاد المكونات؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": false
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=False",
      "explanation": {
        "en": "Store whether PCA uses the target labels to find components. The solution computes this using result=False. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل يستخدم PCA الفئات الهدف لإيجاد المكونات؟ يحسب الحل ذلك باستخدام result=False. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/unsupervised"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Project correlated two-feature observations onto one component, reconstruct them, and calculate reconstruction MSE.",
      "ar": "أسقط بيانات مترابطة لمكون واحد ثم أعد بناءها واحسب خطأ إعادة البناء."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "PCA component sign can flip without changing reconstruction. Add off-line noise to observe positive reconstruction error.",
        "ar": "قد تنعكس إشارة مكون PCA دون تغيير الاستعادة. أضف تشويشًا خارج الخط لرؤية خطأ استعادة موجب."
      }
    ],
    "expected": {
      "en": "Projected shape is (4,1), reconstruction shape is (4,2), explained variance ratio is 1 and MSE is approximately zero.",
      "ar": "أبعاد الإسقاط (4,1) والاستعادة (4,2) ونسبة التباين المفسر 1 وMSE تقارب صفرًا."
    },
    "selfCheck": {
      "en": "PCA component sign can flip without changing reconstruction. Add off-line noise to observe positive reconstruction error.",
      "ar": "قد تنعكس إشارة مكون PCA دون تغيير الاستعادة. أضف تشويشًا خارج الخط لرؤية خطأ استعادة موجب."
    },
    "starter": "import numpy as np\nfrom sklearn.decomposition import PCA\nX=np.array([[1.,1.],[2.,2.],[3.,3.],[4.,4.]])\n# fit PCA(1), transform, inverse_transform; compute reconstruction MSE\n"
  }
};
