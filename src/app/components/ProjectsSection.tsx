"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  category: "Next.js" | "React.js" | "Web / Other";
  url: string;
  description: string;
  tech: string[];
  gradient: string; // Tailwind gradient classes for beautiful mock screenshots
  image: string; // Real mockup screenshot paths
}

const projectsData: Project[] = [
  {
    title: "Notebooks Shop",
    category: "Next.js",
    url: "https://notebboks-x655.vercel.app/",
    description: "Premium high-performance online store for modern notebooks and accessories with dynamic product catalogs.",
    tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Cart System"],
    gradient: "from-indigo-600 to-blue-900",
    image: "/notebooks.png"
  },
  {
    title: "Foodzy Delivery",
    category: "React.js",
    url: "https://imtihon-foodzy.netlify.app/",
    description: "Elegant food catalog and express delivery application featuring a dynamic cart and fully responsive checkout.",
    tech: ["React.js", "Tailwind CSS", "State Management", "Animations"],
    gradient: "from-amber-500 to-red-700",
    image: "/foodzy.png"
  },
  {
    title: "Cat Info Portal",
    category: "Web / Other",
    url: "https://cat-project-ruddy.vercel.app/",
    description: "Delightful interactive search and discovery portal pulling live details and media from the Cat Breed API.",
    tech: ["HTML5", "CSS3 Animations", "JavaScript Core", "REST API"],
    gradient: "from-fuchsia-500 to-pink-800",
    image: "/cats.png"
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Next.js" | "React.js" | "Web / Other">("All");

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 bg-[#0A0A0B] text-white">
      <div className="container">
        
        {/* Title block */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-[40px] font-black text-white mb-2 tracking-tight">
              Portfolio
            </h2>
            <p className="text-[19px] font-semibold text-zinc-400 max-w-[550px]">
              My personal portfolio works study cases and web applications
            </p>
          </div>
        </ScrollReveal>

        {/* Filter buttons tabs */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(["All", "Next.js", "React.js", "Web / Other"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25 scale-105 border border-[#6366F1]"
                    : "bg-[#121214] text-zinc-400 border border-white/5 hover:text-white hover:border-zinc-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={(index % 3) * 100}
              duration={700}
            >
              {/* Card wrapper representing a browser window mockup */}
              <div className="group relative bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-xl shadow-black/30 hover:border-[#6366F1]/30 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-[#6366F1]/5 hover:-translate-y-1">
                
                {/* Browser tab bar */}
                <div className="bg-[#17171A] border-b border-white/5 py-3.5 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Main Card body */}
                <div className="relative flex-1 flex flex-col p-6">
                  
                  {/* Real screenshot preview area */}
                  <div className="w-full aspect-[16/10] rounded-lg mb-5 flex items-center justify-center relative overflow-hidden border border-white/5 shadow-inner bg-[#161619] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Text details */}
                  <h3 className="text-[22px] font-black mb-2 text-zinc-100 group-hover:text-[#6366F1] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-zinc-400 mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Badges list */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((badge) => (
                      <span
                        key={badge}
                        className="bg-[#1B1B1E] border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Premium sliding Glassmorphic Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#0A0A0C]/90 backdrop-blur-md opacity-0 translate-y-[100%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                    <span className="text-2xl font-black text-white mb-2">{project.title}</span>
                    <span className="text-xs text-[#6366F1] font-bold uppercase tracking-widest mb-4">
                      {project.category}
                    </span>
                    <p className="text-sm text-zinc-300 max-w-xs mb-6">
                      {project.description}
                    </p>
                    
                    {/* Demo redirection trigger button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white border-2 border-white rounded-lg overflow-hidden hover:border-[#6366F1] transition-colors duration-300 w-44"
                    >
                      <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300 flex items-center justify-center gap-1.5">
                        View Project <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 bg-[#6366F1] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0" />
                    </a>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
