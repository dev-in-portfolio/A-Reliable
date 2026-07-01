import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo/a-reliable-trucking-logo.png"
                alt="A Reliable Trucking Company logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-bold text-white">A Reliable</p>
                <p className="text-sm text-gray-400 -mt-0.5">Trucking Company</p>
              </div>
            </div>
            <p className="text-sm text-brand-300 font-medium italic">
              Driven by Family, Built on Reliability
            </p>
            <p className="mt-4 text-sm">
              Based in Charlotte, North Carolina
            </p>
            <p className="text-sm">Serving customers nationwide</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+15186458811"
                  className="hover:text-brand-300 transition-colors"
                >
                  Call/Text: 518-645-8811
                </a>
              </li>
              <li>
                <a
                  href="mailto:areliabletrucking@proton.me"
                  className="hover:text-brand-300 transition-colors break-all"
                >
                  areliabletrucking@proton.me
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="text-white font-medium">Licensed & Insured</p>
              <p className="text-gray-400 text-xs mt-1">
                DOT/MC available upon request
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-brand-300 transition-colors">
                  Freight Transportation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-300 transition-colors">
                  Load Pickup & Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-300 transition-colors">
                  Box Truck Transportation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-300 transition-colors">
                  Nationwide Transport
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-brand-300 transition-colors">
                  Fleet & Equipment
                </Link>
              </li>
              <li>
                <Link href="/customers-loads" className="hover:text-brand-300 transition-colors">
                  Customers & Loads
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="text-center">
            <a
              href="tel:+15186458811"
              className="btn-primary"
            >
              Call/Text: 518-645-8811
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} A Reliable Trucking Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
