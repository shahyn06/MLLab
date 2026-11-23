import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "classical-clusters",
  "title": {
    "en": "Clustering and centroids",
    "ar": "التجميع ومراكز العناقيد"
  },
  "minutes": 15,
  "intro": {
    "en": "K-Means alternates nearest-center assignments and center updates. Inertia measures within-cluster squared distances, not classification accuracy. Cluster numbers are arbitrary and can swap between runs. Choose k with domain understanding and stability checks.",
    "ar": "يبدل K-Means بين تعيين الأقرب وتحديث المراكز. تقيس Inertia مربع المسافات لا دقة التصنيف. أرقام العناقيد اعتباطية وقد تتبدل. اختر k بفهم المجال وثبات النتائج."
  },
  "cells": [
    {
      "id": "classical-clusters-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nfrom sklearn.cluster import KMeans\nX=np.array([[0.],[1.],[9.],[10.]])\nm=KMeans(2,random_state=7,n_init=10).fit(X)\nprint(sorted(m.cluster_centers_.ravel()))"
    },
    {
      "id": "classical-clusters-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nfrom sklearn.cluster import KMeans\nX=np.array([[0.],[1.],[9.],[10.]])\nm=KMeans(2,random_state=7,n_init=10).fit(X)\nprint(sorted(m.cluster_centers_.ravel()))\n\nprint(m.inertia_)"
    }
  ],
  "exercises": [
    {
      "id": "classical-clusters-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Fit 2 clusters to [0,1,9,10] and return sorted centers.",
        "ar": "درب عنقودين وأعد المراكز مرتبة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          0.5,
          9.5
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
      "solution": "from sklearn.cluster import KMeans\nm=KMeans(2,random_state=7,n_init=10).fit([[0],[1],[9],[10]])\nresult=sorted(m.cluster_centers_.ravel())",
      "explanation": {
        "en": "Fit 2 clusters to [0,1,9,10] and return sorted centers. The solution computes this using from sklearn.cluster import KMeans; m=KMeans(2,random_state=7,n_init=10).fit([[0],[1],[9],[10]]); result=sorted(m.cluster_centers_.ravel()). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب عنقودين وأعد المراكز مرتبة. يحسب الحل ذلك باستخدام from sklearn.cluster import KMeans; m=KMeans(2,random_state=7,n_init=10).fit([[0],[1],[9],[10]]); result=sorted(m.cluster_centers_.ravel()). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/clustering"
    },
    {
      "id": "classical-clusters-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find K-Means inertia for that data.",
        "ar": "احسب مجموع مربعات المسافات للمراكز."
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
      "solution": "from sklearn.cluster import KMeans\nresult=KMeans(2,random_state=7,n_init=10).fit([[0],[1],[9],[10]]).inertia_",
      "explanation": {
        "en": "Find K-Means inertia for that data. The solution computes this using from sklearn.cluster import KMeans; result=KMeans(2,random_state=7,n_init=10).fit([[0],[1],[9],[10]]).inertia_. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب مجموع مربعات المسافات للمراكز. يحسب الحل ذلك باستخدام from sklearn.cluster import KMeans; result=KMeans(2,random_state=7,n_init=10).fit([[0],[1],[9],[10]]).inertia_. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/clustering"
    },
    {
      "id": "classical-clusters-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find center of [[1,2],[3,4]].",
        "ar": "احسب مركز النقطتين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          2,
          3
        ]
      },
      "hints": [
        {
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=np.array([[1,2],[3,4]]).mean(axis=0)",
      "explanation": {
        "en": "Find center of [[1,2],[3,4]]. The solution computes this using result=np.array([[1,2],[3,4]]).mean(axis=0). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب مركز النقطتين. يحسب الحل ذلك باستخدام result=np.array([[1,2],[3,4]]).mean(axis=0). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/clustering"
    },
    {
      "id": "classical-clusters-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Store whether cluster numeric labels have an intrinsic class meaning.",
        "ar": "هل أرقام العناقيد تعني فئات ثابتة بذاتها؟"
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
        "en": "Store whether cluster numeric labels have an intrinsic class meaning. The solution computes this using result=False. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل أرقام العناقيد تعني فئات ثابتة بذاتها؟ يحسب الحل ذلك باستخدام result=False. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/clustering"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Fit K-Means to two separated synthetic clouds with k=1,2,3. Compare inertia without treating the smallest value as proof of the right k.",
      "ar": "درب التجميع على سحابتين بقيم k مختلفة وقارن Inertia دون اعتبار الأصغر دليلًا وحيدًا."
    },
    "steps": [
      {
        "en": "Use the tutorial cell to prepare the inputs, then implement the analysis described in the goal.",
        "ar": "استخدم خلية الشرح لتجهيز المدخلات ثم نفذ التحليل المحدد في الهدف."
      },
      {
        "en": "Print the computed intermediate values so another learner can follow your reasoning.",
        "ar": "اطبع القيم الوسيطة المحسوبة حتى يستطيع متعلم آخر متابعة التفكير."
      },
      {
        "en": "Check one result independently by hand or with a second calculation.",
        "ar": "تحقق من نتيجة واحدة يدويًا أو بحساب آخر مستقل."
      }
    ],
    "expected": {
      "en": "A runnable cell, its real output and a short explanation of the change.",
      "ar": "خلية قابلة للتشغيل وخرجها الحقيقي وشرح قصير للتغيير."
    },
    "selfCheck": {
      "en": "The cell runs without error; your predicted type, shape and values match the output.",
      "ar": "تعمل الخلية دون خطأ ويتطابق النوع والأبعاد والقيم مع توقعك."
    }
  }
};
