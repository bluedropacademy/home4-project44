
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, GraduationCap, Lightbulb, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const visionPoints = [
  {
    icon: GraduationCap,
    title: "מעבר לציונים",
    description: "לא רק עוזרים לך להצליח במבחנים - אנחנו בונים את אהבת הלמידה לכל החיים"
  },
  {
    icon: Lightbulb,
    title: "למידה לעתיד",
    description: "קורסים בכישורי חיים, חינוך פיננסי, יזמות ועוד - הכנה לעולם האמיתי"
  },
  {
    icon: TrendingUp,
    title: "צומחים יחד",
    description: "מוסיפים נושאים ותכנים חדשים כל הזמן על פי הצרכים שלכם"
  },
  {
    icon: Rocket,
    title: "תנועה גלובלית",
    description: "הצטרפו לאלפי תלמידים שמגלים מחדש את הכיף בלמידה"
  }
];

export default function Vision() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % visionPoints.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + visionPoints.length) % visionPoints.length);
  };

  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="font-semibold">🚀 החזון שלנו</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            זו לא רק <span className="text-yellow-300">אקדמיה</span>
            <br />
            זו תנועה שמשנה את עתיד הלמידה
          </h2>
          
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            אנחנו מאמינים שכל תלמיד יכול לאהוב ללמוד. 
            המטרה שלנו היא להפוך את הלמידה להרפתקה מרתקת שמלווה אתכם לכל החיים.
          </p>
        </motion.div>

        {/* Desktop view - Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                <p className="text-purple-100 leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe > 10000) {
                  prevSlide(); // Swiping right (offset.x positive, velocity.x positive) goes to previous
                } else if (swipe < -10000) {
                  nextSlide(); // Swiping left (offset.x negative, velocity.x negative) goes to next
                }
              }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 cursor-grab active:cursor-grabbing"
            >
              {(() => {
                const point = visionPoints[currentIndex];
                const Icon = point.icon;
                return (
                  <>
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                    <p className="text-purple-100 leading-relaxed">{point.description}</p>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {visionPoints.map((_, index) => (
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
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 md:p-12 text-center text-gray-900"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            מה צופן העתיד?
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            אנחנו עובדים על קורסים חדשים בחינוך פיננסי, כישורי חיים, וגם מקצועות נוספים כמו אזרחות, מדעים, ספרות, אמנות ועוד. הצטרפו עכשיו והיו חלק מהמהפכה!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["💰 חינוך פיננסי", "🎯 כישורי חיים", "🏛️ אזרחות", "🔬 מדעים", "📚 ספרות", "🎨 אמנות"].map((tag, idx) => (
              <span
                key={idx}
                className="bg-white/90 px-5 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
