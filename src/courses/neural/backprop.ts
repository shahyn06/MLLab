import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "neural-backprop",
  "title": {
    "en": "Backpropagation and optimizers",
    "ar": "الانتشار العكسي والمحسنات"
  },
  "minutes": 15,
  "intro": {
    "en": "Backpropagation uses the chain rule to send gradients from the loss to every weight. Momentum smooths gradients; Adam tracks first and second moments with bias correction. These optimizers change update rules, not the definition of the learning task.",
    "ar": "يستخدم الانتشار العكسي قاعدة السلسلة لنقل التدرج لكل وزن. ينعّم Momentum التدرجات ويتتبع Adam العزمين مع تصحيح التحيز. يغير المحسن قاعدة التحديث لا تعريف المهمة."
  },
  "cells": [
    {
      "id": "neural-backprop-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "w=2.;x=3.;target=4.\npred=w*x\ngrad=2*(pred-target)*x\nprint(pred,grad,w-.01*grad)"
    },
    {
      "id": "neural-backprop-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "w=2.;x=3.;target=4.\npred=w*x\ngrad=2*(pred-target)*x\nprint(pred,grad,w-.01*grad)\n\nm=.9*0+.1*12\nv=.999*0+.001*12**2\nprint(m,v)"
    }
  ],
  "exercises": [
    {
      "id": "neural-backprop-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "For y=w*x, squared loss, w=2,x=3,target=4, find dL/dw.",
        "ar": "احسب تدرج الخسارة بالنسبة للوزن."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 12
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
      "solution": "result=2*(2*3-4)*3",
      "explanation": {
        "en": "For y=w*x, squared loss, w=2,x=3,target=4, find dL/dw. The solution computes this using result=2*(2*3-4)*3. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تدرج الخسارة بالنسبة للوزن. يحسب الحل ذلك باستخدام result=2*(2*3-4)*3. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/optimization"
    },
    {
      "id": "neural-backprop-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Update w=2 with gradient=12 and rate .01.",
        "ar": "حدّث الوزن."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.88
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
      "solution": "result=2-.01*12",
      "explanation": {
        "en": "Update w=2 with gradient=12 and rate .01. The solution computes this using result=2-.01*12. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حدّث الوزن. يحسب الحل ذلك باستخدام result=2-.01*12. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/optimization"
    },
    {
      "id": "neural-backprop-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Compute EMA m=.9*m+.1*g with m=2,g=4.",
        "ar": "احسب المتوسط الأسي للتدرج."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2.2
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
      "solution": "result=.9*2+.1*4",
      "explanation": {
        "en": "Compute EMA m=.9*m+.1*g with m=2,g=4. The solution computes this using result=.9*2+.1*4. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب المتوسط الأسي للتدرج. يحسب الحل ذلك باستخدام result=.9*2+.1*4. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/optimization"
    },
    {
      "id": "neural-backprop-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Find Adam bias-corrected m after first gradient 4, beta=.9.",
        "ar": "احسب تصحيح التحيز لأول خطوة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 4
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
      "solution": "m=.1*4\nresult=m/(1-.9)",
      "explanation": {
        "en": "Find Adam bias-corrected m after first gradient 4, beta=.9. The solution computes this using m=.1*4; result=m/(1-.9). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تصحيح التحيز لأول خطوة. يحسب الحل ذلك باستخدام m=.1*4; result=m/(1-.9). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/optimization"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compare the analytic gradient of a scalar squared-error model with centered finite differences, then take one verified descent step.",
      "ar": "قارن التدرج التحليلي بالفروق المركزية ثم نفذ خطوة نزول بعد التحقق."
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
