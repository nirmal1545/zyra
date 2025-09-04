import Link from 'next/link';

export default function Footer() {
  return (
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
                <a href="https://github.com/nirmal1545/zyra" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">
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
                <li><Link href="/" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Home</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Symptom Checker</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">AI Chatbot</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Health Analytics</Link></li>
                <li><Link href="/team" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Meet The Team</Link></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Support & Legal</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Medical Disclaimer</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">Contact Support</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-emerald-300 transition-colors duration-300">FAQ</Link></li>
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
  );
}
