"use client";

import { useEffect, useRef, useState } from "react";

const PAIN_POINTS = [
  "Teams spend too much time on repetitive tasks.",
  "Leads slip away without consistent follow-up.",
  "Outdated workflows hurt customer experience.",
  "Scaling requires more people and higher costs.",
] as const;

function WarningIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.57 3.22 1.36 15.38a1.65 1.65 0 0 0 1.43 2.47h14.42a1.65 1.65 0 0 0 1.43-2.47L11.43 3.22a1.65 1.65 0 0 0-2.86 0Z"
        fill="#F5A623"
        stroke="#F5A623"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 7.5v3.33" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.75" r="0.75" fill="#fff" />
    </svg>
  );
}

function Badge({ text, visible }: { text: string; visible: boolean }) {
  return (
    <div
      className="inline-flex items-center gap-2 bg-white transition-all duration-700"
      style={{
        border: "1px solid #F3F3F3",
        borderRadius: 100,
        padding: "12px 20px",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.7)",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <WarningIcon />
      <span className="body-sm text-primary whitespace-nowrap">{text}</span>
    </div>
  );
}

export default function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleBadges, setVisibleBadges] = useState<boolean[]>([false, false, false, false]);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const triggerStart = window.innerHeight * 0.5;
      const triggerStep = 360;

      const newVisible = PAIN_POINTS.map((_, i) => {
        const threshold = triggerStart + i * triggerStep;
        return sectionTop >= threshold;
      });

      setVisibleBadges(newVisible);
      setHeadingVisible(sectionTop >= triggerStart - 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: 2400 }}
    >
      {/* Sticky container — stays fixed while scrolling through triggers */}
      <div
        className="sticky top-0 flex items-center justify-center"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div
          className="relative mx-auto w-full"
          style={{ maxWidth: 1440, padding: "0 100px", height: 600 }}
        >
          {/* Pain point badges — positioned around the heading */}
          {/* Top-left */}
          <div className="absolute" style={{ top: 40, left: 100 }}>
            <Badge text={PAIN_POINTS[0]} visible={visibleBadges[0]} />
          </div>
          {/* Top-right */}
          <div className="absolute" style={{ top: 40, right: 100 }}>
            <Badge text={PAIN_POINTS[1]} visible={visibleBadges[1]} />
          </div>
          {/* Bottom-left */}
          <div className="absolute" style={{ bottom: 40, left: 140 }}>
            <Badge text={PAIN_POINTS[2]} visible={visibleBadges[2]} />
          </div>
          {/* Bottom-right */}
          <div className="absolute" style={{ bottom: 40, right: 100 }}>
            <Badge text={PAIN_POINTS[3]} visible={visibleBadges[3]} />
          </div>

          {/* Center heading */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="heading-lg text-primary text-center transition-all duration-700"
              style={{
                maxWidth: 700,
                opacity: headingVisible ? 1 : 0,
                transform: headingVisible ? "translateY(0)" : "translateY(30px)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Eliminate the bottlenecks that hold you back
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
