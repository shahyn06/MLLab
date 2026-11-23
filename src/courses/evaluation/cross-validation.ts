import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "evaluation-cross-validation",
  "title": {
    "en": "Cross-validation",
    "ar": "التحقق المتقاطع"
  },
  "minutes": 15,
  "intro": {
    "en": "Cross-validation rotates the held-out subset across several fits. Each observation should appear in the expected test folds. Fit every learned preprocessing step inside each fold using a pipeline. Report score variation as well as the mean.",
    "ar": "يدور التحقق المتقاطع الجزء المحجوز عبر تدريبات متعددة. يجب أن تظهر المشاهدات في طيات الاختبار المتوقعة. درب تجهيز البيانات داخل كل طية باستخدام Pipeline واذكر تباين الدرجات مع المتوسط."
  },
  "cells": [
    {
      "id": "evaluation-cross-validation-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from sklearn.model_selection import KFold\nfor train,test in KFold(4).split(range(12)):\n    print(len(train),len(test))"
    },
    {
      "id": "evaluation-cross-validation-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from sklearn.model_selection import KFold\nfor train,test in KFold(4).split(range(12)):\n    print(len(train),len(test))\n\nprint(\"Fit preprocessing inside each fold, not before splitting.\")"
    }
  ],
  "exercises": [
    {
      "id": "evaluation-cross-validation-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Count folds from KFold(4) on 12 samples.",
        "ar": "احسب عدد الطيات."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 4
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
      "solution": "result=len(list(KFold(4).split(range(12))))",
      "explanation": {
        "en": "Count folds from KFold(4) on 12 samples. The solution computes this using result=len(list(KFold(4).split(range(12)))). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب عدد الطيات. يحسب الحل ذلك باستخدام result=len(list(KFold(4).split(range(12)))). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-cross-validation-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Return test sizes for those folds.",
        "ar": "أعد أحجام الاختبار."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          3,
          3,
          3,
          3
        ]
      },
      "hints": [
        {
          "en": "Trace the values entering the loop or sum. Accumulate only the values that satisfy the stated condition.",
          "ar": "تتبع القيم الداخلة في الحلقة أو الجمع واجمع فقط ما يحقق الشرط المحدد."
        },
        {
          "en": "Return value output with shape [4]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [4]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=[len(te) for tr,te in KFold(4).split(range(12))]",
      "explanation": {
        "en": "Return test sizes for those folds. The solution computes this using result=[len(te) for tr,te in KFold(4).split(range(12))]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أعد أحجام الاختبار. يحسب الحل ذلك باستخدام result=[len(te) for tr,te in KFold(4).split(range(12))]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-cross-validation-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find the mean of CV scores [.7,.8,.9].",
        "ar": "احسب متوسط درجات التحقق."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.8
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
      "solution": "result=np.mean([.7,.8,.9])",
      "explanation": {
        "en": "Find the mean of CV scores [.7,.8,.9]. The solution computes this using result=np.mean([.7,.8,.9]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط درجات التحقق. يحسب الحل ذلك باستخدام result=np.mean([.7,.8,.9]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-cross-validation-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Verify that every index appears in test once across folds.",
        "ar": "تحقق أن كل فهرس يظهر مرة بالاختبار."
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
          "en": "Trace the values entering the loop or sum. Accumulate only the values that satisfy the stated condition.",
          "ar": "تتبع القيم الداخلة في الحلقة أو الجمع واجمع فقط ما يحقق الشرط المحدد."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "test=[int(i) for _,te in KFold(4).split(range(12)) for i in te]\nresult=sorted(test)==list(range(12))",
      "explanation": {
        "en": "Verify that every index appears in test once across folds. The solution computes this using test=[int(i) for _,te in KFold(4).split(range(12)) for i in te]; result=sorted(test)==list(range(12)). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "تحقق أن كل فهرس يظهر مرة بالاختبار. يحسب الحل ذلك باستخدام test=[int(i) for _,te in KFold(4).split(range(12)) for i in te]; result=sorted(test)==list(range(12)). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Evaluate a linear regression with four folds on synthetic linear data. Report each held-out MSE and their mean.",
      "ar": "قيّم انحدارًا خطيًا بأربع طيات على بيانات خطية مصطنعة واعرض خسائر الاختبار ومتوسطها."
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
