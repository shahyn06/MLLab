import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "classical-trees",
  "title": {
    "en": "Trees and forests",
    "ar": "الأشجار والغابات"
  },
  "minutes": 15,
  "intro": {
    "en": "A decision tree splits data by feature thresholds. Depth controls complexity. A random forest averages or votes across varied trees; boosting adds models sequentially to correct errors. All still need held-out evaluation, and their feature importance is not causal evidence.",
    "ar": "تقسم الشجرة البيانات بعتبات ويتحكم العمق في التعقيد. تجمع الغابة أشجارًا مختلفة ويضيف Boosting نماذج تباعًا لتصحيح الخطأ. تحتاج كلها تقييمًا مستقلًا وأهمية المدخل لا تثبت السببية."
  },
  "cells": [
    {
      "id": "classical-trees-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from sklearn.tree import DecisionTreeClassifier\nX=[[0],[1],[2],[3]];y=[0,0,1,1]\nm=DecisionTreeClassifier(max_depth=1,random_state=7).fit(X,y)\nprint(m.predict([[.5],[2.5]]))"
    },
    {
      "id": "classical-trees-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from sklearn.tree import DecisionTreeClassifier\nX=[[0],[1],[2],[3]];y=[0,0,1,1]\nm=DecisionTreeClassifier(max_depth=1,random_state=7).fit(X,y)\nprint(m.predict([[.5],[2.5]]))\n\nprint(m.tree_.threshold[0])"
    }
  ],
  "exercises": [
    {
      "id": "classical-trees-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Train that depth-1 tree and predict .5 and 2.5.",
        "ar": "درب شجرة بعمق 1 وتنبأ بالقيمتين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          1
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
      "solution": "from sklearn.tree import DecisionTreeClassifier\nm=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1])\nresult=m.predict([[.5],[2.5]])",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting array with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      },
      "labRoute": "/classical"
    },
    {
      "id": "classical-trees-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Store the root threshold of that tree.",
        "ar": "احفظ عتبة الجذر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.5
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
      "solution": "from sklearn.tree import DecisionTreeClassifier\nm=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1])\nresult=m.tree_.threshold[0]",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      },
      "labRoute": "/classical"
    },
    {
      "id": "classical-trees-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Fit a five-tree forest and count estimators.",
        "ar": "درب غابة بخمس أشجار واحسبها."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 5
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
      "solution": "from sklearn.ensemble import RandomForestClassifier\nm=RandomForestClassifier(n_estimators=5,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1])\nresult=len(m.estimators_)",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      },
      "labRoute": "/classical"
    },
    {
      "id": "classical-trees-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Fit a depth-1 regressor on x=0,1,2,3 and y=0,0,4,4; predict 2.5.",
        "ar": "درب شجرة انحدار وتنبأ."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
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
      "solution": "from sklearn.tree import DecisionTreeRegressor\nm=DecisionTreeRegressor(max_depth=1).fit([[0],[1],[2],[3]],[0,0,4,4])\nresult=m.predict([[2.5]])[0]",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      },
      "labRoute": "/classical"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Fit depth-1 and depth-3 trees to the same synthetic classification data and compare training and held-out accuracy.",
      "ar": "درب شجرتين بعمقي 1 و3 وقارن دقة التدريب والاختبار على نفس البيانات المصطنعة."
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
