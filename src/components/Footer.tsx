import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

const NAVIGATION_LINKS: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Waitlist", href: "/waitlist" },
];

const COMPANY_LINKS: LinkItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const LEGAL_LINKS: LinkItem[] = [
  { label: "Terms of Services", href: "/legal/terms-of-service" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
];

const SOCIAL_LINKS: LinkItem[] = [
  { label: "X/Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) {
  return (
    <div>
      <p className="label text-secondary mb-6">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="body-sm text-white hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary" style={{ padding: "60px 80px" }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-12">
          {/* Left: contact info */}
          <div>
            <p className="label text-secondary mb-3">/EMAIL</p>
            <a
              href="mailto:hello@sadewa.com"
              className="font-sans text-accent hover:opacity-70 transition-opacity duration-200 block"
              style={{ fontSize: 32, fontWeight: 700, lineHeight: "40px" }}
            >
              hello@sadewa.com
            </a>

            <p className="label text-secondary mb-3" style={{ marginTop: 32 }}>
              /PHONE
            </p>
            <a
              href="tel:+123456789"
              className="font-sans text-white hover:opacity-70 transition-opacity duration-200 block"
              style={{ fontSize: 20, fontWeight: 500 }}
            >
              +1234 567 89
            </a>
          </div>

          {/* Center: navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterLinkColumn title="/NAVIGATION" links={NAVIGATION_LINKS} />
            <div>
              <FooterLinkColumn title="/COMPANY" links={COMPANY_LINKS} />
              <div style={{ marginTop: 24 }}>
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="body-sm text-white hover:opacity-70 transition-opacity duration-200 block"
                    style={{ marginTop: 12 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <FooterLinkColumn title="/FOLLOW US" links={SOCIAL_LINKS} />
          </div>

          {/* Right: placeholder for any extra content */}
          <div />
        </div>

        {/* Large logo watermark */}
        <div className="relative" style={{ marginTop: 60 }}>
          <Image
            src="/images/footer-logo.png"
            alt="Sadewa logo"
            width={1440}
            height={200}
            className="w-full h-auto object-contain"
            style={{ opacity: 0.3 }}
          />
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid #3a3a3a",
            paddingTop: 32,
            marginTop: 60,
          }}
        >
          <span className="label-sm text-secondary">
            &copy; 2025 SADEWA. ALL RIGHTS RESERVED.
          </span>
          <span className="label-sm text-secondary">
            MADE WITH &hearts; MEMESIS
          </span>
        </div>
      </div>
    </footer>
  );
}
