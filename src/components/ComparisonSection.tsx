"use client";

import ScrollReveal from "./ScrollReveal";

const SADEWA_FEATURES = [
  "Tailored custom AI agents and automation",
  "Covers strategy, build, and optimization",
  "Machine learning insights",
  "Solutions that grow with your business",
  "Continuous improvements and support",
  "Global tech expertise",
  "Works alongside your team like an extension",
] as const;

const OTHER_FEATURES = [
  "Limited or no AI expertise",
  "Only offers basic marketing or dev services",
  "Manual analysis, slower results",
  "Hard to scale without extra costs",
  "One-off projects with little follow-up",
  "Generic approaches, no cultural uniqueness",
  "Transactional, project-based relationships",
] as const;

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="12" fill="#98FE00" />
      <path
        d="M7.5 12.5L10.5 15.5L16.5 9.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="12" fill="#FF4444" />
      <path
        d="M9 9L15 15M15 9L9 15"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section className="bg-white" style={{ padding: "80px 40px" }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        <ScrollReveal>
          <h2 className="heading-lg text-primary" style={{ marginBottom: 60 }}>
            The difference is clear
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sadewa column */}
          <ScrollReveal delay={0.1} origin="left">
            <div
              style={{
                backgroundColor: "#131313",
                borderRadius: 24,
                padding: 48,
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 32,
                }}
              >
                Sadewa
              </h3>
              <div className="flex flex-col" style={{ gap: 20 }}>
                {SADEWA_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center" style={{ gap: 16 }}>
                    <CheckIcon />
                    <span className="body-md" style={{ color: "#FFFFFF" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Other Agencies column */}
          <ScrollReveal delay={0.3} origin="right">
            <div
              style={{
                backgroundColor: "#F3F3F3",
                borderRadius: 24,
                padding: 48,
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#131313",
                  marginBottom: 32,
                }}
              >
                Other Agencies
              </h3>
              <div className="flex flex-col" style={{ gap: 20 }}>
                {OTHER_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center" style={{ gap: 16 }}>
                    <XIcon />
                    <span className="body-md text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
