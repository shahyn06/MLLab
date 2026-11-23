import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "statistics-sampling",
  "title": {
    "en": "Sampling and the central limit theorem",
    "ar": "العينات ونظرية الحد المركزي"
  },
  "minutes": 15,
  "intro": {
    "en": "Repeated random samples have different means. The central limit theorem describes the limiting distribution of appropriately standardized sample means under its assumptions. Standard error shrinks roughly as 1/sqrt(n), not 1/n. A seeded simulation is reproducible, not universal proof.",
    "ar": "تختلف المتوسطات بين العينات. تصف نظرية الحد المركزي التوزيع الحدي للمتوسطات المعيّرة تحت شروطها. يصغر الخطأ المعياري تقريبًا مع 1/sqrt(n) وليس 1/n. المحاكاة ببذرة قابلة للتكرار وليست برهانًا عامًا."
  },
  "cells": [
    {
      "id": "statistics-sampling-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "import numpy as np\nrng=np.random.default_rng(7)\nmeans=rng.exponential(size=(2000,30)).mean(axis=1)\nprint(round(means.mean(),2), round(means.std(),2))"
    },
    {
      "id": "statistics-sampling-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "import numpy as np\nrng=np.random.default_rng(7)\nmeans=rng.exponential(size=(2000,30)).mean(axis=1)\nprint(round(means.mean(),2), round(means.std(),2))\n\nprint(6/np.sqrt(36))"
    }
  ],
  "exercises": [
    {
      "id": "statistics-sampling-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Find standard error for standard deviation 6 and sample size 36.",
        "ar": "احسب الخطأ المعياري."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 1
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
      "solution": "result = 6/np.sqrt(36)",
      "explanation": {
        "en": "Find standard error for standard deviation 6 and sample size 36. The solution computes this using result = 6/np.sqrt(36). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الخطأ المعياري. يحسب الحل ذلك باستخدام result = 6/np.sqrt(36). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-sampling-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "How many samples are in an array of shape (200,30)? Store result.",
        "ar": "كم عدد العينات عندما يمثل كل صف عينة؟"
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 200
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
      "solution": "result = np.zeros((200,30)).shape[0]",
      "explanation": {
        "en": "How many samples are in an array of shape (200,30)? Store result. The solution computes this using result = np.zeros((200,30)).shape[0]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "كم عدد العينات عندما يمثل كل صف عينة؟ يحسب الحل ذلك باستخدام result = np.zeros((200,30)).shape[0]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-sampling-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find row means of [[1,3],[2,6]].",
        "ar": "احسب متوسط كل صف."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "array",
        "variable": "result",
        "expected": [
          2,
          4
        ]
      },
      "hints": [
        {
          "en": "Identify the aggregation and its axis. Check whether the question uses population variance or sample variance (ddof=1).",
          "ar": "حدد عملية التجميع ومحورها وافحص هل المطلوب تباين المجتمع أم العينة (ddof=1)."
        },
        {
          "en": "Return array output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع array بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = np.array([[1,3],[2,6]]).mean(axis=1)",
      "explanation": {
        "en": "Find row means of [[1,3],[2,6]]. The solution computes this using result = np.array([[1,3],[2,6]]).mean(axis=1). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب متوسط كل صف. يحسب الحل ذلك باستخدام result = np.array([[1,3],[2,6]]).mean(axis=1). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-sampling-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Find the standard-error ratio when n increases from 25 to 100.",
        "ar": "احسب نسبة الخطأ المعياري الجديد للقديم."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
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
      "solution": "result = np.sqrt(25/100)",
      "explanation": {
        "en": "Find the standard-error ratio when n increases from 25 to 100. The solution computes this using result = np.sqrt(25/100). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب نسبة الخطأ المعياري الجديد للقديم. يحسب الحل ذلك باستخدام result = np.sqrt(25/100). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Simulate exponential sample means for n=5 and n=50 with a fixed seed. Compare their means and standard deviations.",
      "ar": "حاك متوسطات عينات أسية بحجم 5 و50 ببذرة ثابتة وقارن المتوسط والانحراف."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Use mean(axis=1), not one overall mean. Print 4000 means per n and compare the standard-error ratio to sqrt(10).",
        "ar": "استخدم mean(axis=1) لا متوسطًا عامًا واحدًا. أنتج 4000 متوسط لكل n وقارن نسبة الأخطاء المعيارية بجذر 10."
      }
    ],
    "expected": {
      "en": "Both distributions of means center near 1. Their standard deviations should be near 1/sqrt(5) and 1/sqrt(50), not exactly equal to them.",
      "ar": "يتمركز توزيعا المتوسطات قرب 1 وانحرافاهما قرب 1/sqrt(5) و1/sqrt(50) لا يساويانهما حرفيًا."
    },
    "selfCheck": {
      "en": "Use mean(axis=1), not one overall mean. Print 4000 means per n and compare the standard-error ratio to sqrt(10).",
      "ar": "استخدم mean(axis=1) لا متوسطًا عامًا واحدًا. أنتج 4000 متوسط لكل n وقارن نسبة الأخطاء المعيارية بجذر 10."
    },
    "starter": "import numpy as np\nrng=np.random.default_rng(7)\n# For n=5 and 50, draw 4000 samples from Exp(scale=1) and average each row\n"
  }
};
