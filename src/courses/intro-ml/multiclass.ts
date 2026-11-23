import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "intro-ml-multiclass",
  "title": {
    "en": "Softmax and model limits",
    "ar": "Softmax وحدود النموذج"
  },
  "minutes": 15,
  "intro": {
    "en": "Softmax converts class scores to positive probabilities summing to one. Subtract the largest score before exponentiating for numerical stability. The maximum-probability class is a decision, not a guarantee. Linear boundaries cannot represent every pattern, including XOR.",
    "ar": "يحول Softmax الدرجات لاحتمالات موجبة مجموعها واحد. اطرح أكبر درجة قبل الأس للاستقرار العددي. اختيار الأكبر قرار لا ضمان. الحدود الخطية لا تمثل كل الأنماط مثل XOR."
  },
  "cells": [
    {
      "id": "intro-ml-multiclass-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nz=np.array([1.,2.,3.])\np=np.exp(z-z.max());p/=p.sum()\nprint(p, p.sum())"
    },
    {
      "id": "intro-ml-multiclass-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nz=np.array([1.,2.,3.])\np=np.exp(z-z.max());p/=p.sum()\nprint(p, p.sum())\n\nprint(\"A single straight boundary cannot solve XOR.\")"
    }
  ],
  "exercises": [
    {
      "id": "intro-ml-multiclass-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Compute softmax([0,0,0]).",
        "ar": "احسب Softmax لثلاث درجات متساوية."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0.3333333333333333,
          0.3333333333333333,
          0.3333333333333333
        ]
      },
      "hints": [
        {
          "en": "Build the NumPy array first and inspect its shape and dtype before applying the operation.",
          "ar": "أنشئ مصفوفة NumPy أولًا وافحص shape وdtype قبل العملية."
        },
        {
          "en": "Return array output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "z=np.array([0.,0.,0.])\nresult = np.exp(z)/np.exp(z).sum()",
      "explanation": {
        "en": "Compute softmax([0,0,0]). The solution computes this using z=np.array([0.,0.,0.]); result = np.exp(z)/np.exp(z).sum(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب Softmax لثلاث درجات متساوية. يحسب الحل ذلك باستخدام z=np.array([0.,0.,0.]); result = np.exp(z)/np.exp(z).sum(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "intro-ml-multiclass-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Choose predicted class index for [.1,.2,.7].",
        "ar": "اختر فهرس الفئة المتوقعة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
      },
      "hints": [
        {
          "en": "Use an explicit type conversion. Check the type of the input before combining numbers and text.",
          "ar": "استخدم تحويل نوع صريحًا وافحص نوع المدخل قبل الجمع بين الأعداد والنصوص."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = int(np.argmax([.1,.2,.7]))",
      "explanation": {
        "en": "Choose predicted class index for [.1,.2,.7]. The solution computes this using result = int(np.argmax([.1,.2,.7])). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر فهرس الفئة المتوقعة. يحسب الحل ذلك باستخدام result = int(np.argmax([.1,.2,.7])). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "intro-ml-multiclass-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Compute the sum of softmax probabilities for [2,4,1].",
        "ar": "احسب مجموع الاحتمالات."
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
          "en": "Build the NumPy array first and inspect its shape and dtype before applying the operation.",
          "ar": "أنشئ مصفوفة NumPy أولًا وافحص shape وdtype قبل العملية."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "z=np.array([2.,4.,1.]);e=np.exp(z-z.max())\nresult = (e/e.sum()).sum()",
      "explanation": {
        "en": "Compute the sum of softmax probabilities for [2,4,1]. The solution computes this using z=np.array([2.,4.,1.]);e=np.exp(z-z.max()); result = (e/e.sum()).sum(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب مجموع الاحتمالات. يحسب الحل ذلك باستخدام z=np.array([2.,4.,1.]);e=np.exp(z-z.max()); result = (e/e.sum()).sum(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    },
    {
      "id": "intro-ml-multiclass-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Store whether a single linear perceptron can perfectly separate XOR.",
        "ar": "هل يفصل Perceptron خطي واحد بيانات XOR تمامًا؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": false
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
      "solution": "result = False",
      "explanation": {
        "en": "Store whether a single linear perceptron can perfectly separate XOR. The solution computes this using result = False. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل يفصل Perceptron خطي واحد بيانات XOR تمامًا؟ يحسب الحل ذلك باستخدام result = False. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/classical"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compute softmax for logits [1000,1001,1002] using maximum subtraction, verify the sum and compare with [0,1,2].",
      "ar": "احسب Softmax لدرجات كبيرة بعد طرح الأكبر وتحقق من المجموع وقارن بدرجات [0,1,2]."
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
