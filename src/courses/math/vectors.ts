import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "math-vectors",
  "title": {
    "en": "Vectors and similarity",
    "ar": "المتجهات والتشابه"
  },
  "minutes": 15,
  "intro": {
    "en": "A vector can represent one observation with several features. Its norm measures length. The dot product combines alignment and magnitude; cosine similarity divides out the lengths. Orthogonal vectors have zero dot product but are not necessarily unrelated in every statistical sense.",
    "ar": "يمثل المتجه مشاهدة بعدة مدخلات. معياره يقيس الطول. يجمع الضرب النقطي الاتجاه والحجم بينما يقسم تشابه جيب التمام على الأطوال. التعامد يعني ضربًا نقطيًا صفرًا وليس بالضرورة استقلالًا إحصائيًا."
  },
  "cells": [
    {
      "id": "math-vectors-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\na=np.array([3.,4.])\nb=np.array([1.,0.])\nprint(a@b, np.linalg.norm(a))"
    },
    {
      "id": "math-vectors-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\na=np.array([3.,4.])\nb=np.array([1.,0.])\nprint(a@b, np.linalg.norm(a))\n\nprint(np.array([2,3])+np.array([4,1]))"
    }
  ],
  "exercises": [
    {
      "id": "math-vectors-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Add vectors [2,3] and [4,1].",
        "ar": "اجمع المتجهين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          6,
          4
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
      "solution": "result = np.array([2,3])+[4,1]",
      "explanation": {
        "en": "Add vectors [2,3] and [4,1]. The solution computes this using result = np.array([2,3])+[4,1]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اجمع المتجهين. يحسب الحل ذلك باستخدام result = np.array([2,3])+[4,1]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-vectors-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Calculate dot([1,2,3],[3,2,1]).",
        "ar": "احسب الضرب النقطي."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 10
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
      "solution": "result = np.dot([1,2,3],[3,2,1])",
      "explanation": {
        "en": "Calculate dot([1,2,3],[3,2,1]). The solution computes this using result = np.dot([1,2,3],[3,2,1]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الضرب النقطي. يحسب الحل ذلك باستخدام result = np.dot([1,2,3],[3,2,1]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-vectors-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Normalize [3,4] to unit length.",
        "ar": "حوّل المتجه لطول واحد."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0.6,
          0.8
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
      "solution": "result = np.array([3.,4.])/5",
      "explanation": {
        "en": "Normalize [3,4] to unit length. The solution computes this using result = np.array([3.,4.])/5. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حوّل المتجه لطول واحد. يحسب الحل ذلك باستخدام result = np.array([3.,4.])/5. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-vectors-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Calculate cosine similarity of [1,0] and [0,1].",
        "ar": "احسب تشابه جيب التمام لمتجهين متعامدين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0
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
      "solution": "result = np.dot([1,0],[0,1])/(np.linalg.norm([1,0])*np.linalg.norm([0,1]))",
      "explanation": {
        "en": "Calculate cosine similarity of [1,0] and [0,1]. The solution computes this using result = np.dot([1,0],[0,1])/(np.linalg.norm([1,0])*np.linalg.norm([0,1])). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تشابه جيب التمام لمتجهين متعامدين. يحسب الحل ذلك باستخدام result = np.dot([1,0],[0,1])/(np.linalg.norm([1,0])*np.linalg.norm([0,1])). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Represent two study profiles as vectors. Compute dot product, lengths and cosine similarity, then repeat after scaling one vector by 10.",
      "ar": "مثل ملفي مذاكرة بمتجهين واحسب الضرب والأطوال والتشابه ثم كرر بعد ضرب متجه في 10."
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
