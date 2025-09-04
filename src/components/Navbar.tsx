'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 md:w-auto transition-all duration-1000 ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between md:justify-start md:space-x-8">
          {/* Logo/Brand */}
          <Link href="/" className="font-bold text-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent animate-pulse">
              ZYRA
            </span>
          </Link>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Sign Up
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Log In
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Chat
            </Link>
            <Link href="/team" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Meet The Team
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/90 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 py-4">
            <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Sign Up
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Log In
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Chat
            </Link>
            <Link href="/team" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              Meet The Team
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
