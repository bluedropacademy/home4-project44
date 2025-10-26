
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --primary-blue: #008AFC;
          --accent-orange: #FF6B35;
          --accent-green: #06D6A0;
          --text-dark: #1a1a2e;
          --text-light: #6B7280;
        }
        
        * {
          font-family: 'Rubik', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>
      {children}
    </div>
  );
}
