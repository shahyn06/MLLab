import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "intro-ml-prediction",
  "title": {
    "en": "Features and targets",
    "ar": "المدخلات والهدف"
  },
  "minutes": 15,
  "intro": {
    "en": "Features are the inputs available at prediction time; the target is what you want to predict. A fitted model learns from labeled examples. Separate classification targets from numeric regression targets and check predictions against data the model did not use for fitting.",
    "ar": "المدخلات معلومات متاحة وقت التنبؤ والهدف ما تريد توقعه. يتعلم النموذج من أمثلة مسماة. ميز التصنيف عن الانحدار وافحص التنبؤات على بيانات لم تستخدم في التدريب."
  },
  "cells": [
    {
      "id": "intro-ml-prediction-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nX=np.array([[1],[2],[3],[4]])\ny=np.array([3,5,7,9])\nprint(X.shape, y.shape)"
    },
    {
      "id": "intro-ml-prediction-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nX=np.array([[1],[2],[3],[4]])\ny=np.array([3,5,7,9])\nprint(X.shape, y.shape)\n\nfrom sklearn.linear_model import LinearRegression\nmodel=LinearRegression().fit(X,y)\nprint(model.predict([[5]]))"
    }
  ],
  "exercises": [
    {
      "id": "intro-ml-prediction-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Store number of features in [[1,2],[3,4],[5,6]].",
        "ar": "احفظ عدد المدخلات في الجدول."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
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
      "solution": "result = np.array([[1,2],[3,4],[5,6]]).shape[1]",
      "explanation": {
        "en": "Store number of features in [[1,2],[3,4],[5,6]]. The solution computes this using result = np.array([[1,2],[3,4],[5,6]]).shape[1]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احفظ عدد المدخلات في الجدول. يحسب الحل ذلك باستخدام result = np.array([[1,2],[3,4],[5,6]]).shape[1]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/regression"
    },
    {
      "id": "intro-ml-prediction-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Fit y=2x+1 at x=1,2,3,4 and predict x=5.",
        "ar": "درب انحدارًا خطيًا وتنبأ عند x=5."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 11
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
      "solution": "m=LinearRegression().fit([[1],[2],[3],[4]],[3,5,7,9])\nresult = m.predict([[5]])[0]",
      "explanation": {
        "en": "Fit y=2x+1 at x=1,2,3,4 and predict x=5. The solution computes this using m=LinearRegression().fit([[1],[2],[3],[4]],[3,5,7,9]); result = m.predict([[5]])[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب انحدارًا خطيًا وتنبأ عند x=5. يحسب الحل ذلك باستخدام m=LinearRegression().fit([[1],[2],[3],[4]],[3,5,7,9]); result = m.predict([[5]])[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/regression"
    },
    {
      "id": "intro-ml-prediction-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find MSE for actual=[1,3], predicted=[2,5].",
        "ar": "احسب متوسط مربع الخطأ."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2.5
      },
      "hints": [
        {
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = mean_squared_error([1,3],[2,5])",
      "explanation": {
        "en": "Find MSE for actual=[1,3], predicted=[2,5]. The solution computes this using result = mean_squared_error([1,3],[2,5]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط مربع الخطأ. يحسب الحل ذلك باستخدام result = mean_squared_error([1,3],[2,5]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/regression"
    },
    {
      "id": "intro-ml-prediction-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Store whether a numeric house-price target is a regression task (True/False).",
        "ar": "هل التنبؤ بسعر بيت رقمي مسألة انحدار؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": true
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
      "solution": "result = True",
      "explanation": {
        "en": "Store whether a numeric house-price target is a regression task (True/False). The solution computes this using result = True. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل التنبؤ بسعر بيت رقمي مسألة انحدار؟ يحسب الحل ذلك باستخدام result = True. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/regression"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Fit house price from area on the built-in linear synthetic data. Hold out the last two rows and report their predictions and errors.",
      "ar": "درب سعر البيت من المساحة على البيانات المصطنعة واحجز آخر صفين واعرض التنبؤات والأخطاء."
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
