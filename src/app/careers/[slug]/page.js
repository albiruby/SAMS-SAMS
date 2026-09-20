import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getJobBySlug, getJobOpenings } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} — Samsara Group Careers`,
    description: job.description,
  };
}

export async function generateStaticParams() {
  const jobs = await getJobOpenings();
  return jobs.map((j) => ({ slug: j.slug?.current })).filter(Boolean);
}

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <Header />
      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <Link href="/careers" className="mb-8 inline-flex items-center gap-2 text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant hover:text-terracotta transition-colors">← ALL OPENINGS</Link>
          <span className="mt-4 mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">{job.department}</span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">{job.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-body-sm text-on-surface-variant">
            <span>{job.location}</span>
            <span>{job.type}</span>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="space-y-12">
                {job.description && (
                  <div>
                    <h2 className="mb-4 text-headline-sm font-display uppercase tracking-wide text-on-surface">ABOUT THE ROLE</h2>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{job.description}</p>
                  </div>
                )}
                {job.responsibilities?.length > 0 && (
                  <div className="border-t border-outline-variant pt-8">
                    <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">RESPONSIBILITIES</h2>
                    <ul className="space-y-3">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="text-body-md text-on-surface-variant leading-relaxed flex gap-3">
                          <span className="text-terracotta mt-1">—</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {job.requirements?.length > 0 && (
                  <div className="border-t border-outline-variant pt-8">
                    <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">REQUIREMENTS</h2>
                    <ul className="space-y-3">
                      {job.requirements.map((r, i) => (
                        <li key={i} className="text-body-md text-on-surface-variant leading-relaxed flex gap-3">
                          <span className="text-terracotta mt-1">—</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="sticky top-32 border border-outline-variant bg-surface-container-low p-8">
                <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">APPLY</h2>
                <form className="space-y-6">
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Full Name</label>
                    <input type="text" required className="w-full border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors focus:border-terracotta" />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Email</label>
                    <input type="email" required className="w-full border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors focus:border-terracotta" />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Portfolio URL</label>
                    <input type="url" className="w-full border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors focus:border-terracotta" />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Message</label>
                    <textarea rows={4} className="w-full border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors focus:border-terracotta" />
                  </div>
                  <button type="submit" className="w-full mt-4 bg-primary px-8 py-4 text-label-caps-sm uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container">SUBMIT APPLICATION</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
