import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "neural-sequences",
  "title": {
    "en": "Recurrent state and LSTM gates",
    "ar": "الحالة المتكررة وبوابات LSTM"
  },
  "minutes": 15,
  "intro": {
    "en": "A recurrent model combines the new input with its previous state, so order matters. LSTM uses gates to manage retained and newly written information. The forget gate scales the old cell and the input gate scales the candidate; the output gate controls the visible hidden state.",
    "ar": "يجمع النموذج المتكرر المدخل الجديد والحالة السابقة فيهم الترتيب. تستخدم LSTM بوابات للاحتفاظ والكتابة. تضرب بوابة النسيان الخلية السابقة وبوابة الإدخال المرشح وتتحكم بوابة الخرج في الحالة الظاهرة."
  },
  "cells": [
    {
      "id": "neural-sequences-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nh=0.\nfor x in [1.,2.,3.]:\n    h=np.tanh(.5*h+.2*x)\n    print(h)"
    },
    {
      "id": "neural-sequences-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nh=0.\nfor x in [1.,2.,3.]:\n    h=np.tanh(.5*h+.2*x)\n    print(h)\n\nf=.8;c_old=2.;i=.5;candidate=.4\nprint(f*c_old+i*candidate)"
    }
  ],
  "exercises": [
    {
      "id": "neural-sequences-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "For h_new=tanh(.5*h+.2*x), h=0,x=1, compute new state.",
        "ar": "احسب الحالة الجديدة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0.197375320224904
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
      "solution": "result=np.tanh(.2)",
      "explanation": {
        "en": "For h_new=tanh(.5*h+.2*x), h=0,x=1, compute new state. The solution computes this using result=np.tanh(.2). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الحالة الجديدة. يحسب الحل ذلك باستخدام result=np.tanh(.2). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/sequence"
    },
    {
      "id": "neural-sequences-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Compute LSTM cell with f=.8,c_old=2,i=.5,candidate=.4.",
        "ar": "احسب حالة خلية LSTM."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1.8
      },
      "hints": [
        {
          "en": "Separate the factors and calculate their product. Keep the result numeric rather than putting the expression in quotes.",
          "ar": "حدد العوامل واحسب حاصل ضربها. أبق النتيجة عددية ولا تضع التعبير بين علامتي اقتباس."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=.8*2+.5*.4",
      "explanation": {
        "en": "Compute LSTM cell with f=.8,c_old=2,i=.5,candidate=.4. The solution computes this using result=.8*2+.5*.4. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب حالة خلية LSTM. يحسب الحل ذلك باستخدام result=.8*2+.5*.4. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/sequence"
    },
    {
      "id": "neural-sequences-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find sigmoid gate value at input zero.",
        "ar": "احسب قيمة بوابة sigmoid عند صفر."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
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
      "solution": "result=1/(1+np.exp(0))",
      "explanation": {
        "en": "Find sigmoid gate value at input zero. The solution computes this using result=1/(1+np.exp(0)). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب قيمة بوابة sigmoid عند صفر. يحسب الحل ذلك باستخدام result=1/(1+np.exp(0)). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/sequence"
    },
    {
      "id": "neural-sequences-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Open the sequence lab and compare RNN with LSTM on the same sequence task. Inspect actual predictions and the hidden-state display. Then answer about order below. Store whether order matters for a recurrent model processing a sequence.",
        "ar": "افتح معمل التسلسل وقارن RNN وLSTM على المهمة نفسها وافحص التنبؤات الفعلية وعرض الحالة المخفية ثم أجب عن الترتيب أدناه. هل ترتيب العناصر مهم للنموذج المتكرر؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
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
      "solution": "result=True",
      "explanation": {
        "en": "Store whether order matters for a recurrent model processing a sequence. The solution computes this using result=True. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "هل ترتيب العناصر مهم للنموذج المتكرر؟ يحسب الحل ذلك باستخدام result=True. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/sequence"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Run the same scalar RNN on [1,2,3] and [3,2,1]. Compare final states and explain how history affects the result.",
      "ar": "شغّل RNN قياسيًا على ترتيبين معكوسين وقارن الحالة النهائية وأثر التاريخ."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Reverse a one-element sequence as a control: its final state must not change.",
        "ar": "اعكس تسلسلًا من عنصر واحد كضابط؛ يجب ألا تتغير حالته النهائية."
      }
    ],
    "expected": {
      "en": "Final states differ because previous state affects each update. Each sequence must restart at h=0.",
      "ar": "تختلف الحالتان النهائيتان لأن الحالة السابقة تؤثر في التحديث. يجب أن يبدأ كل تسلسل من h=0."
    },
    "selfCheck": {
      "en": "Reverse a one-element sequence as a control: its final state must not change.",
      "ar": "اعكس تسلسلًا من عنصر واحد كضابط؛ يجب ألا تتغير حالته النهائية."
    },
    "starter": "import numpy as np\nfor sequence in [[1.,2.,3.],[3.,2.,1.]]:\n    h=0.\n    # h=np.tanh(.5*h+.2*x) for every x, then print final h\n"
  }
};
