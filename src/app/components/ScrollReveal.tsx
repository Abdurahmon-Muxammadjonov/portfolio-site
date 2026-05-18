"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Animation delay in milliseconds
  duration?: number; // Animation duration in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: string; // Travel distance
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up",
  distance = "30px",
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before viewport bottom
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionStyles = () => {
    if (isRevealed) {
      return {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      };
    }

    let transform = "translate3d(0, 0, 0)";
    if (direction === "up") transform = `translate3d(0, ${distance}, 0)`;
    else if (direction === "down") transform = `translate3d(0, -${distance}, 0)`;
    else if (direction === "left") transform = `translate3d(-${distance}, 0, 0)`;
    else if (direction === "right") transform = `translate3d(${distance}, 0, 0)`;

    return {
      opacity: 0,
      transform,
    };
  };

  const style = {
    ...getDirectionStyles(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
}
