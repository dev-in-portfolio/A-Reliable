import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Customers & Loads We Serve | Freight & General Cargo Transport",
  description:
    "Serving businesses, brokers, shippers, warehouses, commercial customers, and customers needing reliable freight and general cargo transportation.",
}

export default function CustomersLoadsPage() {
  return (
    <>
      <PageHero
        title="Serving Customers Who Need Freight and General Cargo Moved Reliably"
        description="A Reliable Trucking Company supports customers who need dependable freight transportation, load pickup, and delivery service. We serve businesses, brokers, shippers, warehouses, commercial customers, and customers who need goods or general cargo transported from one location to another."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">We Focus on the Load Details</h2>
            <p className="section-subheading">
              Rather than limiting our work to one narrow industry, we focus on the transportation
              details that determine whether a load is the right fit.
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-gray-50 border border-gray-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-navy-900">
              The most important questions are:
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "What needs to be moved?",
                "How much does it weigh?",
                "Where is it picking up?",
                "Where is it going?",
                "When does it need to move?",
                "Does it require liftgate support?",
                "Does it fit our equipment and schedule?",
                "Does the route make sense?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              This practical review helps us accept the right jobs and handle them responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Who We Serve</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-navy-900">Businesses</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We support businesses that need goods, supplies, equipment, boxed items, or general
                cargo picked up and delivered.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-navy-900">Brokers & Shippers</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We are available for load opportunities that fit our equipment, route, schedule, and
                service capabilities.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-navy-900">Warehouses & Distribution</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We support transportation needs involving warehouse pickups, delivery locations,
                scheduled freight movement, and general cargo transport.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-navy-900">Commercial Customers</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We help commercial customers move items that require reliable pickup, transport,
                and delivery.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-brand-50 border border-brand-200 p-6 text-center">
            <p className="text-gray-700">
              For customers who simply need something picked up and dropped off, we review the load
              details and determine whether the job is a good fit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Load Types We May Support</h2>
            <p className="section-subheading">
              Depending on route, equipment fit, weight, timing, and availability, we may support
              transportation for:
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Freight",
              "Boxed goods",
              "Supplies",
              "Equipment",
              "General cargo",
              "Business items",
              "Commercial deliveries",
              "Certain palletized freight",
              "Loads requiring liftgate support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3">
                <svg className="h-4 w-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            All load requests are reviewed before acceptance.
          </p>
        </div>
      </section>

      <CTASection
        heading="Tell Us What Needs to Move"
        body="Call or text A Reliable Trucking Company to discuss your load and find out if it fits our equipment and schedule."
      />
    </>
  )
}
