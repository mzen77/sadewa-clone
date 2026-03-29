"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const TECH_ITEMS = [
  { number: "/01", name: "OpenAI", image: "/images/tech/openai.png" },
  { number: "/02", name: "Zapier", image: "/images/tech/zapier.png" },
  { number: "/03", name: "Airtable", image: "/images/tech/airtable.png" },
  { number: "/04", name: "Langchain", image: "/images/tech/langchain.png" },
  { number: "/05", name: "Python", image: "/images/tech/python.png" },
] as const;

export default function TechStackSection() {
  return (
    <section className="bg-white" style={{ padding: "80px 40px" }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        <ScrollReveal>
          <p className="label text-primary mb-4">TECHNOLOGIES</p>
          <h2 className="heading-lg text-primary" style={{ marginBottom: 60 }}>
            Tech stack we use
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {TECH_ITEMS.map((item, i) => (
            <ScrollReveal key={item.number} delay={0.1 * i}>
              <div
                style={{
                  borderTop: "1px solid #E5E5E5",
                  padding: "30px 0",
                }}
              >
                <span className="label text-secondary">{item.number}</span>
                <div
                  className="relative"
                  style={{ height: 60, margin: "20px 0" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <span className="label text-primary">{item.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
