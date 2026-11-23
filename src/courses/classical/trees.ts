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
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.tree import DecisionTreeClassifier\nm=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1])\nresult=m.predict([[.5],[2.5]])",
      "explanation": {
        "en": "Train that depth-1 tree and predict .5 and 2.5. The solution computes this using from sklearn.tree import DecisionTreeClassifier; m=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1]); result=m.predict([[.5],[2.5]]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب شجرة بعمق 1 وتنبأ بالقيمتين. يحسب الحل ذلك باستخدام from sklearn.tree import DecisionTreeClassifier; m=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1]); result=m.predict([[.5],[2.5]]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.tree import DecisionTreeClassifier\nm=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1])\nresult=m.tree_.threshold[0]",
      "explanation": {
        "en": "Store the root threshold of that tree. The solution computes this using from sklearn.tree import DecisionTreeClassifier; m=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1]); result=m.tree_.threshold[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احفظ عتبة الجذر. يحسب الحل ذلك باستخدام from sklearn.tree import DecisionTreeClassifier; m=DecisionTreeClassifier(max_depth=1,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1]); result=m.tree_.threshold[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.ensemble import RandomForestClassifier\nm=RandomForestClassifier(n_estimators=5,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1])\nresult=len(m.estimators_)",
      "explanation": {
        "en": "Fit a five-tree forest and count estimators. The solution computes this using from sklearn.ensemble import RandomForestClassifier; m=RandomForestClassifier(n_estimators=5,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1]); result=len(m.estimators_). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب غابة بخمس أشجار واحسبها. يحسب الحل ذلك باستخدام from sklearn.ensemble import RandomForestClassifier; m=RandomForestClassifier(n_estimators=5,random_state=7).fit([[0],[1],[2],[3]],[0,0,1,1]); result=len(m.estimators_). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
        "en": "Open the classical lab, choose Decision Tree and compare depths 1 and 3 on the same seeded data. Inspect held-out accuracy rather than assuming depth always helps. Then fit the small regressor below. Fit a depth-1 regressor on x=0,1,2,3 and y=0,0,4,4; predict 2.5.",
        "ar": "افتح المعمل الكلاسيكي واختر Decision Tree وقارن العمقين 1 و3 مع تثبيت البيانات والبذرة. افحص دقة الاختبار بدل افتراض أفضلية العمق ثم لائم المنحدر الصغير أدناه. درب شجرة انحدار وتنبأ."
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
          "en": "Create the estimator, fit on the training inputs, then use its fitted attributes or predictions as requested. Do not fit on test rows.",
          "ar": "أنشئ المقدر ولائمه على مدخلات التدريب ثم استخدم خصائصه أو تنبؤاته حسب المطلوب. لا تلائم على الاختبار."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "from sklearn.tree import DecisionTreeRegressor\nm=DecisionTreeRegressor(max_depth=1).fit([[0],[1],[2],[3]],[0,0,4,4])\nresult=m.predict([[2.5]])[0]",
      "explanation": {
        "en": "Fit a depth-1 regressor on x=0,1,2,3 and y=0,0,4,4; predict 2.5. The solution computes this using from sklearn.tree import DecisionTreeRegressor; m=DecisionTreeRegressor(max_depth=1).fit([[0],[1],[2],[3]],[0,0,4,4]); result=m.predict([[2.5]])[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "درب شجرة انحدار وتنبأ. يحسب الحل ذلك باستخدام from sklearn.tree import DecisionTreeRegressor; m=DecisionTreeRegressor(max_depth=1).fit([[0],[1],[2],[3]],[0,0,4,4]); result=m.predict([[2.5]])[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
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
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Keep split and random_state fixed. Do not choose depth using the final test set in a real comparison.",
        "ar": "ثبت التقسيم والبذرة ولا تختَر العمق عبر الاختبار النهائي في مقارنة حقيقية."
      }
    ],
    "expected": {
      "en": "Two training/test score pairs using 90 training and 30 test rows. Deeper does not guarantee higher test accuracy.",
      "ar": "زوجا درجات تدريب واختبار على 90 صف تدريب و30 اختبار. العمق الأكبر لا يضمن دقة اختبار أعلى."
    },
    "selfCheck": {
      "en": "Keep split and random_state fixed. Do not choose depth using the final test set in a real comparison.",
      "ar": "ثبت التقسيم والبذرة ولا تختَر العمق عبر الاختبار النهائي في مقارنة حقيقية."
    },
    "starter": "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nX,y=make_classification(n_samples=120,n_features=4,n_redundant=0,random_state=7)\nXtr,Xte,ytr,yte=train_test_split(X,y,test_size=.25,stratify=y,random_state=7)\n# Fit depth 1 and 3 on identical training rows and print train/test accuracy\n"
  }
};
