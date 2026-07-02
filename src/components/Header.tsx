"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet & Equipment" },
  { href: "/customers-loads", label: "Customers & Loads" },
  { href: "/safety-compliance", label: "Safety & Compliance" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 bg-transparent pointer-events-none">
      <div className="mx-auto max-w-7xl w-full glass-container rounded-2xl px-6 py-3 shadow-2xl pointer-events-auto">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group transition-transform duration-300 active:scale-95">
            <Image
              src="/assets/logo/a-reliable-trucking-logo.png"
              alt="A Reliable Trucking Company logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-transform duration-500 group-hover:rotate-12"
            />
            <div className="leading-tight">
              <span className="text-base font-extrabold text-white tracking-wide block font-heading">
                A Reliable
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-400">
                Trucking Company
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-400 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+15186458811"
              className="btn-premium-primary text-xs px-6 py-2.5 uppercase tracking-wider font-bold"
            >
              Call Now
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-brand-400 hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl glass-container rounded-2xl p-4 shadow-2xl pointer-events-auto animate-slide-up">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-gray-300 rounded-xl hover:text-brand-400 hover:bg-white/5 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15186458811"
              className="block w-full text-center btn-premium-primary mt-4 uppercase tracking-wider font-bold"
              onClick={() => setMobileOpen(false)}
            >
              Call Now: 518-645-8811
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
