import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Sadewa",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "Sadewa is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our AI automation services. By accessing our services, you consent to the data practices described in this policy.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email address, company details, and payment information when you create an account or engage our services. We also automatically collect technical data including IP addresses, browser type, device information, and usage patterns through cookies and similar technologies. Additionally, we may collect data generated through your use of our AI tools and platforms to improve service quality.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use your personal information to provide, maintain, and improve our AI automation services and to process transactions and send related communications. Your data helps us personalize your experience, develop new features, and ensure the security of our platform. We may also use aggregated, anonymized data for analytical purposes and to train and improve our AI models, always in compliance with applicable laws.",
  },
  {
    title: "4. Data Sharing",
    content:
      "We do not sell your personal information to third parties. We may share data with trusted service providers who assist us in operating our platform, processing payments, or delivering services, all of whom are bound by strict confidentiality obligations. We may also disclose information when required by law, to protect our rights, or in connection with a merger, acquisition, or sale of assets.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your personal information from unauthorized access, alteration, or destruction. While we strive to use commercially acceptable means to protect your data, no method of electronic transmission or storage is completely secure. We promptly notify affected users in the event of a data breach in accordance with applicable regulations.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, update, or request deletion of your personal information at any time by contacting us. Depending on your jurisdiction, you may also have the right to data portability, the right to restrict processing, and the right to object to certain uses of your data. We will respond to all legitimate requests within the timeframe required by applicable law.",
  },
  {
    title: "7. Cookies",
    content:
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings, though disabling certain cookies may limit your ability to use some features of our services. We use both session cookies, which expire when you close your browser, and persistent cookies, which remain on your device until deleted or expired.",
  },
  {
    title: "8. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@sadewa.ai. You may also reach us by mail at our principal office in Jakarta, Indonesia. We are committed to resolving any complaints about your privacy and our collection or use of your personal information in a timely and fair manner.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="w-full flex justify-center items-center px-5 md:px-20 pt-[140px] pb-[60px]">
          <div className="max-w-[800px] w-full flex flex-col gap-4">
            <p className="label text-secondary">LEGAL</p>
            <h1 className="heading-lg text-primary">Privacy Policy</h1>
            <p className="body-sm text-secondary">
              Last updated: January 1, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full flex justify-center items-center px-5 md:px-20 pb-[100px]">
          <div className="max-w-[800px] w-full">
            {sections.map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="heading-sm text-primary mb-4">
                  {section.title}
                </h2>
                <p className="body-sm text-secondary leading-[1.75]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
