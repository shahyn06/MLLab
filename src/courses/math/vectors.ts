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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = np.array([2,3])+[4,1]",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting array with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = np.dot([1,2,3],[3,2,1])",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = np.array([3.,4.])/5",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting array with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = np.dot([1,0],[0,1])/(np.linalg.norm([1,0])*np.linalg.norm([0,1]))",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
