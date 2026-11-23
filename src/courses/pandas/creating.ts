import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "pandas-creating",
  "title": {
    "en": "Creating, reading and writing tables",
    "ar": "إنشاء الجداول وقراءتها وكتابتها"
  },
  "minutes": 15,
  "intro": {
    "en": "A DataFrame is a table with named columns; a Series is one labeled column. Give equally long lists to construct a table. read_csv reads a file into memory; to_csv writes a file. Use index=False when row numbers are not part of your dataset. The six review rows here are original synthetic data.",
    "ar": "DataFrame جدول بأعمدة مسماة و Series عمود واحد بفهرس. يجب تساوي أطوال قوائم الأعمدة. read_csv يقرأ الملف و to_csv يكتبه. استخدم index=False إذا لم تكن أرقام الصفوف جزءًا من البيانات. بيانات التقييمات الستة هنا أصلية ومصطنعة."
  },
  "cells": [
    {
      "id": "pandas-creating-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import pandas as pd\nvisits = pd.DataFrame({\"day\":[\"Mon\",\"Tue\"],\"visitors\":[12,18]})\nprint(visits)"
    },
    {
      "id": "pandas-creating-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import pandas as pd\nvisits = pd.DataFrame({\"day\":[\"Mon\",\"Tue\"],\"visitors\":[12,18]})\nprint(visits)\n\nratings = pd.Series([4,5,3], name=\"rating\")\nprint(ratings)\nvisits.to_csv(\"data/visits.csv\",index=False)\nprint(pd.read_csv(\"data/visits.csv\"))"
    }
  ],
  "exercises": [
    {
      "id": "pandas-creating-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Create result as a DataFrame with item [\"tea\",\"coffee\"] and price [12,18], in that column order.",
        "ar": "أنشئ DataFrame باسم result بعمودي item و price بالترتيب المحدد."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "frame",
        "variable": "result",
        "expected": [
          [
            "tea",
            12
          ],
          [
            "coffee",
            18
          ]
        ],
        "columns": [
          "item",
          "price"
        ]
      },
      "hints": [
        {
          "en": "Construct a DataFrame with a dictionary whose keys are the requested column names. Keep each column list the same length.",
          "ar": "أنشئ DataFrame من قاموس مفاتيحه أسماء الأعمدة المطلوبة وقوائمه متساوية الطول."
        },
        {
          "en": "Return frame output with shape [2, 2]. Column order: item, price. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع frame بالأبعاد [2, 2] وترتيب الأعمدة item, price. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = pd.DataFrame({\"item\":[\"tea\",\"coffee\"],\"price\":[12,18]})",
      "explanation": {
        "en": "Create result as a DataFrame with item [\"tea\",\"coffee\"] and price [12,18], in that column order. The solution computes this using result = pd.DataFrame({\"item\":[\"tea\",\"coffee\"],\"price\":[12,18]}). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أنشئ DataFrame باسم result بعمودي item و price بالترتيب المحدد. يحسب الحل ذلك باستخدام result = pd.DataFrame({\"item\":[\"tea\",\"coffee\"],\"price\":[12,18]}). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-creating-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Create a Series result containing [4,5,3].",
        "ar": "أنشئ Series بالقيم [4,5,3]."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return series output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع series بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = pd.Series([4,5,3])",
      "explanation": {
        "en": "Create a Series result containing [4,5,3]. The solution computes this using result = pd.Series([4,5,3]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أنشئ Series بالقيم [4,5,3]. يحسب الحل ذلك باستخدام result = pd.Series([4,5,3]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-creating-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Read data/reviews.csv into result, keeping only columns item and rating.",
        "ar": "اقرأ الملف واختر عمودي item و rating."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "frame",
        "variable": "result",
        "expected": [
          [
            "tea",
            4
          ],
          [
            "coffee",
            5
          ],
          [
            "tea",
            3
          ],
          [
            "juice",
            2
          ],
          [
            "coffee",
            4
          ],
          [
            "juice",
            5
          ]
        ],
        "columns": [
          "item",
          "rating"
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return frame output with shape [6, 2]. Column order: item, rating. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع frame بالأبعاد [6, 2] وترتيب الأعمدة item, rating. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = pd.read_csv(\"data/reviews.csv\")[[\"item\",\"rating\"]]",
      "explanation": {
        "en": "Read data/reviews.csv into result, keeping only columns item and rating. The solution computes this using result = pd.read_csv(\"data/reviews.csv\")[[\"item\",\"rating\"]]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اقرأ الملف واختر عمودي item و rating. يحسب الحل ذلك باستخدام result = pd.read_csv(\"data/reviews.csv\")[[\"item\",\"rating\"]]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-creating-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Write the first two review rows to data/sample.csv without an index, read them back, and keep item and rating in result.",
        "ar": "اكتب أول صفين دون الفهرس ثم اقرأهما واختر العمودين."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "frame",
        "variable": "result",
        "expected": [
          [
            "tea",
            4
          ],
          [
            "coffee",
            5
          ]
        ],
        "columns": [
          "item",
          "rating"
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return frame output with shape [2, 2]. Column order: item, rating. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع frame بالأبعاد [2, 2] وترتيب الأعمدة item, rating. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "df.head(2).to_csv(\"data/sample.csv\",index=False)\nresult = pd.read_csv(\"data/sample.csv\")[[\"item\",\"rating\"]]",
      "explanation": {
        "en": "Write the first two review rows to data/sample.csv without an index, read them back, and keep item and rating in result. The solution computes this using df.head(2).to_csv(\"data/sample.csv\",index=False); result = pd.read_csv(\"data/sample.csv\")[[\"item\",\"rating\"]]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اكتب أول صفين دون الفهرس ثم اقرأهما واختر العمودين. يحسب الحل ذلك باستخدام df.head(2).to_csv(\"data/sample.csv\",index=False); result = pd.read_csv(\"data/sample.csv\")[[\"item\",\"rating\"]]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Create a two-row drink menu, save it to CSV without an index, reload it and check that the column order and both prices are unchanged.",
      "ar": "أنشئ قائمة مشروبات من صفين واحفظها CSV دون فهرس ثم اقرأها وتحقق من ترتيب الأعمدة والأسعار."
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
