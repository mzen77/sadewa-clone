const PAIN_POINTS = [
  {
    text: "Teams spend too much time on repetitive tasks.",
    position: "top-[10%] left-[5%]",
  },
  {
    text: "Leads slip away without consistent follow-up.",
    position: "top-[10%] right-[5%]",
  },
  {
    text: "Outdated workflows hurt customer experience.",
    position: "bottom-[10%] left-[10%]",
  },
  {
    text: "Scaling requires more people and higher costs.",
    position: "bottom-[10%] right-[5%]",
  },
] as const;

function WarningIcon() {
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
        d="M8.57 3.22 1.36 15.38a1.65 1.65 0 0 0 1.43 2.47h14.42a1.65 1.65 0 0 0 1.43-2.47L11.43 3.22a1.65 1.65 0 0 0-2.86 0Z"
        fill="#F5A623"
        stroke="#F5A623"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 7.5v3.33" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.75" r="0.75" fill="#fff" />
    </svg>
  );
}

export default function PainPointsSection() {
  return (
    <section
      className="relative bg-white text-center"
      style={{ padding: "120px 80px", minHeight: 600 }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 1440 }}>
        {/* Warning badges */}
        {PAIN_POINTS.map((point) => (
          <div
            key={point.text}
            className={`absolute ${point.position} hidden lg:inline-flex items-center gap-2 bg-white`}
            style={{
              border: "1px solid #F3F3F3",
              borderRadius: 100,
              padding: "12px 20px",
            }}
          >
            <WarningIcon />
            <span className="body-sm text-primary whitespace-nowrap">
              {point.text}
            </span>
          </div>
        ))}

        {/* Mobile badges — stacked */}
        <div className="flex flex-col items-center gap-3 mb-10 lg:hidden">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.text}
              className="inline-flex items-center gap-2 bg-white"
              style={{
                border: "1px solid #F3F3F3",
                borderRadius: 100,
                padding: "12px 20px",
              }}
            >
              <WarningIcon />
              <span className="body-sm text-primary">{point.text}</span>
            </div>
          ))}
        </div>

        {/* Center heading */}
        <h2 className="heading-lg text-primary mx-auto" style={{ maxWidth: 700 }}>
          Eliminate the bottlenecks that hold you back
        </h2>
      </div>
    </section>
  );
}
