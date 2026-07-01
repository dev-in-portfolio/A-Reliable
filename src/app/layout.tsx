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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
