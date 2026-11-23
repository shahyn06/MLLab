import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "visualization-distributions",
  "title": {
    "en": "Histograms and summaries",
    "ar": "المدرجات وتلخيص البيانات"
  },
  "minutes": 15,
  "intro": {
    "en": "A histogram groups observations into numeric intervals. Bin edges affect the picture, so show them honestly. A box plot summarizes median and quartiles, but hides individual observations. Compare center, spread and unusual tails rather than relying on the mean alone.",
    "ar": "يجمع المدرج المشاهدات في فترات. حدود الفترات تغير الصورة فوضحها. يلخص الصندوق الوسيط والربيعات لكنه يخفي القيم الفردية. قارن المركز والتشتت والأطراف لا المتوسط فقط."
  },
  "cells": [
    {
      "id": "visualization-distributions-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import matplotlib.pyplot as plt\nplt.hist([1,1,2,3,3,3],bins=[0.5,1.5,2.5,3.5])\nplt.xlabel(\"value\")\nplt.ylabel(\"count\")\nplt.show()"
    },
    {
      "id": "visualization-distributions-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import matplotlib.pyplot as plt\nplt.hist([1,1,2,3,3,3],bins=[0.5,1.5,2.5,3.5])\nplt.xlabel(\"value\")\nplt.ylabel(\"count\")\nplt.show()\n\nimport seaborn as sns\nsns.boxplot(x=[1,2,3,4,8])\nplt.show()"
    }
  ],
  "exercises": [
    {
      "id": "visualization-distributions-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Calculate histogram counts for [1,1,2,3,3,3] with edges [.5,1.5,2.5,3.5].",
        "ar": "احسب تكرارات المدرج بالحدود المحددة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          2,
          1,
          3
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
      "solution": "result = np.histogram([1,1,2,3,3,3],bins=[.5,1.5,2.5,3.5])[0]",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting array with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    },
    {
      "id": "visualization-distributions-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find the median of [1,2,3,4,8].",
        "ar": "احسب الوسيط."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 3
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
      "solution": "result = np.median([1,2,3,4,8])",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    },
    {
      "id": "visualization-distributions-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find the interquartile range for [0,2,4,6,8].",
        "ar": "احسب المدى الربيعي."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 4
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
      "solution": "result = np.percentile([0,2,4,6,8],75)-np.percentile([0,2,4,6,8],25)",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    },
    {
      "id": "visualization-distributions-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Make a histogram and store the sum of bin counts.",
        "ar": "ارسم مدرجًا واحفظ مجموع التكرارات."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 4
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
      "solution": "counts, edges, patches = plt.hist([1,2,2,3],bins=3)\nresult = counts.sum()",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Plot the same numeric sample with three and six histogram bins. Report the unchanged median and explain how binning changes the visual story.",
      "ar": "ارسم العينة بثلاث وست فترات واحسب الوسيط الثابت واشرح تأثير التقسيم على الصورة."
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
