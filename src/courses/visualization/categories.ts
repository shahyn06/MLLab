import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "visualization-categories",
  "title": {
    "en": "Categories and honest comparisons",
    "ar": "الفئات والمقارنة المنصفة"
  },
  "minutes": 15,
  "intro": {
    "en": "Bar plots compare named groups. Their lengths should normally start from zero. Raw counts and proportions answer different questions. Use a consistent order, include category labels, and avoid visual decorations that exaggerate small differences.",
    "ar": "تقارن الأعمدة فئات مسماة. غالبًا يجب أن تبدأ الأطوال من صفر. التكرارات والنسب تجيب عن أسئلة مختلفة. استخدم ترتيبًا ثابتًا وتجنب زخارف تضخم الفروق."
  },
  "cells": [
    {
      "id": "visualization-categories-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ntable=pd.DataFrame({\"group\":[\"A\",\"B\",\"C\"],\"count\":[3,7,5]})\nsns.barplot(data=table,x=\"group\",y=\"count\")\nplt.show()"
    },
    {
      "id": "visualization-categories-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ntable=pd.DataFrame({\"group\":[\"A\",\"B\",\"C\"],\"count\":[3,7,5]})\nsns.barplot(data=table,x=\"group\",y=\"count\")\nplt.show()\n\nprint(\"A zero baseline is useful for comparing bar lengths.\")"
    }
  ],
  "exercises": [
    {
      "id": "visualization-categories-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Create a bar plot with heights [3,7,5], store patch heights as result.",
        "ar": "ارسم أعمدة واحفظ ارتفاعاتها كقائمة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          3,
          7,
          5
        ]
      },
      "hints": [
        {
          "en": "Create the requested plot using the given x and y values. Keep the figure or axes in the requested variable if asked.",
          "ar": "أنشئ الرسم المطلوب من قيم x وy المعطاة واحفظ الشكل أو المحاور في المتغير المطلوب إن طلب."
        },
        {
          "en": "Return value output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "fig, ax = plt.subplots()\nax.bar([\"A\",\"B\",\"C\"],[3,7,5])\nresult = [p.get_height() for p in ax.patches]",
      "explanation": {
        "en": "Create a bar plot with heights [3,7,5], store patch heights as result. The solution computes this using fig, ax = plt.subplots(); ax.bar([\"A\",\"B\",\"C\"],[3,7,5]); result = [p.get_height() for p in ax.patches]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ارسم أعمدة واحفظ ارتفاعاتها كقائمة. يحسب الحل ذلك باستخدام fig, ax = plt.subplots(); ax.bar([\"A\",\"B\",\"C\"],[3,7,5]); result = [p.get_height() for p in ax.patches]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-categories-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Normalize [3,7] to proportions.",
        "ar": "حوّل القيم لنسب مجموعها واحد."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0.3,
          0.7
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
      "solution": "result = np.array([3,7])/10",
      "explanation": {
        "en": "Normalize [3,7] to proportions. The solution computes this using result = np.array([3,7])/10. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حوّل القيم لنسب مجموعها واحد. يحسب الحل ذلك باستخدام result = np.array([3,7])/10. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-categories-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Set y limits to [0,10], then store them as a list.",
        "ar": "ابدأ المحور الرأسي من صفر واحفظ حدوده."
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
      "solution": "fig, ax = plt.subplots()\nax.set_ylim(0,10)\nresult = list(ax.get_ylim())",
      "explanation": {
        "en": "Set y limits to [0,10], then store them as a list. The solution computes this using fig, ax = plt.subplots(); ax.set_ylim(0,10); result = list(ax.get_ylim()). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ابدأ المحور الرأسي من صفر واحفظ حدوده. يحسب الحل ذلك باستخدام fig, ax = plt.subplots(); ax.set_ylim(0,10); result = list(ax.get_ylim()). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "visualization-categories-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Find the name with highest value in {\"A\":3,\"B\":7,\"C\":5}.",
        "ar": "حدد اسم الفئة الأعلى قيمة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use(\"Agg\")\nimport matplotlib.pyplot as plt\nimport seaborn as sns",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": "B"
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
      "solution": "values={\"A\":3,\"B\":7,\"C\":5}\nresult = max(values,key=values.get)",
      "explanation": {
        "en": "Find the name with highest value in {\"A\":3,\"B\":7,\"C\":5}. The solution computes this using values={\"A\":3,\"B\":7,\"C\":5}; result = max(values,key=values.get). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حدد اسم الفئة الأعلى قيمة. يحسب الحل ذلك باستخدام values={\"A\":3,\"B\":7,\"C\":5}; result = max(values,key=values.get). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compare raw counts and normalized proportions for three groups using labeled bar charts with a zero baseline.",
      "ar": "قارن التكرارات والنسب لثلاث فئات بأعمدة مسماة تبدأ من صفر."
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
