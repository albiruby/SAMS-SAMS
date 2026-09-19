import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Nocturne V — Samsara Group",
  description: "An evening of deep listening in darkness. Five hours of curated analog sound.",
};

export default function NocturnePage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <Link href="/events" className="mb-8 inline-flex items-center gap-2 text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant hover:text-terracotta transition-colors">← ALL EVENTS</Link>
          <span className="mt-4 mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">15 MARCH 2025 – CANGGU, BALI</span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">NOCTURNE V</h1>
          <p className="mt-4 text-headline-sm font-display uppercase tracking-wide text-on-surface-variant">ROTARY SELECTOR NIGHT</p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-16">
        <ScrollReveal>
          <div className="w-full aspect-[21/9] overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQmBg4kvXIMCi_ZCe8Le6xMtHoEoiS_hJ_Ht-u4T-nq0FyD1kI-cmljJW86GGLxuLq6dgqn2lTjawXtFboD2uwSdHPpwD8Xz0AbUUbdypcz3dYh4oD2CG5LG9So0nQQHF3cfl_sq-l4n2v8TG7yNjEeyi-7hzJOXsFj58-KV5PptEZ4Xp-4cwA11UxNnZ-WoRbyv7-J94P-fzkVv4uasg7Z2ZTw0USC7oooT6aZR0VJps2HysBnpZ3" alt="Nocturne V" className="h-full w-full object-cover" />
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Deep listening in darkness. Five hours of curated analog sound in our volcanic stone chamber. Limited to 24 guests. No screens. No interruptions. Only sound, shadow, and a room breathing together.
                  </p>
                </div>

                <div className="border-t border-outline-variant pt-8">
                  <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">DETAILS</h2>
                  <div className="space-y-4">
                    {[
                      ["Date", "15 March 2025"],
                      ["Time", "19:00 – 00:00"],
                      ["Location", "Svarga Estate, Canggu"],
                      ["Capacity", "24 guests"],
                      ["Entry", "By invitation only"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-outline-variant pb-4">
                        <span className="text-label-caps-sm uppercase tracking-wider text-on-surface-variant">{label}</span>
                        <span className="text-body-md text-on-surface">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="sticky top-32 bg-primary p-8 text-on-primary">
                <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-primary">RESERVE</h2>
                <form className="space-y-6">
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-primary/70">Full Name</label>
                    <input type="text" required className="w-full border-b border-on-primary/30 bg-transparent py-3 text-body-md text-on-primary placeholder:text-on-primary/40 outline-none transition-colors focus:border-on-primary" />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-primary/70">Email</label>
                    <input type="email" required className="w-full border-b border-on-primary/30 bg-transparent py-3 text-body-md text-on-primary placeholder:text-on-primary/40 outline-none transition-colors focus:border-on-primary" />
                  </div>
                  <button type="submit" className="w-full mt-4 bg-on-primary px-8 py-4 text-label-caps-sm uppercase tracking-widest text-primary transition-colors hover:bg-warm-sand">REQUEST INVITATION</button>
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
