"use client";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with Sadewa was a game changer. They automated our processes, streamlined our CRM, and boosted our team\u2019s productivity in no time!",
    name: "Rizki Anugrah",
    role: "Product Manager of Blockhaus",
  },
  {
    quote:
      "Sadewa transformed how we handle leads. Their AI agent qualified prospects instantly and helped our sales team close deals faster than ever!",
    name: "Evelyn Tanuwidjaja",
    role: "Marketing Manager of Batavia",
  },
  {
    quote:
      "The AI agent they built saved our team hours every week and improved our response time. It feels like we hired a new team member who never sleeps!",
    name: "Windi Kulina",
    role: "CMO of Bima",
  },
];

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div>
      <p
        className="font-sans text-primary"
        style={{
          fontSize: 40,
          lineHeight: "48px",
          letterSpacing: "-1.8px",
          fontWeight: 500,
          maxWidth: 900,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ marginTop: 32 }}>
        <p className="heading-xs text-primary">{name}</p>
        <p className="label text-primary" style={{ marginTop: 4 }}>
          {role}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white" style={{ padding: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        <p className="label text-primary" style={{ marginBottom: 40 }}>
          TESTIMONIALS
        </p>

        <div className="flex flex-col">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.name}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
              {index < TESTIMONIALS.length - 1 && (
                <div
                  className="border-t border-light-gray"
                  style={{ marginTop: 80, marginBottom: 80 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-2" style={{ marginTop: 60 }}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={index === 0 ? "bg-primary" : "bg-light-gray"}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
