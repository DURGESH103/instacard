import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaCheckCircle } from 'react-icons/fa';

const ProfileCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ projects: 0, years: 0, commits: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Count-up animation for stats
    const animateStats = () => {
      const duration = 1500;
      const targets = { projects: 50, years: 3, commits: 100 };
      const startTime = Date.now();
      
      const updateStats = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setStats({
          projects: Math.floor(targets.projects * easeOut),
          years: Math.floor(targets.years * easeOut),
          commits: Math.floor(targets.commits * easeOut)
        });
        
        if (progress < 1) {
          requestAnimationFrame(updateStats);
        }
      };
      
      setTimeout(updateStats, 800);
    };
    
    animateStats();
  }, []);

  return (
    <div className="max-w-sm w-full mx-auto">
      <div className={`relative bg-white/[0.08] backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(139,69,219,0.15)] border border-white/[0.12] overflow-hidden group hover:shadow-[0_20px_60px_rgba(139,69,219,0.25)] transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
        
        {/* Floating orbs */}
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-violet-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        
        {/* Header with elegant gradient */}
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          
          {/* Subtle particles */}
          <div className="absolute top-6 left-6 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute top-12 left-1/2 w-0.5 h-0.5 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
          
          {/* Curved divider */}
          <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 400 32" preserveAspectRatio="none">
            <path d="M0,20 Q200,0 400,20 L400,32 L0,32 Z" fill="rgba(255,255,255,0.95)" className="drop-shadow-sm"/>
          </svg>
        </div>

        {/* Profile image with premium glow */}
        <div className="flex justify-center -mt-16 mb-4">
          <div className="relative group/avatar">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 rounded-full blur-md opacity-60 group-hover/avatar:opacity-80 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            <img
              src="/profile.jpg/ChatGPT Image Jan 2, 2026, 10_21_40 PM.png"
              alt="Durgesh Kumar"
              className="relative w-32 h-32 rounded-full border-[3px] border-white/90 shadow-xl object-cover hover:scale-110 transition-all duration-300 group-hover/avatar:border-white"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 border-3 border-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* User info with refined typography */}
        <div className={`text-center mb-4 px-6 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-1 tracking-tight">Durgesh Kumar</h2>
          <p className="text-slate-500 font-medium text-sm mb-2 tracking-wide">@durgesh103</p>
          <div className="text-violet-600 font-semibold text-sm mb-3">Frontend Developer</div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-full">
            <FaCheckCircle className="w-3 h-3 text-amber-500" />
            <span className="text-amber-700 text-xs font-medium">Verified Creator</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`px-6 mb-4 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '0.3s' }}>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">React</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">Node.js</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">Next.js</span>
            <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default">Tailwind</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`px-6 mb-4 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '0.4s' }}>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 bg-slate-50/80 rounded-xl border border-white/60 hover:scale-105 transition-transform duration-200">
              <div className="text-lg font-bold text-slate-800">{stats.projects}+</div>
              <div className="text-xs text-slate-600">Projects</div>
            </div>
            <div className="text-center p-2 bg-slate-50/80 rounded-xl border border-white/60 hover:scale-105 transition-transform duration-200">
              <div className="text-lg font-bold text-slate-800">{stats.years}+</div>
              <div className="text-xs text-slate-600">Years Exp</div>
            </div>
            <div className="text-center p-2 bg-slate-50/80 rounded-xl border border-white/60 hover:scale-105 transition-transform duration-200">
              <div className="text-lg font-bold text-slate-800">{stats.commits}+</div>
              <div className="text-xs text-slate-600">Commits</div>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className={`px-6 mb-4 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '0.5s' }}>
          <div className="flex items-center justify-center gap-2 p-2 bg-green-50 border border-green-200 rounded-xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
            <span className="text-green-700 text-sm font-medium">Available for freelance</span>
          </div>
        </div>

        {/* Refined social icons */}
        <div className={`flex justify-center gap-4 mb-6 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '0.6s' }}>
          <a href="https://github.com/DURGESH103" target="_blank" rel="noopener noreferrer" className="group/social relative">
            <div className="absolute inset-0 bg-slate-600 rounded-xl blur opacity-0 group-hover/social:opacity-20 transition-opacity duration-300"></div>
            <div className="relative p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-200 group-hover/social:scale-110 group-hover/social:shadow-lg hover:-translate-y-1">
              <FaGithub className="w-5 h-5 text-slate-600 group-hover/social:text-slate-800 transition-colors group-hover/social:rotate-12" />
            </div>
          </a>
          <a href="https://in.linkedin.com/in/durgesh-kumar-d18" target="_blank" rel="noopener noreferrer" className="group/social relative">
            <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-0 group-hover/social:opacity-20 transition-opacity duration-300"></div>
            <div className="relative p-3 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 hover:bg-blue-100 transition-all duration-200 group-hover/social:scale-110 group-hover/social:shadow-lg hover:-translate-y-1">
              <FaLinkedin className="w-5 h-5 text-blue-600 group-hover/social:text-blue-700 transition-colors group-hover/social:rotate-12" />
            </div>
          </a>
          <a href="https://www.instagram.com/iamdurgesh__/" target="_blank" rel="noopener noreferrer" className="group/social relative">
            <div className="absolute inset-0 bg-pink-500 rounded-xl blur opacity-0 group-hover/social:opacity-20 transition-opacity duration-300"></div>
            <div className="relative p-3 rounded-xl bg-pink-50 border border-pink-200 hover:border-pink-300 hover:bg-pink-100 transition-all duration-200 group-hover/social:scale-110 group-hover/social:shadow-lg hover:-translate-y-1">
              <FaInstagram className="w-5 h-5 text-pink-600 group-hover/social:text-pink-700 transition-colors group-hover/social:rotate-12" />
            </div>
          </a>
        </div>

        {/* Elegant bio section */}
        <div className="px-6 mb-6">
  <div className="relative p-4 bg-gradient-to-r from-slate-50/50 to-white/30 backdrop-blur-sm rounded-2xl border border-white/40">
    <p className="text-slate-700 text-center text-sm leading-relaxed font-semibold">
      🎨 Building modern web experiences.<br />
      ⚡Modern web. Clean UI. Powerful code.
      Where clean UI meets modern web.
    </p>
  </div>
</div>

        {/* Premium action buttons */}
        <div className={`px-6 pb-6 flex gap-2 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '0.8s' }}>
          <a href="https://www.instagram.com/iamdurgesh__/" target="_blank" rel="noopener noreferrer" className="flex-1 relative group/btn overflow-hidden rounded-2xl active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="relative py-3 text-center text-white font-semibold text-xs tracking-wide group-hover/btn:scale-105 transition-transform duration-200">
              Follow
            </div>
          </a>
          <a href="https://myportfoli-itvv.onrender.com/" target="_blank" rel="noopener noreferrer" className="flex-1 relative group/btn overflow-hidden rounded-2xl active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="relative py-3 text-center text-white font-semibold text-xs tracking-wide group-hover/btn:scale-105 transition-transform duration-200">
              Portfolio
            </div>
          </a>
          <a href="mailto:durgesh19dec2002@gmail.com" className="flex-1 relative group/btn overflow-hidden rounded-2xl active:scale-95">
            <div className="absolute inset-0 bg-white border border-slate-200"></div>
            <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="relative py-3 text-center text-slate-700 font-semibold text-xs tracking-wide group-hover/btn:scale-105 transition-transform duration-200">
              Message
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;