"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

function ArrowUpRight({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 13L13 1M13 1H1M13 1V13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AutoPlayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src="/images/cta-video.mp4"
      loop
      muted
      playsInline
      className="w-full h-auto object-cover"
      style={{ aspectRatio: "570 / 471" }}
    />
  );
}

export default function CTASection() {
  return (
    <section className="bg-dark-gradient">
      <div
        className="mx-auto flex flex-col md:flex-row items-center gap-12"
        style={{ maxWidth: 1440, padding: "100px 80px" }}
      >
        {/* Left: text and button */}
        <div className="flex-1">
          <ScrollReveal>
            <h2 className="heading-lg text-white" style={{ maxWidth: 600 }}>
              Ready to implement AI in your business?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-3 font-sans text-[18px] font-medium text-primary bg-accent hover:opacity-90 transition-opacity duration-200"
              style={{ marginTop: 40, padding: "16px 32px", borderRadius: 100 }}
            >
              Get Free Consultation
              <span
                className="flex items-center justify-center rounded-full bg-primary"
                style={{ width: 32, height: 32 }}
              >
                <ArrowUpRight />
              </span>
            </a>
          </ScrollReveal>
        </div>

        {/* Right: video */}
        <ScrollReveal delay={0.2} origin="right">
          <div
            className="overflow-hidden"
            style={{ width: 570, maxWidth: "100%", borderRadius: 16 }}
          >
            <AutoPlayVideo />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
