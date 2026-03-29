"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about-us" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
] as const;

function ChainLinkIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="#131313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="#131313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-surface"
      style={{ borderBottomColor: "#F3F3F3" }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1440, padding: "15px 20px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ChainLinkIcon />
          <span className="font-sans text-[20px] font-bold text-primary">
            Sadewa
          </span>
        </Link>

        {/* Nav Links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label text-primary hover:opacity-60 transition-opacity duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="font-sans text-[14px] font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
          style={{ padding: "10px 20px", borderRadius: 100 }}
        >
          Work with us
        </Link>
      </div>
    </nav>
  );
}
