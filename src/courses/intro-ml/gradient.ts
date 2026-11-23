import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "intro-ml-gradient",
  "title": {
    "en": "Learning by reducing loss",
    "ar": "التعلم بتقليل الخسارة"
  },
  "minutes": 15,
  "intro": {
    "en": "A loss turns prediction errors into a scalar objective. Its gradient points uphill locally. Subtracting a learning-rate-scaled gradient can reduce the loss, but convergence depends on step size and curvature. In the linked lab, compare a stable step with one that overshoots.",
    "ar": "تحول الخسارة أخطاء التنبؤ لهدف رقمي والتدرج يشير للصعود محليًا. طرح جزء منه قد يقلل الخسارة لكن التقارب يعتمد على المعدل والانحناء. قارن خطوة مستقرة وأخرى تتجاوز الهدف في المعمل."
  },
  "cells": [
    {
      "id": "intro-ml-gradient-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "w=0.0\nfor step in range(5):\n    gradient=2*(w-3)\n    w-=.1*gradient\n    print(step,w,(w-3)**2)"
    },
    {
      "id": "intro-ml-gradient-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "w=0.0\nfor step in range(5):\n    gradient=2*(w-3)\n    w-=.1*gradient\n    print(step,w,(w-3)**2)\n\nprint(\"Try the same update in the Gradient Descent lab.\")"
    }
  ],
  "exercises": [
    {
      "id": "intro-ml-gradient-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Take one step from w=0 for L=(w-3)^2 with rate .1.",
        "ar": "نفذ خطوة واحدة من الصفر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.6
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
      "solution": "result = 0-.1*(2*(0-3))",
      "explanation": {
        "en": "Take one step from w=0 for L=(w-3)^2 with rate .1. The solution computes this using result = 0-.1*(2*(0-3)). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "نفذ خطوة واحدة من الصفر. يحسب الحل ذلك باستخدام result = 0-.1*(2*(0-3)). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/gradient"
    },
    {
      "id": "intro-ml-gradient-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Compute loss at w=2 for L=(w-3)^2.",
        "ar": "احسب الخسارة عند w=2."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1
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
      "solution": "result = (2-3)**2",
      "explanation": {
        "en": "Compute loss at w=2 for L=(w-3)^2. The solution computes this using result = (2-3)**2. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الخسارة عند w=2. يحسب الحل ذلك باستخدام result = (2-3)**2. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/gradient"
    },
    {
      "id": "intro-ml-gradient-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Run two .1-rate steps from w=0 for that loss.",
        "ar": "نفذ خطوتين بنفس المعدل."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.08
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
      "solution": "w=0.\nfor _ in range(2):\n    w-=.1*2*(w-3)\nresult = w",
      "explanation": {
        "en": "Run two .1-rate steps from w=0 for that loss. The solution computes this using w=0.; for _ in range(2):;     w-=.1*2*(w-3); result = w. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "نفذ خطوتين بنفس المعدل. يحسب الحل ذلك باستخدام w=0.; for _ in range(2):;     w-=.1*2*(w-3); result = w. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/gradient"
    },
    {
      "id": "intro-ml-gradient-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "For rate 1.1 starting at w=0, compute the loss after one step. Compare 12.96 to initial 9 in the lab.",
        "ar": "عند معدل 1.1 احسب الخسارة بعد خطوة وقارن بالبداية."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 12.96
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
      "solution": "w=0-1.1*2*(0-3)\nresult = (w-3)**2",
      "explanation": {
        "en": "For rate 1.1 starting at w=0, compute the loss after one step. Compare 12.96 to initial 9 in the lab. The solution computes this using w=0-1.1*2*(0-3); result = (w-3)**2. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "عند معدل 1.1 احسب الخسارة بعد خطوة وقارن بالبداية. يحسب الحل ذلك باستخدام w=0-1.1*2*(0-3); result = (w-3)**2. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/gradient"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compare ten gradient steps for learning rates .1 and 1.1 on (w-3)^2. Plot or print both loss histories and explain divergence.",
      "ar": "قارن عشر خطوات بمعدلي .1 و1.1 واطبع الخسائر وفسر التباعد."
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
