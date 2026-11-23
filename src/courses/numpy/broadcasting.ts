import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "numpy-broadcasting",
  "title": {
    "en": "Vectorization and broadcasting",
    "ar": "الحساب المتجهي و Broadcasting"
  },
  "minutes": 15,
  "intro": {
    "en": "Vectorization applies a single operation over an array. Broadcasting aligns dimensions from the right; each pair must match or one must equal 1. Subtracting column means from a matrix centers each feature. Elementwise multiplication is not matrix multiplication.",
    "ar": "تطبق العمليات المتجهية الحساب على المصفوفة. يقارن Broadcasting الأبعاد من اليمين ويجب تطابقها أو أن يكون أحدها 1. طرح متوسطات الأعمدة يوسّط المدخلات. ضرب العناصر يختلف عن ضرب المصفوفات."
  },
  "cells": [
    {
      "id": "numpy-broadcasting-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nx = np.array([[1,2],[3,4]])\nprint(x + np.array([10,20]))"
    },
    {
      "id": "numpy-broadcasting-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nx = np.array([[1,2],[3,4]])\nprint(x + np.array([10,20]))\n\nprint(np.array([1,2,3]) ** 2)"
    }
  ],
  "exercises": [
    {
      "id": "numpy-broadcasting-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Add 10 to [1,2,3] without a loop.",
        "ar": "أضف 10 لكل عنصر دون حلقة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          11,
          12,
          13
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
      "solution": "result = np.array([1,2,3]) + 10",
      "explanation": {
        "en": "Add 10 to [1,2,3] without a loop. The solution computes this using result = np.array([1,2,3]) + 10. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أضف 10 لكل عنصر دون حلقة. يحسب الحل ذلك باستخدام result = np.array([1,2,3]) + 10. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-broadcasting-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Subtract column means from [[1,2],[3,4]].",
        "ar": "اطرح متوسط كل عمود."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          [
            -1,
            -1
          ],
          [
            1,
            1
          ]
        ]
      },
      "hints": [
        {
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return array output with shape [2, 2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2, 2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "x = np.array([[1.,2.],[3.,4.]])\nresult = x-x.mean(axis=0)",
      "explanation": {
        "en": "Subtract column means from [[1,2],[3,4]]. The solution computes this using x = np.array([[1.,2.],[3.,4.]]); result = x-x.mean(axis=0). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اطرح متوسط كل عمود. يحسب الحل ذلك باستخدام x = np.array([[1.,2.],[3.,4.]]); result = x-x.mean(axis=0). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-broadcasting-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Multiply [2,3,4] elementwise by [5,6,7].",
        "ar": "اضرب المصفوفتين عنصرًا بعنصر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          10,
          18,
          28
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
      "solution": "result = np.array([2,3,4])*np.array([5,6,7])",
      "explanation": {
        "en": "Multiply [2,3,4] elementwise by [5,6,7]. The solution computes this using result = np.array([2,3,4])*np.array([5,6,7]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اضرب المصفوفتين عنصرًا بعنصر. يحسب الحل ذلك باستخدام result = np.array([2,3,4])*np.array([5,6,7]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "numpy-broadcasting-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Calculate mean squared error between [1,3] and [2,5].",
        "ar": "احسب متوسط مربع الخطأ بين القيم والتنبؤات."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2.5
      },
      "hints": [
        {
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.mean((np.array([1,3])-np.array([2,5]))**2)",
      "explanation": {
        "en": "Calculate mean squared error between [1,3] and [2,5]. The solution computes this using result = np.mean((np.array([1,3])-np.array([2,5]))**2). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط مربع الخطأ بين القيم والتنبؤات. يحسب الحل ذلك باستخدام result = np.mean((np.array([1,3])-np.array([2,5]))**2). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Center every column of a 3x2 matrix using broadcasting, then verify that both centered column means are numerically zero.",
      "ar": "وسّط أعمدة مصفوفة 3 في 2 باستخدام Broadcasting وتحقق من أن المتوسطين صفر عدديًا."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Use np.allclose(centered.mean(axis=0),0), not exact equality on arbitrary floating-point data.",
        "ar": "استخدم np.allclose(centered.mean(axis=0),0) لا التطابق الحرفي لبيانات عشرية عامة."
      }
    ],
    "expected": {
      "en": "Column means before centering are [3,4]; after centering both are approximately zero.",
      "ar": "متوسطا العمودين قبل التمركز [3,4] وبعده يقاربان صفرًا."
    },
    "selfCheck": {
      "en": "Use np.allclose(centered.mean(axis=0),0), not exact equality on arbitrary floating-point data.",
      "ar": "استخدم np.allclose(centered.mean(axis=0),0) لا التطابق الحرفي لبيانات عشرية عامة."
    },
    "starter": "import numpy as np\nx=np.array([[1.,2.],[3.,6.],[5.,4.]])\n# Subtract column means using broadcasting\n"
  }
};
