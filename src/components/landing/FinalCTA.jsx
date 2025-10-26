
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function FinalCTA({ onCTAClick }) {
  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 100,
              opacity: 0.3
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">הזמן לפעול הוא עכשיו!</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            מוכנים להפוך את הלמידה
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              לחוויה בלתי נשכחת?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            הצטרפו לאלפי תלמידים שכבר גילו שלמידה יכולה להיות כיפית, מעניינת וממש ממכרת
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-8 rounded-full shadow-2xl font-bold group"
            >
              <a href="https://www.bluedropacademy.com/" target="_blank" rel="noopener noreferrer">
                כן, אני רוצה להתחיל בחינם עכשיו! 🚀
                <ArrowLeft className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <div className="mt-8 space-y-2">
            <p className="text-blue-100 font-semibold">
              ✓ ללא צורך בכרטיס אשראי
            </p>
            <p className="text-blue-100 font-semibold">
              ✓ ניסיון חינם ללא התחייבות
            </p>
            <p className="text-blue-100 font-semibold">
              ✓ התחילו תוך דקה אחת
            </p>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { emoji: "🔒", text: "מאובטח לחלוטין" },
            { emoji: "⚡", text: "גישה מיידית" },
            { emoji: "💯", text: "ביטול בכל עת" },
            { emoji: "🤖", text: "מורה פרטי 24/7" }
          ].map((badge, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl mb-2">{badge.emoji}</div>
              <div className="text-sm font-medium">{badge.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
