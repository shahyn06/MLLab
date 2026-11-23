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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return array output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.histogram([1,1,2,3,3,3],bins=[.5,1.5,2.5,3.5])[0]",
      "explanation": {
        "en": "Calculate histogram counts for [1,1,2,3,3,3] with edges [.5,1.5,2.5,3.5]. The solution computes this using result = np.histogram([1,1,2,3,3,3],bins=[.5,1.5,2.5,3.5])[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تكرارات المدرج بالحدود المحددة. يحسب الحل ذلك باستخدام result = np.histogram([1,1,2,3,3,3],bins=[.5,1.5,2.5,3.5])[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.median([1,2,3,4,8])",
      "explanation": {
        "en": "Find the median of [1,2,3,4,8]. The solution computes this using result = np.median([1,2,3,4,8]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الوسيط. يحسب الحل ذلك باستخدام result = np.median([1,2,3,4,8]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.percentile([0,2,4,6,8],75)-np.percentile([0,2,4,6,8],25)",
      "explanation": {
        "en": "Find the interquartile range for [0,2,4,6,8]. The solution computes this using result = np.percentile([0,2,4,6,8],75)-np.percentile([0,2,4,6,8],25). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب المدى الربيعي. يحسب الحل ذلك باستخدام result = np.percentile([0,2,4,6,8],75)-np.percentile([0,2,4,6,8],25). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
          "en": "Create the requested plot using the given x and y values. Keep the figure or axes in the requested variable if asked.",
          "ar": "أنشئ الرسم المطلوب من قيم x وy المعطاة واحفظ الشكل أو المحاور في المتغير المطلوب إن طلب."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "counts, edges, patches = plt.hist([1,2,2,3],bins=3)\nresult = counts.sum()",
      "explanation": {
        "en": "Make a histogram and store the sum of bin counts. The solution computes this using counts, edges, patches = plt.hist([1,2,2,3],bins=3); result = counts.sum(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ارسم مدرجًا واحفظ مجموع التكرارات. يحسب الحل ذلك باستخدام counts, edges, patches = plt.hist([1,2,2,3],bins=3); result = counts.sum(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Compute np.histogram for each bin count and verify counts.sum()==len(x).",
        "ar": "احسب np.histogram لكل عدد حاويات وتحقق أن مجموع التكرارات يساوي طول البيانات."
      }
    ],
    "expected": {
      "en": "Both histograms count nine observations and median remains 3. Bin heights and edges differ.",
      "ar": "يعد الرسمان تسع مشاهدات ويبقى الوسيط 3 وتختلف ارتفاعات الحاويات وحدودها."
    },
    "selfCheck": {
      "en": "Compute np.histogram for each bin count and verify counts.sum()==len(x).",
      "ar": "احسب np.histogram لكل عدد حاويات وتحقق أن مجموع التكرارات يساوي طول البيانات."
    },
    "starter": "import numpy as np\nimport matplotlib.pyplot as plt\nx=np.array([1,1,2,3,3,4,5,8,9])\n# Plot x using bins=3 and bins=6; print its median\n"
  }
};
