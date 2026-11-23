import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "math-calculus",
  "title": {
    "en": "Derivatives and the chain rule",
    "ar": "المشتقات وقاعدة السلسلة"
  },
  "minutes": 15,
  "intro": {
    "en": "A derivative measures local change. The chain rule multiplies the derivatives along a composition. Centered finite differences estimate a derivative by evaluating on both sides. Gradient descent subtracts a small multiple of the derivative; a step can overshoot if the rate is too large.",
    "ar": "المشتقة تقيس التغير المحلي. تضرب قاعدة السلسلة مشتقات الدوال المركبة. تقرب الفروق المركزية المشتقة من الجانبين. النزول التدريجي يطرح جزءًا من المشتقة وقد يتجاوز الهدف إن كبر المعدل."
  },
  "cells": [
    {
      "id": "math-calculus-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "def loss(w):\n    return (2*w-3)**2\nw=1.\nh=1e-5\nprint((loss(w+h)-loss(w-h))/(2*h))"
    },
    {
      "id": "math-calculus-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "def loss(w):\n    return (2*w-3)**2\nw=1.\nh=1e-5\nprint((loss(w+h)-loss(w-h))/(2*h))\n\nprint(4*(2*1-3))"
    }
  ],
  "exercises": [
    {
      "id": "math-calculus-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Evaluate derivative of x squared at x=3.",
        "ar": "احسب مشتقة مربع x عند 3."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 6
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
      "solution": "result = 2*3",
      "explanation": {
        "en": "Evaluate derivative of x squared at x=3. The solution computes this using result = 2*3. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب مشتقة مربع x عند 3. يحسب الحل ذلك باستخدام result = 2*3. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-calculus-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Evaluate derivative of (2w-3)^2 at w=1.",
        "ar": "طبق قاعدة السلسلة عند w=1."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": -4
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
      "solution": "result = 4*(2*1-3)",
      "explanation": {
        "en": "Evaluate derivative of (2w-3)^2 at w=1. The solution computes this using result = 4*(2*1-3). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "طبق قاعدة السلسلة عند w=1. يحسب الحل ذلك باستخدام result = 4*(2*1-3). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-calculus-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Take one gradient step from w=1, gradient=-4, learning rate=.1.",
        "ar": "نفذ خطوة نزول تدريجي واحدة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.4
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
      "solution": "result = 1-.1*(-4)",
      "explanation": {
        "en": "Take one gradient step from w=1, gradient=-4, learning rate=.1. The solution computes this using result = 1-.1*(-4). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "نفذ خطوة نزول تدريجي واحدة. يحسب الحل ذلك باستخدام result = 1-.1*(-4). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-calculus-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Approximate derivative of sin(x) at zero using centered differences h=1e-5.",
        "ar": "قرب مشتقة sin عند صفر بالفروق المركزية."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1
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
      "solution": "h=1e-5\nresult = (np.sin(h)-np.sin(-h))/(2*h)",
      "explanation": {
        "en": "Approximate derivative of sin(x) at zero using centered differences h=1e-5. The solution computes this using h=1e-5; result = (np.sin(h)-np.sin(-h))/(2*h). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "قرب مشتقة sin عند صفر بالفروق المركزية. يحسب الحل ذلك باستخدام h=1e-5; result = (np.sin(h)-np.sin(-h))/(2*h). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compare centered finite-difference derivatives of x squared at x=2 using three h values, then compare with the exact derivative 4.",
      "ar": "قارن المشتقة العددية لمربع x عند 2 بثلاث قيم h مع المشتقة الدقيقة 4."
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
