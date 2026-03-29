"use client";

import Image from "next/image";

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

interface TeamMember {
  number: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    number: "01",
    name: "Bayu Pratama",
    role: "CEO",
    description:
      "Leading the agency\u2019s mission to blend Indonesian creativity with cutting-edge AI automation that helps businesses work smarter and scale faster.",
    image: "/images/team/team1.png",
  },
  {
    number: "02",
    name: "Putri Ananda",
    role: "CTO",
    description:
      "Designs and integrates AI workflows that save time and cut costs for clients across industries.",
    image: "/images/team/team2.png",
  },
  {
    number: "03",
    name: "Gilang Nugroho",
    role: "VP of Engineering",
    description:
      "Specializes in building smart AI agents and custom automation tools tailored to business needs.",
    image: "/images/team/team3.png",
  },
  {
    number: "04",
    name: "Dinda Kumalasari",
    role: "VP of Design",
    description:
      "Ensures every client gets the most value from Sadewa\u2019s solutions, with a focus on long-term growth.",
    image: "/images/team/team4.png",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div>
      <div
        className="relative overflow-hidden mb-4"
        style={{ aspectRatio: "3 / 2", borderRadius: 16 }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <span
        className="font-mono text-[14px] text-secondary"
        style={{ display: "block", marginBottom: 8 }}
      >
        {member.number}
      </span>
      <h3
        className="font-sans text-primary"
        style={{ fontSize: 24, fontWeight: 500, marginBottom: 4 }}
      >
        {member.name}
      </h3>
      <p
        className="label text-primary"
        style={{ marginBottom: 12 }}
      >
        {member.role}
      </p>
      <p className="body-sm text-primary" style={{ fontWeight: 500 }}>
        {member.description}
      </p>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      className="mx-auto bg-white"
      style={{ maxWidth: 1440, padding: "80px 80px" }}
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
        <div>
          <p className="label text-primary mb-4">ABOUT US</p>
          <h2 className="heading-lg text-primary">Meet the Visionaries</h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-6">
          <p className="body-sm text-primary" style={{ maxWidth: 400 }}>
            Sadewa help you create custom AI agents and assistants to boost
            productivity and unlock new growth across every team.
          </p>
          <a
            href="#about"
            className="flex items-center gap-3 font-sans text-[18px] font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
            style={{ padding: "14px 24px", borderRadius: 100 }}
          >
            About Us
            <ArrowUpRight color="#FFFFFF" />
          </a>
        </div>
      </div>

      {/* Join us card */}
      <div
        className="bg-surface mb-12"
        style={{ borderRadius: 24, padding: 32 }}
      >
        <h3 className="heading-xs text-primary mb-2">Join us</h3>
        <p className="body-sm text-primary mb-4">
          We&apos;re always in the search for talented people to grow.
        </p>
        <a
          href="#careers"
          className="inline-flex items-center gap-2 body-md text-primary hover:opacity-70 transition-opacity duration-200"
        >
          Careers
          <ArrowUpRight />
        </a>
      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.number} member={member} />
        ))}
      </div>

      {/* Responsive overrides */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
