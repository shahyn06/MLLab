import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "classical-neighbors",
  "title": {
    "en": "Neighbors, SVM and Bayes",
    "ar": "الجيران و SVM و Bayes"
  },
  "minutes": 15,
  "intro": {
    "en": "KNN predicts from nearby examples, making feature scaling important. SVM seeks a separating margin and may use kernels. Naive Bayes combines class likelihoods with a conditional-independence assumption. Their different assumptions matter more than a single score on a tiny dataset.",
    "ar": "يتنبأ KNN من الجيران فيهم التحجيم. يبحث SVM عن هامش فاصل وقد يستخدم Kernel. يجمع Naive Bayes الاحتمالات بافتراض استقلال شرطي. اختلاف الافتراضات أهم من درجة واحدة على بيانات صغيرة."
  },
  "cells": [
    {
      "id": "classical-neighbors-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from sklearn.neighbors import KNeighborsClassifier\nm=KNeighborsClassifier(n_neighbors=1).fit([[0],[1],[4],[5]],[0,0,1,1])\nprint(m.predict([[.2],[4.8]]))"
    },
    {
      "id": "classical-neighbors-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from sklearn.neighbors import KNeighborsClassifier\nm=KNeighborsClassifier(n_neighbors=1).fit([[0],[1],[4],[5]],[0,0,1,1])\nprint(m.predict([[.2],[4.8]]))\n\nfrom sklearn.naive_bayes import GaussianNB\nprint(GaussianNB().fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]]))"
    }
  ],
  "exercises": [
    {
      "id": "classical-neighbors-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Fit 1-neighbor classifier and predict .2 and 4.8.",
        "ar": "درب أقرب جار وتنبأ."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          1
        ]
      },
      "hints": [
        {
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.neighbors import KNeighborsClassifier\nresult=KNeighborsClassifier(n_neighbors=1).fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]])",
      "explanation": {
        "en": "Fit 1-neighbor classifier and predict .2 and 4.8. The solution computes this using from sklearn.neighbors import KNeighborsClassifier; result=KNeighborsClassifier(n_neighbors=1).fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب أقرب جار وتنبأ. يحسب الحل ذلك باستخدام from sklearn.neighbors import KNeighborsClassifier; result=KNeighborsClassifier(n_neighbors=1).fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "classical-neighbors-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Fit linear SVM to same data and predict .2 and 4.8.",
        "ar": "درب SVM خطي وتنبأ."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          1
        ]
      },
      "hints": [
        {
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.svm import SVC\nresult=SVC(kernel=\"linear\").fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]])",
      "explanation": {
        "en": "Fit linear SVM to same data and predict .2 and 4.8. The solution computes this using from sklearn.svm import SVC; result=SVC(kernel=\"linear\").fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب SVM خطي وتنبأ. يحسب الحل ذلك باستخدام from sklearn.svm import SVC; result=SVC(kernel=\"linear\").fit([[0],[1],[4],[5]],[0,0,1,1]).predict([[.2],[4.8]]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "classical-neighbors-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Fit GaussianNB and count classes.",
        "ar": "درب GaussianNB واحسب الفئات."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
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
      "solution": "from sklearn.naive_bayes import GaussianNB\nresult=len(GaussianNB().fit([[0],[1],[4],[5]],[0,0,1,1]).classes_)",
      "explanation": {
        "en": "Fit GaussianNB and count classes. The solution computes this using from sklearn.naive_bayes import GaussianNB; result=len(GaussianNB().fit([[0],[1],[4],[5]],[0,0,1,1]).classes_). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب GaussianNB واحسب الفئات. يحسب الحل ذلك باستخدام from sklearn.naive_bayes import GaussianNB; result=len(GaussianNB().fit([[0],[1],[4],[5]],[0,0,1,1]).classes_). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "classical-neighbors-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Open the classical lab, choose K-Nearest Neighbors and compare k=1 with k=5 on a fixed split. Inspect the boundary before calculating distance below. Find Euclidean distance from [0,0] to [3,4].",
        "ar": "افتح المعمل الكلاسيكي واختر K-Nearest Neighbors وقارن k=1 وk=5 مع تثبيت التقسيم وافحص الحد قبل حساب المسافة أدناه. احسب المسافة الإقليدية."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 5
      },
      "hints": [
        {
          "en": "Build the NumPy array first and inspect its shape and dtype before applying the operation.",
          "ar": "أنشئ مصفوفة NumPy أولًا وافحص shape وdtype قبل العملية."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=np.linalg.norm(np.array([3,4])-[0,0])",
      "explanation": {
        "en": "Find Euclidean distance from [0,0] to [3,4]. The solution computes this using result=np.linalg.norm(np.array([3,4])-[0,0]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب المسافة الإقليدية. يحسب الحل ذلك باستخدام result=np.linalg.norm(np.array([3,4])-[0,0]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Scale one feature by 100 and compare 1-neighbor predictions before and after standardization. Explain distance sensitivity.",
      "ar": "اضرب مدخلًا في 100 وقارن أقرب جار قبل التحجيم وبعده واشرح الحساسية للمسافات."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Fit StandardScaler only on X; apply exactly the same units conversion to query and training rows.",
        "ar": "لائم StandardScaler على X فقط وطبق تحويل الوحدات نفسه على الاستعلام وصفوف التدريب."
      }
    ],
    "expected": {
      "en": "Raw predictions may change with rescaling. Standardized predictions should remain invariant to this positive column scaling.",
      "ar": "قد تتغير التنبؤات الخام بالتحجيم ويجب أن تبقى المعيارية ثابتة عند التحجيم الموجب للعمود."
    },
    "selfCheck": {
      "en": "Fit StandardScaler only on X; apply exactly the same units conversion to query and training rows.",
      "ar": "لائم StandardScaler على X فقط وطبق تحويل الوحدات نفسه على الاستعلام وصفوف التدريب."
    },
    "starter": "import numpy as np\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import make_pipeline\nX=np.array([[0.,0.],[1.,2.],[3.,1.],[4.,3.]]); y=[0,0,1,1]\nquery=np.array([[2.,1.1]])\n# Compare raw and standardized 1-NN; repeat after multiplying feature 2 in BOTH X and query by 100\n"
  }
};
