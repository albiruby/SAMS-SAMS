import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Events — Samsara Group",
  description: "Upcoming gatherings, performances, and curated experiences by Samsara Group.",
};

const events = [
  {
    slug: "nocturne",
    title: "Nocturne V",
    category: "Music & Listening",
    date: "15 Mar 2025",
    location: "Svarga Estate, Bali",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmBg4kvXIMCi_ZCe8Le6xMtHoEoiS_hJ_Ht-u4T-nq0FyD1kI-cmljJW86GGLxuLq6dgqn2lTjawXtFboD2uwSdHPpwD8Xz0AbUUbdypcz3dYh4oD2CG5LG9So0nQQHF3cfl_sq-l4n2v8TG7yNjEeyi-7hzJOXsFj58-KV5PptEZ4Xp-4cwA11UxNnZ-WoRbyv7-J94P-fzkVv4uasg7Z2ZTw0USC7oooT6aZR0VJps2HysBnpZ3",
    link: "/nocturne",
  },
  {
    slug: "harvest-table",
    title: "Harvest Table",
    category: "Dining & Terroir",
    date: "22 Mar 2025",
    location: "Svarga Estate, Bali",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4786-aPSLIKjY6KL1briNx1tY4t_g8YCk7Dn33qDkJkM1Q-6SkfW3Snxlo33go4uOvhQREvrdlBCVo9kt6ug_mxCD4qwxwodtfQ_6WRj1wKZb2oyft8kYl2YeFxbkyRXUeBPqEBf584VrGYjBY85vXXSnI1dly-laKWyO89RZiZw5ASluI5bndGEN3WXFKVCSwIQrbCKyFEjQ9usSoDC_p-2yAzYUMHBnAWPdxsU0D6G_Z6aX2u2",
    link: "#",
  },
  {
    slug: "golden-hour",
    title: "Golden Hour",
    category: "Leisure & Community",
    date: "05 Apr 2025",
    location: "Acasa, Jakarta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4786-aPSLIKjY6KL1briNx1tY4t_g8YCk7Dn33qDkJkM1Q-6SkfW3Snxlo33go4uOvhQREvrdlBCVo9kt6ug_mxCD4qwxwodtfQ_6WRj1wKZb2oyft8kYl2YeFxbkyRXUeBPqEBf584VrGYjBY85vXXSnI1dly-laKWyO89RZiZw5ASluI5bndGEN3WXFKVCSwIQrbCKyFEjQ9usSoDC_p-2yAzYUMHBnAWPdxsU0D6G_Z6aX2u2",
    link: "#",
  },
];

export default function EventsPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <span className="mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">UPCOMING</span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">EVENTS</h1>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="space-y-8">
          {events.map((event) => (
            <ScrollReveal key={event.slug}>
              <Link href={event.link} className="block group">
                <article className="relative overflow-hidden bg-surface-container-low border border-outline-variant transition-colors hover:border-outline">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
                      <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex w-full md:w-3/5 flex-col justify-center p-8 md:p-12">
                      <div className="mb-6 flex flex-wrap items-center gap-4">
                        <span className="text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">{event.category}</span>
                        <span className="text-label-caps-sm uppercase tracking-wider text-on-surface-variant">{event.date}</span>
                      </div>
                      <h2 className="mb-3 text-headline-md md:text-headline-lg font-display uppercase leading-tight text-on-surface">{event.title}</h2>
                      <p className="text-body-sm text-on-surface-variant/70 mb-8">{event.location}</p>
                      <span className="inline-flex w-fit items-center gap-3 border border-on-surface/20 px-8 py-3 text-label-caps-sm uppercase tracking-widest text-on-surface transition-colors group-hover:bg-primary group-hover:text-on-primary">
                        EXPLORE
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-primary max-w-[1520px] mx-auto px-6 lg:px-10 py-28">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-8 text-headline-md md:text-headline-lg font-display uppercase leading-tight text-on-primary">
              NEVER MISS<br />AN EXPERIENCE.
            </h2>
            <div className="flex w-full max-w-md flex-col sm:flex-row gap-3">
              <input type="email" placeholder="your@email.com" className="flex-1 border border-on-primary/30 bg-transparent px-6 py-4 text-body-md text-on-primary placeholder:text-on-primary/40 outline-none focus:border-on-primary" />
              <button className="whitespace-nowrap bg-on-primary px-8 py-4 text-label-caps-sm uppercase tracking-widest text-primary transition-colors hover:bg-warm-sand">SUBSCRIBE</button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
