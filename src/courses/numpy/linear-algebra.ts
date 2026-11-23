import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "numpy-linear-algebra",
  "title": {
    "en": "Dot products and linear systems",
    "ar": "الضرب النقطي والأنظمة الخطية"
  },
  "minutes": 15,
  "intro": {
    "en": "A dot product sums matching products. Matrix multiplication combines each row of the left input with each column of the right input. A linear solve finds values satisfying all equations simultaneously. Check by substituting the solution back into the original system.",
    "ar": "الضرب النقطي يجمع نواتج ضرب العناصر المتناظرة. ضرب المصفوفات يجمع صف اليسار وعمود اليمين. الحل الخطي يحقق كل المعادلات معًا. تحقق بالتعويض في النظام الأصلي."
  },
  "cells": [
    {
      "id": "numpy-linear-algebra-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\na = np.array([1,2])\nb = np.array([3,4])\nprint(a @ b)"
    },
    {
      "id": "numpy-linear-algebra-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\na = np.array([1,2])\nb = np.array([3,4])\nprint(a @ b)\n\nprint(np.linalg.solve([[2,0],[0,4]],[6,8]))"
    }
  ],
  "exercises": [
    {
      "id": "numpy-linear-algebra-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Calculate dot([2,3],[4,5]).",
        "ar": "احسب الضرب النقطي للمتجهين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 23
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
      "solution": "result = np.dot([2,3],[4,5])",
      "explanation": {
        "en": "Calculate dot([2,3],[4,5]). The solution computes this using result = np.dot([2,3],[4,5]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الضرب النقطي للمتجهين. يحسب الحل ذلك باستخدام result = np.dot([2,3],[4,5]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-linear-algebra-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Multiply [[1,2],[0,1]] by [3,4].",
        "ar": "اضرب المصفوفة في المتجه."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          11,
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
      "solution": "result = np.array([[1,2],[0,1]]) @ np.array([3,4])",
      "explanation": {
        "en": "Multiply [[1,2],[0,1]] by [3,4]. The solution computes this using result = np.array([[1,2],[0,1]]) @ np.array([3,4]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اضرب المصفوفة في المتجه. يحسب الحل ذلك باستخدام result = np.array([[1,2],[0,1]]) @ np.array([3,4]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-linear-algebra-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Solve 2x=8 and 3y=9 with np.linalg.solve.",
        "ar": "حل النظام باستخدام np.linalg.solve."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          4,
          3
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.linalg.solve([[2,0],[0,3]],[8,9])",
      "explanation": {
        "en": "Solve 2x=8 and 3y=9 with np.linalg.solve. The solution computes this using result = np.linalg.solve([[2,0],[0,3]],[8,9]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حل النظام باستخدام np.linalg.solve. يحسب الحل ذلك باستخدام result = np.linalg.solve([[2,0],[0,3]],[8,9]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-linear-algebra-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Find the Euclidean norm of [3,4].",
        "ar": "احسب الطول الإقليدي للمتجه [3,4]."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 5
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
      "solution": "result = np.linalg.norm([3,4])",
      "explanation": {
        "en": "Find the Euclidean norm of [3,4]. The solution computes this using result = np.linalg.norm([3,4]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الطول الإقليدي للمتجه [3,4]. يحسب الحل ذلك باستخدام result = np.linalg.norm([3,4]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Solve a two-variable linear system, multiply the solution by its coefficient matrix and compare with the target vector.",
      "ar": "حل نظامًا خطيًا بمتغيرين واضرب الحل في مصفوفة المعاملات وقارن بمتجه الهدف."
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
