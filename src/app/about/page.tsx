"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBrain, FaComments, FaChartBar, FaLightbulb, FaEye, FaUsers, FaCode } from "react-icons/fa";
import TeamMemberCard from "../../components/TeamMemberCard"; // Adjust path as necessary

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const teamMembers = [
    {
      name: "Nirmal Kumar",
      roll: "21XXXXXX", // Placeholder
      stream: "Computer Science", // Placeholder
      course: "B.Tech", // Placeholder
      image: "/team/nirmal.jpg", // Placeholder image
      linkedin: "https://www.linkedin.com/in/nirmal-kumar-b0b0b0b0/",
      github: "https://github.com/nirmal1545",
      instagram: "https://www.instagram.com/nirmal_kumar/", // Placeholder
    },
    // Add more team members as needed
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-emerald-400 text-white">
      {/* Animated Background with Seamless Transition */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/40 via-transparent to-green-400/40 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-6xl md:text-7xl font-black tracking-wider mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent animate-pulse">
              About Zyra
            </span>
          </h1>

          {/* Mission & Vision */}
          <section className={`mb-12 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <h2 className="text-4xl font-bold text-emerald-200 mb-4 flex items-center justify-center gap-3">
              <FaLightbulb /> Our Mission
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              To democratize access to intelligent health insights, empowering individuals to understand their bodies better and make informed decisions about their well-being through cutting-edge AI technology.
            </p>
            <h2 className="text-4xl font-bold text-emerald-200 mb-4 flex items-center justify-center gap-3">
              <FaEye /> Our Vision
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              To be the leading AI companion for personal health, providing accurate, accessible, and empathetic guidance that transforms the way people interact with healthcare.
            </p>
          </section>

          {/* Problem Statement */}
          <section className={`mb-12 transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <h2 className="text-4xl font-bold text-emerald-200 mb-4">The Problem</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              In today's fast-paced world, individuals often face challenges in quickly understanding their health symptoms and accessing reliable medical information. Misinformation, delayed diagnoses, and the lack of immediate, personalized health guidance can lead to anxiety and poorer health outcomes. Traditional healthcare systems, while essential, can be slow and overwhelming, leaving many feeling disempowered in managing their own health.
            </p>
          </section>

          {/* Proposed Solution */}
          <section className={`mb-12 transition-all duration-1000 delay-600 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <h2 className="text-4xl font-bold text-emerald-200 mb-4">Our Solution: Zyra</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Zyra offers an **AI-powered platform** that acts as your personal health assistant. By leveraging advanced machine learning models, Zyra can analyze reported symptoms to provide potential disease predictions, offering users a preliminary understanding of their condition. Furthermore, our intelligent physiology chatbot provides instant, accurate answers to a wide range of health and physiological questions, bridging the information gap and empowering users with knowledge. Zyra aims to be a proactive tool for health management, offering insights and support whenever and wherever it's needed.
            </p>
          </section>

          {/* Key Features */}
          <section className={`mb-12 transition-all duration-1000 delay-800 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <h2 className="text-4xl font-bold text-emerald-200 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex flex-col items-center text-center">
                <FaBrain className="text-5xl text-emerald-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Smart Diagnosis</h3>
                <p className="text-gray-300">AI-driven symptom analysis for potential disease prediction.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex flex-col items-center text-center">
                <FaComments className="text-5xl text-emerald-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">AI Chatbot</h3>
                <p className="text-gray-300">Interactive chatbot for physiology and health queries.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex flex-col items-center text-center">
                <FaChartBar className="text-5xl text-emerald-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Health Analytics</h3>
                <p className="text-gray-300">Insights and statistics for better health management.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className={`mb-12 transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <h2 className="text-4xl font-bold text-emerald-200 mb-6 flex items-center justify-center gap-3">
              <FaCode /> Our Tech Stack
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-left text-gray-200">
                <thead>
                  <tr className="bg-white/20">
                    <th className="py-3 px-4 text-lg font-semibold">Technology</th>
                    <th className="py-3 px-4 text-lg font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 font-medium">Next.js</td>
                    <td className="py-2 px-4">React framework for full-stack applications.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">NextAuth.js</td>
                    <td className="py-2 px-4">Authentication and authorization.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Prisma</td>
                    <td className="py-2 px-4">Open-source ORM for database management.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Tailwind CSS</td>
                    <td className="py-2 px-4">Utility-first CSS framework for rapid styling.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">TypeScript</td>
                    <td className="py-2 px-4">Type-safe programming language.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Zod</td>
                    <td className="py-2 px-4">Schema validation library.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Team Information */}
          <section className={`transition-all duration-1000 delay-1200 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <h2 className="text-4xl font-bold text-emerald-200 mb-6 flex items-center justify-center gap-3">
              <FaUsers /> Our Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
