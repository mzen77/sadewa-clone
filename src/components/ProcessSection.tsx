"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface ProcessStep {
  number: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "/01",
    heading: "Discover",
    description:
      "We start by digging deep, understanding your goals, audience, and challenges. This is where insights surface and opportunities take shape.",
    image: "/images/process/discover.png",
    imageAlt: "3D illustration — Discover phase",
  },
  {
    number: "/02",
    heading: "Plan",
    description:
      "Next we map out a clear strategy, aligning AI solutions with your vision. Every step is designed to solve real problems and unlock growth.",
    image: "/images/process/plan.png",
    imageAlt: "3D illustration — Plan phase",
  },
  {
    number: "/03",
    heading: "Build",
    description:
      "Then we bring ideas to life, developing custom AI agents and automations. Each solution is crafted to fit seamlessly into your workflow.",
    image: "/images/process/build.png",
    imageAlt: "3D illustration — Build phase",
  },
  {
    number: "/04",
    heading: "Scale",
    description:
      "Finally we refine and expand, tracking results, improving performance, and scaling your AI systems as your business grows.",
    image: "/images/process/scale.png",
    imageAlt: "3D illustration — Scale phase",
  },
];

function StepRow({
  step,
  isFirst,
  index,
}: {
  step: ProcessStep;
  isFirst: boolean;
  index: number;
}) {
  return (
    <ScrollReveal delay={0.15 * index}>
      <div
        style={{
          paddingTop: isFirst ? 0 : 80,
          paddingBottom: 80,
          borderTop: isFirst ? "none" : "1px solid #E5E5E5",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: number + illustration */}
          <div className="flex flex-col items-center gap-4">
            <span
              className="font-sans"
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#D3D3D3",
              }}
            >
              {step.number}
            </span>
            <Image
              src={step.image}
              alt={step.imageAlt}
              width={300}
              height={300}
              className="object-contain"
              style={{ maxWidth: 300 }}
            />
          </div>

          {/* Right: heading + description */}
          <div>
            <h3 className="heading-lg text-primary mb-6">{step.heading}</h3>
            <p
              className="body-sm text-primary"
              style={{ maxWidth: 400, fontWeight: 500 }}
            >
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ProcessSection() {
  return (
    <section
      className="mx-auto bg-white"
      style={{ maxWidth: 1440, padding: "80px 80px" }}
    >
      <ScrollReveal>
        <p className="label text-primary mb-12">OUR APPROACH</p>
      </ScrollReveal>

      {STEPS.map((step, index) => (
        <StepRow key={step.number} step={step} isFirst={index === 0} index={index} />
      ))}
    </section>
  );
}
