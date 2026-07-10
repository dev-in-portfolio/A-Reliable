import Image from "next/image"
import Link from "next/link"

const serviceLinks = [
  { href: "/services", label: "Freight Transportation" },
  { href: "/services", label: "Pickup and Delivery" },
  { href: "/fleet", label: "Box Truck Service" },
  { href: "/customers-loads", label: "Customers and Loads" },
]

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/safety-compliance", label: "Safety Standards" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0c1318] text-navy-200">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo/a-reliable-trucking-logo.png"
                alt="A Reliable Trucking Company logo"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-heading text-lg font-extrabold text-white">A Reliable Trucking Company</p>
                <p className="mt-0.5 text-sm font-semibold text-brand-300">Driven by Family, Built on Reliability.</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-navy-300">
              A family-owned freight transportation company based in Charlotte, North Carolina. Local,
              regional, and long-distance transportation requests are reviewed according to route,
              timing, equipment fit, load details, and availability.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-white">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-white">Company</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-300">Call or Text</p>
            <a href="tel:+15186458811" className="mt-2 inline-block font-extrabold text-white hover:text-brand-300">
              518-645-8811
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-300">Email</p>
            <a href="mailto:areliabletrucking@proton.me" className="mt-2 inline-block break-all font-semibold text-white hover:text-brand-300">
              areliabletrucking@proton.me
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-300">Credentials</p>
            <p className="mt-2 text-sm text-navy-300">Contact the company for current credential and insurance information.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-navy-400">
          &copy; {new Date().getFullYear()} A Reliable Trucking Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}