import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "visualization-scatter",
  "title": {
    "en": "Scatter plots and relationships",
    "ar": "المبعثر والعلاقات"
  },
  "minutes": 15,
  "intro": {
    "en": "A scatter plot shows paired observations. A relationship is visible as a pattern, not as proof that one variable causes another. Compare scales and units; calculate correlation as a summary, then inspect the plot for outliers and nonlinear structure.",
    "ar": "الرسم المبعثر يعرض أزواج المشاهدات. النمط لا يثبت السببية. قارن المقاييس والوحدات واحسب الارتباط كتلخيص ثم افحص القيم الشاذة والعلاقات غير الخطية."
  },
  "cells": [
    {
      "id": "visualization-scatter-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import matplotlib.pyplot as plt\nplt.scatter([1,2,3,4],[2,5,5,8])\nplt.xlabel(\"study hours\")\nplt.ylabel(\"score\")\nplt.show()"
    },
    {
      "id": "visualization-scatter-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import matplotlib.pyplot as plt\nplt.scatter([1,2,3,4],[2,5,5,8])\nplt.xlabel(\"study hours\")\nplt.ylabel(\"score\")\nplt.show()\n\nimport numpy as np\nprint(np.corrcoef([1,2,3],[2,4,6])[0,1])"
    }
  ],
  "exercises": [
    {
      "id": "visualization-scatter-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Draw three scatter points and count the offsets.",
        "ar": "ارسم ثلاث نقاط واحسب عددها."
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
          "en": "Create the requested plot using the given x and y values. Keep the figure or axes in the requested variable if asked.",
          "ar": "أنشئ الرسم المطلوب من قيم x وy المعطاة واحفظ الشكل أو المحاور في المتغير المطلوب إن طلب."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "plot = plt.scatter([1,2,3],[3,2,5])\nresult = len(plot.get_offsets())",
      "explanation": {
        "en": "Draw three scatter points and count the offsets. The solution computes this using plot = plt.scatter([1,2,3],[3,2,5]); result = len(plot.get_offsets()). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ارسم ثلاث نقاط واحسب عددها. يحسب الحل ذلك باستخدام plot = plt.scatter([1,2,3],[3,2,5]); result = len(plot.get_offsets()). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-scatter-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find Pearson correlation for [1,2,3] and [2,4,6].",
        "ar": "احسب معامل الارتباط للسلسلتين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1
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
      "solution": "result = np.corrcoef([1,2,3],[2,4,6])[0,1]",
      "explanation": {
        "en": "Find Pearson correlation for [1,2,3] and [2,4,6]. The solution computes this using result = np.corrcoef([1,2,3],[2,4,6])[0,1]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب معامل الارتباط للسلسلتين. يحسب الحل ذلك باستخدام result = np.corrcoef([1,2,3],[2,4,6])[0,1]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-scatter-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Store axis limits [0,10] as a list after setting xlim.",
        "ar": "حدد حدود المحور ثم احفظها كقائمة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          0,
          10
        ]
      },
      "hints": [
        {
          "en": "Create the requested plot using the given x and y values. Keep the figure or axes in the requested variable if asked.",
          "ar": "أنشئ الرسم المطلوب من قيم x وy المعطاة واحفظ الشكل أو المحاور في المتغير المطلوب إن طلب."
        },
        {
          "en": "Return value output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "fig, ax = plt.subplots()\nax.set_xlim(0,10)\nresult = list(ax.get_xlim())",
      "explanation": {
        "en": "Store axis limits [0,10] as a list after setting xlim. The solution computes this using fig, ax = plt.subplots(); ax.set_xlim(0,10); result = list(ax.get_xlim()). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حدد حدود المحور ثم احفظها كقائمة. يحسب الحل ذلك باستخدام fig, ax = plt.subplots(); ax.set_xlim(0,10); result = list(ax.get_xlim()). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-scatter-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Calculate residuals actual=[2,5,8] minus predicted=[3,5,7].",
        "ar": "احسب الفروق بين الحقيقي والمتوقع."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          -1,
          0,
          1
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
      "solution": "result = np.array([2,5,8])-np.array([3,5,7])",
      "explanation": {
        "en": "Calculate residuals actual=[2,5,8] minus predicted=[3,5,7]. The solution computes this using result = np.array([2,5,8])-np.array([3,5,7]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الفروق بين الحقيقي والمتوقع. يحسب الحل ذلك باستخدام result = np.array([2,5,8])-np.array([3,5,7]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Make two scatter plots with the same x values but different noise. Calculate both correlations and explain why high correlation is not causation.",
      "ar": "ارسم علاقتين بنفس x وضوضاء مختلفة واحسب الارتباط واشرح لماذا لا يثبت السببية."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Both plots use the same six x values. A high correlation cannot rule out a confounder or reverse causation.",
        "ar": "يستخدم الرسمان قيم x الست نفسها. لا يستبعد الارتباط العالي عاملًا مربكًا أو سببية معكوسة."
      }
    ],
    "expected": {
      "en": "The clean correlation is 1. The noisy correlation remains positive but is below 1. Use identical x limits when comparing.",
      "ar": "الارتباط النظيف 1 والمشوش موجب لكنه أقل من 1. استخدم حدود x متطابقة للمقارنة."
    },
    "selfCheck": {
      "en": "Both plots use the same six x values. A high correlation cannot rule out a confounder or reverse causation.",
      "ar": "يستخدم الرسمان قيم x الست نفسها. لا يستبعد الارتباط العالي عاملًا مربكًا أو سببية معكوسة."
    },
    "starter": "import numpy as np\nimport matplotlib.pyplot as plt\nx=np.arange(1,7)\ny_clean=2*x\ny_noisy=np.array([1,7,3,10,8,15])\n# Plot both against x and compute correlations\n"
  }
};
