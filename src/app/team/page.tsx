'use client';

import { useEffect, useState } from 'react';
import TeamMemberCard from '~/components/TeamMemberCard';

const teamMembers = [
  {
    name: 'Nirmal Haldar',
    roll: '2330161',
    stream: 'Computer Science',
    course: 'B.Tech',
    image: '/team/member1.jpg', // You'll need to add these images to your public folder
    linkedin: 'https://linkedin.com/in/member1',
    github: 'https://github.com/member1',
    instagram: 'https://instagram.com/member1',
  },
  {
    name: 'Team Member 2',
    roll: 'S123457',
    stream: 'Computer Science',
    course: 'B.Tech',
    image: '/team/mystrymember.jpg',
    linkedin: 'https://linkedin.com/in/member2',
    github: 'https://github.com/member2',
    instagram: 'https://instagram.com/member2',
  },
  {
    name: 'Team Member 3',
    roll: 'S123458',
    stream: 'Computer Science',
    course: 'B.Tech',
    image: '/team/mystrymember.jpg',
    linkedin: 'https://linkedin.com/in/member3',
    github: 'https://github.com/member3',
    instagram: 'https://instagram.com/member3',
  },
  {
    name: 'Team Member 4',
    roll: 'S123459',
    stream: 'Computer Science',
    course: 'B.Tech',
    image: '/team/mystrymember.jpg',
    linkedin: 'https://linkedin.com/in/member4',
    github: 'https://github.com/member4',
    instagram: 'https://instagram.com/member4',
  },
  {
    name: 'Team Member 5',
    roll: 'S123460',
    stream: 'Computer Science',
    course: 'B.Tech',
    image: '/team/mystrymember.jpg',
    linkedin: 'https://linkedin.com/in/member5',
    github: 'https://github.com/member5',
    instagram: 'https://instagram.com/member5',
  },
  {
    name: 'Team Member 6',
    roll: 'S123461',
    stream: 'Computer Science',
    course: 'B.Tech',
    image: '/team/mystrymember.jpg',
    linkedin: 'https://linkedin.com/in/member6',
    github: 'https://github.com/member6',
    instagram: 'https://instagram.com/member6',
  },
];

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-emerald-400">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/40 via-transparent to-green-400/40 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The brilliant minds behind ZYRA working together to revolutionize healthcare through AI innovation.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.roll}
                {...member}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
