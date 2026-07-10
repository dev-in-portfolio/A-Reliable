import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCallButton from "@/components/StickyCallButton"

export const metadata: Metadata = {
  title: {
    default: "A Reliable Trucking Company | Freight Transportation from Charlotte, NC",
    template: "%s | A Reliable Trucking Company",
  },
  description:
    "A family-owned freight transportation company based in Charlotte, North Carolina, providing box truck service, pickup, delivery, and local to long-distance transportation support.",
  metadataBase: new URL("https://www.areliabletrucking.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "A Reliable Trucking Company",
    description:
      "Family-owned freight transportation, box truck service, pickup, and delivery support from Charlotte, North Carolina.",
    url: "https://www.areliabletrucking.com",
    siteName: "A Reliable Trucking Company",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/social/a-reliable-trucking-social.png",
        width: 1200,
        height: 630,
        alt: "A Reliable Trucking Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Reliable Trucking Company",
    description:
      "Family-owned freight transportation, box truck service, pickup, and delivery support from Charlotte, North Carolina.",
    images: ["/assets/social/a-reliable-trucking-social.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "A Reliable Trucking Company",
    description:
      "A family-owned freight transportation company based in Charlotte, North Carolina. Local, regional, and long-distance requests are reviewed according to route, timing, equipment fit, load details, and availability.",
    url: "https://www.areliabletrucking.com",
    telephone: "+15186458811",
    email: "areliabletrucking@proton.me",
    foundingDate: "2022",
    logo: "https://www.areliabletrucking.com/assets/logo/a-reliable-trucking-logo.png",
    image: "https://www.areliabletrucking.com/assets/social/a-reliable-trucking-social.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Charlotte",
      },
      {
        "@type": "Country",
        name: "United States",
        description: "Broader transportation requests may be considered based on route and availability.",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="pb-[76px] lg:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}