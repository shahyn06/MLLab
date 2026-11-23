import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "evaluation-metrics",
  "title": {
    "en": "Choose the right metric",
    "ar": "اختيار المقياس المناسب"
  },
  "minutes": 15,
  "intro": {
    "en": "Accuracy counts correct predictions. Precision asks how many predicted positives are real; recall asks how many real positives are found. MAE and RMSE measure numeric errors in target units. Choose a metric matching the cost of mistakes, not simply the highest number.",
    "ar": "الدقة نسبة التوقعات الصحيحة و Precision صحة الإيجابيات المتوقعة و Recall ما اكتشف من الإيجابيات الحقيقية. MAE و RMSE بوحدة الهدف. اختر المقياس حسب تكلفة الخطأ."
  },
  "cells": [
    {
      "id": "evaluation-metrics-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from sklearn.metrics import accuracy_score,precision_score,recall_score\ny=[1,1,0,0];p=[1,0,1,0]\nprint(accuracy_score(y,p),precision_score(y,p),recall_score(y,p))"
    },
    {
      "id": "evaluation-metrics-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from sklearn.metrics import accuracy_score,precision_score,recall_score\ny=[1,1,0,0];p=[1,0,1,0]\nprint(accuracy_score(y,p),precision_score(y,p),recall_score(y,p))\n\nfrom sklearn.metrics import mean_absolute_error\nprint(mean_absolute_error([2,5],[3,3]))"
    }
  ],
  "exercises": [
    {
      "id": "evaluation-metrics-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Calculate accuracy for [1,1,0,0] vs [1,0,1,0].",
        "ar": "احسب الدقة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.5
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
      "solution": "result=accuracy_score([1,1,0,0],[1,0,1,0])",
      "explanation": {
        "en": "Calculate accuracy for [1,1,0,0] vs [1,0,1,0]. The solution computes this using result=accuracy_score([1,1,0,0],[1,0,1,0]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الدقة. يحسب الحل ذلك باستخدام result=accuracy_score([1,1,0,0],[1,0,1,0]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-metrics-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Calculate recall for the same labels.",
        "ar": "احسب الاستدعاء."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.5
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
      "solution": "result=recall_score([1,1,0,0],[1,0,1,0])",
      "explanation": {
        "en": "Calculate recall for the same labels. The solution computes this using result=recall_score([1,1,0,0],[1,0,1,0]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الاستدعاء. يحسب الحل ذلك باستخدام result=recall_score([1,1,0,0],[1,0,1,0]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-metrics-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find MAE for [2,5] vs [3,3].",
        "ar": "احسب متوسط الخطأ المطلق."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.5
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
      "solution": "result=mean_absolute_error([2,5],[3,3])",
      "explanation": {
        "en": "Find MAE for [2,5] vs [3,3]. The solution computes this using result=mean_absolute_error([2,5],[3,3]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط الخطأ المطلق. يحسب الحل ذلك باستخدام result=mean_absolute_error([2,5],[3,3]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-metrics-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Find RMSE for [1,3] vs [2,5].",
        "ar": "احسب جذر متوسط مربع الخطأ."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.5811388300841898
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
      "solution": "result=np.sqrt(mean_squared_error([1,3],[2,5]))",
      "explanation": {
        "en": "Find RMSE for [1,3] vs [2,5]. The solution computes this using result=np.sqrt(mean_squared_error([1,3],[2,5])). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب جذر متوسط مربع الخطأ. يحسب الحل ذلك باستخدام result=np.sqrt(mean_squared_error([1,3],[2,5])). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Construct an imbalanced binary example where accuracy is high but recall is zero. Compute both and explain the risk.",
      "ar": "أنشئ مثالًا غير متوازن بدقة مرتفعة واستدعاء صفر واحسبهما واشرح الخطر."
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
