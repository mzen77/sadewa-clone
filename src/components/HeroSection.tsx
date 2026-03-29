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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z" fill="white" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative mx-auto bg-surface overflow-hidden"
      style={{ maxWidth: 1440, height: 857 }}
    >
      {/* Container */}
      <div
        className="relative"
        style={{ margin: "0 100px", paddingTop: 119 }}
      >
        {/* === TOP ROW: Heading + Showreel === */}
        <div
          className="flex items-start justify-between"
          style={{ position: "relative", zIndex: 2, height: 162 }}
        >
          {/* Heading */}
          <div style={{ width: 942 }}>
            <WordReveal
              text="Smart AI Automation for Growing Brands."
              className="heading-xl text-primary"
              tag="h1"
              staggerDelay={0.08}
              duration={0.6}
            />
          </div>

          {/* Showreel card — just the image + centered play button */}
          <ScrollReveal delay={0.5} origin="right">
            <div
              className="relative overflow-hidden shrink-0 cursor-pointer group"
              style={{ width: 288, height: 162, borderRadius: 4, marginTop: -9 }}
            >
              {/* Background image (contains /SHOWREEL text, chain icon, Sadewa logo) */}
              <Image
                src="/images/showreel-bg.jpg"
                alt="Showreel preview"
                fill
                className="object-cover"
                priority
              />
              {/* Play button — centered, dark gradient circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex items-center justify-center bg-dark-gradient rounded-full group-hover:scale-110 transition-transform duration-300"
                  style={{ width: 40, height: 40, opacity: 0.8, border: "1px solid #797979", backdropFilter: "blur(5px)" }}
                >
                  <PlayIcon />
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </div>
          </ScrollReveal>
        </div>

        {/* === BOTTOM ROW: Video (left, overflows up) + Content (right) === */}
        <div
          className="relative flex items-start"
          style={{ marginTop: 141 }}
        >
          {/* 3D Chain link video — overflows upward behind heading */}
          <ScrollReveal delay={0.3} origin="scale" className="shrink-0" duration={1}>
            <div
              style={{
                width: 613,
                height: 656,
                marginTop: -204,
                position: "relative",
                zIndex: 1,
              }}
            >
              <video
                src="/images/hero-chain.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right content: description, buttons, trusted */}
          <div
            className="flex flex-col justify-between"
            style={{
              flex: "1 1 0",
              paddingLeft: 32,
              paddingTop: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Description */}
            <ScrollReveal delay={0.6}>
              <p className="body-lg text-primary">
                Sadewa help you create custom AI agents and assistants to boost
                productivity and unlock new growth across every team.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.8}>
              <div className="flex items-center gap-2" style={{ marginTop: 40 }}>
                <a
                  href="/contact-us"
                  className="flex items-center justify-between font-sans text-[18px] font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
                  style={{ padding: "6px 6px 6px 16px", borderRadius: 4, width: 294, height: 52, letterSpacing: "-0.36px" }}
                >
                  Get Free Consultation
                  <span
                    className="flex items-center justify-center rounded-full bg-accent"
                    style={{ width: 40, height: 40 }}
                  >
                    <ArrowUpRight color="#131313" />
                  </span>
                </a>

                <a
                  href="/contact-us"
                  className="flex items-center justify-between font-sans text-[18px] font-medium text-primary bg-transparent hover:bg-surface/50 transition-colors duration-200 border border-light-gray"
                  style={{ padding: "6px 6px 6px 16px", borderRadius: 4, width: 294, height: 52, letterSpacing: "-0.36px" }}
                >
                  Work with us
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 40, height: 40, backgroundColor: "#E5E5E5" }}
                  >
                    <ArrowUpRight color="#131313" />
                  </span>
                </a>
              </div>
            </ScrollReveal>

            {/* Trusted by section */}
            <ScrollReveal delay={0.4}>
              <div style={{ marginTop: 40 }}>
                <div className="border-t border-light-gray pt-5">
                  <span className="label text-primary">/TRUSTED BY 300+ COMPANIES</span>
                  {/* Scrolling logos */}
                  <div className="overflow-hidden" style={{ marginTop: 12 }}>
                    <div className="flex items-center animate-marquee" style={{ width: "200%" }}>
                      <div className="flex items-center gap-10 shrink-0" style={{ width: "50%" }}>
                        {LOGOS.map((num) => (
                          <Image
                            key={`logo-a-${num}`}
                            src={`/images/logos/logo-${num}.png`}
                            alt={`Partner logo ${num}`}
                            width={120}
                            height={40}
                            className="h-6 w-auto object-contain opacity-50"
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
                            className="h-6 w-auto object-contain opacity-50"
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
      </div>
    </section>
  );
}
