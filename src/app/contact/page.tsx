import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ContactForm from "@/components/ContactForm"
import LoadAdvisor from "@/components/LoadAdvisor"

export const metadata: Metadata = {
  title: "Contact A Reliable Trucking Company | Call or Text 518-645-8811",
  description:
    "Contact A Reliable Trucking Company for freight transportation, load pickup, box truck service, and nationwide delivery support.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact A Reliable Trucking Company"
        description="Need freight, goods, supplies, equipment, or general cargo picked up and delivered? Contact A Reliable Trucking Company to discuss your transportation needs, route, timing, and load details."
        canvasType="solarstorm"
      >
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:+15186458811"
            className="btn-premium-primary text-base font-bold uppercase tracking-wider px-8 py-4.5"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call / Text: 518-645-8811
          </a>
          <a
            href="mailto:areliabletrucking@proton.me"
            className="text-sm font-semibold text-gray-300 hover:text-white underline underline-offset-4 transition-colors"
          >
            areliabletrucking@proton.me
          </a>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Columns */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-white font-heading tracking-wide">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { label: "Phone / Text", val: "518-645-8811", href: "tel:+15186458811" },
                    { label: "Email", val: "areliabletrucking@proton.me", href: "mailto:areliabletrucking@proton.me" },
                  ].map((info) => (
                    <div key={info.label} className="bg-white/5 border border-white/5 p-4 rounded-xl">
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{info.label}</h3>
                      <a href={info.href} className="mt-1 block text-base font-bold text-brand-400 hover:text-brand-300 transition-colors break-all">
                        {info.val}
                      </a>
                    </div>
                  ))}
                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location & Area</h3>
                    <p className="mt-1 text-sm text-gray-300 font-semibold">Based in Charlotte, NC &mdash; Serving Nationwide</p>
                  </div>
                </div>
              </div>

              {/* What to Have Ready */}
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-base font-bold text-white font-heading tracking-wide mb-4">
                  What to Have Ready
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  When calling or texting, please be ready to provide:
                </p>
                <div className="space-y-3">
                  {[
                    "Pickup location",
                    "Delivery location",
                    "Load description",
                    "Estimated weight",
                    "Preferred pickup date",
                    "Preferred delivery date",
                    "Any special handling needs",
                    "Whether a liftgate is needed",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-sm text-gray-300 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-8 space-y-8">
              <LoadAdvisor />
              <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-extrabold text-white font-heading tracking-wide mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
