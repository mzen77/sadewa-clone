"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What types of businesses can use Sadewa's AI solutions?",
    answer:
      "Our AI tools work for startups, growing companies, and enterprises across industries like SaaS, e-commerce, fintech, and more. If you have processes to improve, we can help.",
  },
  {
    question: "Do I need technical knowledge to use your solutions?",
    answer:
      "Not at all. We handle the complex tech so you can focus on running your business. Our team also provides full onboarding and support.",
  },
  {
    question: "How long does it take to implement AI automation?",
    answer:
      "It depends on the scope of your project. Most setups take 2-4 weeks, while larger integrations may take longer. We\u2019ll give you a clear timeline during planning.",
  },
  {
    question: "Can you build custom AI agents for my business?",
    answer:
      "Yes! Custom AI agent development is one of our core services. We design agents that fit your workflows and deliver measurable results.",
  },
  {
    question: "What if I need ongoing support?",
    answer:
      "Every plan includes support, and our Growth and Enterprise plans come with priority or 24/7 assistance. We\u2019re here to help you every step of the way.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid #E5E5E5", padding: "24px 0" }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <span
          className="font-sans text-primary"
          style={{ fontSize: 24, fontWeight: 500 }}
        >
          {item.question}
        </span>
        <span
          className="shrink-0 text-primary"
          style={{ fontSize: 24, marginLeft: 16 }}
          aria-hidden="true"
        >
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <p
          className="body-sm"
          style={{ color: "#3a3a3a", fontWeight: 500, marginTop: 16 }}
        >
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white" style={{ padding: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <p className="label text-primary mb-4">FAQ</p>
          <h2 className="heading-lg text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
