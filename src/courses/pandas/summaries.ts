import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "pandas-summaries",
  "title": {
    "en": "Summaries and transformations",
    "ar": "التلخيص والتحويلات"
  },
  "minutes": 15,
  "intro": {
    "en": "Summaries reduce many values into a statistic such as mean or count. Transformations preserve one result per row. nunique counts distinct values, not rows. String methods live under .str. Keep the unit of the result clear: mean rating is not total sales.",
    "ar": "التلخيص يحول قيمًا كثيرة لإحصاء كالمتوسط أو العدد. التحويلات تحفظ نتيجة لكل صف. nunique يعد القيم المختلفة لا الصفوف. دوال النصوص تحت .str. متوسط التقييم ليس إجمالي المبيعات."
  },
  "cells": [
    {
      "id": "pandas-summaries-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.rating.describe())"
    },
    {
      "id": "pandas-summaries-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import pandas as pd\ndf = pd.read_csv(\"data/reviews.csv\")\nprint(df.rating.describe())\n\nprint(df.assign(double_units=df.units * 2)[[\"item\",\"double_units\"]])"
    }
  ],
  "exercises": [
    {
      "id": "pandas-summaries-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Calculate the mean rating.",
        "ar": "احسب متوسط التقييم."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 3.8333333333333335
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
      "solution": "result = df.rating.mean()",
      "explanation": {
        "en": "Calculate the mean rating. The solution computes this using result = df.rating.mean(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط التقييم. يحسب الحل ذلك باستخدام result = df.rating.mean(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-summaries-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Count distinct items.",
        "ar": "احسب عدد العناصر المختلفة."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 3
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
      "solution": "result = df.item.nunique()",
      "explanation": {
        "en": "Count distinct items. The solution computes this using result = df.item.nunique(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب عدد العناصر المختلفة. يحسب الحل ذلك باستخدام result = df.item.nunique(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-summaries-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Create a Series result that doubles each units value.",
        "ar": "أنشئ Series تضاعف قيم units."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "series",
        "variable": "result",
        "expected": [
          4,
          6,
          2,
          8,
          4,
          2
        ]
      },
      "hints": [
        {
          "en": "Separate the factors and calculate their product. Keep the result numeric rather than putting the expression in quotes.",
          "ar": "حدد العوامل واحسب حاصل ضربها. أبق النتيجة عددية ولا تضع التعبير بين علامتي اقتباس."
        },
        {
          "en": "Return series output with shape [6]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع series بالأبعاد [6]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.units * 2",
      "explanation": {
        "en": "Create a Series result that doubles each units value. The solution computes this using result = df.units * 2. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "أنشئ Series تضاعف قيم units. يحسب الحل ذلك باستخدام result = df.units * 2. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "pandas-summaries-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Convert item names to uppercase in a list result.",
        "ar": "حوّل أسماء العناصر لحروف كبيرة كقائمة."
      },
      "starter": "# Your code here\n",
      "setup": "import pandas as pd\nimport numpy as np\ndf = pd.read_csv(\"data/reviews.csv\")",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          "TEA",
          "COFFEE",
          "TEA",
          "JUICE",
          "COFFEE",
          "JUICE"
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output with shape [6]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [6]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = df.item.str.upper().tolist()",
      "explanation": {
        "en": "Convert item names to uppercase in a list result. The solution computes this using result = df.item.str.upper().tolist(). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حوّل أسماء العناصر لحروف كبيرة كقائمة. يحسب الحل ذلك باستخدام result = df.item.str.upper().tolist(). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Compare mean rating with units-weighted mean rating in the review table. Explain why the two answers need not agree.",
      "ar": "قارن متوسط التقييم بالمتوسط الموزون بالكمية واشرح سبب اختلافهما."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Check weights sum to 13 and do not divide the weighted sum by the number of rows.",
        "ar": "تحقق أن مجموع الأوزان 13 ولا تقسم المجموع المرجح على عدد الصفوف."
      }
    ],
    "expected": {
      "en": "Unweighted mean is 23/6, approximately 3.8333. Weighted mean is 47/13, approximately 3.6154.",
      "ar": "المتوسط البسيط 23/6 أي نحو 3.8333 والمرجح 47/13 أي نحو 3.6154."
    },
    "selfCheck": {
      "en": "Check weights sum to 13 and do not divide the weighted sum by the number of rows.",
      "ar": "تحقق أن مجموع الأوزان 13 ولا تقسم المجموع المرجح على عدد الصفوف."
    },
    "starter": "import pandas as pd\ndf=pd.read_csv(\"data/reviews.csv\")\n# Compute rating.mean() and sum(rating*units)/sum(units)\n"
  }
};
