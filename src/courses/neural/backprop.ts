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
        "en": "Open the neural lab, take one epoch and inspect the actual loss change. Compare a smaller learning rate while keeping the initial setup fixed. Then compute the Adam correction below. Find Adam bias-corrected m after first gradient 4, beta=.9.",
        "ar": "افتح معمل الشبكة وخذ حقبة وافحص تغير الخسارة الفعلي وقارن بمعدل أصغر مع تثبيت البداية ثم احسب تصحيح Adam أدناه. احسب تصحيح التحيز لأول خطوة."
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
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Check gradient agreement within 1e-5 and verify the step used subtraction rather than addition.",
        "ar": "تحقق من اتفاق التدرجين ضمن 1e-5 وأن الخطوة طرحت التدرج ولم تجمعه."
      }
    ],
    "expected": {
      "en": "Analytic gradient=12, numerical gradient approximately 12, new w=1.88 and new loss=2.6896 versus initial 4.",
      "ar": "التدرج التحليلي 12 والعددي يقاربه والوزن الجديد 1.88 والخسارة 2.6896 بدل 4."
    },
    "selfCheck": {
      "en": "Check gradient agreement within 1e-5 and verify the step used subtraction rather than addition.",
      "ar": "تحقق من اتفاق التدرجين ضمن 1e-5 وأن الخطوة طرحت التدرج ولم تجمعه."
    },
    "starter": "w=2.; x=3.; target=4.; h=1e-5; rate=.01\ndef loss(w):return (w*x-target)**2\n# Analytic gradient, centered numerical gradient, updated w and loss\n"
  }
};
