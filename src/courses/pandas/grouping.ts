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
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Group totals must sum to the original 13 units; use item name as the secondary sort key.",
        "ar": "يجب أن يجمع إجمالي المجموعات إلى 13 واستخدم اسم الصنف مفتاح فرز ثانويًا."
      }
    ],
    "expected": {
      "en": "Coffee and juice each have 5 units, tea has 3. Tie order is coffee, juice, tea. Mean ratings are 4.5, 3.5 and 3.5 respectively in that order.",
      "ar": "للقهوة والعصير 5 وحدات وللشاي 3. ترتيب التعادل coffee ثم juice ثم tea ومتوسطات التقييم بهذا الترتيب 4.5 و3.5 و3.5."
    },
    "selfCheck": {
      "en": "Group totals must sum to the original 13 units; use item name as the secondary sort key.",
      "ar": "يجب أن يجمع إجمالي المجموعات إلى 13 واستخدم اسم الصنف مفتاح فرز ثانويًا."
    },
    "starter": "import pandas as pd\ndf=pd.read_csv(\"data/reviews.csv\")\n# Aggregate units=sum and rating=mean by item, then sort\n"
  }
};
