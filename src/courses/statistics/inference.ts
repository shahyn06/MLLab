import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "statistics-inference",
  "title": {
    "en": "Correlation and hypothesis tests",
    "ar": "الارتباط واختبارات الفرضيات"
  },
  "minutes": 15,
  "intro": {
    "en": "Covariance depends on units; correlation is standardized. Neither establishes causation. A hypothesis test compares data to a null model. A small p-value is not the probability that the null is true, and rejecting it does not prove a specific alternative or practical importance.",
    "ar": "التغاير يعتمد على الوحدات والارتباط معيّر. لا يثبت أيهما السببية. يقارن الاختبار البيانات بنموذج فرض العدم. قيمة p ليست احتمال صحة الفرض، ورفضه لا يثبت بديلًا محددًا أو أهمية عملية."
  },
  "cells": [
    {
      "id": "statistics-inference-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "from scipy import stats\nprint(stats.pearsonr([1,2,3,4],[2,4,6,8]))\nprint(stats.ttest_1samp([4,5,6,7,8],popmean=6))"
    },
    {
      "id": "statistics-inference-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "from scipy import stats\nprint(stats.pearsonr([1,2,3,4],[2,4,6,8]))\nprint(stats.ttest_1samp([4,5,6,7,8],popmean=6))\n\nimport numpy as np\nprint(np.cov([1,2,3],[2,4,6],ddof=1))"
    }
  ],
  "exercises": [
    {
      "id": "statistics-inference-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Find covariance of [1,2,3] with [2,4,6], sample definition.",
        "ar": "احسب التغاير بتعريف العينة."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
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
      "solution": "result = np.cov([1,2,3],[2,4,6],ddof=1)[0,1]",
      "explanation": {
        "en": "Find covariance of [1,2,3] with [2,4,6], sample definition. The solution computes this using result = np.cov([1,2,3],[2,4,6],ddof=1)[0,1]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب التغاير بتعريف العينة. يحسب الحل ذلك باستخدام result = np.cov([1,2,3],[2,4,6],ddof=1)[0,1]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-inference-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Find correlation of the same values.",
        "ar": "احسب الارتباط لنفس القيم."
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
          "en": "Translate the requested relationship into one expression. Use the inputs from the task rather than copying the tutorial values.",
          "ar": "حوّل العلاقة المطلوبة إلى تعبير واحد واستخدم مدخلات المهمة لا قيم المثال."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = stats.pearsonr([1,2,3],[2,4,6]).statistic",
      "explanation": {
        "en": "Find correlation of the same values. The solution computes this using result = stats.pearsonr([1,2,3],[2,4,6]).statistic. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب الارتباط لنفس القيم. يحسب الحل ذلك باستخدام result = stats.pearsonr([1,2,3],[2,4,6]).statistic. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-inference-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Find t statistic testing mean 6 for [4,5,6,7,8].",
        "ar": "احسب إحصاء t لاختبار المتوسط 6."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 0
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
      "solution": "result = stats.ttest_1samp([4,5,6,7,8],popmean=6).statistic",
      "explanation": {
        "en": "Find t statistic testing mean 6 for [4,5,6,7,8]. The solution computes this using result = stats.ttest_1samp([4,5,6,7,8],popmean=6).statistic. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب إحصاء t لاختبار المتوسط 6. يحسب الحل ذلك باستخدام result = stats.ttest_1samp([4,5,6,7,8],popmean=6).statistic. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "statistics-inference-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "For p=.03 and alpha=.05, store whether the null is rejected. This does not prove the alternative.",
        "ar": "عند p=.03 و alpha=.05 هل نرفض فرض العدم؟ هذا لا يثبت البديل."
      },
      "starter": "# Your code here\n",
      "setup": "import numpy as np\nfrom scipy import stats",
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
      "solution": "result = .03 < .05",
      "explanation": {
        "en": "For p=.03 and alpha=.05, store whether the null is rejected. This does not prove the alternative. The solution computes this using result = .03 < .05. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "عند p=.03 و alpha=.05 هل نرفض فرض العدم؟ هذا لا يثبت البديل. يحسب الحل ذلك باستخدام result = .03 < .05. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Run a one-sample t-test on a small synthetic sample. Report statistic and p-value, and state what the test cannot prove.",
      "ar": "نفذ اختبار t لعينة مصطنعة واذكر الإحصاء وقيمة p وما لا يثبته الاختبار."
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
