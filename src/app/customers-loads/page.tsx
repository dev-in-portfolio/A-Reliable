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
        canvasType="lattice"
      />

      {/* Details intro */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Operational Criteria
            </span>
            <h2 className="mt-4 section-heading">We Focus on the Load Details</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Rather than limiting our work to one narrow industry, we focus on the transportation
              details that determine whether a load is the right fit.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-6">
              The most important questions are:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
              This practical review helps us accept the right jobs and handle them responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Grid */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">Who We Serve</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Businesses",
                desc: "We support local and national businesses that need commercial goods, inventory supplies, operations equipment, boxed items, or general cargo picked up and delivered.",
              },
              {
                title: "Brokers & Shippers",
                desc: "We partner with logistics brokers and shippers for load opportunities that align with our equipment capacity, routes, scheduling availability, and high service standards.",
              },
              {
                title: "Warehouses & Distribution",
                desc: "We coordinate cargo pickups and deliveries at warehouses, distribution hubs, fulfillment centers, and storage facilities, maintaining strict timing coordination.",
              },
              {
                title: "Commercial Customers",
                desc: "We support commercial customers moving oversized or heavy items requiring enclosed transport, liftgate assistance, and professional commercial handling.",
              },
            ].map((srv) => (
              <div key={srv.title} className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white font-heading tracking-wide border-b border-white/5 pb-3 mb-3">{srv.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-container border-white/5 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-sm text-brand-300 font-semibold">
              For customers who simply need something picked up and dropped off, we review the load
              details and determine whether the job is a good fit.
            </p>
          </div>
        </div>
      </section>

      {/* Load Types */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Load Types We May Support</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Depending on route, equipment fit, weight, timing, and availability, we may support
              transportation for:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "General Freight",
              "Boxed Goods",
              "Operations Supplies",
              "Industrial Equipment",
              "General Cargo",
              "Business Inventory",
              "Commercial Shipments",
              "Palletized Shipments",
              "Liftgate-Required Loads",
            ].map((item) => (
              <div key={item} className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-bold tracking-wide">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-500">
            All load requests are reviewed before acceptance to ensure safety and quality of service.
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
