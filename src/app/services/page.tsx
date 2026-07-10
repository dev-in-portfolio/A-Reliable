import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Freight Transportation Services",
  description:
    "Freight transportation, box truck service, pickup, delivery, and local to long-distance transportation requests from Charlotte, North Carolina.",
}

const services = [
  {
    title: "Freight Transportation",
    description:
      "Transportation support for compatible freight, goods, supplies, equipment, and general commercial cargo.",
    details: ["Load details reviewed before acceptance", "Pickup and delivery coordination", "Route and timing review"],
  },
  {
    title: "26-Foot Box Truck Transportation",
    description:
      "Enclosed transportation using the company’s three 26-foot box trucks, each equipped with a liftgate.",
    details: ["Enclosed cargo area", "Liftgate support when appropriate", "Commercial and business delivery requests"],
  },
  {
    title: "Pickup and Delivery",
    description:
      "Direct transportation from a confirmed pickup location to a confirmed delivery location.",
    details: ["Local and regional requests", "Long-distance requests considered", "Access conditions reviewed"],
  },
  {
    title: "Commercial and Business Deliveries",
    description:
      "Transportation support for businesses, brokers, shippers, warehouses, and commercial customers.",
    details: ["Business inventory", "Operations supplies", "Compatible palletized or boxed freight"],
  },
]

const reviewItems = [
  "What needs to be moved",
  "Weight and dimensions",
  "Pickup and delivery locations",
  "Loading and unloading access",
  "Liftgate or dock requirements",
  "Requested timing",
  "Available equipment",
  "Current route and schedule availability",
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Freight Transportation, Box Truck Service, Pickup, and Delivery"
        description="A Reliable Trucking Company reviews transportation requests for compatible freight, goods, supplies, equipment, boxed items, and general commercial cargo. The company is based in Charlotte, North Carolina."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h2 className="section-heading mt-3">Transportation support built around the load</h2>
            <p className="section-subheading">
              Rather than forcing every request into one category, the company reviews the actual load,
              route, access, equipment needs, timing, and availability.
            </p>
          </div>

          <div className="mt-12 divide-y divide-navy-950/10 border-y border-navy-950/10">
            {services.map((service, index) => (
              <article key={service.title} className="grid gap-6 py-9 md:grid-cols-[0.18fr_0.82fr] lg:grid-cols-[0.18fr_0.42fr_0.4fr] lg:items-start">
                <div className="font-heading text-2xl font-extrabold text-brand-600">0{index + 1}</div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-navy-950">{service.title}</h3>
                  <p className="mt-3 leading-7 text-navy-600">{service.description}</p>
                </div>
                <ul className="grid gap-3 text-sm font-semibold text-navy-700">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="text-brand-600" aria-hidden="true">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Before acceptance</span>
            <h2 className="section-heading mt-3">Not every load fits every truck or route</h2>
            <p className="section-subheading">
              A careful review protects the customer, the freight, the equipment, and the transportation schedule.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reviewItems.map((item) => (
              <li key={item} className="flex gap-3 border-b border-navy-950/10 py-3 font-semibold text-navy-800">
                <span className="text-brand-600" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="eyebrow text-brand-300">Service area</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
              Based in Charlotte. Requests reviewed from local to long-distance.
            </h2>
          </div>
          <p className="text-lg leading-8 text-navy-200">
            Transportation availability varies by route, pickup and delivery location, timing, equipment fit,
            load details, and the company’s current schedule. Contact the company to discuss a specific request.
          </p>
        </div>
      </section>

      <CTASection
        heading="Have a load ready to move?"
        body="Call or text to discuss the pickup, delivery, weight, dimensions, route, timing, and equipment needs."
        showEmail
      />
    </>
  )
}