"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/customers-loads", label: "Customers & Loads" },
  { href: "/safety-compliance", label: "Safety" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-navy-950/10 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image
            src="/assets/logo/a-reliable-trucking-logo.png"
            alt="A Reliable Trucking Company logo"
            width={52}
            height={52}
            className="h-12 w-12 flex-none object-contain"
            priority
          />
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-lg font-extrabold text-navy-950">
              A Reliable
            </span>
            <span className="block truncate text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600">
              Trucking Company
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-warm-100 text-brand-700"
                    : "text-navy-800 hover:bg-warm-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center lg:flex xl:ml-2">
          <a href="tel:+15186458811" className="btn-primary whitespace-nowrap text-sm">
            Call or Text
          </a>
        </div>

        <button
          type="button"
          className="rounded border border-navy-950/15 p-2.5 text-navy-950 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" className="border-t border-navy-950/10 bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="container-shell py-4">
            <div className="grid gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded px-4 py-3 text-base font-semibold ${
                      active ? "bg-warm-100 text-brand-700" : "text-navy-900 hover:bg-warm-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <a href="tel:+15186458811" className="btn-primary mt-4 w-full text-sm" onClick={() => setMobileOpen(false)}>
              Call or Text 518-645-8811
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}