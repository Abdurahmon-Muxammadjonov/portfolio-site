"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Skill {
  label: string;
  percent: number;
}

const skills: Skill[] = [
  { label: "HTML", percent: 75 },
  { label: "CSS", percent: 70 },
  { label: "SCSS", percent: 75 },
  { label: "BOOTSTRAP", percent: 60 },
  { label: "JAVASCRIPT", percent: 70 },
  { label: "TAILWIND", percent: 85 },
  { label: "REACT.JS", percent: 80 },
  { label: "NEXT.JS", percent: 80 },
  { label: "REACT NATIVE", percent: 50 },
];

function CircularProgress({ percent, label }: Skill) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger animation once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <div className="w-24 h-24 mb-3 relative flex items-center justify-center">
        <svg width="96" height="96" viewBox="0 0 100 100" className="rotate-[-90deg]">
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke="#333333"
            strokeWidth="7"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke="#6366F1"
            strokeWidth="7"
            fill="none"
            strokeDasharray={270}
            strokeDashoffset={isVisible ? 270 - (270 * percent) / 100 : 270}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)' }}
          />
        </svg>
        <span className="absolute text-[19px] font-black text-[#6366F1]">{percent}%</span>
      </div>
      <span className="text-[#959598] text-[15px] font-black uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function SkillProgress() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 lg:mt-0">
      <div className="grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-3 max-[450px]:grid-cols-2">
        {skills.map((skill, index) => (
          <ScrollReveal 
            key={skill.label} 
            direction="up" 
            delay={index * 50} 
            duration={600}
          >
            <CircularProgress {...skill} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
