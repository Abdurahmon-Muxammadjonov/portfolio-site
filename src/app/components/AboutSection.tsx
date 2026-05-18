"use client";

import ScrollReveal from "./ScrollReveal";
import SkillProgress from "./SkillProgress";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0A0A0B] text-white relative">
      <div className="container flex flex-col lg:flex-row gap-16 items-center justify-between">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 min-w-[320px] max-lg:text-center max-lg:items-center">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col items-center lg:items-start mb-6">
              <h2 className="text-[40px] font-black text-white mb-2 tracking-tight">
                About Me
              </h2>
              <p className="text-[19px] font-semibold text-zinc-400 max-w-[550px] lg:text-left text-center">
                Front-End Developer with a strong focus on building clean, responsive, and user-friendly interfaces.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="text-[17px] leading-relaxed text-[#959598] space-y-6 lg:text-left text-center">
              <p>
                Hi, I’m Muxammadjonov Abdurahmon, a Front-End Developer. I studied one year web development at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit PDP School"
                  href="https://school.pdp.uz"
                  className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-[#6366F1]"
                >
                  PDP School
                </a>
                , where I built a strong foundation in modern front-end technologies. After that, I continued my education at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Najot Ta'lim"
                  href="https://najottalim.uz"
                  className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-[#6366F1]"
                >
                  Najot Ta’lim
                </a>
                , further enhancing my practical skills through real-world projects.
              </p>
              <p>
                Currently, I am working as a{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Front-End Developer
                </span>
                , specializing in building responsive, user-friendly, and high-performance web applications. I have hands-on experience with{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">HTML</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">CSS</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Sass</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Bootstrap</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">JavaScript</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">TypeScript</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">React</span>,{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Next.js</span>, and{" "}
                <span className="bg-gradient-to-r font-extrabold from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">React Native</span>.
              </p>
              <p>
                I am passionate about writing clean, maintainable code, following best practices, and continuously
                learning new technologies to improve my development skills and deliver better user experiences.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="mt-9 text-center lg:text-left">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-[#959595] border-2 border-[#959595] rounded-lg overflow-hidden hover:border-[#6366F1] transition-colors duration-300 max-w-[200px] w-full bg-transparent shadow-lg shadow-black/20"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Download CV
                </span>
                <div className="absolute inset-0 bg-[#6366F1] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Skill Progress Indicators */}
        <div className="flex-1 w-full flex items-center justify-center">
          <ScrollReveal direction="none" delay={250}>
            <SkillProgress />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}