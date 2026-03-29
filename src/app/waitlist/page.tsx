"use client";

import { useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API
    setEmail("");
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-dark-gradient min-h-screen flex items-center justify-center">
          <div
            className="mx-auto flex flex-col items-center text-center"
            style={{ maxWidth: 1440, padding: "120px 80px" }}
          >
            <span className="label" style={{ color: "#98FE00" }}>
              WAITLIST
            </span>

            <h1
              className="heading-xl text-white"
              style={{ marginTop: 24, maxWidth: 900 }}
            >
              Be the First to Experience AI-Powered Growth.
            </h1>

            <p
              className="body-lg"
              style={{ color: "rgba(255, 255, 255, 0.7)", marginTop: 24, maxWidth: 640 }}
            >
              Join our exclusive waitlist and be among the first to unlock
              AI-driven strategies that accelerate revenue, streamline
              operations, and future-proof your business.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-row items-center gap-3 w-full"
              style={{ marginTop: 48, maxWidth: 560 }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur border border-white/20 rounded-full p-4 pl-6 text-white placeholder-white/50 outline-none focus:border-white/40 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-accent text-primary font-medium rounded-full p-4 px-8 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>

            <p
              className="label"
              style={{ color: "rgba(255, 255, 255, 0.5)", marginTop: 24 }}
            >
              300+ companies already on the waitlist
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
