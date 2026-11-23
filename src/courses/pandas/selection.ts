import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "pandas-selection",
  "title": {
    "en": "Indexing and selecting",
    "ar": "الفهرسة والاختيار"
  },
  "minutes": 15,
  "intro": {
    "en": "Use loc for labels and Boolean conditions, iloc for integer positions. A single column selection returns a Series; selecting a list of column names returns a DataFrame. Combine Pandas conditions with & and parentheses, not Python and.",
    "ar": "استخدم loc للتسميات والشروط و iloc للمواضع الرقمية. اختيار عمود واحد يعيد Series وقائمة أسماء الأعمدة تعيد DataFrame. اجمع شروط Pandas باستخدام & والأقواس وليس and."
  },
  "cells": [
    {
      "id": "pandas-selection-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.loc[df.rating >= 4, [\"item\",\"rating\"]])"
    },
    {
      "id": "pandas-selection-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.loc[df.rating >= 4, [\"item\",\"rating\"]])\n\nprint(df.iloc[:2, :2])"
    }
  ],
  "exercises": [
    {
      "id": "pandas-selection-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Select the first three ratings as a Series result.",
        "ar": "اختر أول ثلاث تقييمات كـ Series."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "series",
        "variable": "result",
        "expected": [
          4,
          5,
          3
        ]
      },
      "hints": [
        {
          "en": "Use loc for labels and iloc for integer positions. A list of columns keeps a DataFrame; one column name returns a Series.",
          "ar": "استخدم loc للتسميات وiloc للمواضع الصحيحة. قائمة الأعمدة تبقي DataFrame واسم عمود واحد يعيد Series."
        },
        {
          "en": "Return series output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع series بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df[\"rating\"].iloc[:3]",
      "explanation": {
        "en": "Select the first three ratings as a Series result. The solution computes this using result = df[\"rating\"].iloc[:3]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر أول ثلاث تقييمات كـ Series. يحسب الحل ذلك باستخدام result = df[\"rating\"].iloc[:3]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-selection-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Select item values where rating is exactly 5 as a list.",
        "ar": "اختر أسماء العناصر ذات التقييم 5 كقائمة."
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
          "en": "Use loc for labels and iloc for integer positions. A list of columns keeps a DataFrame; one column name returns a Series.",
          "ar": "استخدم loc للتسميات وiloc للمواضع الصحيحة. قائمة الأعمدة تبقي DataFrame واسم عمود واحد يعيد Series."
        },
        {
          "en": "Return value output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.loc[df.rating == 5,\"item\"].tolist()",
      "explanation": {
        "en": "Select item values where rating is exactly 5 as a list. The solution computes this using result = df.loc[df.rating == 5,\"item\"].tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر أسماء العناصر ذات التقييم 5 كقائمة. يحسب الحل ذلك باستخدام result = df.loc[df.rating == 5,\"item\"].tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-selection-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Select rows at positions 1 and 3, with item and rating columns.",
        "ar": "اختر الصفين في الموضعين 1 و3 والعمودين."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "frame",
        "variable": "result",
        "expected": [
          [
            "coffee",
            5
          ],
          [
            "juice",
            2
          ]
        ],
        "columns": [
          "item",
          "rating"
        ]
      },
      "hints": [
        {
          "en": "Use loc for labels and iloc for integer positions. A list of columns keeps a DataFrame; one column name returns a Series.",
          "ar": "استخدم loc للتسميات وiloc للمواضع الصحيحة. قائمة الأعمدة تبقي DataFrame واسم عمود واحد يعيد Series."
        },
        {
          "en": "Return frame output with shape [2, 2]. Column order: item, rating. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع frame بالأبعاد [2, 2] وترتيب الأعمدة item, rating. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.iloc[[1,3]][[\"item\",\"rating\"]]",
      "explanation": {
        "en": "Select rows at positions 1 and 3, with item and rating columns. The solution computes this using result = df.iloc[[1,3]][[\"item\",\"rating\"]]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اختر الصفين في الموضعين 1 و3 والعمودين. يحسب الحل ذلك باستخدام result = df.iloc[[1,3]][[\"item\",\"rating\"]]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-selection-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Select coffee reviews with rating at least 4, then sum units.",
        "ar": "رشح تقييمات coffee بدرجة 4 فأكثر واجمع units."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 5
      },
      "hints": [
        {
          "en": "Use loc for labels and iloc for integer positions. A list of columns keeps a DataFrame; one column name returns a Series.",
          "ar": "استخدم loc للتسميات وiloc للمواضع الصحيحة. قائمة الأعمدة تبقي DataFrame واسم عمود واحد يعيد Series."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.loc[(df.item==\"coffee\") & (df.rating>=4),\"units\"].sum()",
      "explanation": {
        "en": "Select coffee reviews with rating at least 4, then sum units. The solution computes this using result = df.loc[(df.item==\"coffee\") & (df.rating>=4),\"units\"].sum(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "رشح تقييمات coffee بدرجة 4 فأكثر واجمع units. يحسب الحل ذلك باستخدام result = df.loc[(df.item==\"coffee\") & (df.rating>=4),\"units\"].sum(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Find reviews with rating at least 4 and units above 1. Report their item names and total units without changing the original table.",
      "ar": "اختر التقييمات بدرجة 4 فأكثر وكمية أكبر من 1. اعرض الأسماء وإجمالي الكمية دون تغيير الجدول."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "The full table still has six rows; the juice review with units=1 must be excluded.",
        "ar": "يبقى الجدول الكامل ستة صفوف ويستبعد تقييم العصير ذي الوحدة الواحدة."
      }
    ],
    "expected": {
      "en": "Items in source order are [tea,coffee,coffee], and their units total is 7.",
      "ar": "الأصناف بترتيب المصدر [tea,coffee,coffee] ومجموع وحداتها 7."
    },
    "selfCheck": {
      "en": "The full table still has six rows; the juice review with units=1 must be excluded.",
      "ar": "يبقى الجدول الكامل ستة صفوف ويستبعد تقييم العصير ذي الوحدة الواحدة."
    },
    "starter": "import pandas as pd\ndf=pd.read_csv(\"data/reviews.csv\")\n# Combine rating>=4 and units>1 using & with parentheses\n"
  }
};
