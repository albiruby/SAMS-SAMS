import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ThemeSetter from "@/components/ThemeSetter";
import { getWorlds, getProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function SvvaraPage() {
  let world = null;
  let products = [];
  try {
    const [worlds, allProducts] = await Promise.all([getWorlds(), getProducts()]);
    world = worlds.find((w) => w.slug?.current === "svvara") || null;
    products = allProducts.filter((p) => p.world === "svvara");
  } catch {
    world = null;
    products = [];
  }

  const defaultProducts = [
    { name: "MONOLITH 01", description: "Single-driver loudspeaker carved from volcanic basalt. Pure signal path.", price: "IDR 48,000,000" },
    { name: "TEAK TRANSDUCERS", description: "Full-range drivers in hand-turned reclaimed teak enclosures. Each pair numbered.", price: "IDR 32,000,000" },
    { name: "ROTARY STEP ATTENUATOR", description: "24-step attenuator milled from solid brass. Tactile precision.", price: "IDR 8,500,000" },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const specs = world?.specifications || [
    ["Materials", "Volcanic basalt, reclaimed teak, solid brass"],
    ["Production", "Made to order, 8-12 week lead time"],
    ["Ateliers", "East Java, Bali"],
  ];

  return (
    <>
      <ThemeSetter theme="dark" />
      <Header />

      <section className="bg-surface pt-28 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <span className="mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">WORLDS</span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">SVVARA</h1>
          <p className="mt-6 max-w-lg text-body-md text-on-surface-variant leading-relaxed">
            {world?.tagline || "Sound. Object. Design. Hand-formed instruments built to last generations."}
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-16">
        <ScrollReveal>
          <div className="w-full aspect-[21/9] overflow-hidden">
            {world?.image ? (
              <img src={urlFor(world.image).url()} alt="Svvara Atelier" className="h-full w-full object-cover" />
            ) : (
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARtFpYa_lXUkbEb4A8XI-KWfRs6nP2hq-_Mw5uXRVKGpGfgGPXw6uLPCb9Lk1yBlmxcigsJai6uf2HQiOEvRJu-5tA73QiuNFxSHeK-HFK0U1ZXW6I5iflD5cXG_0jbXnsI92C53R_DUakuRds5Zcbqt6iV-ep7AvhVBZyfqaml5y5DVPGR6U95a9E8Kr0PeMdPcbxVsTkUXNLSWs5huKsgYQVBn2Z6ZuKnaOQeSWba_3hjxnfs5A" alt="Svvara Atelier" className="h-full w-full object-cover" />
            )}
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-12">
              <div>
                <h2 className="mb-4 text-headline-sm font-display uppercase tracking-wide text-on-surface">THE ATELIER</h2>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {world?.description || "Where material meets intention. Our workshop sits on the edge of a volcanic ridge in East Java, where stone is abundant and silence is a resource."}
                </p>
              </div>

              <div className="border-t border-outline-variant pt-8">
                <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">SPECIFICATIONS</h2>
                <div className="space-y-4">
                  {specs.map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-outline-variant pb-4">
                      <span className="text-label-caps-sm uppercase tracking-wider text-on-surface-variant">{label}</span>
                      <span className="text-body-md text-on-surface text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-8 text-headline-sm font-display uppercase tracking-wide text-on-surface">CURRENT COLLECTION</h2>
              <div className="space-y-6">
                {displayProducts.map((product) => (
                  <div key={product.name} className="border border-outline-variant bg-surface-container-low p-6 transition-colors hover:border-outline">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-title-lg font-medium uppercase tracking-wide text-on-surface">{product.name}</h3>
                      <span className="shrink-0 text-body-sm text-terracotta">{product.price}</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
