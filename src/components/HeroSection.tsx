"use client";

import Image from "next/image";
import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";

const LOGOS = [1, 2, 3, 4, 5] as const;

function ArrowUpRight({ color = "#131313" }: { color?: string }) {
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

function PlayIcon() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M24 14L0 28V0L24 14Z" fill="#98FE00" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="mx-auto bg-white px-5 pt-20 pb-10 md:px-20 md:pt-[120px] md:pb-[60px]"
      style={{ maxWidth: 1440 }}
    >
      {/* Main 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] items-start gap-10">
        {/* Left column */}
        <div>
          <WordReveal
            text="Smart AI Automation for Growing Brands."
            className="heading-xl text-primary"
            tag="h1"
            staggerDelay={0.08}
            duration={0.6}
          />

          {/* Right-aligned content below heading */}
          <div className="flex flex-col items-end mt-10">
            <ScrollReveal delay={0.6}>
              <p
                className="body-lg text-primary"
                style={{ maxWidth: 480 }}
              >
                Sadewa help you create custom AI agents and assistants to boost
                productivity and unlock new growth across every team.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <a
                  href="/contact-us"
                  className="flex items-center gap-3 font-sans text-[18px] font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
                  style={{ padding: "16px 28px", borderRadius: 100 }}
                >
                  Get Free Consultation
                  <span
                    className="flex items-center justify-center rounded-full bg-accent"
                    style={{ width: 32, height: 32 }}
                  >
                    <ArrowUpRight color="#131313" />
                  </span>
                </a>

                <a
                  href="/contact-us"
                  className="flex items-center gap-3 font-sans text-[18px] font-medium text-primary bg-white hover:bg-surface transition-colors duration-200 border border-light-gray"
                  style={{ padding: "16px 28px", borderRadius: 100 }}
                >
                  Work with us
                  <span
                    className="flex items-center justify-center rounded-full bg-primary"
                    style={{ width: 32, height: 32 }}
                  >
                    <ArrowUpRight color="#FFFFFF" />
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center gap-6">
          {/* Video thumbnail card */}
          <ScrollReveal delay={0.4} origin="right">
            <div
              className="relative overflow-hidden"
              style={{ width: 350, borderRadius: 16 }}
            >
              <Image
                src="/images/hero-video-thumb.jpg"
                alt="Showreel video thumbnail"
                width={350}
                height={220}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                <button
                  type="button"
                  aria-label="Play showreel video"
                  className="mb-3 cursor-pointer"
                >
                  <PlayIcon />
                </button>
                <span
                  className="font-mono text-[14px] font-normal uppercase tracking-wide text-white"
                >
                  /SHOWREEL
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* 3D illustration */}
          <ScrollReveal delay={0.6} origin="scale">
            <Image
              src="/images/hero-3d.png"
              alt="3D robot illustration"
              width={400}
              height={400}
              className="relative -ml-20"
              priority
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Logo marquee bar */}
      <ScrollReveal delay={0.3}>
        <div className="mt-16 border-t border-light-gray pt-8">
          <div className="flex items-center gap-8">
            {/* Slash divider + label */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="label text-secondary">/</span>
              <span className="label text-secondary whitespace-nowrap">
                TRUSTED BY 300+ COMPANIES
              </span>
            </div>

            {/* Scrolling logos */}
            <div className="overflow-hidden flex-1">
              <div className="flex items-center animate-marquee" style={{ width: "200%" }}>
                {/* First set */}
                <div className="flex items-center gap-12 shrink-0" style={{ width: "50%" }}>
                  {LOGOS.map((num) => (
                    <Image
                      key={`logo-a-${num}`}
                      src={`/images/logos/logo-${num}.png`}
                      alt={`Partner logo ${num}`}
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain opacity-60"
                    />
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 shrink-0" style={{ width: "50%" }}>
                  {LOGOS.map((num) => (
                    <Image
                      key={`logo-b-${num}`}
                      src={`/images/logos/logo-${num}.png`}
                      alt={`Partner logo ${num}`}
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain opacity-60"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}
