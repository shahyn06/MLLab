import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "intro-ml-classification",
  "title": {
    "en": "Perceptron and logistic probabilities",
    "ar": "Perceptron والاحتمال اللوجستي"
  },
  "minutes": 15,
  "intro": {
    "en": "A perceptron thresholds a weighted sum. Logistic regression applies a sigmoid to obtain a probability between zero and one, then uses a chosen decision threshold. The threshold can change precision and recall without changing the learned probability model.",
    "ar": "يطبق Perceptron عتبة على مجموع موزون. يحول الانحدار اللوجستي المجموع لاحتمال بين صفر وواحد ثم يطبق عتبة قرار. تغيير العتبة يؤثر على الدقة والاستدعاء دون تغيير الاحتمالات المتعلمة."
  },
  "cells": [
    {
      "id": "intro-ml-classification-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nz=np.array([-2.,0.,2.])\np=1/(1+np.exp(-z))\nprint(p)"
    },
    {
      "id": "intro-ml-classification-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nz=np.array([-2.,0.,2.])\np=1/(1+np.exp(-z))\nprint(p)\n\nprint((p>=.5).astype(int))"
    }
  ],
  "exercises": [
    {
      "id": "intro-ml-classification-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Find sigmoid(0).",
        "ar": "احسب sigmoid عند صفر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.5
      },
      "hints": [
        {
          "en": "Keep parentheses around the base or numerator. Python evaluates powers before multiplication and addition.",
          "ar": "ضع أقواسًا حول الأساس أو البسط؛ يحسب Python الأسس قبل الضرب والجمع."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = 1/(1+np.exp(0))",
      "explanation": {
        "en": "Find sigmoid(0). The solution computes this using result = 1/(1+np.exp(0)). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب sigmoid عند صفر. يحسب الحل ذلك باستخدام result = 1/(1+np.exp(0)). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/perceptron"
    },
    {
      "id": "intro-ml-classification-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Classify probabilities [.2,.5,.8] with threshold .5.",
        "ar": "صنف الاحتمالات بعتبة .5."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          0,
          1,
          1
        ]
      },
      "hints": [
        {
          "en": "Build the NumPy array first and inspect its shape and dtype before applying the operation.",
          "ar": "أنشئ مصفوفة NumPy أولًا وافحص shape وdtype قبل العملية."
        },
        {
          "en": "Return array output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = (np.array([.2,.5,.8]) >= .5).astype(int)",
      "explanation": {
        "en": "Classify probabilities [.2,.5,.8] with threshold .5. The solution computes this using result = (np.array([.2,.5,.8]) >= .5).astype(int). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "صنف الاحتمالات بعتبة .5. يحسب الحل ذلك باستخدام result = (np.array([.2,.5,.8]) >= .5).astype(int). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/perceptron"
    },
    {
      "id": "intro-ml-classification-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Use weights [1,1], bias=-1.5, classify [1,1] with step threshold 0.",
        "ar": "احسب تصنيف Perceptron للمدخلين."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1
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
      "solution": "result = int(np.dot([1,1],[1,1])-1.5>=0)",
      "explanation": {
        "en": "Use weights [1,1], bias=-1.5, classify [1,1] with step threshold 0. The solution computes this using result = int(np.dot([1,1],[1,1])-1.5>=0). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب تصنيف Perceptron للمدخلين. يحسب الحل ذلك باستخدام result = int(np.dot([1,1],[1,1])-1.5>=0). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/perceptron"
    },
    {
      "id": "intro-ml-classification-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Open the Perceptron lab, select XOR and try more epochs. Observe that one straight boundary cannot fit all four labels. Then compute the probability loss below. Calculate binary cross-entropy for y=1, p=.8.",
        "ar": "افتح معمل Perceptron واختر XOR وجرب حقبًا أكثر. لاحظ عجز حد مستقيم واحد عن ملاءمة التسميات الأربع ثم احسب خسارة الاحتمال أدناه. احسب الخسارة الثنائية للقيمة الصحيحة 1."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_squared_error",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.2231435513142097
      },
      "hints": [
        {
          "en": "Keep parentheses around the base or numerator. Python evaluates powers before multiplication and addition.",
          "ar": "ضع أقواسًا حول الأساس أو البسط؛ يحسب Python الأسس قبل الضرب والجمع."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = -np.log(.8)",
      "explanation": {
        "en": "Calculate binary cross-entropy for y=1, p=.8. The solution computes this using result = -np.log(.8). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الخسارة الثنائية للقيمة الصحيحة 1. يحسب الحل ذلك باستخدام result = -np.log(.8). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/perceptron"
    }
  ],
  "challenge": {
    "goal": {
      "en": "For probabilities [.2,.45,.6,.9], compare predicted labels at thresholds .4 and .7. Relate the change to the classifier lab.",
      "ar": "قارن التصنيف بعتبتي .4 و.7 واربط الفرق بمعمل التصنيف."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Open the classifier lab and distinguish changing its threshold from retraining its weights.",
        "ar": "افتح معمل التصنيف وميز تغيير عتبة القرار من إعادة تدريب الأوزان."
      }
    ],
    "expected": {
      "en": "At .4 labels are [0,1,1,1]; at .7 labels are [0,0,0,1]. The probabilities themselves are unchanged.",
      "ar": "عند .4 التسميات [0,1,1,1] وعند .7 [0,0,0,1]. لا تتغير الاحتمالات نفسها."
    },
    "selfCheck": {
      "en": "Open the classifier lab and distinguish changing its threshold from retraining its weights.",
      "ar": "افتح معمل التصنيف وميز تغيير عتبة القرار من إعادة تدريب الأوزان."
    },
    "starter": "import numpy as np\np=np.array([.2,.45,.6,.9])\n# Compare (p>=threshold).astype(int) for .4 and .7\n"
  }
};
