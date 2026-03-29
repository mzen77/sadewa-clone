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
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z" fill="white" />
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="mx-auto bg-white"
      style={{ maxWidth: 1440, padding: "110px 100px 0" }}
    >
      {/* Top row: Heading left + Showreel card right */}
      <div className="flex items-start justify-between gap-6" style={{ marginBottom: 0, position: "relative", zIndex: 2 }}>
        {/* Heading — takes most of the width */}
        <div style={{ flex: "1 1 0", maxWidth: 942 }}>
          <WordReveal
            text="Smart AI Automation for Growing Brands."
            className="heading-xl text-primary"
            tag="h1"
            staggerDelay={0.08}
            duration={0.6}
          />
        </div>

        {/* Showreel card — top right */}
        <ScrollReveal delay={0.5} origin="right">
          <div
            className="relative overflow-hidden shrink-0 cursor-pointer group"
            style={{ width: 288, height: 162, borderRadius: 4 }}
          >
            {/* Background image */}
            <Image
              src="/images/showreel-bg.jpg"
              alt="Showreel preview"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            {/* /SHOWREEL label */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="font-mono text-[11px] font-normal uppercase text-white/70">/SHOWREEL</span>
              <ChainIcon />
            </div>
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center bg-dark-gradient rounded-full group-hover:scale-110 transition-transform duration-300"
                style={{ width: 40, height: 40 }}
              >
                <PlayIcon />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom row: Video left + Content right */}
      <div className="flex items-start gap-8" style={{ marginTop: -20 }}>
        {/* 3D Chain link video — left side */}
        <ScrollReveal delay={0.3} origin="scale" className="shrink-0" duration={1}>
          <div style={{ width: 613, height: 450, position: "relative", zIndex: 1 }}>
            <video
              src="/images/hero-chain.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ borderRadius: 0 }}
            />
          </div>
        </ScrollReveal>

        {/* Right content: text, buttons, trusted */}
        <div className="flex flex-col justify-between" style={{ flex: "1 1 0", minHeight: 335, position: "relative", zIndex: 2 }}>
          {/* Description + buttons */}
          <div>
            <ScrollReveal delay={0.6}>
              <p className="body-lg text-primary" style={{ maxWidth: 595 }}>
                Sadewa help you create custom AI agents and assistants to boost
                productivity and unlock new growth across every team.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.8}>
              <div className="flex items-center gap-4" style={{ marginTop: 40 }}>
                <a
                  href="/contact-us"
                  className="flex items-center gap-3 font-sans text-[18px] font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
                  style={{ padding: "14px 24px", borderRadius: 100 }}
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
                  style={{ padding: "14px 24px", borderRadius: 100 }}
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

          {/* Trusted by section */}
          <ScrollReveal delay={0.4}>
            <div style={{ marginTop: 48 }}>
              <div className="border-t border-light-gray pt-6">
                <div className="flex items-center gap-6">
                  <span className="label text-secondary whitespace-nowrap">/TRUSTED BY 300+ COMPANIES</span>
                </div>
                {/* Scrolling logos */}
                <div className="overflow-hidden" style={{ marginTop: 16 }}>
                  <div className="flex items-center animate-marquee" style={{ width: "200%" }}>
                    <div className="flex items-center gap-10 shrink-0" style={{ width: "50%" }}>
                      {LOGOS.map((num) => (
                        <Image
                          key={`logo-a-${num}`}
                          src={`/images/logos/logo-${num}.png`}
                          alt={`Partner logo ${num}`}
                          width={120}
                          height={40}
                          className="h-7 w-auto object-contain opacity-50"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-10 shrink-0" style={{ width: "50%" }}>
                      {LOGOS.map((num) => (
                        <Image
                          key={`logo-b-${num}`}
                          src={`/images/logos/logo-${num}.png`}
                          alt={`Partner logo ${num}`}
                          width={120}
                          height={40}
                          className="h-7 w-auto object-contain opacity-50"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
