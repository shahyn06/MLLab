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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "z=np.array([0.,0.,0.])\nresult = np.exp(z)/np.exp(z).sum()",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting array with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = int(np.argmax([.1,.2,.7]))",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "z=np.array([2.,4.,1.]);e=np.exp(z-z.max())\nresult = (e/e.sum()).sum()",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = False",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
