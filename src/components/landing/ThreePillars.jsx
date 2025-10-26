
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Video, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Video,
    title: "ספריית הסרטונים של בלודרופ – ללמוד כמו ביוטיוב, ליהנות כמו בטיקטוק.",
    color: "from-orange-400 to-orange-500",
    description: "בלודרופ, יוטיובר מצליח עם עשרות מיליוני צפיות, מסביר לכם כל נושא לימודי בסגנון יוטיובי כיפי וברור, בשפה שלכם – בגובה העיניים, עם חיוך והומור.",
    features: [],
    buttonText: "לספריית הסרטונים",
    buttonLink: "https://www.bluedropacademy.com/vod",
    centered: true
  },
  {
    icon: BookOpen,
    title: "בלופדיה – האנציקלופדיה האינטראקטיבית של בלודרופ.",
    color: "from-purple-500 to-purple-600",
    description: "לא יודעים מאיפה להתחיל? בלופדיה היא המקום להתחיל בו. מחכים לכם שם שפע של רעיונות, נושאים ותכנים מרתקים שאפשר לדבר עליהם עם בלו, לשאול שאלות, ולגלות דברים חדשים – בדרך חכמה, פשוטה וכיפית.",
    features: [],
    buttonText: "לבלופדיה",
    buttonLink: "https://www.bluedropacademy.com/bluepedia",
    centered: true
  },
  {
    icon: Bot,
    title: "בלו – הצ'אט החכם שמלמד כמו בלודרופ, ותמיד שם בשבילך.",
    color: "from-blue-500 to-blue-600",
    description: "בלו הוא צ'אט חכם מבוסס בינה מלאכותית, שהותאם במיוחד לתלמיד הישראלי. הוא שולט בכל נושאי הלימוד, מדבר עברית שוטפת עם סלנג ישראלי ובגובה העיניים, ומסביר כמו חבר שמבין אותך באמת – בדרך פשוטה, כיפית וברורה.",
    features: [],
    buttonText: "נסו עכשיו",
    buttonLink: "https://www.bluedropacademy.com/blue",
    centered: true
  }
];

export default function ThreePillars() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: previous

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % pillars.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) {
      return; // Do nothing if clicking on the current slide's dot
    }
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            איך זה <span className="text-blue-600">עובד?</span>
          </h2>
          <p className="text-xl text-gray-600">הכלים שישנו לכם את הלמידה</p>
        </motion.div>

        {/* Desktop view - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group flex"
              >
                <div className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col w-full ${pillar.centered ? 'text-center' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${pillar.centered ? 'mx-auto' : ''}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 min-h-[80px] flex items-center justify-center">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{pillar.description}</p>

                  {pillar.features.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {pillar.buttonText && (
                    <Button
                      asChild
                      className={`w-full py-6 rounded-2xl font-bold text-lg bg-gradient-to-r ${pillar.color} hover:opacity-90 transition-opacity mt-auto`}
                    >
                      <a href={pillar.buttonLink} target="_blank" rel="noopener noreferrer">
                        {pillar.buttonText}
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              // Animate based on direction
              initial={{ opacity: 0, x: direction === 1 ? 100 : (direction === -1 ? -100 : 0) }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                // Calculate swipe strength and direction
                // swipe will be positive if dragged right, negative if dragged left
                const swipe = Math.abs(offset.x) * velocity.x; 
                const swipeThreshold = 10000; // Adjust this value for desired sensitivity

                if (swipe > swipeThreshold) {
                  // Swiped right enough, go to previous slide
                  prevSlide();
                } else if (swipe < -swipeThreshold) {
                  // Swiped left enough, go to next slide
                  nextSlide();
                }
              }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 cursor-grab active:cursor-grabbing"
            >
              {(() => {
                const pillar = pillars[currentIndex];
                const Icon = pillar.icon;
                return (
                  <div className={pillar.centered ? 'text-center' : ''}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 ${pillar.centered ? 'mx-auto' : ''}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 mb-6">{pillar.description}</p>

                    {pillar.features.length > 0 && (
                      <ul className="space-y-3 text-right">
                        {pillar.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {pillar.buttonText && (
                      <Button
                        asChild
                        className={`w-full mt-6 py-6 rounded-2xl font-bold text-lg bg-gradient-to-r ${pillar.color} hover:opacity-90 transition-opacity`}
                      >
                        <a href={pillar.buttonLink} target="_blank" rel="noopener noreferrer">
                          {pillar.buttonText}
                        </a>
                      </Button>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {pillars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
