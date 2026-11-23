import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "pandas-grouping",
  "title": {
    "en": "Grouping and sorting",
    "ar": "التجميع والترتيب"
  },
  "minutes": 15,
  "intro": {
    "en": "groupby splits rows by key, aggregates each group, then combines the results. sum and mean answer different questions. Sorting changes row order, not the original meaning of values. Specify secondary sort keys to make ties deterministic.",
    "ar": "يقسم groupby الصفوف حسب مفتاح ثم يلخص كل مجموعة ويجمع النتائج. sum و mean يجيبان عن سؤالين مختلفين. الترتيب لا يغير معنى القيم. حدد مفتاحًا ثانيًا لحسم التعادل."
  },
  "cells": [
    {
      "id": "pandas-grouping-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.groupby(\"item\").units.sum())"
    },
    {
      "id": "pandas-grouping-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.groupby(\"item\").units.sum())\n\nprint(df.sort_values([\"rating\",\"item\"],ascending=[False,True]))"
    }
  ],
  "exercises": [
    {
      "id": "pandas-grouping-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Sum units by item, sort item alphabetically, and store values as a list.",
        "ar": "اجمع units حسب item ورتب الأسماء ثم احفظ القيم كقائمة."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          5,
          5,
          3
        ]
      },
      "hints": [
        {
          "en": "Group rows with groupby before applying the aggregation. Select the requested output columns only.",
          "ar": "جمّع الصفوف باستخدام groupby قبل التجميع العددي واختر أعمدة الخرج المطلوبة فقط."
        },
        {
          "en": "Return value output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.groupby(\"item\").units.sum().sort_index().tolist()",
      "explanation": {
        "en": "Sum units by item, sort item alphabetically, and store values as a list. The solution computes this using result = df.groupby(\"item\").units.sum().sort_index().tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اجمع units حسب item ورتب الأسماء ثم احفظ القيم كقائمة. يحسب الحل ذلك باستخدام result = df.groupby(\"item\").units.sum().sort_index().tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-grouping-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find mean rating for each item, alphabetically sorted, as a list.",
        "ar": "احسب متوسط التقييم لكل عنصر بالترتيب الأبجدي."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          4.5,
          3.5,
          3.5
        ]
      },
      "hints": [
        {
          "en": "Group rows with groupby before applying the aggregation. Select the requested output columns only.",
          "ar": "جمّع الصفوف باستخدام groupby قبل التجميع العددي واختر أعمدة الخرج المطلوبة فقط."
        },
        {
          "en": "Return value output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.groupby(\"item\").rating.mean().sort_index().tolist()",
      "explanation": {
        "en": "Find mean rating for each item, alphabetically sorted, as a list. The solution computes this using result = df.groupby(\"item\").rating.mean().sort_index().tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط التقييم لكل عنصر بالترتيب الأبجدي. يحسب الحل ذلك باستخدام result = df.groupby(\"item\").rating.mean().sort_index().tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-grouping-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Sort by rating descending, item ascending, then keep the first two item values as a list.",
        "ar": "رتب تنازليًا بالتقييم وتصاعديًا بالاسم واختر أول اسمين."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          "coffee",
          "juice"
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.sort_values([\"rating\",\"item\"],ascending=[False,True]).item.head(2).tolist()",
      "explanation": {
        "en": "Sort by rating descending, item ascending, then keep the first two item values as a list. The solution computes this using result = df.sort_values([\"rating\",\"item\"],ascending=[False,True]).item.head(2).tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "رتب تنازليًا بالتقييم وتصاعديًا بالاسم واختر أول اسمين. يحسب الحل ذلك باستخدام result = df.sort_values([\"rating\",\"item\"],ascending=[False,True]).item.head(2).tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-grouping-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Count reviews per item in alphabetical order as a list.",
        "ar": "احسب عدد التقييمات لكل عنصر بترتيب الأسماء."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          2,
          2,
          2
        ]
      },
      "hints": [
        {
          "en": "Group rows with groupby before applying the aggregation. Select the requested output columns only.",
          "ar": "جمّع الصفوف باستخدام groupby قبل التجميع العددي واختر أعمدة الخرج المطلوبة فقط."
        },
        {
          "en": "Return value output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.groupby(\"item\").size().sort_index().tolist()",
      "explanation": {
        "en": "Count reviews per item in alphabetical order as a list. The solution computes this using result = df.groupby(\"item\").size().sort_index().tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب عدد التقييمات لكل عنصر بترتيب الأسماء. يحسب الحل ذلك باستخدام result = df.groupby(\"item\").size().sort_index().tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Build an item summary with total units and mean rating, then sort by units descending and item name ascending.",
      "ar": "أنشئ ملخصًا لكل عنصر بالكمية ومتوسط التقييم ورتبه بالكمية تنازليًا ثم الاسم تصاعديًا."
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
