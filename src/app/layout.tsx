import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCallButton from "@/components/StickyCallButton"

export const metadata: Metadata = {
  title: {
    default: "A Reliable Trucking Company | Freight Transportation Nationwide",
    template: "%s | A Reliable Trucking Company",
  },
  description:
    "A Reliable Trucking Company provides freight transportation, load pickup, box truck service, and delivery support from Charlotte, NC to customers nationwide.",
  metadataBase: new URL("https://www.areliabletrucking.com"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "A Reliable Trucking Company",
    description:
      "Freight transportation, load pickup, box truck service, and delivery support from Charlotte, NC nationwide.",
    url: "https://www.areliabletrucking.com",
    siteName: "A Reliable Trucking Company",
    locale: "en_US",
    type: "website",
    images: [{ url: "/assets/logo/a-reliable-trucking-logo.png", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Reliable Trucking Company",
    description:
      "Freight transportation, load pickup, box truck service, and delivery support from Charlotte, NC nationwide.",
    images: ["/assets/logo/a-reliable-trucking-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "A Reliable Trucking Company",
    description:
      "Family-owned freight transportation company based in Charlotte, NC serving customers nationwide. Freight transportation, load pickup and delivery, box truck service with liftgates.",
    url: "https://www.areliabletrucking.com",
    telephone: "+15186458811",
    email: "areliabletrucking@proton.me",
    foundingDate: "2022",
    areaServed: "US",
    logo: "https://www.areliabletrucking.com/assets/logo/a-reliable-trucking-logo.png",
    image: "https://www.areliabletrucking.com/assets/logo/a-reliable-trucking-logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
