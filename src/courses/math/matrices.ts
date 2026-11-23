import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "math-matrices",
  "title": {
    "en": "Matrices as transformations",
    "ar": "المصفوفات كتحويلات"
  },
  "minutes": 15,
  "intro": {
    "en": "A matrix represents a linear transformation or a table of observations. Multiplying a vector by a matrix changes its coordinates. The transpose swaps rows and columns. A nonzero determinant indicates an invertible square transform; prefer solve to explicitly computing an inverse.",
    "ar": "تمثل المصفوفة تحويلًا خطيًا أو جدول مشاهدات. الضرب يغير الإحداثيات والمنقول يبادل الصفوف والأعمدة. المحدد غير الصفري يعني قابلية عكس التحويل المربع. يفضل solve على حساب المعكوس صراحة."
  },
  "cells": [
    {
      "id": "math-matrices-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nA=np.array([[2,0],[0,3]])\nprint(A@np.array([1,2]))"
    },
    {
      "id": "math-matrices-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nA=np.array([[2,0],[0,3]])\nprint(A@np.array([1,2]))\n\nprint(np.eye(2) @ [5,7])"
    }
  ],
  "exercises": [
    {
      "id": "math-matrices-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Apply [[2,0],[0,3]] to [4,2].",
        "ar": "طبّق التحويل على المتجه."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          8,
          6
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
      "solution": "result = np.array([[2,0],[0,3]]) @ [4,2]",
      "explanation": {
        "en": "Apply [[2,0],[0,3]] to [4,2]. The solution computes this using result = np.array([[2,0],[0,3]]) @ [4,2]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "طبّق التحويل على المتجه. يحسب الحل ذلك باستخدام result = np.array([[2,0],[0,3]]) @ [4,2]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-matrices-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Transpose [[1,2,3],[4,5,6]].",
        "ar": "بدّل الصفوف والأعمدة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          [
            1,
            4
          ],
          [
            2,
            5
          ],
          [
            3,
            6
          ]
        ]
      },
      "hints": [
        {
          "en": "Build the NumPy array first and inspect its shape and dtype before applying the operation.",
          "ar": "أنشئ مصفوفة NumPy أولًا وافحص shape وdtype قبل العملية."
        },
        {
          "en": "Return array output with shape [3, 2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3, 2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.array([[1,2,3],[4,5,6]]).T",
      "explanation": {
        "en": "Transpose [[1,2,3],[4,5,6]]. The solution computes this using result = np.array([[1,2,3],[4,5,6]]).T. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "بدّل الصفوف والأعمدة. يحسب الحل ذلك باستخدام result = np.array([[1,2,3],[4,5,6]]).T. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-matrices-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find determinant of [[2,0],[0,3]].",
        "ar": "احسب المحدد."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.linalg.det([[2,0],[0,3]])",
      "explanation": {
        "en": "Find determinant of [[2,0],[0,3]]. The solution computes this using result = np.linalg.det([[2,0],[0,3]]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب المحدد. يحسب الحل ذلك باستخدام result = np.linalg.det([[2,0],[0,3]]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "math-matrices-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Solve x+y=5 and x-y=1.",
        "ar": "حل النظام الخطي."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          3,
          2
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
      "solution": "result = np.linalg.solve([[1,1],[1,-1]],[5,1])",
      "explanation": {
        "en": "Solve x+y=5 and x-y=1. The solution computes this using result = np.linalg.solve([[1,1],[1,-1]],[5,1]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حل النظام الخطي. يحسب الحل ذلك باستخدام result = np.linalg.solve([[1,1],[1,-1]],[5,1]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compose two diagonal scaling transforms. Apply them successively and as one matrix product, checking equal outputs.",
      "ar": "ركب تحويلي تحجيم قطريين وطبقهما منفصلين وكحاصل ضرب وتحقق من تطابق الخرج."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Check matrix order matches the described application order. Then try a shear to see noncommutativity.",
        "ar": "تحقق أن ترتيب المصفوفات يطابق ترتيب التطبيق ثم جرب قصًا لرؤية عدم التبادل."
      }
    ],
    "expected": {
      "en": "Both methods give [8,15]. Here the diagonal transforms commute, unlike general matrix pairs.",
      "ar": "تعطي الطريقتان [8,15]. تتبادل التحويلات القطرية هنا بخلاف أزواج المصفوفات العامة."
    },
    "selfCheck": {
      "en": "Check matrix order matches the described application order. Then try a shear to see noncommutativity.",
      "ar": "تحقق أن ترتيب المصفوفات يطابق ترتيب التطبيق ثم جرب قصًا لرؤية عدم التبادل."
    },
    "starter": "import numpy as np\nA=np.diag([2.,1.]); B=np.diag([1.,3.]); v=np.array([4.,5.])\n# Compare B @ (A @ v) with (B @ A) @ v\n"
  }
};
