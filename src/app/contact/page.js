import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact — Samsara Group",
  description: "Get in touch with Samsara Group for inquiries, reservations, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">CONTACT</h1>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-12">
        <div className="grid gap-12 lg:grid-cols-2 border-b border-outline-variant pb-16">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-title-lg font-medium uppercase tracking-wide text-on-surface">Private Sanctuary</h3>
                <a href="mailto:concierge@samsaragroup.com" className="text-body-md text-terracotta underline underline-offset-4 hover:text-primary transition-colors">concierge@samsaragroup.com</a>
              </div>
              <div>
                <h3 className="mb-2 text-title-lg font-medium uppercase tracking-wide text-on-surface">Curatorial</h3>
                <a href="mailto:curatorial@samsaragroup.com" className="text-body-md text-terracotta underline underline-offset-4 hover:text-primary transition-colors">curatorial@samsaragroup.com</a>
              </div>
              <div>
                <h3 className="mb-2 text-title-lg font-medium uppercase tracking-wide text-on-surface">Press</h3>
                <a href="mailto:press@samsaragroup.com" className="text-body-md text-terracotta underline underline-offset-4 hover:text-primary transition-colors">press@samsaragroup.com</a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-title-lg font-medium uppercase tracking-wide text-on-surface">Visit Us</h3>
                <div className="space-y-3 text-body-md text-on-surface-variant">
                  <div>
                    <p className="font-medium text-on-surface">Svarga Estate — Bali</p>
                    <p>Jl. Raya Sanggingan, Ubud, Gianyar 80561</p>
                  </div>
                  <div>
                    <p className="font-medium text-on-surface">Acasa — Jakarta</p>
                    <p>Jl. Senopati No. 42, Kebayoran Baru</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-title-lg font-medium uppercase tracking-wide text-on-surface">Hours</h3>
                <p className="text-body-md text-on-surface-variant">Mon–Sat: 09:00–18:00 · Sun: By appointment</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <ScrollReveal>
          <h2 className="mb-10 text-headline-sm font-display uppercase tracking-wide text-on-surface">SEND AN INQUIRY</h2>
        </ScrollReveal>
        <ScrollReveal>
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">First Name</label>
                <input type="text" required className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta" />
              </div>
              <div>
                <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Last Name</label>
                <input type="text" required className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Email</label>
              <input type="email" required className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta" />
            </div>
            <div>
              <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Inquiry Type</label>
              <select required className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta">
                <option value="">Select</option>
                <option value="reservation">Reservation & Stay</option>
                <option value="dining">Dining</option>
                <option value="music">Music & Listening</option>
                <option value="design">Design & Objects</option>
                <option value="community">Community</option>
                <option value="press">Press</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Message</label>
              <textarea rows={5} required className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta resize-none" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-3 bg-primary px-10 py-4 text-label-caps-sm uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container">
              SUBMIT
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
            </button>
          </form>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
