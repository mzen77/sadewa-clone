"use client";

import { useEffect, useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
}

export default function WordReveal({
  text,
  className = "",
  tag: Tag = "h1",
  staggerDelay = 0.08,
  duration = 0.6,
  threshold = 0.2,
}: WordRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("word-reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement>} className={`word-reveal-container ${className}`}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="word-reveal-word"
          style={{
            transitionDelay: `${i * staggerDelay}s`,
            transitionDuration: `${duration}s`,
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
