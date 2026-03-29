import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Case Studies — Sadewa",
  description: "See how we've helped businesses grow with AI automation.",
};

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  year: string;
  title: string;
  metrics: Metric[];
  image: string;
  imageAlt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    year: "2022",
    title: "AI Automation & Portfolio Website for a Design Studio",
    metrics: [
      { value: "40%", label: "Increase in ROI" },
      { value: "3", label: "New retainer" },
      { value: "2x", label: "Website engagement" },
    ],
    image: "/images/cases/case1-laptop.jpg",
    imageAlt: "Case study — laptop showing design studio project",
  },
  {
    year: "2025",
    title:
      "We built a custom AI agent to score and route leads instantly.",
    metrics: [
      { value: "2x", label: "More qualified leads" },
      { value: "35%", label: "Faster lead response" },
      { value: "$1.5M+", label: "Added to pipeline" },
    ],
    image: "/images/cases/case2-monitor.jpg",
    imageAlt: "Case study — monitor showing lead scoring dashboard",
  },
  {
    year: "2024",
    title: "AI-Powered Customer Support System for E-Commerce",
    metrics: [
      { value: "60%", label: "Reduction in response time" },
      { value: "4.8", label: "Customer satisfaction" },
      { value: "25%", label: "Cost savings" },
    ],
    image: "/images/cases/case1-laptop.jpg",
    imageAlt: "Case study — laptop showing customer support system",
  },
  {
    year: "2024",
    title: "Automated Content Pipeline for Digital Marketing Agency",
    metrics: [
      { value: "5x", label: "Content output" },
      { value: "50%", label: "Time saved" },
      { value: "85%", label: "Client retention" },
    ],
    image: "/images/cases/case2-monitor.jpg",
    imageAlt: "Case study — monitor showing content pipeline dashboard",
  },
];

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

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div
      className="bg-primary"
      style={{ borderRadius: 24, padding: 48, marginBottom: 32 }}
    >
      <div
        className="grid items-center gap-10"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[14px] font-normal uppercase text-white">
            {study.year}
          </span>

          <h3 className="heading-md text-white">{study.title}</h3>

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
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section
          className="mx-auto bg-white"
          style={{ maxWidth: 1440, padding: "80px 80px 0" }}
        >
          <p className="label text-primary mb-4">CASE STUDIES</p>
          <h1 className="heading-lg text-primary">Latest works</h1>
        </section>

        {/* Case study cards */}
        <section
          className="mx-auto bg-white"
          style={{ maxWidth: 1440, padding: "48px 80px 80px" }}
        >
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={`${study.year}-${index}`} study={study} />
          ))}
        </section>

        {/* CTA section */}
        <section className="bg-dark-gradient">
          <div
            className="mx-auto flex flex-col items-center text-center"
            style={{ maxWidth: 1440, padding: "120px 80px" }}
          >
            <h2
              className="heading-lg text-white"
              style={{ maxWidth: 800 }}
            >
              Ready to see results like these?
            </h2>
            <Link
              href="#contact"
              className="flex items-center gap-3 font-sans text-[18px] font-medium text-primary bg-accent hover:opacity-90 transition-opacity duration-200"
              style={{
                marginTop: 48,
                padding: "16px 32px",
                borderRadius: 100,
              }}
            >
              Get Free Consultation
              <span
                className="flex items-center justify-center rounded-full bg-primary"
                style={{ width: 32, height: 32 }}
              >
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
