import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "math-probability",
  "title": {
    "en": "Exponents, logs and probability",
    "ar": "الأسس واللوغاريتم والاحتمال"
  },
  "minutes": 15,
  "intro": {
    "en": "Exponentials turn additions into multiplications; logarithms reverse that relation. Probabilities lie between zero and one. Multiply probabilities for independent joint events only. Negative log likelihood penalizes confident mistakes more strongly than uncertain ones.",
    "ar": "تحول الأسس الجمع لضرب ويعكس اللوغاريتم العلاقة. الاحتمالات بين صفر وواحد. اضرب احتمالات الأحداث فقط عندما تكون مستقلة. سالب اللوغاريتم يعاقب الخطأ الواثق أكثر."
  },
  "cells": [
    {
      "id": "math-probability-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nprint(np.log(np.exp(2)))\nprint(-np.log(.8))"
    },
    {
      "id": "math-probability-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nprint(np.log(np.exp(2)))\nprint(-np.log(.8))\n\nprint(3/10)"
    }
  ],
  "exercises": [
    {
      "id": "math-probability-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Find exp(log(5)).",
        "ar": "احسب exp(log(5))."
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
          "en": "Keep parentheses around the base or numerator. Python evaluates powers before multiplication and addition.",
          "ar": "ضع أقواسًا حول الأساس أو البسط؛ يحسب Python الأسس قبل الضرب والجمع."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.exp(np.log(5))",
      "explanation": {
        "en": "Find exp(log(5)). The solution computes this using result = np.exp(np.log(5)). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب exp(log(5)). يحسب الحل ذلك باستخدام result = np.exp(np.log(5)). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-probability-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find probability of an even outcome on a fair six-sided die.",
        "ar": "احسب احتمال نتيجة زوجية لنرد عادل."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
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
      "solution": "result = 3/6",
      "explanation": {
        "en": "Find probability of an even outcome on a fair six-sided die. The solution computes this using result = 3/6. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب احتمال نتيجة زوجية لنرد عادل. يحسب الحل ذلك باستخدام result = 3/6. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-probability-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Calculate P(A and B) for independent probabilities .4 and .5.",
        "ar": "احسب احتمال التقاطع لحدثين مستقلين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.2
      },
      "hints": [
        {
          "en": "Separate the factors and calculate their product. Keep the result numeric rather than putting the expression in quotes.",
          "ar": "حدد العوامل واحسب حاصل ضربها. أبق النتيجة عددية ولا تضع التعبير بين علامتي اقتباس."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = .4*.5",
      "explanation": {
        "en": "Calculate P(A and B) for independent probabilities .4 and .5. The solution computes this using result = .4*.5. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب احتمال التقاطع لحدثين مستقلين. يحسب الحل ذلك باستخدام result = .4*.5. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-probability-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Compute binary negative log likelihood when the correct-class probability is .8.",
        "ar": "احسب سالب لوغاريتم احتمال الفئة الصحيحة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.2231435513142097
      },
      "hints": [
        {
          "en": "Keep parentheses around the base or numerator. Python evaluates powers before multiplication and addition.",
          "ar": "ضع أقواسًا حول الأساس أو البسط؛ يحسب Python الأسس قبل الضرب والجمع."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = -np.log(.8)",
      "explanation": {
        "en": "Compute binary negative log likelihood when the correct-class probability is .8. The solution computes this using result = -np.log(.8). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب سالب لوغاريتم احتمال الفئة الصحيحة. يحسب الحل ذلك باستخدام result = -np.log(.8). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compute negative log loss for correct-class probabilities .1,.5,.9. Explain how confidence changes the penalty.",
      "ar": "احسب سالب اللوغاريتم لاحتمالات .1 و.5 و.9 واشرح أثر الثقة على العقوبة."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "All losses are nonnegative. Probability 1 gives zero loss; probability 0 has infinite loss.",
        "ar": "كل الخسائر غير سالبة. الاحتمال 1 يعطي خسارة صفرًا والاحتمال 0 خسارة لا نهائية."
      }
    ],
    "expected": {
      "en": "Losses are approximately [2.302585,.693147,.105361]. Greater correct-class probability means a smaller penalty.",
      "ar": "الخسائر نحو [2.302585,.693147,.105361]. احتمال الفئة الصحيحة الأكبر يعني عقوبة أصغر."
    },
    "selfCheck": {
      "en": "All losses are nonnegative. Probability 1 gives zero loss; probability 0 has infinite loss.",
      "ar": "كل الخسائر غير سالبة. الاحتمال 1 يعطي خسارة صفرًا والاحتمال 0 خسارة لا نهائية."
    },
    "starter": "import numpy as np\np=np.array([.1,.5,.9])\n# Compute -np.log(p), then compare differences\n"
  }
};
