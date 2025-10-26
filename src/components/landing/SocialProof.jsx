
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "אפי מיכה",
    grade: "",
    text: "אלי תבא לעבוד בבית הספר שלי בתור מורה להיסטוריה? חחח אני לומד ממך יותר ממה שאני לומד בבית הספר. אתה גורם לי לחשוב שהעולם שלנו הרבה יותר מעניין ממה שמלמדים בבית הספר.",
    rating: 5,
    subject: ""
  },
  {
    name: "Telemachs Gaming",
    grade: "",
    text: "באמת שבבית הספר לא מלמדים אותך היסטוריה, מלמדים איך לגשת לבגרות וזה חבל כי היסטוריה היא נושא כל כך מעניין וכיפי. רק צריך להעביר אותה בצורה טובה, בדיוק כמו שאתה עושה. כל הכבוד, אוהבים אותך.",
    rating: 5,
    subject: ""
  },
  {
    name: "עומר גור",
    grade: "",
    text: "עכשיו לומדים בכיתה שלי על ספרטה בשיעורי היסטוריה ואתה הפכת למידה של 10 שיעורי זום משעממים של 40 דקות למשהו מעניין שכיף לראות אותו וללמוד ממנו, בקיצור תודה :-)",
    rating: 5,
    subject: ""
  },
  {
    name: "נדב (אבא)",
    grade: "",
    text: "בימינו העובדה שילד בן 10 בא אלי ומבקש ממני לקנות מנוי לאתר שמלמד היסטוריה זה מדע בדיוני. מדובר בילד רגיל, לא חובב היסטוריה.",
    rating: 5,
    subject: ""
  },
  {
    name: "יהלי רביב",
    grade: "",
    text: "אני עולה לכיתה ח' וראיתי את הסרטון כי רציתי להבין כמה בית הספר גרוע, למדתי מהסרטון הזה יותר ממה שלמדתי כל השנה על האימפריה הרומית.",
    rating: 5,
    subject: ""
  },
  {
    name: "גילי",
    grade: "",
    text: "הסרטונים ממש טובים! כולם מעולים.. אתה מלמד היסטוריה ממש בצורה טובה ומעניינת. אני בכיתה ו' אבל בגלל הקורונה עוד לא התחלנו ללמוד היסטוריה. לפחות יש לי אותך :-)",
    rating: 5,
    subject: ""
  },
  {
    name: "עדן דרעי",
    grade: "",
    text: "איזה באסה שרק עוד חצי שנה אני מתחיל ללמוד היסטוריה.. ורציתי להגיד עוד משהו, אני ממש שמח שיש גם חומר לכיתות בחטיבה כי זה ממש עוזר לכולם, כל הכבוד!",
    rating: 5,
    subject: ""
  },
  {
    name: "טל",
    grade: "",
    text: "בא נגיד את האמת, יצרת אתר אינטרנט על היסטוריה שהרבה יותר טוב מבית ספר. אתה מעלה סרטונים מעניינים וחוקר על דברים, ומצחיק את כולם, ממליץ לכל החברים",
    rating: 5,
    subject: ""
  }
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">אלפי תלמידים כבר איתנו!</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            מה <span className="text-yellow-300">התלמידים</span> אומרים?
          </h2>
          <p className="text-xl text-blue-100">הסיפורים האמיתיים של שינוי בלמידה</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe > 10000) { // Swiping right
                  prevTestimonial();
                } else if (swipe < -10000) { // Swiping left
                  nextTestimonial();
                }
              }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 cursor-grab active:cursor-grabbing"
            >
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-center">
                <div className="font-bold text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-blue-200">
                  {testimonials[currentIndex].grade} {testimonials[currentIndex].grade && testimonials[currentIndex].subject && "•"} {testimonials[currentIndex].subject}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator with Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 text-white flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 text-white flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
