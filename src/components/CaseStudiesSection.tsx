"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

function ArrowUpRight() {
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
        stroke="#131313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  badgeImage: string;
  badgeAlt: string;
  year: string;
  title: string;
  metrics: Metric[];
  image: string;
  imageAlt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    badgeImage: "/images/cases/case1-badge.png",
    badgeAlt: "Client logo",
    year: "2022",
    title: "AI Automation & Portfolio Website for a Design Studio",
    metrics: [
      { value: "40%", label: "Increase in ROI" },
      { value: "3", label: "New retainer" },
      { value: "2x", label: "Website engagement" },
    ],
    image: "/images/cases/case1-laptop.jpg",
    imageAlt: "Case study 1 — laptop showing project result",
  },
  {
    badgeImage: "/images/cases/case2-badge.png",
    badgeAlt: "Client logo",
    year: "2025",
    title:
      "We built a custom AI agent to score and route leads instantly.",
    metrics: [
      { value: "2x", label: "More qualified leads" },
      { value: "35%", label: "Faster lead response" },
      { value: "$1.5M+", label: "Added to pipeline" },
    ],
    image: "/images/cases/case2-monitor.jpg",
    imageAlt: "Case study 2 — monitor showing project result",
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <ScrollReveal delay={0.2 * index}>
      <div
        className="bg-primary"
        style={{ borderRadius: 24, padding: 48, marginBottom: 32 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text side */}
          <div className="flex flex-col gap-6">
            {/* Badge + year */}
            <div className="flex items-center gap-3">
              <Image
                src={study.badgeImage}
                alt={study.badgeAlt}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-mono text-[14px] font-normal uppercase text-white">
                {study.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="heading-md text-white">{study.title}</h3>

            {/* Metrics row */}
            <div className="flex items-start gap-8 mt-4">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1">
                  <span
                    className="font-sans text-white"
                    style={{ fontSize: 32, fontWeight: 500 }}
                  >
                    {metric.value}
                  </span>
                  <span className="font-mono text-[12px] font-normal uppercase text-white">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="flex justify-end">
            <Image
              src={study.image}
              alt={study.imageAlt}
              width={560}
              height={380}
              className="w-full h-auto object-cover"
              style={{ borderRadius: 16, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="mx-auto bg-white"
      style={{ maxWidth: 1440, padding: "80px 80px" }}
    >
      {/* Header row */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
          <div>
            <p className="label text-primary mb-4">CASE STUDIES</p>
            <h2 className="heading-lg text-primary">Latest works</h2>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 body-md text-primary border border-light-gray hover:bg-surface transition-colors duration-200"
            style={{ padding: "10px 20px", borderRadius: 100 }}
          >
            More case studies
            <ArrowUpRight />
          </Link>
        </div>
      </ScrollReveal>

      {/* Case study cards */}
      {CASE_STUDIES.map((study, i) => (
        <CaseStudyCard key={study.year} study={study} index={i} />
      ))}
    </section>
  );
}
