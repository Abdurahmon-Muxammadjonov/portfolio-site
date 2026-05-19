"use client";

import React, { useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ScrollReveal from "./components/ScrollReveal";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact me", href: "#contact" }
];

const orbitIcons = [
  {
    label: "HTML5",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 11.259.002.228-2.616H5.474l.69 7.95h7.961l-.317 3.51-2.831.761-2.852-.765-.183-2.062H5.322l.33 3.824 5.325 1.477 5.305-1.46.688-7.904H8.531z" />
      </svg>
    )
  },
  {
    label: "CSS3",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 5.086l.169 2.543h10.435l-.286 3.136H6.928l.171 2.544h9.728l-.515 5.603-4.331 1.2-4.36-1.2-.28-3.086h-2.54l.512 5.63 6.668 1.847 6.643-1.84 1.15-12.63v-3.8h-14.3z" />
      </svg>
    )
  },
  {
    label: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <text x="5" y="17" fill="#000" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    )
  },
  {
    label: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text x="5" y="17" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    )
  },
  {
    label: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-[2]">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" style={{ transform: "rotate(30deg)", transformOrigin: "center" }} />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" style={{ transform: "rotate(90deg)", transformOrigin: "center" }} />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" style={{ transform: "rotate(150deg)", transformOrigin: "center" }} />
      </svg>
    )
  },
  {
    label: "Next.js",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.72 17.514l-4.475-5.748v5.748h-1.57v-8.736h1.564l4.57 5.867v-5.867h1.57v8.736h-1.659zm-6.273-3.21l-1.558-2.002V12.7h1.558v1.604zm0-3.328H9.889V9.38h1.558v1.596z" />
      </svg>
    )
  },
  {
    label: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    )
  },
  {
    label: "Tailwind",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    )
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Handle header background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0B] text-zinc-100 selection:bg-[#6366F1] selection:text-white">
      {/* Background radial overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 10% 15%, rgba(99,102,241,0.08) 0%, transparent 40%), radial-gradient(circle at 85% 85%, rgba(230,0,38,0.04) 0%, transparent 35%)",
        }}
      />
      
      {/* Background floating particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className={`particle delay-${index + 1}`} />
        ))}
      </div>

      {/* Header & Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#101012]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#home"
            className="text-[30px] font-black tracking-tight bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent cursor-pointer select-none"
          >
            MBA.dev
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#959595] px-5 py-2 transition-all duration-300 cursor-pointer text-[17px] font-semibold hover:text-[#6366F1] hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 w-7 md:hidden z-50 relative focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#6366F1]" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#6366F1]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu drawer overlay - Placed outside of the clipped header context for correct mobile rendering */}
      <div
        className={`fixed inset-0 bg-[#0A0A0B]/98 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-300 md:hidden z-40 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 py-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#959595] px-6 py-3 text-center transition-all duration-300 cursor-pointer text-[22px] font-bold hover:text-[#6366F1]"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Sections Wrapper */}
      <main className="relative z-10 pt-24">
        {/* HERO SECTION */}
        <section id="home" className="relative w-full overflow-hidden pt-8 pb-16 sm:py-20">
          <div className="container grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="relative flex flex-col items-start max-lg:order-2 max-lg:items-center max-lg:text-center">
              {/* Subtle background glow behind text */}
              <div className="absolute top-0 left-0 w-44 h-44 bg-[#6366F1]/10 blur-[100px] rounded-full -z-10" />
              
              <ScrollReveal direction="up" delay={100} duration={700}>
                <div className="flex flex-col items-start mb-6 max-lg:items-center">
                  <span className="split-parent text-[22px] font-semibold text-[#707070] uppercase tracking-widest mb-1.5">
                    Hi I am
                  </span>
                  <span className="split-parent text-[26px] font-extrabold text-[#959595]">
                    Muxammadjonov Abdurahmon
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={250} duration={700}>
                <div className="flex flex-col items-start mb-6 max-lg:items-center">
                  <h1 className="text-[3.25rem] leading-[0.95] font-black tracking-tight bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent sm:text-[4.75rem] md:text-[5.75rem] lg:text-[6.75rem]">
                    Front-End
                    <br />
                    developer
                  </h1>
                </div>
              </ScrollReveal>

              {/* Social links */}
              <ScrollReveal direction="up" delay={400} duration={700}>
                <div className="flex gap-4 mb-9">
                  {[
                    {
                      name: "GitHub",
                      href: "https://github.com",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Instagram",
                      href: "https://instagram.com",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <circle cx="12" cy="12" r="4" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      ),
                    },
                    {
                      name: "LinkedIn",
                      href: "https://linkedin.com",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Telegram",
                      href: "https://t.me/xvzzz77",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.48-1.52 2.72-2.57 4.17-3.79.16-.14.32-.42-.01-.39-.33.03-1.78 1.01-4.7 2.98-.44.3-.84.45-1.21.44-.41-.01-1.21-.24-1.8-.43-.72-.23-1.3-.36-1.25-.76.03-.2.31-.4.85-.6 3.33-1.45 5.55-2.4 6.66-2.86 3.17-1.31 3.83-1.54 4.26-1.55.09 0 .31.02.45.14.12.09.16.22.18.31.02.09.03.29.01.44z" />
                        </svg>
                      ),
                    }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1B1B1E] flex items-center justify-center w-11 h-11 rounded-full border border-[#575759] text-zinc-300 transition-all duration-300 hover:border-[#6366F1] hover:text-[#6366F1] hover:scale-110 shadow-md shadow-black/40"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              {/* CV Button */}
              <ScrollReveal direction="up" delay={500} duration={700}>
                <div className="flex flex-wrap gap-4 items-center justify-start max-lg:justify-center">
                  <a
                    href="/CW.pdf"
                    download="Abdurahmon_Muxammadjonov_CV.pdf"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-[#959595] border-2 border-[#959595] rounded-lg overflow-hidden hover:border-[#6366F1] transition-colors duration-300 max-w-[200px] w-full bg-transparent shadow-lg shadow-black/20"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Download CV
                    </span>
                    <div className="absolute inset-0 bg-[#6366F1] translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Stats Block (Desktop) */}
              <ScrollReveal direction="up" delay={650} duration={700} className="w-full">
                <div className="hidden md:grid grid-cols-3 gap-6 bg-[#121214] border border-white/5 p-6 rounded-xl mt-14 w-full shadow-xl shadow-black/30">
                  {[
                    { value: "1+", label: "Experiences" },
                    { value: "13+", label: "Project done" },
                    { value: "10+", label: "Happy Clients" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center border-r last:border-none border-[#3d3d42]"
                    >
                      <div className="text-[#6366F1] text-[28px] font-extrabold mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[#959598] text-xs font-bold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Block (Mobile) */}
                <div className="md:hidden mt-10 space-y-3.5 w-full">
                  {[
                    { value: "1+", label: "Experiences" },
                    { value: "13+", label: "Project done" },
                    { value: "10+", label: "Happy Clients" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-[#121214]/50 p-4 text-center shadow-md shadow-black/20"
                    >
                      <div className="text-[26px] font-extrabold text-[#6366F1]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#959598] font-semibold uppercase tracking-widest mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Orbital Animation Column */}
            <div className="flex justify-center max-lg:order-1 max-lg:w-full">
              <ScrollReveal direction="up" delay={300} duration={1000} className="w-full flex justify-center max-lg:mb-14 max-lg:mt-4">
                <div className="relative w-full max-w-[280px] sm:max-w-[450px] aspect-square flex items-center justify-center">

                  
                  {/* Floating sparks around the orbit */}
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="particle w-1.5 h-1.5 top-[15%] left-[20%] delay-1" />
                    <div className="particle w-1 h-1 top-[70%] left-[10%] delay-3" />
                    <div className="particle w-2 h-2 top-[30%] left-[80%] delay-5" />
                    <div className="particle w-1.5 h-1.5 top-[80%] left-[75%] delay-7" />
                  </div>

                  {/* Central Glow Core */}
                  <div className="relative z-10 w-[110px] h-[110px] sm:w-[200px] sm:h-[200px] bg-[#6366F1]/10 rounded-full flex items-center justify-center border border-[#6366F1]/20 shadow-[0_0_80px_rgba(99,102,241,0.15)] animate-pulse">

                    <span className="text-[26px] sm:text-[46px] font-black bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                      {"</>"}
                    </span>
                  </div>

                  {/* Dash Orbital tech ring */}
                  <div className="absolute w-[220px] h-[220px] sm:w-[410px] sm:h-[410px] border border-dashed border-[#575757] rounded-full animate-spin-slow">
                    
                    {/* Inject custom variable for translate offset */}
                    <style>{`
                      :root { --orbit-radius: 105px; }
                      @media (min-width: 640px) { :root { --orbit-radius: 190px; } }
                    `}</style>

                    {orbitIcons.map((item, index) => {
                      const angle = (index / orbitIcons.length) * 360;
                      return (
                        <div
                          key={item.label}
                          className="absolute top-1/2 left-1/2 w-10 h-10 sm:w-14 sm:h-14 -ml-5 -mt-5 sm:-ml-7 sm:-mt-7"
                          style={{
                            transform: `rotate(${angle}deg) translate(var(--orbit-radius)) rotate(-${angle}deg)`,
                          }}
                        >
                          <div
                            className="bg-[#161619] p-1.5 sm:p-2.5 w-full h-full flex items-center justify-center rounded-xl border border-[#444448] shadow-lg shadow-black/50 hover:border-[currentColor] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 group cursor-pointer"
                            style={{ color: item.color }}
                            title={item.label}
                          >
                            <span className="group-hover:scale-110 transition-transform duration-300">
                              {item.svg}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <AboutSection />

        {/* EDUCATION SECTION */}
        <EducationSection />

        {/* PORTFOLIO PROJECTS SECTION */}
        <ProjectsSection />

        {/* CONTACT ME SECTION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0B0B0C] border-t border-white/5 py-10 relative z-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            className="text-[26px] font-black bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent"
          >
            MBA.dev
          </a>
          <p className="text-zinc-500 text-sm text-center sm:text-right">
            © {new Date().getFullYear()} Muxammadjonov Abdurahmon. All rights reserved. Created with Next.js 16.
          </p>
        </div>
      </footer>
    </div>
  );
}
