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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = df.note.isna().sum()",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = df.note.fillna(\"none\").head(3).tolist()",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "prices = pd.DataFrame({\"item\":[\"tea\",\"coffee\",\"juice\"],\"price\":[12,18,15]})\njoined = df.merge(prices,on=\"item\",how=\"left\",validate=\"many_to_one\")\nresult = (joined.units * joined.price).sum()",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = len(df.dropna(subset=[\"note\"]))",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
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
