import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Customers and Freight We Support",
  description:
    "Transportation support for businesses, brokers, shippers, warehouses, commercial customers, and compatible freight requests.",
}

const customers = [
  ["Businesses", "Commercial goods, business inventory, operations supplies, equipment, and compatible delivery requests."],
  ["Brokers and Shippers", "Transportation opportunities that fit the available equipment, route, timing, and schedule."],
  ["Warehouses and Distribution Facilities", "Coordinated pickups and deliveries where access, timing, and loading conditions can be confirmed."],
  ["Commercial Customers", "Freight and general cargo requests that require professional transportation and clear communication."],
]

const freightTypes = [
  "Boxed goods",
  "Business inventory",
  "Compatible palletized freight",
  "Industrial and operations supplies",
  "Equipment",
  "General cargo",
  "Commercial deliveries",
  "Liftgate-related requests",
]

const fitQuestions = [
  "What needs to be moved?",
  "What are the weight and dimensions?",
  "Where is the pickup location?",
  "Where is the delivery location?",
  "What loading and unloading access is available?",
  "When does the load need to move?",
  "Does the request fit the available equipment and schedule?",
]

export default function CustomersLoadsPage() {
  return (
    <>
      <PageHero
        title="Customers and Freight We Support"
        description="A Reliable Trucking Company works with businesses, brokers, shippers, warehouses, distribution facilities, commercial customers, and others who need compatible freight transported."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Who we work with</span>
            <h2 className="section-heading mt-3">Transportation support for practical business and freight needs</h2>
            <p className="section-subheading">
              The company focuses on the transportation details rather than limiting every request to one narrow industry.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {customers.map(([title, description], index) => (
              <article key={title} className="border-t-4 border-brand-500 bg-warm-50 p-7">
                <span className="font-heading text-xl font-extrabold text-brand-600">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-navy-950">{title}</h3>
                <p className="mt-3 leading-7 text-navy-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Freight that may be considered</span>
            <h2 className="section-heading mt-3">A range of compatible load types</h2>
            <p className="section-subheading">
              These examples do not guarantee acceptance. Complete load information is required before the company can determine fit.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {freightTypes.map((item) => (
              <li key={item} className="border-b border-navy-950/10 py-4 font-semibold text-navy-800">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow text-brand-300">What determines fit</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
              The most important questions are about the load itself
            </h2>
          </div>
          <ol className="space-y-4">
            {fitQuestions.map((question, index) => (
              <li key={question} className="flex gap-4 border-b border-white/10 pb-4 text-navy-200">
                <span className="font-heading font-extrabold text-brand-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold leading-7">{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        heading="Tell us what needs to move"
        body="Call or text with the pickup, delivery, weight, dimensions, timing, and loading information available."
        showEmail
      />
    </>
  )
}