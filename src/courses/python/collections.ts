import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "python-collections",
  "title": {
    "en": "Lists, dictionaries and loops",
    "ar": "القوائم والقواميس والحلقات"
  },
  "minutes": 15,
  "intro": {
    "en": "A list keeps values in order; a dictionary maps keys to values. A loop visits each item, while a comprehension builds a new list. Accumulation starts from an initial value and updates once per element.",
    "ar": "القائمة تحفظ الترتيب، والقاموس يربط المفتاح بقيمة. تزور الحلقة كل عنصر بينما يبني الاختصار قائمة جديدة. يبدأ التجميع بقيمة أولية تتحدث لكل عنصر."
  },
  "cells": [
    {
      "id": "python-collections-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "readings = [2, 4, 6]\nfor value in readings:\n    print(value ** 2)"
    },
    {
      "id": "python-collections-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "readings = [2, 4, 6]\nfor value in readings:\n    print(value ** 2)\n\nrecord = {\"city\": \"Cairo\", \"count\": 8}\nprint(record[\"city\"])"
    }
  ],
  "exercises": [
    {
      "id": "python-collections-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Double each value in [1,3,5] and store a list result.",
        "ar": "ضاعف كل عنصر في [1,3,5] واحفظ قائمة result."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          2,
          6,
          10
        ]
      },
      "hints": [
        {
          "en": "Trace the values entering the loop or sum. Accumulate only the values that satisfy the stated condition.",
          "ar": "تتبع القيم الداخلة في الحلقة أو الجمع واجمع فقط ما يحقق الشرط المحدد."
        },
        {
          "en": "Return value output with shape [3]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [3]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = [x * 2 for x in [1,3,5]]",
      "explanation": {
        "en": "Double each value in [1,3,5] and store a list result. The solution computes this using result = [x * 2 for x in [1,3,5]]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "ضاعف كل عنصر في [1,3,5] واحفظ قائمة result. يحسب الحل ذلك باستخدام result = [x * 2 for x in [1,3,5]]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-collections-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Sum [4,7,9] with a loop.",
        "ar": "اجمع [4,7,9] باستخدام حلقة."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 20
      },
      "hints": [
        {
          "en": "Trace the values entering the loop or sum. Accumulate only the values that satisfy the stated condition.",
          "ar": "تتبع القيم الداخلة في الحلقة أو الجمع واجمع فقط ما يحقق الشرط المحدد."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = 0\nfor x in [4,7,9]:\n    result += x",
      "explanation": {
        "en": "Sum [4,7,9] with a loop. The solution computes this using result = 0; for x in [4,7,9]:;     result += x. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اجمع [4,7,9] باستخدام حلقة. يحسب الحل ذلك باستخدام result = 0; for x in [4,7,9]:;     result += x. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-collections-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Read the score from {\"score\": 85} into result.",
        "ar": "اقرأ score من القاموس إلى result."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 85
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
      "solution": "record = {\"score\":85}\nresult = record[\"score\"]",
      "explanation": {
        "en": "Read the score from {\"score\": 85} into result. The solution computes this using record = {\"score\":85}; result = record[\"score\"]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اقرأ score من القاموس إلى result. يحسب الحل ذلك باستخدام record = {\"score\":85}; result = record[\"score\"]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-collections-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Filter [1,5,2,8] to values above 3.",
        "ar": "رشح القائمة للقيم الأكبر من 3."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": [
          5,
          8
        ]
      },
      "hints": [
        {
          "en": "Trace the values entering the loop or sum. Accumulate only the values that satisfy the stated condition.",
          "ar": "تتبع القيم الداخلة في الحلقة أو الجمع واجمع فقط ما يحقق الشرط المحدد."
        },
        {
          "en": "Return value output with shape [2]. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value بالأبعاد [2]. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = [x for x in [1,5,2,8] if x > 3]",
      "explanation": {
        "en": "Filter [1,5,2,8] to values above 3. The solution computes this using result = [x for x in [1,5,2,8] if x > 3]. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "رشح القائمة للقيم الأكبر من 3. يحسب الحل ذلك باستخدام result = [x for x in [1,5,2,8] if x > 3]. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "From a list of study minutes, keep days with at least 30 minutes and compute the total. Store a dictionary with day count and minutes.",
      "ar": "رشح أيام المذاكرة ذات 30 دقيقة فأكثر واحسب الإجمالي في قاموس يحوي العدد والدقائق."
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
