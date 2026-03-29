import Image from "next/image";

const SERVICES = [
  {
    title: "AI strategy & consulting",
    description:
      "Get a clear roadmap on how AI can drive growth and efficiency for your business.",
    image: "/images/services/strategy.png",
  },
  {
    title: "AI content creation",
    description:
      "Get a clear roadmap on how AI can drive growth and efficiency for your business.",
    image: "/images/services/content.png",
  },
  {
    title: "AI agent development",
    description:
      "Design and deploy AI agents built specifically to solve your unique business challenges.",
    image: "/images/services/strategy.png",
  },
  {
    title: "CRM AI automation",
    description:
      "Automate customer interactions and follow-ups to keep relationships strong and organized.",
    image: "/images/services/crm.png",
  },
  {
    title: "AI process automation",
    description:
      "Transform repetitive workflows into smooth, automated systems that save time.",
    image: "/images/services/agent.png",
  },
] as const;

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div style={{ borderTop: "1px solid #E5E5E5", padding: "40px 20px" }}>
      <div className="relative mb-6" style={{ height: 200 }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="heading-sm text-primary mb-3">{title}</h3>
      <p className="body-sm text-primary">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-white" style={{ padding: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div>
            <p className="label text-primary mb-4">OUR SERVICES</p>
            <h2 className="heading-lg text-primary">Automation solutions</h2>
          </div>
          <p className="body-sm text-primary" style={{ maxWidth: 400 }}>
            Our AI-driven automation eliminates busywork, streamlines your
            operations, and helps your business grow, without extra effort.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
