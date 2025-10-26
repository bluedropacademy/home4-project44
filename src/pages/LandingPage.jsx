import React from "react";
import HeroSection from "../components/landing/HeroSection";
import FounderStory from "../components/landing/FounderStory";
import ThreePillars from "../components/landing/ThreePillars";
import SocialProof from "../components/landing/SocialProof";
import Pricing from "../components/landing/Pricing";
import Vision from "../components/landing/Vision";
import FinalCTA from "../components/landing/FinalCTA";
import FAQ from "../components/landing/FAQ";

export default function LandingPage() {
  const handleCTAClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPlan = (planName) => {
    alert(`נהדר! בחרתם בתוכנית ${planName}. בקרוב נוסיף כאן טופס הרשמה מלא 🚀`);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={handleCTAClick} />
      <ThreePillars />
      <FounderStory />
      <SocialProof />
      <div id="pricing">
        <Pricing onSelectPlan={handleSelectPlan} />
      </div>
      <Vision />
      <FinalCTA onCTAClick={handleCTAClick} />
      <FAQ />
    </div>
  );
}