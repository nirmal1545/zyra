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

      {/* Glassmorphism Navbar */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
          <div className="flex items-center space-x-8">
            {/* Logo/Brand */}
            <a href="/" className="font-bold text-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent animate-pulse">
                ZYRA
              </span>
            </a>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
                Sign Up
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
                Log In
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
                Chat
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
                Meet The Team
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
                About
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white/90 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

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

      {/* Glassmorphism Footer Section */}
      <footer className="relative z-10 px-8 py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/30 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand & Description */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-4">ZYRA</h3>
                  <p className="text-white/80 text-lg leading-relaxed max-w-md">
                    Revolutionizing healthcare through advanced AI technology. ZYRA provides intelligent disease symptom prediction and personalized physiology consultations, empowering you to make informed health decisions with confidence.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Home</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Symptom Checker</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">AI Chatbot</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Health Analytics</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Meet The Team</a></li>
                </ul>
              </div>

              {/* Support & Legal */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6">Support & Legal</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Medical Disclaimer</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Contact Support</a></li>
                  <li><a href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">FAQ</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/5 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white/70 text-sm mb-4 md:mb-0">
                  <p>&copy; 2024 ZYRA. All rights reserved. | Empowering Health Through AI Innovation</p>
                </div>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-white/80">Medical Disclaimer:</strong> ZYRA is an AI-powered health assistant designed to provide informational support only. 
                It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals 
                for medical concerns and before making any health-related decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
