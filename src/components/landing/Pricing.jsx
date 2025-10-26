
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "חינמי",
    price: "0",
    description: "מושלם להתחלה",
    icon: Sparkles,
    color: "from-gray-500 to-gray-600",
    features: [
      { text: "גישה בסיסית לבלו – המורה הפרטי האישי", available: true },
      { text: "כל הסרטונים", available: false },
      { text: "בלופדיה (אנציקלופדיה אינטראקטיבית)", available: true }
    ],
    cta: "התחל בחינם",
    popular: false
  },
  {
    name: "בסיסי",
    price: "49",
    description: "זול משיעור פרטי אחד!",
    icon: Zap,
    color: "from-blue-500 to-indigo-500",
    features: [
      { text: "גישה מלאה לבלו – המורה הפרטי האישי", available: true },
      { text: "כל הסרטונים", available: true },
      { text: "בלופדיה מלאה", available: true },
      { text: "ניתן לבטל בכל רגע", available: true }
    ],
    cta: "בחר בתוכנית",
    popular: true
  }
];

export default function Pricing({ onSelectPlan }) {
  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">השקעה קטנה</span>, <span className="text-blue-400">מהפכה גדולה בלימודים</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative ${plan.popular ? "md:scale-105 md:z-10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    🔥 הכי פופולרי
                  </div>
                )}

                <div className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  plan.popular ? "border-blue-500" : "border-gray-100"
                } hover:shadow-2xl transition-all duration-300 h-full flex flex-col text-center`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">₪{plan.price}</span>
                    <span className="text-gray-600">/חודש</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => {
                      const featureText = typeof feature === 'string' ? feature : feature.text;
                      const isAvailable = typeof feature === 'string' ? true : feature.available;
                      
                      return (
                        <li key={idx} className="flex items-center justify-center gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 ${
                            isAvailable ? 'bg-green-100' : 'bg-red-100'
                          } rounded-full flex items-center justify-center`}>
                            {isAvailable ? (
                              <Check className="w-3.5 h-3.5 text-green-600" />
                            ) : (
                              <X className="w-3.5 h-3.5 text-red-600" />
                            )}
                          </div>
                          <span className={`${isAvailable ? 'text-gray-700' : 'text-gray-400'}`}>
                            {featureText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <Button
                    asChild
                    className={`w-full py-6 rounded-2xl font-bold text-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    <a 
                      href={plan.name === "חינמי" ? "https://www.bluedropacademy.com/" : "https://www.bluedropacademy.com/subscriptions"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            💳 כל התוכניות ללא התחייבות • ביטול בכל עת • החזר כספי תוך 30 יום
          </p>
        </motion.div>
      </div>
    </section>
  );
}
