import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Sadewa",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Sadewa. These Terms of Service govern your access to and use of our website, products, and AI automation services. By accessing or using our services, you agree to be bound by these terms in their entirety. If you do not agree with any part of these terms, you must discontinue use of our services immediately.",
  },
  {
    title: "2. Services",
    content:
      "Sadewa provides AI-powered automation solutions, custom agent development, and related consulting services for businesses. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. Service availability may vary by region, and certain features may require additional agreements or subscriptions.",
  },
  {
    title: "3. User Obligations",
    content:
      "You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must not attempt to reverse-engineer, decompile, or otherwise extract the source code of any proprietary AI models or systems provided through our platform.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content, trademarks, software, and intellectual property associated with Sadewa and its services remain the exclusive property of Sadewa and its licensors. Custom AI solutions developed for clients are subject to the intellectual property terms outlined in individual service agreements. You may not reproduce, distribute, or create derivative works from our proprietary materials without express written consent.",
  },
  {
    title: "5. Payment Terms",
    content:
      "Fees for our services are as described in your service agreement or on our pricing page. All payments are due in accordance with the billing schedule specified in your agreement, and late payments may incur additional fees. We reserve the right to adjust pricing with thirty days' written notice, and refunds are handled in accordance with our refund policy outlined in individual contracts.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      'Sadewa and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total aggregate liability for any claim shall not exceed the amount paid by you for the services during the twelve months preceding the claim. Our services are provided "as is" without warranties of any kind, whether express or implied.',
  },
  {
    title: "7. Termination",
    content:
      "Either party may terminate the service agreement by providing written notice as specified in the applicable contract. Upon termination, your access to our services will cease, and any outstanding fees will become immediately due and payable. We reserve the right to terminate or suspend your account without notice if we determine that you have violated these terms or engaged in fraudulent or harmful activity.",
  },
  {
    title: "8. Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved through binding arbitration in Jakarta, Indonesia. By using our services, you consent to the exclusive jurisdiction of the courts located within this jurisdiction for any matters not subject to arbitration.",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="w-full flex justify-center items-center px-5 md:px-20 pt-[140px] pb-[60px]">
          <div className="max-w-[800px] w-full flex flex-col gap-4">
            <p className="label text-secondary">LEGAL</p>
            <h1 className="heading-lg text-primary">Terms of Service</h1>
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
