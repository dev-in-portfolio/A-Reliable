import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Fleet and Equipment",
  description:
    "Learn about the commercial rig and three 26-foot box trucks with liftgates operated by A Reliable Trucking Company.",
}

const equipment = [
  {
    title: "Commercial Rig",
    description:
      "Available for compatible commercial freight and longer-distance transportation requests. Trailer configuration, load details, route, timing, and availability must be reviewed before acceptance.",
    points: ["Commercial freight requests", "Regional and long-distance routes considered", "Final equipment fit confirmed before acceptance"],
  },
  {
    title: "Three 26-Foot Box Trucks",
    description:
      "Enclosed box truck transportation for compatible freight, business deliveries, boxed goods, supplies, equipment, and general cargo.",
    points: ["Three available box trucks", "Liftgate-equipped", "Enclosed transportation", "Loading access reviewed for each request"],
  },
]

const comparisonRows = [
  ["Enclosed freight", "Yes", "Depends on trailer configuration"],
  ["Liftgate support", "Available", "Not standard"],
  ["Dock access", "Optional for some compatible loads", "Often preferred"],
  ["Weight and dimensions", "Must be reviewed", "Must be reviewed"],
  ["Route availability", "Must be reviewed", "Must be reviewed"],
]

export default function FleetPage() {
  return (
    <>
      <PageHero
        title="Equipment for Practical Freight Transportation"
        description="The company operates one commercial rig and three 26-foot box trucks equipped with liftgates. Every request is reviewed for load details, route, access, timing, and equipment fit."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Fleet overview</span>
            <h2 className="section-heading mt-3">The right equipment starts with the right information</h2>
            <p className="section-subheading">
              Vehicle choice cannot be determined by weight alone. Dimensions, loading method, route,
              pickup and delivery access, cargo type, and availability all matter.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {equipment.map((item, index) => (
              <article key={item.title} className="border border-navy-950/10 bg-warm-50 p-7 sm:p-8">
                <span className="font-heading text-2xl font-extrabold text-brand-600">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-navy-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-navy-600">{item.description}</p>
                <ul className="mt-6 space-y-3 border-t border-navy-950/10 pt-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold text-navy-700">
                      <span className="text-brand-600" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-navy-900 shadow-xl">
              <Image
                src="/assets/images/box-truck.png"
                alt="Representative 26-foot commercial box truck positioned near a loading facility"
                fill
                className="object-cover"
              />
            </div>
            <span className="representative-label">Representative fleet imagery.</span>
          </div>
          <div>
            <span className="eyebrow">Box truck transportation</span>
            <h2 className="section-heading mt-3">Enclosed transportation with liftgate support</h2>
            <p className="section-subheading">
              Liftgates may help with compatible cargo when a loading dock is unavailable, but the full
              loading and unloading conditions must still be reviewed.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Boxed goods",
                "Business inventory",
                "Compatible palletized freight",
                "Commercial deliveries",
                "Operations supplies",
                "General cargo",
              ].map((item) => (
                <li key={item} className="border-b border-navy-950/10 py-3 font-semibold text-navy-800">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Equipment guide</span>
            <h2 className="section-heading mt-3">General equipment considerations</h2>
            <p className="section-subheading">
              This table is a starting point only. It does not confirm equipment assignment or acceptance of a load.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-navy-950/10">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-navy-950 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-extrabold">Load consideration</th>
                  <th className="px-5 py-4 text-sm font-extrabold">26-foot box truck</th>
                  <th className="px-5 py-4 text-sm font-extrabold">Commercial rig</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-950/10 bg-white">
                {comparisonRows.map(([label, boxTruck, rig]) => (
                  <tr key={label}>
                    <th className="whitespace-nowrap px-5 py-4 text-sm font-extrabold text-navy-950">{label}</th>
                    <td className="px-5 py-4 text-sm text-navy-700">{boxTruck}</td>
                    <td className="px-5 py-4 text-sm text-navy-700">{rig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="eyebrow text-brand-300">Before equipment is assigned</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
              Every transportation request is reviewed
            </h2>
          </div>
          <p className="text-lg leading-8 text-navy-200">
            Final equipment selection depends on the commodity, weight, dimensions, loading method,
            pickup and delivery access, route, timing, regulatory requirements, and current availability.
          </p>
        </div>
      </section>

      <CTASection
        heading="Need help discussing equipment fit?"
        body="Call or text with the load details, pickup and delivery locations, weight, dimensions, timing, and loading needs."
        showEmail
      />
    </>
  )
}