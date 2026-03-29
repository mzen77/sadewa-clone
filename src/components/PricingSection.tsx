"use client";

import { useState } from "react";

function CheckIcon({ color = "#131313" }: { color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10L8.5 14.5L16 5.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PricingTier {
  name: string;
  subtitle: string;
  monthlyPrice: string | null;
  yearlyPrice: string | null;
  strikethroughPrice: string | null;
  features: string[];
  featured: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Perfect for small businesses",
    monthlyPrice: "$999",
    yearlyPrice: "$799",
    strikethroughPrice: "$999",
    features: [
      "AI Strategy session",
      "Basic workflow automation",
      "Monthly performance report",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    subtitle: "Perfect for growth company",
    monthlyPrice: "$2499",
    yearlyPrice: "$1999",
    strikethroughPrice: "$2499",
    features: [
      "Everything in starter",
      "Custom AI agent development",
      "CRM Automation setup",
      "Bi-weekly optimization",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Perfect for big businesses",
    monthlyPrice: null,
    yearlyPrice: null,
    strikethroughPrice: null,
    features: [
      "Everything in growth",
      "Full process automation",
      "Dedicated AI consultant",
      "Advanced analytics dashboard",
    ],
    featured: false,
  },
];

function PricingCard({
  tier,
  isYearly,
}: {
  tier: PricingTier;
  isYearly: boolean;
}) {
  const isDark = tier.featured;
  const bgColor = isDark ? "#131313" : "#FFFFFF";
  const textColor = isDark ? "#FFFFFF" : "#131313";
  const subtitleColor = "#797979";
  const checkColor = isDark ? "#98FE00" : "#131313";
  const border = isDark ? "none" : "1px solid #E5E5E5";

  const displayPrice = tier.monthlyPrice === null
    ? "Get quote"
    : isYearly
      ? tier.yearlyPrice
      : tier.monthlyPrice;

  const showStrikethrough =
    isYearly && tier.strikethroughPrice !== null;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: 24,
        padding: 40,
        border,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Title */}
      <h3
        className="heading-xs"
        style={{ color: isDark ? "#98FE00" : "#131313", marginBottom: 8 }}
      >
        {tier.name}
      </h3>
      <p style={{ fontSize: 16, color: subtitleColor, marginBottom: 24 }}>
        {tier.subtitle}
      </p>

      {/* Price */}
      <div style={{ marginBottom: 32 }}>
        {showStrikethrough && (
          <span
            style={{
              fontSize: 18,
              color: textColor,
              textDecoration: "line-through",
              opacity: 0.5,
              marginRight: 8,
              display: "inline-block",
              marginBottom: 4,
            }}
          >
            {tier.strikethroughPrice}
          </span>
        )}
        <div className="flex items-end gap-2">
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: textColor,
              lineHeight: 1,
            }}
          >
            {displayPrice}
          </span>
          {tier.monthlyPrice !== null && (
            <span
              style={{
                fontSize: 14,
                color: subtitleColor,
                marginBottom: 6,
              }}
            >
              /month
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          marginBottom: 40,
          flex: 1,
        }}
      >
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
            style={{ marginBottom: 16, fontSize: 18, color: textColor }}
          >
            <CheckIcon color={checkColor} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        className="flex items-center justify-center font-sans text-[18px] font-medium transition-colors duration-200"
        style={{
          padding: "16px 28px",
          borderRadius: 100,
          backgroundColor: isDark ? "#98FE00" : "#131313",
          color: isDark ? "#131313" : "#FFFFFF",
          textDecoration: "none",
        }}
      >
        Choose {tier.name}
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      className="mx-auto bg-white"
      style={{ maxWidth: 1440, padding: "80px 80px" }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="label text-primary mb-4">PRICING</p>
        <h2 className="heading-lg text-primary mb-10">Choose your plan</h2>

        {/* Toggle */}
        <div
          className="inline-flex items-center"
          style={{
            backgroundColor: "#131313",
            borderRadius: 100,
            padding: 4,
          }}
        >
          <button
            type="button"
            onClick={() => setIsYearly(true)}
            className="flex items-center gap-2 font-sans cursor-pointer transition-colors duration-200"
            style={{
              fontSize: 20,
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 100,
              border: "none",
              backgroundColor: isYearly ? "#98FE00" : "transparent",
              color: isYearly ? "#131313" : "#FFFFFF",
            }}
          >
            Yearly
            {isYearly && (
              <span
                style={{
                  fontSize: 12,
                  color: "#FFFFFF",
                  backgroundColor: "#131313",
                  borderRadius: 100,
                  padding: "4px 8px",
                  fontWeight: 500,
                }}
              >
                save 20%
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsYearly(false)}
            className="font-sans cursor-pointer transition-colors duration-200"
            style={{
              fontSize: 20,
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 100,
              border: "none",
              backgroundColor: !isYearly ? "#98FE00" : "transparent",
              color: !isYearly ? "#131313" : "#FFFFFF",
            }}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} isYearly={isYearly} />
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
