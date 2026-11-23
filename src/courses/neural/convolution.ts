import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "neural-convolution",
  "title": {
    "en": "Convolution and pooling",
    "ar": "الالتفاف والتجميع"
  },
  "minutes": 15,
  "intro": {
    "en": "A convolutional layer reuses a small filter across positions. Many libraries implement cross-correlation without reversing the kernel. Stride and padding determine output size. Pooling summarizes a local region and reduces spatial resolution.",
    "ar": "تعيد طبقة الالتفاف استخدام مرشح صغير عبر المواضع. تنفذ مكتبات كثيرة ارتباطًا متقاطعًا دون عكس المرشح. تحدد الخطوة والحشو حجم الخرج ويلخص Pooling المنطقة ويقلل الدقة."
  },
  "cells": [
    {
      "id": "neural-convolution-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nx=np.array([1,2,4,3]);k=np.array([-1,1])\nprint(np.correlate(x,k,mode=\"valid\"))"
    },
    {
      "id": "neural-convolution-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nx=np.array([1,2,4,3]);k=np.array([-1,1])\nprint(np.correlate(x,k,mode=\"valid\"))\n\nprint(np.max([[1,5],[2,3]]))"
    }
  ],
  "exercises": [
    {
      "id": "neural-convolution-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Cross-correlate [1,2,4,3] with [-1,1] in valid mode.",
        "ar": "طبق الارتباط المتقاطع دون حشو."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          1,
          2,
          -1
        ]
      },
      "hints": [
        {
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return array output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=np.correlate([1,2,4,3],[-1,1],mode=\"valid\")",
      "explanation": {
        "en": "Cross-correlate [1,2,4,3] with [-1,1] in valid mode. The solution computes this using result=np.correlate([1,2,4,3],[-1,1],mode=\"valid\"). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "طبق الارتباط المتقاطع دون حشو. يحسب الحل ذلك باستخدام result=np.correlate([1,2,4,3],[-1,1],mode=\"valid\"). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/cnn"
    },
    {
      "id": "neural-convolution-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find max pool over [[1,5],[2,3]].",
        "ar": "احسب أكبر قيمة في النافذة."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result=np.max([[1,5],[2,3]])",
      "explanation": {
        "en": "Find max pool over [[1,5],[2,3]]. The solution computes this using result=np.max([[1,5],[2,3]]). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب أكبر قيمة في النافذة. يحسب الحل ذلك باستخدام result=np.max([[1,5],[2,3]]). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/cnn"
    },
    {
      "id": "neural-convolution-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find output width for input=8,kernel=3,stride=1,padding=0.",
        "ar": "احسب عرض الخرج."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 6
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
      "solution": "result=(8-3)//1+1",
      "explanation": {
        "en": "Find output width for input=8,kernel=3,stride=1,padding=0. The solution computes this using result=(8-3)//1+1. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب عرض الخرج. يحسب الحل ذلك باستخدام result=(8-3)//1+1. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/cnn"
    },
    {
      "id": "neural-convolution-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Open the CNN lab and edit a pixel near an edge. Inspect the changed activation map before counting a filter’s weights below. Count weights for one 3x3 filter on one input channel, excluding bias.",
        "ar": "افتح معمل CNN وعدل بكسلًا قرب حافة وافحص تغير خريطة التنشيط قبل حساب أوزان المرشح أدناه. احسب أوزان مرشح 3 في 3 لقناة واحدة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 9
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
      "solution": "result=3*3",
      "explanation": {
        "en": "Count weights for one 3x3 filter on one input channel, excluding bias. The solution computes this using result=3*3. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب أوزان مرشح 3 في 3 لقناة واحدة. يحسب الحل ذلك باستخدام result=3*3. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      },
      "labRoute": "/cnn"
    }
  ],
  "challenge": {
    "goal": {
      "en": "Apply an edge filter to a small 2D array, compare valid output with padded output, and explain output sizes.",
      "ar": "طبق مرشح حواف على مصفوفة صغيرة وقارن الخرج دون حشو ومعه واشرح الأبعاد."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Call this cross-correlation: the kernel is not flipped. Derive width n+2p-k+1 for stride 1.",
        "ar": "سمها ارتباطًا متقاطعًا؛ المرشح غير مقلوب. اشتق العرض n+2p-k+1 عند خطوة 1."
      }
    ],
    "expected": {
      "en": "Without padding output is (2,2), all values -3. Padding one pixel on all sides gives shape (4,4), with boundary effects.",
      "ar": "دون حشو الناتج (2,2) وكل قيمه -3. حشو بكسل على كل جانب يعطي (4,4) مع آثار حدودية."
    },
    "selfCheck": {
      "en": "Call this cross-correlation: the kernel is not flipped. Derive width n+2p-k+1 for stride 1.",
      "ar": "سمها ارتباطًا متقاطعًا؛ المرشح غير مقلوب. اشتق العرض n+2p-k+1 عند خطوة 1."
    },
    "starter": "import numpy as np\nimage=np.array([[1,2,3],[4,5,6],[7,8,9]])\nkernel=np.array([[1,0],[-1,0]])\n# Define a valid cross-correlation using a loop and np.sum(image_window*kernel)\n# Compare original input with np.pad(image,1)\n"
  }
};
