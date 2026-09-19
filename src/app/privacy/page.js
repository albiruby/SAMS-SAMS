import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Privacy Policy — Samsara Group",
  description: "How Samsara Group collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">
            PRIVACY POLICY
          </h1>
          <p className="mt-4 text-body-sm text-on-surface-variant">
            Last updated: January 2025
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="mx-auto max-w-3xl space-y-16">
          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                INFORMATION WE COLLECT
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  When you interact with our services, we may collect personal information you voluntarily provide, including your name, email address, phone number, and billing details.
                </p>
                <p>
                  We also collect certain data automatically when you visit our website, such as your IP address, browser type, referring pages, and time spent on our site. This information helps us understand how visitors use our platform and improve the experience.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                HOW WE USE YOUR INFORMATION
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fulfill reservations and provide requested services</li>
                  <li>Communicate regarding your bookings, inquiries, and preferences</li>
                  <li>Send updates about events, programs, and offerings you have opted into</li>
                  <li>Improve our website, services, and guest experience</li>
                  <li>Comply with legal obligations and protect our legitimate interests</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                DATA RETENTION
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.
                </p>
                <p>
                  When your data is no longer needed, we securely delete or anonymize it. You may request the deletion of your personal data at any time by contacting us directly.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                CONTACT
              </h2>
              <div className="text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
                </p>
                <a
                  href="mailto:privacy@samsaragroup.com"
                  className="mt-4 inline-block text-body-md text-terracotta underline underline-offset-4 hover:text-primary transition-colors"
                >
                  privacy@samsaragroup.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
