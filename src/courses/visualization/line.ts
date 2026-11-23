import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "visualization-line",
  "title": {
    "en": "Lines and change",
    "ar": "الخطوط والتغير"
  },
  "minutes": 15,
  "intro": {
    "en": "A line plot is useful when adjacent positions have a meaningful order, such as time. Label both axes and units. A line connects observations; it does not prove what happened between them. Read changes as differences between adjacent values.",
    "ar": "يفيد الرسم الخطي عندما يكون للترتيب معنى كالزمن. سم المحاور والوحدات. توصيل النقاط لا يثبت ما حدث بينها. اقرأ التغير كفرق بين قيمتين متتاليتين."
  },
  "cells": [
    {
      "id": "visualization-line-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import matplotlib.pyplot as plt\nx=[0,1,2,3]\ny=[1,3,2,5]\nplt.plot(x,y,marker=\"o\")\nplt.xlabel(\"day\")\nplt.ylabel(\"visits\")\nplt.show()"
    },
    {
      "id": "visualization-line-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import matplotlib.pyplot as plt\nx=[0,1,2,3]\ny=[1,3,2,5]\nplt.plot(x,y,marker=\"o\")\nplt.xlabel(\"day\")\nplt.ylabel(\"visits\")\nplt.show()\n\nprint(list(zip([0,1,2],[2,4,3])))"
    }
  ],
  "exercises": [
    {
      "id": "visualization-line-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Plot x=[0,1,2], y=[2,4,3]; store the line x values as result.",
        "ar": "ارسم البيانات واحفظ قيم x للخط في result."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          1,
          2
        ]
      },
      "hints": [
        {
          "en": "Create the requested plot using the given x and y values. Keep the figure or axes in the requested variable if asked.",
          "ar": "أنشئ الرسم المطلوب من قيم x وy المعطاة واحفظ الشكل أو المحاور في المتغير المطلوب إن طلب."
        },
        {
          "en": "Return array output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "line, = plt.plot([0,1,2],[2,4,3])\nresult = line.get_xdata()",
      "explanation": {
        "en": "Plot x=[0,1,2], y=[2,4,3]; store the line x values as result. The solution computes this using line, = plt.plot([0,1,2],[2,4,3]); result = line.get_xdata(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ارسم البيانات واحفظ قيم x للخط في result. يحسب الحل ذلك باستخدام line, = plt.plot([0,1,2],[2,4,3]); result = line.get_xdata(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-line-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Label the x axis \"day\" and store its text in result.",
        "ar": "سم المحور الأفقي day واحفظ نصه."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": "day"
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
      "solution": "fig, ax = plt.subplots()\nax.set_xlabel(\"day\")\nresult = ax.get_xlabel()",
      "explanation": {
        "en": "Label the x axis \"day\" and store its text in result. The solution computes this using fig, ax = plt.subplots(); ax.set_xlabel(\"day\"); result = ax.get_xlabel(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "سم المحور الأفقي day واحفظ نصه. يحسب الحل ذلك باستخدام fig, ax = plt.subplots(); ax.set_xlabel(\"day\"); result = ax.get_xlabel(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-line-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Calculate changes between adjacent values [2,5,4,8].",
        "ar": "احسب التغير بين كل قيمتين متتاليتين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          3,
          -1,
          4
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
      "solution": "result = np.diff([2,5,4,8])",
      "explanation": {
        "en": "Calculate changes between adjacent values [2,5,4,8]. The solution computes this using result = np.diff([2,5,4,8]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب التغير بين كل قيمتين متتاليتين. يحسب الحل ذلك باستخدام result = np.diff([2,5,4,8]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-line-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Plot [1,4,9] and count data points on the line.",
        "ar": "ارسم القيم واحسب عدد نقاط الخط."
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
      "solution": "line, = plt.plot([1,4,9])\nresult = len(line.get_ydata())",
      "explanation": {
        "en": "Plot [1,4,9] and count data points on the line. The solution computes this using line, = plt.plot([1,4,9]); result = len(line.get_ydata()). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ارسم القيم واحسب عدد نقاط الخط. يحسب الحل ذلك باستخدام line, = plt.plot([1,4,9]); result = len(line.get_ydata()). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Plot a seven-day visits series and its day-to-day changes on two labeled axes. Explain the difference between level and change.",
      "ar": "ارسم زيارات سبعة أيام وتغيراتها اليومية على محورين مسميين واشرح الفرق بين المستوى والتغير."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Change an interior day and verify exactly its two adjacent differences change.",
        "ar": "غير يومًا داخليًا وتحقق من تغير الفرقين المجاورين له فقط."
      }
    ],
    "expected": {
      "en": "Seven level values and six changes [2,-1,4,3,-2,4], on separate labeled axes.",
      "ar": "سبع قيم مستوى وستة تغيرات [2,-1,4,3,-2,4] على محورين منفصلين مسميين."
    },
    "selfCheck": {
      "en": "Change an interior day and verify exactly its two adjacent differences change.",
      "ar": "غير يومًا داخليًا وتحقق من تغير الفرقين المجاورين له فقط."
    },
    "starter": "import numpy as np\nimport matplotlib.pyplot as plt\nvisits=np.array([10,12,11,15,18,16,20])\n# Plot visits for days 1..7 and np.diff(visits) for days 2..7\n"
  }
};
