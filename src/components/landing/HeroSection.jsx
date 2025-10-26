
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle, Check } from "lucide-react";

export default function HeroSection({ onCTAClick }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 py-8 sm:py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              הסוף ל<span className="relative inline-block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">שעמום<svg className="absolute left-0 right-0" style={{ bottom: '-3px' }} viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8 Q 50 3, 100 7 T 195 8" stroke="url(#orangeGradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#FB923C', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg></span> בלימודים
              <br />
              כשכיף ללמוד, קל להצליח
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            הפכנו את החומר המשעמם מהכיתה לסדרת יוטיוב מטורפת בסגנון שאתם אוהבים!
            <br className="hidden sm:block" />
            נתקעתם עם שאלה? יש לכם צ'אט-בוט גאון, מורה פרטי שיודע לענות על כל שאלה שיש לכם. תשאלו אותו מה שבא לכם, מתי שבא לכם!
          </p>

          {/* Video Section */}
          <div className="mb-8 sm:mb-10 px-2">
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
              👇 לחצו לצפייה בסרטון הסבר קצר
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                {!isVideoPlaying ? (
                  <div 
                    className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f8ba38bef1cce58f7b12c3/513129c53_image.png"
                      alt="תצוגה מקדימה של הוידאו"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://player.vimeo.com/video/1082615830?autoplay=1"
                    title="סרטון הסבר"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center px-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold w-full sm:w-auto"
            >
              <a href="https://www.bluedropacademy.com/" target="_blank" rel="noopener noreferrer">
                אני רוצה להתחיל בחינם עכשיו 🚀
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold mt-4 sm:mt-6 px-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white stroke-[3]" />
            </div>
            <p className="text-xs sm:text-sm">נסו בחינם ללא התחייבות</p>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 px-4"
        >
          {[
            { icon: "⚡", label: "תוצאות מוכחות תוך שבועות" },
            { icon: "🎓", label: "רלוונטי לכל הכיתות והגילאים" },
            { icon: "👥", label: "יותר מ-2,000 משתמשים פעילים" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-full px-3 sm:px-4 py-2 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm font-medium">
                <span className="text-base sm:text-lg">{stat.icon}</span>
                <span className="whitespace-nowrap">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
