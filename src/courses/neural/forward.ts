import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "neural-forward",
  "title": {
    "en": "Layers and activations",
    "ar": "الطبقات ودوال التنشيط"
  },
  "minutes": 15,
  "intro": {
    "en": "A dense layer multiplies inputs by weights, adds biases and applies an activation. Nonlinear activations let stacked layers represent nonlinear patterns. Track tensor shapes and distinguish the number of weights from the number of biases.",
    "ar": "تضرب الطبقة الكثيفة المدخلات بالأوزان وتضيف الانحياز ثم التنشيط. يسمح التنشيط غير الخطي بتمثيل أنماط غير خطية. راقب الأبعاد وميز الأوزان عن الانحياز."
  },
  "cells": [
    {
      "id": "neural-forward-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nx=np.array([1.,2.]);W=np.array([[1.,-1.],[.5,.5]])\nz=x@W\nprint(z,np.maximum(z,0))"
    },
    {
      "id": "neural-forward-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nx=np.array([1.,2.]);W=np.array([[1.,-1.],[.5,.5]])\nz=x@W\nprint(z,np.maximum(z,0))\n\nprint(1/(1+np.exp(-np.array([-1.,0.,1.]))))"
    }
  ],
  "exercises": [
    {
      "id": "neural-forward-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Compute ReLU([-2,0,3]).",
        "ar": "احسب ReLU للقيم."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          0,
          3
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return array output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=np.maximum([-2,0,3],0)",
      "explanation": {
        "en": "Compute ReLU([-2,0,3]). The solution computes this using result=np.maximum([-2,0,3],0). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب ReLU للقيم. يحسب الحل ذلك باستخدام result=np.maximum([-2,0,3],0). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/neural"
    },
    {
      "id": "neural-forward-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Compute [1,2] @ [[1,-1],[.5,.5]].",
        "ar": "احسب خرج الطبقة الخطية."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          2,
          0
        ]
      },
      "hints": [
        {
          "en": "Build the NumPy array first and inspect its shape and dtype before applying the operation.",
          "ar": "أنشئ مصفوفة NumPy أولًا وافحص shape وdtype قبل العملية."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=np.array([1,2])@np.array([[1,-1],[.5,.5]])",
      "explanation": {
        "en": "Compute [1,2] @ [[1,-1],[.5,.5]]. The solution computes this using result=np.array([1,2])@np.array([[1,-1],[.5,.5]]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب خرج الطبقة الخطية. يحسب الحل ذلك باستخدام result=np.array([1,2])@np.array([[1,-1],[.5,.5]]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/neural"
    },
    {
      "id": "neural-forward-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Count weights in a dense 3-input, 4-output layer, excluding bias.",
        "ar": "احسب عدد الأوزان دون الانحياز."
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
      "solution": "result=3*4",
      "explanation": {
        "en": "Count weights in a dense 3-input, 4-output layer, excluding bias. The solution computes this using result=3*4. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب عدد الأوزان دون الانحياز. يحسب الحل ذلك باستخدام result=3*4. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/neural"
    },
    {
      "id": "neural-forward-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Count biases for a 4-output dense layer.",
        "ar": "احسب عدد قيم الانحياز."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=4",
      "explanation": {
        "en": "Count biases for a 4-output dense layer. The solution computes this using result=4. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب عدد قيم الانحياز. يحسب الحل ذلك باستخدام result=4. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/neural"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Implement a two-layer ReLU network forward pass with NumPy and print every intermediate shape and activation.",
      "ar": "نفذ المرور الأمامي لشبكة بطبقتين مع ReLU واطبع الأبعاد والتنشيطات."
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
