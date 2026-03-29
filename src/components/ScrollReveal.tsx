"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  origin?: "bottom" | "left" | "right" | "scale";
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  origin = "bottom",
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("scroll-revealed");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("scroll-revealed");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const originClass =
    origin === "scale"
      ? "scroll-reveal-scale"
      : origin === "left"
        ? "scroll-reveal-left"
        : origin === "right"
          ? "scroll-reveal-right"
          : "scroll-reveal-bottom";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${originClass} ${className}`}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
}
