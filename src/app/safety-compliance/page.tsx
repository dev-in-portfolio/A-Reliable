import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Safety and Transportation Standards",
  description:
    "Learn how A Reliable Trucking Company reviews transportation requests for equipment fit, route, timing, handling needs, and responsible service.",
}

const process = [
  ["Review the load", "Confirm the commodity, weight, dimensions, handling needs, and available information."],
  ["Confirm equipment fit", "Determine whether the available equipment may be appropriate for the request."],
  ["Review access", "Consider pickup and delivery conditions, dock access, liftgate needs, and loading method."],
  ["Review route and timing", "Consider distance, route conditions, requested timing, and the current schedule."],
  ["Confirm availability", "Verify that the appropriate equipment and operating schedule are available."],
  ["Communicate before acceptance", "Discuss material details before the company commits to the transportation request."],
]

export default function SafetyCompliancePage() {
  return (
    <>
      <PageHero
        title="Responsible Transportation Built on Care and Communication"
        description="A Reliable Trucking Company reviews transportation requests with attention to equipment fit, route, timing, handling needs, communication, and responsible service."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Responsible transportation</span>
            <h2 className="section-heading mt-3">Safety begins before the truck moves</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-navy-700">
            <p>
              A transportation company must do more than move a load from one place to another. The request
              must be reviewed, the equipment must be appropriate, access conditions must be understood, and
              the route and timing must make sense.
            </p>
            <p>
              A Reliable Trucking Company reviews each request before acceptance so the company can make a
              responsible decision based on the available information and current operating conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Load review process</span>
            <h2 className="section-heading mt-3">How transportation requests are considered</h2>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, description], index) => (
              <li key={title} className="bg-white p-7">
                <span className="font-heading text-xl font-extrabold text-brand-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-navy-950">{title}</h3>
                <p className="mt-3 leading-7 text-navy-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="eyebrow text-brand-300">Operating credentials</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
              Credential information available for business review
            </h2>
          </div>
          <div className="border-l-4 border-brand-500 pl-6">
            <p className="text-lg leading-8 text-navy-200">
              Credential and insurance information can be discussed directly with the company when required
              for a transportation request, broker relationship, or business relationship.
            </p>
            <a href="tel:+15186458811" className="mt-6 inline-flex font-extrabold text-brand-300 hover:text-white">
              Call or Text 518-645-8811 <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Company standards</span>
            <h2 className="section-heading mt-3">The practical standards behind reliable service</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Clear communication", "Direct transportation coordination and customer communication when available."],
              ["Responsible review", "Attention to cargo information, weight, equipment fit, route, and transportation requirements."],
              ["Professional conduct", "A focus on responsible commercial transportation practices and follow-through."],
            ].map(([title, description]) => (
              <article key={title} className="border-t-4 border-brand-500 pt-5">
                <h3 className="font-heading text-xl font-extrabold text-navy-950">{title}</h3>
                <p className="mt-3 leading-7 text-navy-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have questions about load fit or requirements?"
        body="Call or text to discuss the request, equipment fit, route, timing, and available credential information."
        showEmail
      />
    </>
  )
}