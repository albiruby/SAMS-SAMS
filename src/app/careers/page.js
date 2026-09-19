import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Careers — Samsara Group",
  description: "Join our team and help shape the future of experiential hospitality.",
};

const values = [
  { title: "CRAFT", description: "Every detail matters." },
  { title: "COMMUNITY", description: "Spaces where people connect." },
  { title: "SUSTAINABILITY", description: "We honor the land and seasons." },
  { title: "GROWTH", description: "Investing in people ready to deepen their practice." },
];

const roles = [
  {
    slug: "lead-spatial",
    title: "LEAD – SPATIAL DESIGN",
    location: "Canggu, Bali",
    department: "Design & Architecture",
  },
  {
    slug: null,
    title: "CULINARY DIRECTOR",
    location: "Kintamani, Bali",
    department: "Gastronomy",
  },
  {
    slug: null,
    title: "CURATORIAL ASSOCIATE",
    location: "Jakarta",
    department: "Programming",
  },
  {
    slug: null,
    title: "HOSPITALITY MANAGER",
    location: "Bali",
    department: "Guest Experience",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">CAREERS</h1>
          <p className="mt-6 max-w-lg text-body-md text-on-surface-variant leading-relaxed">
            We are building something that does not yet exist. If you are drawn to intention and craft — we would like to hear from you.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant">
          {values.map((value) => (
            <div key={value.title} className="bg-surface p-6 lg:p-8">
              <h3 className="mb-2 text-title-lg font-display uppercase tracking-wide text-on-surface">{value.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <ScrollReveal>
          <h2 className="mb-8 text-headline-sm font-display uppercase tracking-wide text-on-surface">OPEN POSITIONS</h2>
        </ScrollReveal>
        <div className="divide-y divide-outline-variant border-t border-outline-variant">
          {roles.map((role) => (
            <ScrollReveal key={role.title}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 group">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">{role.location}</span>
                    <span className="text-label-caps-sm uppercase tracking-wider text-on-surface-variant/60">{role.department}</span>
                  </div>
                  <h3 className="text-headline-sm font-display uppercase leading-tight text-on-surface">{role.title}</h3>
                </div>
                <div className="shrink-0">
                  {role.slug ? (
                    <Link href={`/careers/${role.slug}`} className="inline-flex items-center gap-3 border border-on-surface/20 px-8 py-3 text-label-caps-sm uppercase tracking-widest text-on-surface transition-colors hover:bg-primary hover:text-on-primary">
                      APPLY
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-3 border border-on-surface/20 px-8 py-3 text-label-caps-sm uppercase tracking-widest text-on-surface-variant">COMING SOON</span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
