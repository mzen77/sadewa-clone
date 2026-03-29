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

export default function CTASection() {
  return (
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
          style={{ marginTop: 48, padding: "16px 32px", borderRadius: 100 }}
        >
          Get Free Consultation
          <span
            className="flex items-center justify-center rounded-full bg-primary"
            style={{ width: 32, height: 32 }}
          >
            <ArrowUpRight />
          </span>
        </a>
      </div>
    </section>
  );
}
