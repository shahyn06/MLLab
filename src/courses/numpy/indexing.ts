import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "numpy-indexing",
  "title": {
    "en": "Indexing and masks",
    "ar": "الفهرسة والأقنعة"
  },
  "minutes": 15,
  "intro": {
    "en": "Integer indexing selects a position starting at zero. Slices exclude their stop position. A Boolean mask selects entries where a condition is true. For a two-dimensional array, x[:,1] means all rows of the second column.",
    "ar": "تبدأ الفهرسة من صفر. نهاية الشريحة غير مشمولة. القناع المنطقي يختار العناصر التي تحقق الشرط. في بعدين تعني x[:,1] كل صفوف العمود الثاني."
  },
  "cells": [
    {
      "id": "numpy-indexing-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nx = np.array([3,7,2,9])\nprint(x[x > 5])"
    },
    {
      "id": "numpy-indexing-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nx = np.array([3,7,2,9])\nprint(x[x > 5])\n\nprint(np.arange(8)[2:6])"
    }
  ],
  "exercises": [
    {
      "id": "numpy-indexing-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Select values above 4 from [1,5,3,7].",
        "ar": "اختر القيم الأكبر من 4."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          5,
          7
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
      "solution": "x = np.array([1,5,3,7])\nresult = x[x > 4]",
      "explanation": {
        "en": "Select values above 4 from [1,5,3,7]. The solution computes this using x = np.array([1,5,3,7]); result = x[x > 4]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر القيم الأكبر من 4. يحسب الحل ذلك باستخدام x = np.array([1,5,3,7]); result = x[x > 4]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-indexing-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Select the second column of [[1,2],[3,4]].",
        "ar": "اختر العمود الثاني من المصفوفة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          2,
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
      "solution": "result = np.array([[1,2],[3,4]])[:,1]",
      "explanation": {
        "en": "Select the second column of [[1,2],[3,4]]. The solution computes this using result = np.array([[1,2],[3,4]])[:,1]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر العمود الثاني من المصفوفة. يحسب الحل ذلك باستخدام result = np.array([[1,2],[3,4]])[:,1]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-indexing-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Take every second element of [0,1,2,3,4,5].",
        "ar": "اختر عنصرًا كل خطوتين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          2,
          4
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
      "solution": "result = np.arange(6)[::2]",
      "explanation": {
        "en": "Take every second element of [0,1,2,3,4,5]. The solution computes this using result = np.arange(6)[::2]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر عنصرًا كل خطوتين. يحسب الحل ذلك باستخدام result = np.arange(6)[::2]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-indexing-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Replace negative values in [-2,4,-1] with zero.",
        "ar": "استبدل القيم السالبة بصفر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          4,
          0
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
      "solution": "x = np.array([-2,4,-1])\nx[x < 0] = 0\nresult = x",
      "explanation": {
        "en": "Replace negative values in [-2,4,-1] with zero. The solution computes this using x = np.array([-2,4,-1]); x[x < 0] = 0; result = x. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "استبدل القيم السالبة بصفر. يحسب الحل ذلك باستخدام x = np.array([-2,4,-1]); x[x < 0] = 0; result = x. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Mask sensor readings below zero, replace them with zero, and compare the corrected readings with the original copy.",
      "ar": "رشح قراءات حساس أقل من صفر واستبدلها بصفر وقارن بنسخة الأصل."
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
