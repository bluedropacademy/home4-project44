
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-10 sm:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            הסיפור מאחורי <span className="text-blue-600">בלודרופ</span>
          </h2>
          <p className="text-xl text-gray-600">איך השעמום בבית הספר הפך למשימת חיים</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <Quote className="w-12 h-12 text-blue-600 mb-6" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                היי, אני בלודרופ. אם אתם מכירים אותי מיוטיוב, אתם בטח יודעים שאני אוהב להפוך נושאים מסובכים לכיף. אבל הסיפור שלי התחיל בדיוק במקום ההפוך.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                גם אני הייתי פעם תלמיד ששנא ללמוד. ישבתי בכיתה ופשוט לא הבנתי: "למה זה חייב להיות כל כך משעמם?"
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                אז בגיל 16, החלטתי לנסות משהו אחר. התחלתי להעלות ליוטיוב סרטונים על מדע, היסטוריה ובכלל דברים שעניינו אותי – אבל בדרך שלי, בסגנון שבאמת עניין אותי. להפתעתי, גיליתי שאני לא לבד. עשרות מיליוני צפיות ומיליוני תגובות כמו "סוף סוף הבנתי!" הבהירו לי: <strong className="text-blue-600">הבעיה היא לא בחומר, אלא בדרך שבה הוא מוגש.</strong>
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                הבנתי שלמידה לא צריכה להיות עונש. היא יכולה, וחייבת, להיות הרפתקה.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                לכן, החלטתי לקחת את כל מה שלמדתי, שילבתי את זה עם החומרים שאתם לומדים בבית הספר ועם טכנולוגיית בינה מלאכותית מהמתקדמות בעולם, ויצרתי משהו גדול יותר: <strong className="text-blue-600">אקדמיית בלודרופ.</strong>
              </p>

              <div className="bg-blue-600 text-white rounded-2xl p-6 text-center">
                <p className="text-xl font-bold mb-2">
                  זה המקום שבו כל תלמיד יכול ללמוד בקצב שלו ובצורה שבאמת מרתקת אותו.
                </p>
                <p className="text-blue-100">
                  כי אם אני הצלחתי להפוך שעמום לסקרנות, כל אחד יכול. 🎉
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
