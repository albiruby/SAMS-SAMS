import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Locations — Samsara Group",
  description: "Our destinations across Bali and Jakarta.",
};

const locations = [
  {
    name: "SVARGA",
    region: "Kintamani Highlands",
    address: "Jl. Raya Kintamani, Bangli, Bali",
    phone: "+62 361 987 654",
    hours: "Reception 24h",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxmAlsOQm3o_ps7vQB4K0A2jyRwPcLthVB15dNACEJwDfaH9tVn4VOMqJB_6Th6WpKBFsKEX4CgkANSxgmWT049ncxex_GO4n4hD0mKR4OlbLtndGlqeV1ZNZOtVozjR4rXLtVoFMHfYD0rZQy5sfWSE1K-XNJWEbBAa419OORXKrwCitXqhC8xXJhvq47iPpVfh3P7tGZCwhpgJVObeAtgjOYw6Rbc-qVCdfu3uVCk4KM7gXlSBHo",
    link: "/svarga",
  },
  {
    name: "UBUD",
    region: "Ubud, Bali",
    address: "Jl. Raya Sanggingan, Ubud, Gianyar, Bali 80561",
    phone: "+62 361 978 901",
    hours: "08:00 – 22:00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmBg4kvXIMCi_ZCe8Le6xMtHoEoiS_hJ_Ht-u4T-nq0FyD1kI-cmljJW86GGLxuLq6dgqn2lTjawXtFboD2uwSdHPpwD8Xz0AbUUbdypcz3dYh4oD2CG5LG9So0nQQHF3cfl_sq-l4n2v8TG7yNjEeyi-7hzJOXsFj58-KV5PptEZ4Xp-4cwA11UxNnZ-WoRbyv7-J94P-fzkVv4uasg7Z2ZTw0USC7oooT6aZR0VJps2HysBnpZ3",
    link: null,
  },
  {
    name: "SEMINYAK",
    region: "Seminyak, Bali",
    address: "Jl. Pantai Batu Bolong No. 18, Canggu, Bali",
    phone: "+62 361 844 221",
    hours: "07:00 – 23:00",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V_sLNydkRNgm0GCMvP_kCWbHCi4TKmSsxtgSZe-Rl3i6jNx-T-e5DDp4nW7v9B7lRbNqdJhaIfDULWVpGbS6ZmHepkFaY8Fp-4oQvCcGIPEZIGggV4yyX6x0Q7gKgULguF4Ix_EKOtQS7_YChvHm-pZBuq42yuAJyPz6Pal9cO0SHH6TdeS2N-6ClpXmFVNDgYDxMMYMTyd_SHp3FI8qMs493bOPZ3aKD9NmTyLfZIBD1C3JUh3Ww6sBM",
    link: null,
  },
  {
    name: "JAKARTA",
    region: "Jakarta",
    address: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan",
    phone: "+62 21 7234 567",
    hours: "09:00 – 21:00",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1Ugbm8YmUkqXyuLDoAGids7DBO4MTlol_8UmmHN5BgfzIbRaPJCNmv_5m5bQ_Ru6mXzy9nxYrkRqRS7AwR3pfvdag80nzMjiDCcCFn6e_5aV0YtekynLVE76nc4KyMP74y3R4ZMwsUn83AFECeVMNrGyV6bCrl5UUC3lLuYjuHFnHzsk0yrfHWWkdlwTvIYXk495XJEruUWDaP7M_ibl2-kIL2GHePzKFvhdL9hG2Z6owjnN4EqZeTWtp4",
    link: null,
  },
];

export default function LocationsPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">LOCATIONS</h1>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <ScrollReveal key={location.name}>
              <article className="border border-outline-variant bg-surface-container-low overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={location.image} alt={location.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">{location.region}</span>
                    <h2 className="mt-2 text-headline-sm font-display uppercase leading-tight text-on-surface">{location.name}</h2>
                  </div>
                  <div className="space-y-1 text-body-sm text-on-surface-variant border-t border-outline-variant pt-4 mb-4 flex-1">
                    <p>{location.address}</p>
                    <p>{location.phone}</p>
                    <p>{location.hours}</p>
                  </div>
                  {location.link ? (
                    <Link href={location.link} className="inline-flex w-full items-center justify-center gap-3 border border-on-surface/20 px-6 py-3 text-label-caps-sm uppercase tracking-widest text-on-surface transition-colors hover:bg-primary hover:text-on-primary">
                      EXPLORE
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
                    </Link>
                  ) : (
                    <span className="inline-flex w-full items-center justify-center gap-3 border border-on-surface/20 px-6 py-3 text-label-caps-sm uppercase tracking-widest text-on-surface-variant">COMING SOON</span>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
