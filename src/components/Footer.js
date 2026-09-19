import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant">
      <div className="w-full px-6 lg:px-[5rem] pt-24 pb-16 border-b border-outline-variant">
        <p className="font-label text-label-uppercase text-secondary tracking-[0.2em] mb-4 uppercase">
          ARCHITECTURAL HERITAGE & LIVING SPACES
        </p>
        <h2 className="font-display text-headline-lg lg:text-display-hero text-on-surface tracking-tight uppercase">
          PLACES. EXPERIENCES. STORIES.
        </h2>
      </div>

      <div className="w-full px-6 lg:px-[5rem] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-outline-variant">
        <div className="space-y-4">
          <p className="font-label text-label-uppercase text-secondary tracking-[0.14em] uppercase">PORTFOLIO NAVIGATION</p>
          <ul className="space-y-3">
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">The Group Heritage</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/#worlds" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Worlds & Sanctuaries</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/#experiences" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Curated Experiences</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/journal" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Editorial Journal</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-label text-label-uppercase text-secondary tracking-[0.14em] uppercase">SANCTUARY LOCATIONS</p>
          <ul className="space-y-3">
            <li className="border-b border-outline-variant/40 pb-2"><span className="font-body text-body-md text-on-surface">Jakarta</span></li>
            <li className="border-b border-outline-variant/40 pb-2"><span className="font-body text-body-md text-on-surface">Ubud, Bali</span></li>
            <li className="border-b border-outline-variant/40 pb-2"><span className="font-body text-body-md text-on-surface">Canggu, Bali</span></li>
            <li className="border-b border-outline-variant/40 pb-2"><span className="font-body text-body-md text-on-surface">Highlands, West Java</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-label text-label-uppercase text-secondary tracking-[0.14em] uppercase">RESERVATIONS & INQUIRIES</p>
          <ul className="space-y-3">
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/contact" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Concierge Contact</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/events" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Event Calendar</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/collaborations" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Collaboration Enquiries</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/careers" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Career Opportunities</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-label text-label-uppercase text-secondary tracking-[0.14em] uppercase">COMMUNITY & REGISTRY</p>
          <ul className="space-y-3">
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/journal" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Editorial Dispatches</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><span className="font-body text-body-md text-on-surface">Artisan Directory</span></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/privacy" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Privacy & Terms</Link></li>
            <li className="border-b border-outline-variant/40 pb-2"><Link href="/terms" className="font-body text-body-md text-on-surface hover:text-secondary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="w-full px-6 lg:px-[5rem] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-label text-label-sm text-outline tracking-wide">
          &copy; {new Date().getFullYear()} SAMSARA GROUP. ALL RIGHTS RESERVED.
        </p>
        <p className="font-label text-label-sm text-outline/60 tracking-[0.18em] uppercase">
          NUSANTARA ARCHIPELAGO — EST. 1928
        </p>
      </div>
    </footer>
  );
}
