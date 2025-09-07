"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful signup
      console.log('Form submitted:', formData);
      router.push('/auth/login');
    } catch (err) {
      setError('An error occurred during sign up');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-slate-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Create Account</h2>
              <p className="mt-2 text-emerald-400">Join ZYRA's healthcare community</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                  Full Name
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-emerald-500" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg 
                             bg-white/5 backdrop-blur-sm text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-emerald-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg 
                             bg-white/5 backdrop-blur-sm text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-emerald-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg 
                             bg-white/5 backdrop-blur-sm text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80">
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-emerald-500" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg 
                             bg-white/5 backdrop-blur-sm text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm mt-2">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                           rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 
                           transition-colors duration-300"
                >
                  Sign Up
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/80">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
