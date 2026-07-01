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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo/a-reliable-trucking-logo.png"
              alt="A Reliable Trucking Company logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-navy-900">
                A Reliable
              </span>
              <span className="block text-xs text-gray-500 -mt-0.5">
                Trucking Company
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+15186458811"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Call Now
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-brand-700"
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
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-brand-700 hover:bg-brand-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15186458811"
              className="block w-full text-center btn-primary mt-3"
            >
              Call Now: 518-645-8811
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
