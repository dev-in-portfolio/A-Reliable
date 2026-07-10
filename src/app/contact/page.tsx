import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ContactForm from "@/components/ContactForm"
import LoadAdvisor from "@/components/LoadAdvisor"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, text, email, or send a transportation request to A Reliable Trucking Company in Charlotte, North Carolina.",
}

const readyItems = [
  "Pickup location",
  "Delivery location",
  "Load description",
  "Estimated weight",
  "Dimensions, when available",
  "Preferred pickup and delivery timing",
  "Liftgate or loading access needs",
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s Discuss Your Transportation Request"
        description="Call or text for the fastest response. Be ready to share the pickup location, delivery location, load details, timing, and any available weight or dimension information."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="tel:+15186458811" className="btn-primary w-full sm:w-auto">
            Call or Text 518-645-8811
          </a>
          <a
            href="mailto:areliabletrucking@proton.me"
            className="inline-flex w-full items-center justify-center rounded border border-white/30 px-5 py-3.5 font-extrabold text-white hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Email Us
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <aside>
            <span className="eyebrow">Contact information</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.03em] text-navy-950">
              Call or text first
            </h2>
            <p className="mt-4 leading-7 text-navy-600">
              Direct phone or text communication is the fastest way to discuss availability, route, timing, and load details.
            </p>

            <div className="mt-7 space-y-5 border-y border-navy-950/10 py-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Phone and text</p>
                <a href="tel:+15186458811" className="mt-2 inline-block text-xl font-extrabold text-navy-950 hover:text-brand-700">
                  518-645-8811
                </a>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Email</p>
                <a href="mailto:areliabletrucking@proton.me" className="mt-2 inline-block break-all font-bold text-navy-950 hover:text-brand-700">
                  areliabletrucking@proton.me
                </a>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Location</p>
                <p className="mt-2 font-bold text-navy-950">Charlotte, North Carolina</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading text-xl font-extrabold text-navy-950">What to have ready</h3>
              <ul className="mt-4 space-y-3">
                {readyItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-navy-700">
                    <span className="text-brand-600" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div id="transportation-request-form" className="scroll-mt-28">
            <span className="eyebrow">Transportation request</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.03em] text-navy-950 sm:text-4xl">
              Send the load details
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-navy-600">
              Complete the required fields and include any additional information that may help the company review the request.
            </p>
            <div className="mt-8 border border-navy-950/10 bg-warm-50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <LoadAdvisor />
        </div>
      </section>
    </>
  )
}