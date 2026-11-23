import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "python-branches",
  "title": {
    "en": "Conditions and decisions",
    "ar": "الشروط واتخاذ القرار"
  },
  "minutes": 15,
  "intro": {
    "en": "A condition evaluates to True or False. An if block runs only when its condition is true. Use comparisons for decisions and indentation to show which statements belong to a branch. Boundary values matter: >= includes the boundary, > excludes it.",
    "ar": "الشرط ينتج True أو False. تعمل كتلة if فقط عندما يتحقق شرطها. تحدد المسافة البادئة أوامر الفرع. انتبه للحدود: >= تشمل الحد و > لا تشمله."
  },
  "cells": [
    {
      "id": "python-branches-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "temperature = 31\nif temperature > 30:\n    print(\"warm\")\nelse:\n    print(\"mild\")"
    },
    {
      "id": "python-branches-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "temperature = 31\nif temperature > 30:\n    print(\"warm\")\nelse:\n    print(\"mild\")\n\nprint(4 < 8 and 8 < 10)"
    }
  ],
  "exercises": [
    {
      "id": "python-branches-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Set result to \"pass\" if score=72 is at least 60, otherwise \"retry\".",
        "ar": "اجعل result تساوي \"pass\" إذا كانت الدرجة 72 أكبر من أو تساوي 60."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": "pass"
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
      "solution": "score = 72\nresult = \"pass\" if score >= 60 else \"retry\"",
      "explanation": {
        "en": "Set result to \"pass\" if score=72 is at least 60, otherwise \"retry\". The solution computes this using score = 72; result = \"pass\" if score >= 60 else \"retry\". The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "اجعل result تساوي \"pass\" إذا كانت الدرجة 72 أكبر من أو تساوي 60. يحسب الحل ذلك باستخدام score = 72; result = \"pass\" if score >= 60 else \"retry\". يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-branches-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Check whether 18 is even. Store a Boolean result.",
        "ar": "تحقق هل 18 عدد زوجي واحفظ قيمة منطقية."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": true
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
      "solution": "result = 18 % 2 == 0",
      "explanation": {
        "en": "Check whether 18 is even. Store a Boolean result. The solution computes this using result = 18 % 2 == 0. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "تحقق هل 18 عدد زوجي واحفظ قيمة منطقية. يحسب الحل ذلك باستخدام result = 18 % 2 == 0. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-branches-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Check whether 7 is in the closed interval [3,9].",
        "ar": "تحقق هل 7 داخل الفترة المغلقة [3,9]."
      },
      "starter": "# Your code here\n",
      "setup": "",
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
      "solution": "result = 3 <= 7 <= 9",
      "explanation": {
        "en": "Check whether 7 is in the closed interval [3,9]. The solution computes this using result = 3 <= 7 <= 9. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "تحقق هل 7 داخل الفترة المغلقة [3,9]. يحسب الحل ذلك باستخدام result = 3 <= 7 <= 9. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    },
    {
      "id": "python-branches-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Use an if statement to cap a value of 120 at 100.",
        "ar": "استخدم if لتحديد القيمة 120 بحد أقصى 100."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 100
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
      "solution": "result = 120\nif result > 100:\n    result = 100",
      "explanation": {
        "en": "Use an if statement to cap a value of 120 at 100. The solution computes this using result = 120; if result > 100:;     result = 100. The checker inspects result, not the printed display. Change one input and predict the new result.",
        "ar": "استخدم if لتحديد القيمة 120 بحد أقصى 100. يحسب الحل ذلك باستخدام result = 120; if result > 100:;     result = 100. يفحص المتغير result لا المظهر المطبوع. غيّر مدخلًا وتوقع النتيجة الجديدة."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Write a ticket rule: age below 12 costs 20, ages 12 to 59 cost 40, and age 60 or above costs 25. Test ages 11,12,59,60.",
      "ar": "اكتب قاعدة أسعار: أقل من 12 بسعر 20، ومن 12 إلى 59 بسعر 40، ومن 60 بسعر 25. اختبر الحدود."
    },
    "steps": [
      {
        "en": "Complete the self-contained starter below. Run it, then compare the actual result with the target described here.",
        "ar": "أكمل البداية المستقلة بالأسفل وشغلها ثم قارن النتيجة الفعلية بالهدف الموضح هنا."
      },
      {
        "en": "Check age 12 does not enter the child branch and age 60 does enter the senior branch.",
        "ar": "تحقق أن 12 لا يدخل فرع الطفل وأن 60 يدخل فرع الكبير."
      }
    ],
    "expected": {
      "en": "The four prices in order are [20,40,40,25].",
      "ar": "الأسعار الأربعة بالترتيب [20,40,40,25]."
    },
    "selfCheck": {
      "en": "Check age 12 does not enter the child branch and age 60 does enter the senior branch.",
      "ar": "تحقق أن 12 لا يدخل فرع الطفل وأن 60 يدخل فرع الكبير."
    },
    "starter": "ages=[11,12,59,60]\ndef ticket(age):\n    # Return the correct price at each boundary\n    pass\n# Print each age and price\n"
  }
};
