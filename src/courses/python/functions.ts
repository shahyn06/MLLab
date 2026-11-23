import type {Lesson} from '../types';
export const lesson:Lesson={
  "id": "python-functions",
  "title": {
    "en": "Reusable functions",
    "ar": "الدوال القابلة لإعادة الاستخدام"
  },
  "minutes": 15,
  "intro": {
    "en": "A function gives a calculation a reusable name. Parameters are inputs and return supplies the output. Test more than one input, including zero and negative values where the definition permits them. Printing a value is different from returning it.",
    "ar": "تعطي الدالة اسمًا لحساب قابل لإعادة الاستخدام. المعاملات مدخلات و return يعيد الخرج. اختبر أكثر من قيمة بما فيها الصفر والسالب عندما يسمح التعريف. الطباعة ليست إرجاع قيمة."
  },
  "cells": [
    {
      "id": "python-functions-a",
      "text": {
        "en": "Run this example, then edit one value and predict how the output changes.",
        "ar": "شغّل المثال ثم غيّر قيمة وتوقع كيف يتغير الخرج."
      },
      "code": "def center(x, mean):\n    return x - mean\nprint(center(12, 8))"
    },
    {
      "id": "python-functions-b",
      "text": {
        "en": "Compare this second view of the same idea. Explain what each output represents.",
        "ar": "قارن هذا التطبيق الآخر للفكرة وفسر معنى كل خرج."
      },
      "code": "def center(x, mean):\n    return x - mean\nprint(center(12, 8))\n\ndef total(values):\n    return sum(values)\nprint(total([2,5,8]))"
    }
  ],
  "exercises": [
    {
      "id": "python-functions-q1",
      "title": {
        "en": "Question 1 · Start",
        "ar": "السؤال 1 · ابدأ"
      },
      "instructions": {
        "en": "Define result(x) returning x squared.",
        "ar": "عرّف result(x) لإرجاع مربع x."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "function",
        "variable": "result",
        "expected": null,
        "cases": [
          {
            "args": [
              3
            ],
            "expected": 9
          },
          {
            "args": [
              -4
            ],
            "expected": 16
          },
          {
            "args": [
              0
            ],
            "expected": 0
          }
        ]
      },
      "hints": [
        {
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "def result(x):\n    return x*x",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting function with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    },
    {
      "id": "python-functions-q2",
      "title": {
        "en": "Question 2 · Apply",
        "ar": "السؤال 2 · طبّق"
      },
      "instructions": {
        "en": "Define result(values) returning the mean for a nonempty list.",
        "ar": "عرّف دالة تحسب المتوسط لقائمة غير فارغة."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "function",
        "variable": "result",
        "expected": null,
        "cases": [
          {
            "args": [
              [
                2,
                4,
                6
              ]
            ],
            "expected": 4
          },
          {
            "args": [
              [
                8
              ]
            ],
            "expected": 8
          }
        ]
      },
      "hints": [
        {
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "def result(values):\n    return sum(values)/len(values)",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting function with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    },
    {
      "id": "python-functions-q3",
      "title": {
        "en": "Question 3 · Modify",
        "ar": "السؤال 3 · عدّل"
      },
      "instructions": {
        "en": "Call a function to round 3.14159 to two decimal places.",
        "ar": "استدع دالة لتقريب 3.14159 لمنزلتين."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "value",
        "variable": "result",
        "expected": 3.14
      },
      "hints": [
        {
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "result = round(3.14159,2)",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting value with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    },
    {
      "id": "python-functions-q4",
      "title": {
        "en": "Question 4 · Combine",
        "ar": "السؤال 4 · اجمع"
      },
      "instructions": {
        "en": "Define result(x) that clips values below zero to zero.",
        "ar": "عرّف دالة تجعل القيم السالبة صفرًا."
      },
      "starter": "# Your code here\n",
      "setup": "",
      "checker": {
        "kind": "function",
        "variable": "result",
        "expected": null,
        "cases": [
          {
            "args": [
              -3
            ],
            "expected": 0
          },
          {
            "args": [
              7
            ],
            "expected": 7
          }
        ]
      },
      "hints": [
        {
          "en": "Create a variable named result. Use the operation demonstrated in this lesson; keep the requested type and order.",
          "ar": "أنشئ المتغير result واستخدم العملية الموضحة مع مراعاة النوع والترتيب."
        },
        {
          "en": "Break the task into input, operation and output. Inspect the intermediate values before assigning result.",
          "ar": "قسم المهمة لمدخل وعملية وخرج. اطبع القيم الوسيطة قبل تعيين result."
        }
      ],
      "solution": "def result(x):\n    return max(0,x)",
      "explanation": {
        "en": "This solution follows the requested operation. The checker compares the resulting function with the expected result, including order and numeric tolerance. Try another input to test your understanding.",
        "ar": "يتبع الحل العملية المطلوبة ويقارن الفاحص النتيجة مع مراعاة الترتيب ودقة الأعداد. جرّب مدخلًا آخر لاختبار فهمك."
      }
    }
  ],
  "challenge": {
    "goal": {
      "en": "Write a mean function and test it on one item, repeated values and mixed positive/negative values. Decide how an empty list should behave.",
      "ar": "اكتب دالة متوسط واختبر عنصرًا واحدًا وقيمًا مكررة وموجبة وسالبة وحدد سلوك القائمة الفارغة."
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
