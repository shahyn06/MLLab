import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "pandas-missing-merging",
  "title": {
    "en": "Missing data and table joins",
    "ar": "البيانات الناقصة ودمج الجداول"
  },
  "minutes": 15,
  "intro": {
    "en": "Missing data is not zero. Detect it with isna and choose whether to fill or drop it based on meaning. A merge matches keys across tables. A many-to-one validation prevents duplicated lookup keys from silently multiplying rows. Check the row count after a join.",
    "ar": "البيانات الناقصة ليست صفرًا. اكتشفها باستخدام isna ثم اختر الملء أو الحذف حسب المعنى. merge يطابق المفاتيح. تحقق many_to_one يمنع تضاعف الصفوف بسبب مفاتيح مكررة. افحص عدد الصفوف بعد الدمج."
  },
  "cells": [
    {
      "id": "pandas-missing-merging-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.note.isna().sum())\nprint(df.note.fillna(\"none\"))"
    },
    {
      "id": "pandas-missing-merging-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.note.isna().sum())\nprint(df.note.fillna(\"none\"))\n\nprices = pd.DataFrame({\"item\":[\"tea\",\"coffee\",\"juice\"],\"price\":[12,18,15]})\nprint(df.merge(prices,on=\"item\",how=\"left\")[[\"item\",\"units\",\"price\"]])"
    }
  ],
  "exercises": [
    {
      "id": "pandas-missing-merging-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Count missing note values.",
        "ar": "احسب القيم الناقصة في note."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
      },
      "hints": [
        {
          "en": "Trace the values entering the loop or sum. Accumulate only the values that satisfy the stated condition.",
          "ar": "تتبع القيم الداخلة في الحلقة أو الجمع واجمع فقط ما يحقق الشرط المحدد."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.note.isna().sum()",
      "explanation": {
        "en": "Count missing note values. The solution computes this using result = df.note.isna().sum(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب القيم الناقصة في note. يحسب الحل ذلك باستخدام result = df.note.isna().sum(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-missing-merging-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Fill missing note values with \"none\", then return the first three as a list.",
        "ar": "املأ القيم الناقصة بـ none واختر أول ثلاث."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          "fresh",
          "none",
          "mild"
        ]
      },
      "hints": [
        {
          "en": "Inspect isna() first. Decide whether the task asks to remove rows or replace the missing cells.",
          "ar": "افحص isna() أولًا وحدد هل المطلوب حذف الصفوف أم تعويض الخلايا المفقودة."
        },
        {
          "en": "Return value output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.note.fillna(\"none\").head(3).tolist()",
      "explanation": {
        "en": "Fill missing note values with \"none\", then return the first three as a list. The solution computes this using result = df.note.fillna(\"none\").head(3).tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "املأ القيم الناقصة بـ none واختر أول ثلاث. يحسب الحل ذلك باستخدام result = df.note.fillna(\"none\").head(3).tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-missing-merging-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Merge prices tea=12, coffee=18, juice=15, then calculate total units times price.",
        "ar": "ادمج الأسعار ثم احسب إجمالي units مضروبة في price."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 201
      },
      "hints": [
        {
          "en": "Choose the join key shared by both tables and check whether the task asks for an inner or left join.",
          "ar": "اختر مفتاح الربط المشترك وافحص هل المطلوب ربط داخلي أم أيسر."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "prices = pd.DataFrame({\"item\":[\"tea\",\"coffee\",\"juice\"],\"price\":[12,18,15]})\njoined = df.merge(prices,on=\"item\",how=\"left\",validate=\"many_to_one\")\nresult = (joined.units * joined.price).sum()",
      "explanation": {
        "en": "Merge prices tea=12, coffee=18, juice=15, then calculate total units times price. The solution computes this using prices = pd.DataFrame({\"item\":[\"tea\",\"coffee\",\"juice\"],\"price\":[12,18,15]}); joined = df.merge(prices,on=\"item\",how=\"left\",validate=\"many_to_one\"); result = (joined.units * joined.price).sum(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ادمج الأسعار ثم احسب إجمالي units مضروبة في price. يحسب الحل ذلك باستخدام prices = pd.DataFrame({\"item\":[\"tea\",\"coffee\",\"juice\"],\"price\":[12,18,15]}); joined = df.merge(prices,on=\"item\",how=\"left\",validate=\"many_to_one\"); result = (joined.units * joined.price).sum(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-missing-merging-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Drop rows with missing note and store remaining count.",
        "ar": "احذف الصفوف التي تنقصها note واحسب الباقي."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 4
      },
      "hints": [
        {
          "en": "Inspect isna() first. Decide whether the task asks to remove rows or replace the missing cells.",
          "ar": "افحص isna() أولًا وحدد هل المطلوب حذف الصفوف أم تعويض الخلايا المفقودة."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = len(df.dropna(subset=[\"note\"]))",
      "explanation": {
        "en": "Drop rows with missing note and store remaining count. The solution computes this using result = len(df.dropna(subset=[\"note\"])). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احذف الصفوف التي تنقصها note واحسب الباقي. يحسب الحل ذلك باستخدام result = len(df.dropna(subset=[\"note\"])). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Join the review table to the three-item price table, fill missing notes, and report sales by item. Confirm that the join keeps all six rows.",
      "ar": "ادمج التقييمات بجدول الأسعار واملأ الملاحظات الناقصة واعرض المبيعات لكل عنصر. تحقق من بقاء الصفوف الستة."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Use validate=\"many_to_one\" when merging prices, so duplicate price keys cannot silently multiply rows.",
        "ar": "استخدم validate=\"many_to_one\" عند الدمج حتى لا تضاعف مفاتيح السعر المكررة الصفوف بصمت."
      }
    ],
    "expected": {
      "en": "Six rows remain; no notes remain missing. Sales: coffee=90, juice=75, tea=36, total=201.",
      "ar": "تبقى ستة صفوف دون ملاحظات مفقودة. المبيعات coffee=90 وjuice=75 وtea=36 والمجموع 201."
    },
    "selfCheck": {
      "en": "Use validate=\"many_to_one\" when merging prices, so duplicate price keys cannot silently multiply rows.",
      "ar": "استخدم validate=\"many_to_one\" عند الدمج حتى لا تضاعف مفاتيح السعر المكررة الصفوف بصمت."
    },
    "starter": "import pandas as pd\ndf=pd.read_csv(\"data/reviews.csv\")\nprices=pd.DataFrame({\"item\":[\"tea\",\"coffee\",\"juice\"],\"price\":[12,18,15]})\n# Left-join, fill note, calculate units*price, group sales\n"
  }
};
