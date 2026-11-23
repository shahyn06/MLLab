import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "python-variables",
  "title": {
    "en": "Values, names and types",
    "ar": "القيم والأسماء والأنواع"
  },
  "minutes": 15,
  "intro": {
    "en": "Python binds a name to a value. Integers, floating point numbers and strings behave differently: multiplication calculates a number, but adding strings joins text. Convert a string explicitly before doing arithmetic.",
    "ar": "يربط Python اسمًا بقيمة. تختلف الأعداد الصحيحة والعشرية عن النصوص: الضرب يحسب قيمة بينما جمع النصوص يربطها. حوّل النص صراحة قبل الحساب."
  },
  "cells": [
    {
      "id": "python-variables-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "price = 12\ncount = 3\nprint(price * count)"
    },
    {
      "id": "python-variables-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "price = 12\ncount = 3\nprint(price * count)\n\nprint(type(12), type(12.0), type(\"12\"))"
    }
  ],
  "exercises": [
    {
      "id": "python-variables-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Store the cost of 3 tickets priced at 12 in result.",
        "ar": "احفظ تكلفة 3 تذاكر سعر الواحدة 12 في result."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 36
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
      "solution": "result = 12 * 3",
      "explanation": {
        "en": "Store the cost of 3 tickets priced at 12 in result. The solution computes this using result = 12 * 3. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احفظ تكلفة 3 تذاكر سعر الواحدة 12 في result. يحسب الحل ذلك باستخدام result = 12 * 3. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-variables-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Convert the text \"27\" to an integer in result.",
        "ar": "حوّل النص \"27\" لعدد صحيح في result."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 27
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
      "solution": "result = int(\"27\")",
      "explanation": {
        "en": "Convert the text \"27\" to an integer in result. The solution computes this using result = int(\"27\"). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "حوّل النص \"27\" لعدد صحيح في result. يحسب الحل ذلك باستخدام result = int(\"27\"). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-variables-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Calculate the remainder of 17 divided by 5.",
        "ar": "احسب باقي قسمة 17 على 5."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 2
      },
      "hints": [
        {
          "en": "The % operator returns the remainder after integer division, not the quotient.",
          "ar": "يعيد العامل % باقي القسمة لا ناتجها."
        },
        {
          "en": "Return value output. Assign it to result and print it before checking.",
          "ar": "أعد خرجًا من النوع value. احفظه في result واطبعه قبل الفحص."
        }
      ],
      "solution": "result = 17 % 5",
      "explanation": {
        "en": "Calculate the remainder of 17 divided by 5. The solution computes this using result = 17 % 5. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "احسب باقي قسمة 17 على 5. يحسب الحل ذلك باستخدام result = 17 % 5. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-variables-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Build the text \"Lab 4\" using str and concatenation.",
        "ar": "كوّن النص \"Lab 4\" باستخدام str والربط."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": "Lab 4"
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
      "solution": "result = \"Lab \" + str(4)",
      "explanation": {
        "en": "Build the text \"Lab 4\" using str and concatenation. The solution computes this using result = \"Lab \" + str(4). The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "كوّن النص \"Lab 4\" باستخدام str والربط. يحسب الحل ذلك باستخدام result = \"Lab \" + str(4). يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Calculate the total for four notebooks costing 15 each and two pens costing 6 each. Print the total and its Python type.",
      "ar": "احسب سعر أربعة دفاتر بسعر 15 وقلمين بسعر 6 واطبع الإجمالي ونوعه."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Change notebooks to 5; the total must rise by exactly 15.",
        "ar": "غير عدد الكراسات إلى 5؛ يجب أن يزيد المجموع 15 بالضبط."
      }
    ],
    "expected": {
      "en": "The total is 72, and its type is int.",
      "ar": "المجموع 72 ونوعه int."
    },
    "selfCheck": {
      "en": "Change notebooks to 5; the total must rise by exactly 15.",
      "ar": "غير عدد الكراسات إلى 5؛ يجب أن يزيد المجموع 15 بالضبط."
    },
    "starter": "price_notebook=15\nnotebooks=4\nprice_pen=6\npens=2\n# Compute total, then print total and its type\n"
  }
};
