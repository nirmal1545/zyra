"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBrain, FaComments, FaChartBar, FaLightbulb, FaEye, FaUsers, FaCode, FaArrowRight, FaHospital, FaBriefcaseMedical, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-900">
      {/* Hero Section with Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-slate-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-white">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent animate-pulse">
            About Zyra
          </h1>
        </div>
        
        {/* The Problem Section */}
        <section className={`mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-emerald-400 flex items-center gap-3 justify-center">
              <FaHospital className="text-3xl" />
              The Problem
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Healthcare and mental well-being remain two of the most critical challenges in India, especially in rural and semi-urban communities and higher education institutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-3 text-white/80">
                  <div className="mt-1.5"><FaBriefcaseMedical className="text-emerald-400 text-xl" /></div>
                  <p><strong className="text-emerald-400">Public Health Gaps:</strong> Limited access to reliable health information, preventive care awareness, vaccination schedules, and real-time alerts on disease outbreaks.</p>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="mt-1.5"><FaBrain className="text-emerald-400 text-xl" /></div>
                  <p><strong className="text-emerald-400">Mental Health Challenges:</strong> Rising anxiety, depression, stress, and burnout among students, coupled with stigma and lack of accessible, confidential psychological support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-emerald-400 flex items-center gap-3 justify-center">
              <FaGlobe className="text-3xl" />
              Vision
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-white/90 leading-relaxed">
                To create a <span className="text-emerald-400 font-semibold">digitally inclusive health ecosystem</span> that empowers every individual — from rural families to college students — with accessible, stigma-free, and reliable support for both physical and mental health.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-emerald-400 flex items-center gap-3 justify-center">
              <FaLightbulb className="text-3xl" />
              Mission
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/90">
                  <div className="mt-1.5"><FaComments className="text-emerald-400 text-xl" /></div>
                  <p>Democratize healthcare and mental wellness information through AI-powered multilingual platforms.</p>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <div className="mt-1.5"><FaBrain className="text-emerald-400 text-xl" /></div>
                  <p>Break the stigma around mental health in higher education institutions by offering safe, confidential, and engaging digital tools.</p>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <div className="mt-1.5"><FaChartBar className="text-emerald-400 text-xl" /></div>
                  <p>Provide governments, colleges, and organizations with real-time data insights for better decision-making and interventions.</p>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <div className="mt-1.5"><FaGlobe className="text-emerald-400 text-xl" /></div>
                  <p>Bridge the urban-rural gap in healthcare and mental health access through scalable, tech-driven solutions.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={`mb-16 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-emerald-400 flex items-center gap-3 justify-center">
              <FaCode className="text-3xl" />
              Tech Stack
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 invert" />
                    <h3 className="text-xl font-semibold text-emerald-400">Frontend</h3>
                  </div>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                      React + Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4" />
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" className="w-4 h-4" />
                      TailwindCSS
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                    <h3 className="text-xl font-semibold text-emerald-400">Backend & AI</h3>
                  </div>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4" />
                      Python
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" className="w-4 h-4" />
                      Jupyter Notebook
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4" />
                      Node.js
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />
                    <h3 className="text-xl font-semibold text-emerald-400">Database</h3>
                  </div>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-4 h-4" />
                      PostgreSQL
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Cloud" className="w-8 h-8" />
                    <h3 className="text-xl font-semibold text-emerald-400">Deployment</h3>
                  </div>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-4 h-4" />
                      Cloud-based infrastructure
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-4 h-4" />
                      Container Deployment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`mb-16 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-emerald-400 flex items-center gap-3 justify-center">
              <FaUsers className="text-3xl" />
              Team
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                We are a passionate team of <span className="text-emerald-400 font-semibold">6 innovators</span> from diverse technical backgrounds, united by a shared mission to build a healthier and more aware India.
              </p>
              <Link 
                href="/team" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300"
              >
                View Team
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
