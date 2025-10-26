import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function FAQ() {
  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            יש לכם <span className="text-blue-600">שאלות?</span>
            <br />
            יש לנו תשובות!
          </h2>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold"
          >
            <a href="mailto:support@bluedropacademy.com">
              <Mail className="ml-3 w-6 h-6" />
              צרו קשר
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}