import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "statistics-summary",
  "title": {
    "en": "Location and spread",
    "ar": "المركز والتشتت"
  },
  "minutes": 15,
  "intro": {
    "en": "The mean uses every value; the median resists extreme observations. Variance is the mean squared deviation, while standard deviation restores the original units. Population variance divides by n, sample variance uses n-1. State which definition you calculate.",
    "ar": "المتوسط يستخدم كل القيم والوسيط أقل تأثرًا بالقيم المتطرفة. التباين متوسط مربع الانحراف والانحراف المعياري يعيد الوحدة الأصلية. تباين المجتمع يقسم على n وتباين العينة على n-1. وضح التعريف."
  },
  "cells": [
    {
      "id": "statistics-summary-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nx=np.array([2,4,4,6])\nprint(x.mean(), np.median(x), x.var(), x.std())"
    },
    {
      "id": "statistics-summary-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nx=np.array([2,4,4,6])\nprint(x.mean(), np.median(x), x.var(), x.std())\n\nprint(np.var([2,4,4,6],ddof=1))"
    }
  ],
  "exercises": [
    {
      "id": "statistics-summary-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Find mean of [2,4,4,6].",
        "ar": "احسب المتوسط."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 4
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
      "solution": "result = np.mean([2,4,4,6])",
      "explanation": {
        "en": "Find mean of [2,4,4,6]. The solution computes this using result = np.mean([2,4,4,6]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب المتوسط. يحسب الحل ذلك باستخدام result = np.mean([2,4,4,6]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-summary-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find median of [1,2,9].",
        "ar": "احسب الوسيط."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
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
      "solution": "result = np.median([1,2,9])",
      "explanation": {
        "en": "Find median of [1,2,9]. The solution computes this using result = np.median([1,2,9]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الوسيط. يحسب الحل ذلك باستخدام result = np.median([1,2,9]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-summary-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Calculate population variance of [2,4,4,6].",
        "ar": "احسب تباين المجتمع."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
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
      "solution": "result = np.var([2,4,4,6])",
      "explanation": {
        "en": "Calculate population variance of [2,4,4,6]. The solution computes this using result = np.var([2,4,4,6]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تباين المجتمع. يحسب الحل ذلك باستخدام result = np.var([2,4,4,6]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-summary-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Calculate sample variance of [2,4,4,6].",
        "ar": "احسب تباين العينة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2.6666666666666665
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
      "solution": "result = np.var([2,4,4,6],ddof=1)",
      "explanation": {
        "en": "Calculate sample variance of [2,4,4,6]. The solution computes this using result = np.var([2,4,4,6],ddof=1). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تباين العينة. يحسب الحل ذلك باستخدام result = np.var([2,4,4,6],ddof=1). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Add one extreme value to a short sample and compare changes in mean, median and sample standard deviation.",
      "ar": "أضف قيمة متطرفة وقارن تغير المتوسط والوسيط والانحراف المعياري للعينة."
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
