"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface TechItem {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" style={{ transform: "rotate(30deg)", transformOrigin: "center" }} />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" style={{ transform: "rotate(90deg)", transformOrigin: "center" }} />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" style={{ transform: "rotate(150deg)", transformOrigin: "center" }} />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.02 14.88h-1.6V8.12h1.6l4.24 5.92V8.12h1.59v8.76h-1.39l-4.44-6.23v6.23z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text x="5" y="17" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <text x="5" y="17" fill="#000" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Redux",
    color: "#764ABC",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19.043 14.394c-.458.74-.917 1.48-1.4 2.2-.187.278-.291.562-.266.903.047.66.02 1.325.02 1.986 0 .546-.356.9-.9.9-1.336 0-2.671 0-4.007-.002-.375 0-.66.115-.892.428-.48.647-.96 1.294-1.462 1.96H10.1c-.512-.686-1.002-1.343-1.498-2.008a.936.936 0 0 0-.825-.373c-1.317.002-2.634 0-3.951.002-.549 0-.905-.355-.905-.9 0-.663-.031-1.327.019-1.986.025-.333-.075-.609-.257-.879a52.128 52.128 0 0 1-1.468-2.228c-.287-.457-.282-.879.012-1.328a49.771 49.771 0 0 1 1.46-2.2.91.91 0 0 1 .28-.946c.03-.02 1.354-2.008 3.987-2.008h1.47c.506.012.98.536 1.29 1 .5.753.978 1.518 1.494 2.32h4c.542 0 .907.365.907.907-.002.663.029 1.326-.02 1.986-.025.334.075.609.257.879 1.385 2.109 2.5 3.8 2.518 3.82a.91.91 0 0 1-.02 1.218zM12 4.41c-4.185 0-7.59 3.405-7.59 7.59s3.405 7.59 7.59 7.59 7.59-3.405 7.59-7.59-3.405-7.59-7.59-7.59z" />
      </svg>
    ),
  },
  {
    name: "SCSS",
    color: "#CF649A",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 12.3c-.3.8-.9 1.4-1.7 1.8-.8.4-1.8.6-2.8.6-1.5 0-2.7-.4-3.5-1.2-.8-.8-1.2-1.9-1.2-3.3 0-1.5.4-2.6 1.2-3.4s2-1.2 3.5-1.2c1.1 0 2 .2 2.8.6.8.4 1.4 1 1.7 1.8l-1.6.8c-.2-.5-.5-.8-.9-1-.4-.2-.9-.3-1.5-.3-.9 0-1.6.3-2.1.8s-.7 1.2-.7 2.1c0 .9.2 1.6.7 2.1s1.2.8 2.1.8c.6 0 1.1-.1 1.5-.3.4-.2.7-.5.9-1l1.6.8z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.6H5.2l.4 4.5h11.9l-.4 4.7-5.1 1.4-5.1-1.4-.3-3.2H4.4l.5 5.9 7.1 2 7.1-2 .8-9.4H19l-.2-2z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.2 5.6H5.2l.8 9 6 1.7 6-1.7.4-4.5H9.6L9.4 8h8.6l.2-2.4z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.4 3.9l3.3 3.3c.3-.1.7-.1 1 .2.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.3-.3-.3-.7-.2-1L7.8 4.5 1.1 11.2c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.5-10.5c.4-.4.4-1.1 0-1.5zM12.4 14.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z" />
      </svg>
    ),
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-[#0A0A0B] text-white">
      <div className="container">
        
        {/* Header Block */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-center mb-14 text-center">
            <h2 className="text-[40px] font-black text-white mb-2 tracking-tight">
              Education
            </h2>
            <p className="text-[19px] font-semibold text-zinc-400 max-w-[550px]">
              My education and outlook on becoming a professional programmer
            </p>
          </div>
        </ScrollReveal>

        {/* Contents Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          {/* Left Column: Education Card */}
          <ScrollReveal direction="left" delay={200} className="w-full lg:w-1/2">
            <div className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-xl shadow-black/30 w-full hover:border-[#6366F1]/30 transition-all duration-300">
              
              {/* Banner Container - Stretches fully to top, left, right */}
              <div className="w-full h-56 bg-[#0E1218] border-b border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#AE8C5E]/5 opacity-40" />
                
                {/* Golden line-art logo emblem - fills height beautifully */}
                <img 
                  src="https://user11385.na.imgto.link/public/20260518/najotlogo.svg" 
                  alt="Najot Ta'lim Logo" 
                  className="h-[75%] w-auto max-w-[85%] relative z-10 object-contain filter brightness-110 drop-shadow-[0_0_25px_rgba(174,140,94,0.15)] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Award / Cert Badge at bottom-left */}
                <div className="absolute bottom-4 left-5 bg-[#4F46E5] text-white font-extrabold text-[13px] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg relative z-20">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2c-4.418 0-8 3.582-8 8 0 2.064.786 3.948 2.063 5.377l-1.063 6.623 7-4 7 4-1.063-6.623c1.277-1.429 2.063-3.313 2.063-5.377 0-4.418-3.582-8-8-8zm0 13c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                  </svg>
                  <span>Frontend Developer</span>
                </div>
              </div>

              {/* Content Container - Padded */}
              <div className="p-7">
                <h3 className="text-3xl font-black mb-1.5 text-zinc-100 tracking-tight">Najot Ta'lim</h3>
                <div className="text-[#4F46E5] text-[17px] font-bold mb-4">Frontend Development course</div>
                <p className="text-zinc-400 mb-6 text-[15px] leading-relaxed font-medium">
                  During the 8-month intensive course, I studied modern web technologies in depth. I gained real-world experience through practical, production-level team projects.
                </p>
                
                {/* Details Pills */}
                <div className="flex gap-3 mb-6">
                  <div className="bg-[#181C24] border border-white/5 text-zinc-300 text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#4F46E5] stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>2025 - 2026</span>
                  </div>
                  <div className="bg-[#181C24] border border-white/5 text-zinc-300 text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#4F46E5] stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>8 month</span>
                  </div>
                </div>
                
                {/* Grid Checklist Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-5 border-t border-white/5">
                  {[
                    "10+ projects",
                    "Responsive design",
                    "REST API integration",
                    "Clean code practice"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-zinc-300 text-sm font-semibold">
                      <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" className="opacity-15" />
                        <path d="M8.5 12.5l2 2 5-5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Technologies & Mini Stats */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* Tech badges section */}
            <ScrollReveal direction="right" delay={300}>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[#6366F1] text-xl font-bold">{"</>"}</span>
                  <span className="text-[19px] font-bold text-zinc-200">Technologies I learned</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technologies.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="flex items-center gap-2.5 bg-[#121214] border border-white/5 px-4 py-3 rounded-lg text-zinc-300 transition-all duration-300 hover:border-[currentColor] hover:shadow-[0_0_15px_rgba(99,102,241,0.08)] hover:translate-x-1 cursor-default shadow-md"
                      style={{ color: tech.color }}
                    >
                      <span className="flex items-center justify-center w-5 h-5">{tech.svg}</span>
                      <span className="text-sm font-bold tracking-wide text-zinc-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Stats section */}
            <ScrollReveal direction="right" delay={450}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10+", label: "Projects" },
                  { value: "8", label: "Month duration" },
                  { value: "10", label: "Technology" }
                ].map((stat) => (
                  <div 
                    key={stat.label} 
                    className="bg-[#121214] border border-white/5 rounded-xl p-5 flex flex-col items-center shadow-lg hover:border-[#6366F1]/30 transition-colors duration-300"
                  >
                    <span className="text-2xl font-black text-[#6366F1]">{stat.value}</span>
                    <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider text-center mt-1.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}
