import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ContactForm from "@/components/ContactForm"

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
      >
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15186458811"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-sm hover:bg-gray-100 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call/Text: 518-645-8811
          </a>
          <a
            href="mailto:areliabletrucking@proton.me"
            className="text-white/90 hover:text-white underline underline-offset-2 transition-colors"
          >
            areliabletrucking@proton.me
          </a>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy-900">Get in Touch</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Phone / Text
                  </h3>
                  <a
                    href="tel:+15186458811"
                    className="mt-1 block text-lg font-semibold text-brand-700 hover:text-brand-600"
                  >
                    518-645-8811
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Email
                  </h3>
                  <a
                    href="mailto:areliabletrucking@proton.me"
                    className="mt-1 block text-lg font-semibold text-brand-700 hover:text-brand-600 break-all"
                  >
                    areliabletrucking@proton.me
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Location
                  </h3>
                  <p className="mt-1 text-gray-700">
                    Based in Charlotte, North Carolina
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Service Area
                  </h3>
                  <p className="mt-1 text-gray-700">
                    Serving customers nationwide
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Availability
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-6">
                    Available by phone or text for transportation requests. Call to discuss
                    scheduling, route details, load availability, and pickup/delivery timing.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-brand-50 border border-brand-200 p-6">
                <h3 className="text-base font-semibold text-navy-900">
                  What to Have Ready
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  When calling or texting, please be ready to provide:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Pickup location",
                    "Delivery location",
                    "Load description",
                    "Estimated weight",
                    "Preferred pickup date",
                    "Preferred delivery date",
                    "Any special handling needs",
                    "Whether a liftgate may be needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
