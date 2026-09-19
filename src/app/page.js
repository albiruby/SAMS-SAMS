"use client";

import Link from "next/link";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingFilter from "@/components/FloatingFilter";

const worlds = [
  { number: "01", name: "SAMSARA", tagline: "THE SANCTUARY", disciplines: "ACOUSTICS · DINING · RETREAT", href: "/samsara" },
  { number: "02", name: "SVVARA", tagline: "TACTILE ARTIFACTS", disciplines: "SOUND OBJECTS · CRAFT · DESIGN", href: "/svvara" },
  { number: "03", name: "SVARGA", tagline: "THE HIGHLANDS", disciplines: "HOSPITALITY · STILLNESS · NATURE", href: "/svarga" },
  { number: "04", name: "ACASA", tagline: "LEISURE RITUALS", disciplines: "MOVEMENT · ATHLETICS · COMMUNITY", href: "/acasa" },
];

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Header />
      <FloatingFilter />
      <main className="w-full bg-surface">

        {/* ── Hero ── */}
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
          <img src="/tampilanawal.webp" alt="Sams Group" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-[5rem] pb-12 lg:pb-16">
            <h1 className="font-display text-headline-lg lg:text-display-hero uppercase leading-[0.95] tracking-tight mb-6 lg:mb-8 text-white">
              FOUR EXPRESSIONS.<br />
              <span className="text-white/80">ONE PHILOSOPHY.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {worlds.map((world) => (
                <Link key={world.number} href={world.href} className="group bg-black/30 backdrop-blur-sm p-6 lg:p-8 transition-colors hover:bg-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label text-body-sm uppercase tracking-[0.15em] text-white/50">{world.number}</span>
                    <span className="font-label text-body-sm uppercase tracking-[0.15em] text-white/40">{world.tagline}</span>
                  </div>
                  <h3 className="font-display text-headline-sm uppercase mb-3 text-white">{world.name}</h3>
                  <p className="font-label text-body-sm uppercase tracking-[0.1em] text-white/40">{world.disciplines}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAMSARA ── */}
        <section id="samsara" className="bg-surface w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-[5rem] py-20 lg:py-32">
            <div className="grid grid-cols-12 gap-4 mb-12 lg:mb-16">
              <div className="col-span-12 lg:col-span-3">
                <span className="font-label text-body-sm uppercase tracking-[0.15em] text-on-surface-variant">WORLD 01</span>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className="font-display text-headline-md lg:text-headline-lg uppercase leading-tight text-on-surface">SAMSARA</h2>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              <div className="col-span-12 lg:col-span-8">
                <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQmBg4kvXIMCi_ZCe8Le6xMtHoEoiS_hJ_Ht-u4T-nq0FyD1kI-cmljJW86GGLxuLq6dgqn2lTjawXtFboD2uwSdHPpwD8Xz0AbUUbdypcz3dYh4oD2CG5LG9So0nQQHF3cfl_sq-l4n2v8TG7yNjEeyi-7hzJOXsFj58-KV5PptEZ4Xp-4cwA11UxNnZ-WoRbyv7-J94P-fzkVv4uasg7Z2ZTw0USC7oooT6aZR0VJps2HysBnpZ3" alt="Samsara" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="font-body text-body-lg text-on-surface leading-relaxed mb-10">
                    Sound. Food. Culture. A sanctuary where every frequency is designed.
                  </p>
                  <div className="space-y-0">
                    {[
                      ["ACOUSTIC SPEC", "18Hz–22kHz Reference"],
                      ["GASTRONOMY", "Terroir-Driven"],
                      ["LOCATION", "JKT · 01°S 110°E"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-4 border-b border-outline-variant last:border-0">
                        <span className="font-label text-body-sm uppercase tracking-[0.1em] text-on-surface-variant">{label}</span>
                        <span className="font-body text-body-sm text-on-surface">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="#" className="mt-10 w-full bg-primary text-on-primary font-label text-body-sm uppercase tracking-[0.15em] py-4 px-8 text-center inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  EXPLORE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SVVARA ── */}
        <section id="svvara" className="bg-surface-container w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-[5rem] py-20 lg:py-32">
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <span className="inline-block bg-primary-container text-surface font-label text-body-sm uppercase tracking-[0.15em] px-5 py-2.5 w-fit mb-8">
                  TACTILE ARTIFACTS
                </span>
                <p className="font-body text-body-lg text-on-surface leading-relaxed mb-8">
                  Sound. Object. Design. Hand-formed instruments built to last generations.
                </p>
                <Link href="#" className="bg-surface border border-on-surface/20 text-on-surface font-label text-body-sm uppercase tracking-[0.15em] py-4 px-8 text-center inline-flex items-center justify-center gap-2 hover:bg-on-surface hover:text-surface transition-colors">
                  VIEW COLLECTION →
                </Link>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARtFpYa_lXUkbEb4A8XI-KWfRs6nP2hq-_Mw5uXRVKGpGfgGPXw6uLPCb9Lk1yBlmxcigsJai6uf2HQiOEvRJu-5tA73QiuNFxSHeK-HFK0U1ZXW6I5iflD5cXG_0jbXnsI92C53R_DUakuRds5Zcbqt6iV-ep7AvhVBZyfqaml5y5DVPGR6U95a9E8Kr0PeMdPcbxVsTkUXNLSWs5huKsgYQVBn2Z6ZuKnaOQeSWba_3hjxnfs5A" alt="Svvara" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SVARGA ── */}
        <section id="svarga" className="bg-surface w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-[5rem] py-20 lg:py-32">
            <div className="relative h-[400px] lg:h-[520px] w-full overflow-hidden mb-12 lg:mb-16">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmAlsOQm3o_ps7vQB4K0A2jyRwPcLthVB15dNACEJwDfaH9tVn4VOMqJB_6Th6WpKBFsKEX4CgkANSxgmWT049ncxex_GO4n4hD0mKR4OlbLtndGlqeV1ZNZOtVozjR4rXLtVoFMHfYD0rZQy5sfWSE1K-XNJWEbBAa419OORXKrwCitXqhC8xXJhvq47iPpVfh3P7tGZCwhpgJVObeAtgjOYw6Rbc-qVCdfu3uVCk4KM7gXlSBHo" alt="Svarga" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant">
              <div className="bg-surface p-8 lg:p-10">
                <p className="font-body text-body-lg text-on-surface leading-relaxed">
                  Nature. Dining. Escape. Highland stillness at 1,140m.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  {[
                    ["VOLCANIC TERRAIN", "1,200m elevation"],
                    ["REGENERATIVE FARMING", "Zero waste"],
                    ["ARCHITECTURAL SILENCE", "Zero ambient noise"],
                  ].map(([title, desc]) => (
                    <div key={title}>
                      <span className="font-label text-body-sm uppercase tracking-[0.1em] text-on-surface-variant block mb-1">{title}</span>
                      <span className="font-body text-body-sm text-on-surface">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface p-8 lg:p-10 flex flex-col justify-between">
                <p className="font-body text-body-lg text-on-surface leading-relaxed mb-6">
                  Each suite faces a different horizon.
                </p>
                <Link href="#" className="bg-surface border border-on-surface/20 text-on-surface font-label text-body-sm uppercase tracking-[0.15em] py-4 px-8 text-center inline-flex items-center justify-center gap-2 hover:bg-on-surface hover:text-surface transition-colors">
                  RESERVE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACASA ── */}
        <section id="acasa" className="bg-surface-container-low w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-[5rem] py-20 lg:py-32">
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida/AEtjO1V_sLNydkRNgm0GCMvP_kCWbHCi4TKmSsxtgSZe-Rl3i6jNx-T-e5DDp4nW7v9B7lRbNqdJhaIfDULWVpGbS6ZmHepkFaY8Fp-4oQvCcGIPEZIGggV4yyX6x0Q7gKgULguF4Ix_EKOtQS7_YChvHm-pZBuq42yuAJyPz6Pal9cO0SHH6TdeS2N-6ClpXmFVNDgYDxMMYMTyd_SHp3FI8qMs493bOPZ3aKD9NmTyLfZIBD1C3JUh3Ww6sBM" alt="Acasa" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <p className="font-body text-body-lg text-on-surface leading-relaxed mb-8">
                  Stay. Move. Play. Where the body remembers its rhythm.
                </p>
                <div className="space-y-4 mb-8">
                  {["PADEL COURTS", "COLD PLUNGE", "SUNRISE PRACTICE"].map((item) => (
                    <div key={item} className="bg-surface-container p-5">
                      <span className="font-label text-body-sm uppercase tracking-[0.1em] text-on-surface-variant">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="#" className="bg-primary text-on-primary font-label text-body-sm uppercase tracking-[0.15em] py-4 px-8 text-center inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  EXPLORE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-secondary-container w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-[5rem] py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-headline-md lg:text-headline-lg uppercase leading-[0.95] tracking-tight mb-6 text-on-surface">
                  EXPLORE YOUR NEXT PLACE.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#samsara" className="bg-primary text-on-primary font-label text-body-sm uppercase tracking-[0.15em] py-4 px-8 text-center inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  ALL WORLDS →
                </Link>
                <Link href="/contact" className="bg-surface border border-on-surface/20 text-on-surface font-label text-body-sm uppercase tracking-[0.15em] py-4 px-8 text-center inline-flex items-center justify-center gap-2 hover:bg-on-surface hover:text-surface transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
