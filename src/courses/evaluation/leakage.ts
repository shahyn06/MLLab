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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "from sklearn.preprocessing import StandardScaler\nresult=StandardScaler().fit([[0],[2]]).transform([[4]])[0,0]",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result=2.1-.1",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result=True",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
        "en": "Fit Ridge(alpha=1) on x=0,1,2; y=0,2,4 and store slope.",
        "ar": "درب Ridge واحفظ الميل."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "from sklearn.linear_model import Ridge\nresult=Ridge(alpha=1).fit([[0],[1],[2]],[0,2,4]).coef_[0]",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
