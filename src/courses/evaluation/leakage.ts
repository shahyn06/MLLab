import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "evaluation-leakage",
  "title": {
    "en": "Overfitting, leakage and regularization",
    "ar": "فرط التكيف وتسرب البيانات والتنظيم"
  },
  "minutes": 15,
  "intro": {
    "en": "Overfitting means learning details that do not generalize. Leakage lets information from the test set influence fitting. Fit scalers only on training data. Regularization discourages large coefficients, but its strength must be selected without repeatedly tuning on the final test set.",
    "ar": "فرط التكيف تعلم تفاصيل لا تعمم. التسرب يسمح لمعلومات الاختبار بالتأثير على التدريب. درب التحجيم على التدريب فقط. يحد التنظيم من كبر المعاملات واختر قوته دون الضبط المتكرر على الاختبار النهائي."
  },
  "cells": [
    {
      "id": "evaluation-leakage-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\ntrain=np.array([[0.],[2.]])\nscaler=StandardScaler().fit(train)\nprint(scaler.transform([[4.]]))"
    },
    {
      "id": "evaluation-leakage-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\ntrain=np.array([[0.],[2.]])\nscaler=StandardScaler().fit(train)\nprint(scaler.transform([[4.]]))\n\nfrom sklearn.linear_model import Ridge\nprint(Ridge(alpha=1).fit([[0],[1],[2]],[0,2,4]).coef_)"
    }
  ],
  "exercises": [
    {
      "id": "evaluation-leakage-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Fit a scaler on [[0],[2]], transform [[4]], store scalar.",
        "ar": "درب التحجيم على التدريب فقط ثم حوّل 4."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 3
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
      "solution": "from sklearn.preprocessing import StandardScaler\nresult=StandardScaler().fit([[0],[2]]).transform([[4]])[0,0]",
      "explanation": {
        "en": "Fit a scaler on [[0],[2]], transform [[4]], store scalar. The solution computes this using from sklearn.preprocessing import StandardScaler; result=StandardScaler().fit([[0],[2]]).transform([[4]])[0,0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب التحجيم على التدريب فقط ثم حوّل 4. يحسب الحل ذلك باستخدام from sklearn.preprocessing import StandardScaler; result=StandardScaler().fit([[0],[2]]).transform([[4]])[0,0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "evaluation-leakage-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Calculate test minus train loss for train=.1, test=2.1.",
        "ar": "احسب فجوة الخسارة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
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
      "solution": "result=2.1-.1",
      "explanation": {
        "en": "Calculate test minus train loss for train=.1, test=2.1. The solution computes this using result=2.1-.1. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب فجوة الخسارة. يحسب الحل ذلك باستخدام result=2.1-.1. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "evaluation-leakage-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Store whether fitting a scaler on the whole dataset before CV risks leakage.",
        "ar": "هل التحجيم قبل التقسيم يسبب تسربًا؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
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
      "solution": "result=True",
      "explanation": {
        "en": "Store whether fitting a scaler on the whole dataset before CV risks leakage. The solution computes this using result=True. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل التحجيم قبل التقسيم يسبب تسربًا؟ يحسب الحل ذلك باستخدام result=True. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "evaluation-leakage-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Open the fitted pipeline lab, compare no scaling with standardization while holding raw data and split seed fixed. Inspect the training-only fitted state. Then fit Ridge below. Fit Ridge(alpha=1) on x=0,1,2; y=0,2,4 and store slope.",
        "ar": "افتح معمل مسار التجهيز وقارن دون تحجيم بالمعايرة مع تثبيت البيانات والبذرة وافحص حالة التجهيز المدربة على التدريب فقط ثم لائم Ridge أدناه. درب Ridge واحفظ الميل."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.3333333333333333
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
      "solution": "from sklearn.linear_model import Ridge\nresult=Ridge(alpha=1).fit([[0],[1],[2]],[0,2,4]).coef_[0]",
      "explanation": {
        "en": "Fit Ridge(alpha=1) on x=0,1,2; y=0,2,4 and store slope. The solution computes this using from sklearn.linear_model import Ridge; result=Ridge(alpha=1).fit([[0],[1],[2]],[0,2,4]).coef_[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب Ridge واحفظ الميل. يحسب الحل ذلك باستخدام from sklearn.linear_model import Ridge; result=Ridge(alpha=1).fit([[0],[1],[2]],[0,2,4]).coef_[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Fit StandardScaler on training data only, transform a held-out outlier, and compare with the leaked whole-data fit.",
      "ar": "درب التحجيم على التدريب فقط وقارن تحويل قيمة اختبار شاذة بالتحجيم المتسرب على كل البيانات."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Change only test from 100 to 1000. Training-only fitted mean/scale must not change.",
        "ar": "غير الاختبار فقط من 100 إلى 1000؛ يجب ألا يتغير متوسط ومقياس الملاءمة على التدريب."
      }
    ],
    "expected": {
      "en": "Training-only mean is 1, scale is 1 and transformed test is 99. The leaked fit has a different mean/scale.",
      "ar": "متوسط التدريب فقط 1 ومقياسه 1 والاختبار المحول 99. للملاءمة المتسربة متوسط ومقياس مختلفان."
    },
    "selfCheck": {
      "en": "Change only test from 100 to 1000. Training-only fitted mean/scale must not change.",
      "ar": "غير الاختبار فقط من 100 إلى 1000؛ يجب ألا يتغير متوسط ومقياس الملاءمة على التدريب."
    },
    "starter": "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\ntrain=np.array([[0.],[2.]]); test=np.array([[100.]])\n# Compare scaler.fit(train) with a deliberately LEAKED fit on stacked train and test\n"
  }
};
