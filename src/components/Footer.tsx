import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-gray-400 border-t border-white/5 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/assets/logo/a-reliable-trucking-logo.png"
                alt="A Reliable Trucking Company logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(217,119,6,0.25)]"
              />
              <div className="leading-tight">
                <p className="font-extrabold text-white text-base font-heading tracking-wide">A Reliable</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-400">Trucking Company</p>
              </div>
            </div>
            <p className="text-sm text-brand-300 font-medium italic mb-4">
              Driven by Family, Built on Reliability.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Established in 2022. Serving Charlotte, NC and supporting freight routes nationwide.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-heading">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+15186458811"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>518-645-8811</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:areliabletrucking@proton.me"
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>areliabletrucking@proton.me</span>
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-white/5">
              <span className="inline-block px-2.5 py-1 rounded bg-green-500/10 text-green-400 font-semibold text-[10px] uppercase tracking-wider">
                Licensed & Insured
              </span>
              <p className="text-[10px] text-gray-500 mt-1.5">
                DOT/MC credentials available upon request.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-heading">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Freight Transportation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Load Pickup & Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Box Truck Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Nationwide Transport
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Story
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Fleet & Equipment
                </Link>
              </li>
              <li>
                <Link href="/customers-loads" className="hover:text-white transition-colors">
                  Customers & Loads
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 order-2 md:order-1">
            &copy; {new Date().getFullYear()} A Reliable Trucking Company. All rights reserved.
          </p>
          <div className="order-1 md:order-2">
            <a
              href="tel:+15186458811"
              className="btn-premium-primary text-xs px-8 py-3 uppercase tracking-wider font-bold"
            >
              Call / Text 518-645-8811
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
