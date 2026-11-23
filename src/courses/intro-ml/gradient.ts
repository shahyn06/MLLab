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
        "en": "Open the Gradient Descent lab, reset to its fixed initial w=-3, set rate 1.1 and take one step: the displayed loss grows from 36 to 51.84. In the separate Python calculation below start at w=0, use the same rate, and store its updated loss in result. Its initial loss is 9.",
        "ar": "افتح معمل التدرج وأعد موضعه الثابت w=-3 واضبط المعدل 1.1 وخذ خطوة؛ تزيد الخسارة من 36 إلى 51.84. في حساب Python المنفصل أدناه ابدأ w=0 وبالمعدل نفسه واحفظ الخسارة المحدثة في result. خسارته الأولية 9."
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
        "en": "For Python starting at w=0, w becomes 6.6 and the loss becomes 12.96, larger than 9. The lab starts at -3 instead, so its numerical loss is different; both runs diverge at this rate.",
        "ar": "في Python من w=0 يصبح الوزن 6.6 والخسارة 12.96 أكبر من 9. يبدأ المعمل عند -3 فتختلف خسارته العددية؛ يتباعد التشغيلان بهذا المعدل."
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
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Each history must have ten updated losses, and each method must restart w at 0.",
        "ar": "يجب أن يحتوي كل سجل عشر خسائر بعد التحديث وأن يبدأ كل معدل w من صفر."
      }
    ],
    "expected": {
      "en": "Rate .1 first loss is 5.76 and decreases. Rate 1.1 first loss is 12.96 and diverges on this quadratic.",
      "ar": "خسارة .1 الأولى 5.76 ثم تنخفض وخسارة 1.1 الأولى 12.96 وتتباعد على هذه التربيعية."
    },
    "selfCheck": {
      "en": "Each history must have ten updated losses, and each method must restart w at 0.",
      "ar": "يجب أن يحتوي كل سجل عشر خسائر بعد التحديث وأن يبدأ كل معدل w من صفر."
    },
    "starter": "def loss(w): return (w-3)**2\nfor rate in [.1,1.1]:\n    w=0.; history=[]\n    # Perform ten updates, append loss after each update, then print\n"
  }
};
