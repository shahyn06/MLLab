import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "numpy-arrays",
  "title": {
    "en": "Arrays and shapes",
    "ar": "المصفوفات والأبعاد"
  },
  "minutes": 15,
  "intro": {
    "en": "A NumPy array stores same-type values in a shape. Shape (2,3) means two rows and three columns. Reshaping changes how existing elements are arranged, not their order or number. Array operations act on every element without Python loops.",
    "ar": "مصفوفة NumPy تخزن قيمًا من نفس النوع بأبعاد محددة. (2,3) تعني صفين وثلاثة أعمدة. إعادة التشكيل لا تغير ترتيب العناصر ولا عددها. العمليات تطبق على العناصر دون حلقات Python."
  },
  "cells": [
    {
      "id": "numpy-arrays-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nx = np.array([[1,2],[3,4]])\nprint(x.shape)"
    },
    {
      "id": "numpy-arrays-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nx = np.array([[1,2],[3,4]])\nprint(x.shape)\n\nprint(np.zeros((2,3)))"
    }
  ],
  "exercises": [
    {
      "id": "numpy-arrays-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Create a NumPy array [2,4,6].",
        "ar": "أنشئ مصفوفة NumPy بالقيم [2,4,6]."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          2,
          4,
          6
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
      "solution": "result = np.array([2,4,6])",
      "explanation": {
        "en": "Create a NumPy array [2,4,6]. The solution computes this using result = np.array([2,4,6]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أنشئ مصفوفة NumPy بالقيم [2,4,6]. يحسب الحل ذلك باستخدام result = np.array([2,4,6]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-arrays-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Create a 2 by 2 array containing 1,2,3,4 in row order.",
        "ar": "أنشئ مصفوفة 2 في 2 بالقيم 1,2,3,4 بترتيب الصفوف."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ]
      },
      "hints": [
        {
          "en": "Count the elements before changing shape. The product of the new dimensions must match the number of elements.",
          "ar": "احسب عدد العناصر قبل تغيير الشكل؛ يجب أن يساويه حاصل ضرب الأبعاد الجديدة."
        },
        {
          "en": "Return array output with shape [2, 2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2, 2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.arange(1,5).reshape(2,2)",
      "explanation": {
        "en": "Create a 2 by 2 array containing 1,2,3,4 in row order. The solution computes this using result = np.arange(1,5).reshape(2,2). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أنشئ مصفوفة 2 في 2 بالقيم 1,2,3,4 بترتيب الصفوف. يحسب الحل ذلك باستخدام result = np.arange(1,5).reshape(2,2). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-arrays-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Store the shape of a 2 by 3 zero array as a list.",
        "ar": "احفظ أبعاد مصفوفة أصفار 2 في 3 كقائمة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          2,
          3
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = list(np.zeros((2,3)).shape)",
      "explanation": {
        "en": "Store the shape of a 2 by 3 zero array as a list. The solution computes this using result = list(np.zeros((2,3)).shape). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احفظ أبعاد مصفوفة أصفار 2 في 3 كقائمة. يحسب الحل ذلك باستخدام result = list(np.zeros((2,3)).shape). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-arrays-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Create floating point [1.5,2.5].",
        "ar": "أنشئ مصفوفة عشرية [1.5,2.5]."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          1.5,
          2.5
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
      "solution": "result = np.array([1.5,2.5])",
      "explanation": {
        "en": "Create floating point [1.5,2.5]. The solution computes this using result = np.array([1.5,2.5]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أنشئ مصفوفة عشرية [1.5,2.5]. يحسب الحل ذلك باستخدام result = np.array([1.5,2.5]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Represent three observations with two features as a 3x2 NumPy array. Print its shape and transpose, then verify that both contain six elements.",
      "ar": "مثل ثلاث مشاهدات بمدخلين كمصفوفة 3 في 2 واطبع أبعادها ومنقولها وتحقق من عدد العناصر."
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
