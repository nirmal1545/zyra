"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Seamless Transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-emerald-400">
        {/* Fluid Animation Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/40 via-transparent to-green-400/40 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen pt-20">
        {/* Upper Section - Dark Theme */}
        <section className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Brand Name with Fluid Animation */}
            <div className="relative mb-8">
              <h1 className={`text-8xl md:text-9xl font-black tracking-wider transition-all duration-1000 ${
                mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <span className="bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent animate-pulse">
                  ZYRA
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
            }`}>
              AI-Powered Disease Symptom Predictor & Physiology Chatbot
            </p>

            {/* Feature Pills */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
            }`}>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                🧠 Smart Diagnosis
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                💬 AI Chatbot
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                📊 Health Analytics
              </div>
            </div>
          </div>
        </section>

        {/* Lower Section - Neon Green Theme */}
        <section className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* CTA Section */}
            <div className={`transition-all duration-1000 delay-700 ${
              mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Your Health, <span className="text-amber-50">Reimagined</span>
              </h2>
              
              <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
                Experience the future of healthcare with our advanced AI that understands your symptoms, 
                provides intelligent insights, and guides you towards better health decisions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Diagnosis
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold rounded-lg transition-all duration-300">
                  Chat with Zyra
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-1000 ${
              mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
            }`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">99.2%</div>
                <div className="text-slate-700">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                <div className="text-slate-700">AI Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">1000+</div>
                <div className="text-slate-700">Conditions Analyzed</div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
