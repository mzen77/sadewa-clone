import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us — Sadewa",
  description: "Learn about Sadewa, your AI growth partner.",
};

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Bayu Pratama",
    role: "CEO",
    description:
      "Leading the agency\u2019s mission to blend Indonesian creativity with cutting-edge AI automation that helps businesses work smarter and scale faster.",
    image: "/images/team/team1.png",
  },
  {
    name: "Putri Ananda",
    role: "CTO",
    description:
      "Designs and integrates AI workflows that save time and cut costs for clients across industries.",
    image: "/images/team/team2.png",
  },
  {
    name: "Gilang Nugroho",
    role: "VP of Engineering",
    description:
      "Specializes in building smart AI agents and custom automation tools tailored to business needs.",
    image: "/images/team/team3.png",
  },
  {
    name: "Dinda Kumalasari",
    role: "VP of Design",
    description:
      "Ensures every client gets the most value from Sadewa\u2019s solutions, with a focus on long-term growth.",
    image: "/images/team/team4.png",
  },
];

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "300+", label: "Companies Served" },
  { value: "50+", label: "AI Agents Built" },
  { value: "98%", label: "Client Retention" },
  { value: "4", label: "Years of Innovation" },
];

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

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="mx-auto bg-white"
          style={{ maxWidth: 1440, padding: "80px 80px" }}
        >
          <p className="label text-secondary mb-6">ABOUT US</p>
          <h1 className="heading-xl text-primary" style={{ maxWidth: 900 }}>
            We&apos;re Sadewa — Your AI Growth Partner.
          </h1>
          <p
            className="body-lg text-secondary"
            style={{ maxWidth: 640, marginTop: 32 }}
          >
            We help forward-thinking businesses harness the power of artificial
            intelligence to streamline operations, delight customers, and unlock
            sustainable growth at every stage.
          </p>
        </section>

        {/* Mission / Values Section */}
        <section
          className="mx-auto bg-surface"
          style={{ maxWidth: 1440, padding: "80px 80px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-md text-primary">Our Mission</h2>
            </div>
            <div>
              <p className="body-md text-primary">
                At Sadewa, we believe every business deserves access to
                world-class AI. Our mission is to empower companies of all sizes
                with intelligent automation, custom AI agents, and data-driven
                strategies that turn complexity into competitive advantage. We
                partner closely with our clients to understand their unique
                challenges and deliver solutions that drive measurable results
                &mdash; from reducing operational costs to accelerating revenue
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          className="mx-auto bg-white"
          style={{ maxWidth: 1440, padding: "80px 80px" }}
        >
          <h2 className="heading-lg text-primary mb-16">
            Meet the Visionaries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name}>
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
                <h3 className="heading-xs text-primary mb-1">{member.name}</h3>
                <p className="label text-secondary mb-3">{member.role}</p>
                <p className="body-sm text-primary" style={{ fontWeight: 500 }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="mx-auto bg-surface"
          style={{ maxWidth: 1440, padding: "80px 80px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-sans text-primary"
                  style={{
                    fontSize: 64,
                    fontWeight: 700,
                    lineHeight: "72px",
                    letterSpacing: "-2.56px",
                  }}
                >
                  {stat.value}
                </p>
                <p className="body-md text-secondary" style={{ marginTop: 8 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark-gradient">
          <div
            className="mx-auto flex flex-col items-center text-center"
            style={{ maxWidth: 1440, padding: "120px 80px" }}
          >
            <h2
              className="heading-lg text-white"
              style={{ maxWidth: 800 }}
            >
              Ready to implement AI in your business?
            </h2>
            <a
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
                <ArrowUpRight color="#FFFFFF" />
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
