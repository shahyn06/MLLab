import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "evaluation-splits",
  "title": {
    "en": "Hold out unseen data",
    "ar": "تخصيص بيانات لم يرها النموذج"
  },
  "minutes": 15,
  "intro": {
    "en": "A test set estimates generalization only if it stays unseen during model selection. Split before fitting preprocessing. A random seed makes a split repeatable. For time-dependent or grouped observations, use a split respecting that structure instead of blindly shuffling.",
    "ar": "يقيس الاختبار التعميم فقط إذا بقي بعيدًا عن اختيار النموذج. قسم قبل تجهيز البيانات. تجعل البذرة التقسيم متكررًا. للزمن أو المجموعات استخدم تقسيمًا يحترم البنية بدل الخلط العشوائي."
  },
  "cells": [
    {
      "id": "evaluation-splits-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from sklearn.model_selection import train_test_split\nX=list(range(20))\ntrain,test=train_test_split(X,test_size=.25,random_state=7)\nprint(len(train),len(test))"
    },
    {
      "id": "evaluation-splits-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from sklearn.model_selection import train_test_split\nX=list(range(20))\ntrain,test=train_test_split(X,test_size=.25,random_state=7)\nprint(len(train),len(test))\n\nprint(set(train).isdisjoint(test))"
    }
  ],
  "exercises": [
    {
      "id": "evaluation-splits-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Split 20 indices with test_size=.25 and store test count.",
        "ar": "قسم 20 فهرسًا واحفظ حجم الاختبار."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 5
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
      "solution": "a,b=train_test_split(list(range(20)),test_size=.25,random_state=7)\nresult=len(b)",
      "explanation": {
        "en": "Split 20 indices with test_size=.25 and store test count. The solution computes this using a,b=train_test_split(list(range(20)),test_size=.25,random_state=7); result=len(b). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "قسم 20 فهرسًا واحفظ حجم الاختبار. يحسب الحل ذلك باستخدام a,b=train_test_split(list(range(20)),test_size=.25,random_state=7); result=len(b). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-splits-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Store whether train=[0,1,2] and test=[3,4] overlap.",
        "ar": "هل تتداخل المجموعتان؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": false
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
      "solution": "result = bool(set([0,1,2]) & set([3,4]))",
      "explanation": {
        "en": "Store whether train=[0,1,2] and test=[3,4] overlap. The solution computes this using result = bool(set([0,1,2]) & set([3,4])). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل تتداخل المجموعتان؟ يحسب الحل ذلك باستخدام result = bool(set([0,1,2]) & set([3,4])). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-splits-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Calculate training count for 100 samples with 20% test.",
        "ar": "احسب حجم التدريب."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 80
      },
      "hints": [
        {
          "en": "Use an explicit type conversion. Check the type of the input before combining numbers and text.",
          "ar": "استخدم تحويل نوع صريحًا وافحص نوع المدخل قبل الجمع بين الأعداد والنصوص."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=100-int(100*.2)",
      "explanation": {
        "en": "Calculate training count for 100 samples with 20% test. The solution computes this using result=100-int(100*.2). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب حجم التدريب. يحسب الحل ذلك باستخدام result=100-int(100*.2). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    },
    {
      "id": "evaluation-splits-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Check that a seeded split repeats exactly.",
        "ar": "تحقق أن نفس البذرة تكرر التقسيم."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split, KFold",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": true
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
      "solution": "a=train_test_split(list(range(20)),random_state=7)\nb=train_test_split(list(range(20)),random_state=7)\nresult = a==b",
      "explanation": {
        "en": "Check that a seeded split repeats exactly. The solution computes this using a=train_test_split(list(range(20)),random_state=7); b=train_test_split(list(range(20)),random_state=7); result = a==b. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "تحقق أن نفس البذرة تكرر التقسيم. يحسب الحل ذلك باستخدام a=train_test_split(list(range(20)),random_state=7); b=train_test_split(list(range(20)),random_state=7); result = a==b. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/evaluation"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Create one seeded 80/20 split of 30 indices, verify no overlap and show every index appears exactly once.",
      "ar": "أنشئ تقسيمًا ثابتًا لـ30 فهرسًا وتحقق من عدم التداخل وعدم فقد أي فهرس."
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
