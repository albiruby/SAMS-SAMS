import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Journal — Samsara Group",
  description: "Stories, dispatches, and reflections from the Samsara Group world.",
};

const articles = [
  {
    slug: "sanctuary-of-sound",
    title: "THE SANCTUARY OF SOUND",
    tag: "SOUND & ARCHITECTURE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmBg4kvXIMCi_ZCe8Le6xMtHoEoiS_hJ_Ht-u4T-nq0FyD1kI-cmljJW86GGLxuLq6dgqn2lTjawXtFboD2uwSdHPpwD8Xz0AbUUbdypcz3dYh4oD2CG5LG9So0nQQHF3cfl_sq-l4n2v8TG7yNjEeyi-7hzJOXsFj58-KV5PptEZ4Xp-4cwA11UxNnZ-WoRbyv7-J94P-fzkVv4uasg7Z2ZTw0USC7oooT6aZR0VJps2HysBnpZ3",
  },
  {
    slug: null,
    title: "EMBER & TERROIR: A SEASONAL TABLE",
    tag: "CULINARY HERITAGE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4786-aPSLIKjY6KL1briNx1tY4t_g8YCk7Dn33qDkJkM1Q-6SkfW3Snxlo33go4uOvhQREvrdlBCVo9kt6ug_mxCD4qwxwodtfQ_6WRj1wKZb2oyft8kYl2YeFxbkyRXUeBPqEBf584VrGYjBY85vXXSnI1dly-laKWyO89RZiZw5ASluI5bndGEN3WXFKVCSwIQrbCKyFEjQ9usSoDC_p-2yAzYUMHBnAWPdxsU0D6G_Z6aX2u2",
  },
  {
    slug: null,
    title: "ARTISAN RESIDENCIES: MAKERS IN RESIDENCE",
    tag: "COMMUNITY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4786-aPSLIKjY6KL1briNx1tY4t_g8YCk7Dn33qDkJkM1Q-6SkfW3Snxlo33go4uOvhQREvrdlBCVo9kt6ug_mxCD4qwxwodtfQ_6WRj1wKZb2oyft8kYl2YeFxbkyRXUeBPqEBf584VrGYjBY85vXXSnI1dly-laKWyO89RZiZw5ASluI5bndGEN3WXFKVCSwIQrbCKyFEjQ9usSoDC_p-2yAzYUMHBnAWPdxsU0D6G_Z6aX2u2",
  },
];

export default function JournalPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">JOURNAL</h1>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <ScrollReveal key={article.title}>
              {article.slug ? (
                <Link href={`/journal/${article.slug}`} className="block group">
                  <article className="relative overflow-hidden bg-surface-container-low border border-outline-variant transition-colors hover:border-outline">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <span className="mb-3 block text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">{article.tag}</span>
                      <h2 className="text-title-lg font-display uppercase leading-tight text-on-surface">{article.title}</h2>
                    </div>
                  </article>
                </Link>
              ) : (
                <article className="relative overflow-hidden bg-surface-container-low border border-outline-variant transition-colors hover:border-outline">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="mb-3 block text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">{article.tag}</span>
                    <h2 className="text-title-lg font-display uppercase leading-tight text-on-surface">{article.title}</h2>
                  </div>
                </article>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
