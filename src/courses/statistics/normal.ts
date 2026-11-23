import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "statistics-normal",
  "title": {
    "en": "Distributions and z-scores",
    "ar": "التوزيعات ودرجات z"
  },
  "minutes": 15,
  "intro": {
    "en": "A z-score expresses distance from the mean in standard-deviation units. A CDF gives probability up to a threshold; a PMF gives probability at one discrete value. Probability between two thresholds is the difference of their CDF values.",
    "ar": "تقيس درجة z البعد عن المتوسط بوحدة الانحراف المعياري. CDF احتمال حتى حد و PMF احتمال قيمة متقطعة. الاحتمال بين حدين فرق قيمتي CDF."
  },
  "cells": [
    {
      "id": "statistics-normal-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from scipy import stats\nprint(stats.norm.cdf(0))\nprint(stats.binom.pmf(2,4,.5))"
    },
    {
      "id": "statistics-normal-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from scipy import stats\nprint(stats.norm.cdf(0))\nprint(stats.binom.pmf(2,4,.5))\n\nprint((14-10)/2)"
    }
  ],
  "exercises": [
    {
      "id": "statistics-normal-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Compute z-score of 14 with mean 10 and standard deviation 2.",
        "ar": "احسب درجة z."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = (14-10)/2",
      "explanation": {
        "en": "Compute z-score of 14 with mean 10 and standard deviation 2. The solution computes this using result = (14-10)/2. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب درجة z. يحسب الحل ذلك باستخدام result = (14-10)/2. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-normal-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find P(Z <= 0) for standard normal.",
        "ar": "احسب الاحتمال التراكمي عند صفر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
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
      "solution": "result = stats.norm.cdf(0)",
      "explanation": {
        "en": "Find P(Z <= 0) for standard normal. The solution computes this using result = stats.norm.cdf(0). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الاحتمال التراكمي عند صفر. يحسب الحل ذلك باستخدام result = stats.norm.cdf(0). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-normal-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find probability of 2 heads in 4 fair flips.",
        "ar": "احسب احتمال صورتين في 4 رميات عادلة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.375
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
      "solution": "result = stats.binom.pmf(2,4,.5)",
      "explanation": {
        "en": "Find probability of 2 heads in 4 fair flips. The solution computes this using result = stats.binom.pmf(2,4,.5). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب احتمال صورتين في 4 رميات عادلة. يحسب الحل ذلك باستخدام result = stats.binom.pmf(2,4,.5). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-normal-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Find P(-1 <= Z <= 1), to numerical tolerance.",
        "ar": "احسب احتمال الوقوع بين سالب واحد وواحد."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.6826894921370859
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
      "solution": "result = stats.norm.cdf(1)-stats.norm.cdf(-1)",
      "explanation": {
        "en": "Find P(-1 <= Z <= 1), to numerical tolerance. The solution computes this using result = stats.norm.cdf(1)-stats.norm.cdf(-1). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب احتمال الوقوع بين سالب واحد وواحد. يحسب الحل ذلك باستخدام result = stats.norm.cdf(1)-stats.norm.cdf(-1). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Convert three observations to z-scores and calculate their normal CDF values. Distinguish a density from a probability.",
      "ar": "حوّل ثلاث مشاهدات لدرجات z واحسب CDF وميز الكثافة عن الاحتمال."
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
