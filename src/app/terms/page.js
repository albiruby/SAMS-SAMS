import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Terms of Use — Samsara Group",
  description: "Terms and conditions governing your use of Samsara Group services and website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">
            TERMS OF USE
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
                ACCEPTANCE OF TERMS
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  By accessing or using the Samsara Group website and services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our services.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the revised terms.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                RESERVATIONS & SERVICES
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  All reservations are subject to availability and confirmation. We reserve the right to decline or cancel bookings at our discretion, particularly in cases of misuse, misrepresentation, or violation of our house rules.
                </p>
                <p>
                  Pricing, availability, and service descriptions are subject to change without notice. We make every effort to ensure accuracy, but errors may occur. We are not liable for any inaccuracies in published information.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                INTELLECTUAL PROPERTY
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  All content on this website — including text, images, logos, designs, and audio — is the property of Samsara Group or its licensors and is protected by applicable intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from Samsara Group.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-headline-sm font-display uppercase text-on-surface">
                LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  Samsara Group shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services or website. This includes, but is not limited to, loss of data, revenue, or profit.
                </p>
                <p>
                  Our total liability for any claim arising from your use of our services shall not exceed the amount you paid to us for the specific service in question.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
