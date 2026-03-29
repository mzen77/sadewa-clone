"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SOCIAL_LINKS = [
  { label: "X/Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "1k-5k", label: "$1k - $5k" },
  { value: "5k-10k", label: "$5k - $10k" },
  { value: "10k-25k", label: "$10k - $25k" },
  { value: "25k+", label: "$25k+" },
] as const;

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
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Form submission logic would go here
  }

  const inputClasses =
    "w-full bg-surface rounded-[12px] p-4 font-sans text-primary body-sm placeholder:text-secondary outline-none focus:ring-2 focus:ring-accent transition-shadow duration-200";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ padding: "80px 80px 0" }}>
          <div className="mx-auto" style={{ maxWidth: 1440 }}>
            <p className="label text-secondary">/CONTACT US</p>
            <h1 className="heading-lg text-primary" style={{ marginTop: 16 }}>
              Let&apos;s work together
            </h1>
          </div>
        </section>

        {/* Two-column layout */}
        <section style={{ padding: "60px 80px 120px" }}>
          <div
            className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
            style={{ maxWidth: 1440 }}
          >
            {/* Left: Contact Info */}
            <div>
              {/* Email */}
              <p className="label text-secondary mb-3">/EMAIL</p>
              <a
                href="mailto:hello@sadewa.com"
                className="font-sans text-accent hover:opacity-70 transition-opacity duration-200 block"
                style={{ fontSize: 32, fontWeight: 700, lineHeight: "40px" }}
              >
                hello@sadewa.com
              </a>

              {/* Phone */}
              <p
                className="label text-secondary mb-3"
                style={{ marginTop: 32 }}
              >
                /PHONE
              </p>
              <a
                href="tel:+123456789"
                className="font-sans text-primary hover:opacity-70 transition-opacity duration-200 block"
                style={{ fontSize: 20, fontWeight: 500 }}
              >
                +1234 567 89
              </a>

              {/* Office */}
              <p
                className="label text-secondary mb-3"
                style={{ marginTop: 32 }}
              >
                /OFFICE
              </p>
              <p
                className="font-sans text-primary"
                style={{ fontSize: 20, fontWeight: 500 }}
              >
                Jakarta, Indonesia
              </p>

              {/* Social Media */}
              <p
                className="label text-secondary mb-3"
                style={{ marginTop: 32 }}
              >
                /FOLLOW US
              </p>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="body-sm text-primary hover:opacity-70 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23797979' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 font-sans text-[18px] font-medium text-primary bg-accent hover:opacity-90 transition-opacity duration-200 self-start"
                style={{
                  padding: "16px 32px",
                  borderRadius: 100,
                  marginTop: 8,
                }}
              >
                Send Message
                <span
                  className="flex items-center justify-center rounded-full bg-primary"
                  style={{ width: 32, height: 32 }}
                >
                  <ArrowUpRight />
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
