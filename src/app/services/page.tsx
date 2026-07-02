import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Freight Transportation & Load Pickup Services",
  description:
    "Reliable freight transportation, load pickup, delivery support, box truck transportation, and nationwide transport services from Charlotte, NC.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Freight Transportation, Load Pickup, and Delivery Support"
        description="A Reliable Trucking Company provides dependable transportation services for customers who need freight, goods, supplies, equipment, or general cargo moved safely from pickup to delivery. Based in Charlotte, North Carolina and serving customers nationwide, we focus on the details that matter: load type, weight, location, route, timing, equipment fit, and availability."
        canvasType="solarstorm"
      />

      {/* Intro Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="section-heading text-center">
            Reliable Freight Movement from Pickup to Delivery
          </h2>
          <p className="section-subheading text-center max-w-2xl mx-auto">
            Freight transportation is at the center of what we do. A Reliable Trucking Company
            helps move loads for customers who need dependable transportation handled with care,
            communication, and professionalism.
          </p>
          <div className="mt-12 space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto border-t border-white/5 pt-8 text-center">
            <p>
              Each transportation request is reviewed based on the load details, including what needs
              to move, how much it weighs, where it is picking up, where it is going, and whether the
              route and equipment are the right fit.
            </p>
            <p className="font-bold text-white text-xl">
              Our goal is simple: pick it up, transport it responsibly, and deliver it the right way.
            </p>
          </div>
        </div>
      </section>

      {/* Point A to Point B Details */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="section-heading text-center">
            Point A to Point B, Handled Responsibly
          </h2>
          <p className="section-subheading text-center max-w-2xl mx-auto">
            Need something picked up and dropped off? A Reliable Trucking Company provides pickup
            and delivery support for customers who need freight, goods, supplies, equipment, boxed
            items, or general cargo transported from one location to another.
          </p>
          
          <div className="mt-12 glass-card p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-6">
              Customers should be ready to provide:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pickup location",
                "Delivery location",
                "Load description",
                "Estimated weight",
                "Preferred pickup timing",
                "Preferred delivery timing",
                "Special handling needs",
                "Whether liftgate support is needed",
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
            <div className="mt-10 text-center border-t border-white/5 pt-8">
              <a href="tel:+15186458811" className="btn-premium-primary text-base font-bold uppercase tracking-wider px-10 py-5">
                Call / Text: 518-645-8811
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment details */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            26-Foot Box Trucks with Liftgate Support
          </h2>
          <p className="section-subheading text-center max-w-2xl mx-auto">
            Our three 26-foot box trucks provide enclosed transportation for loads that need
            practical, flexible equipment. Each box truck is equipped with a liftgate, adding
            support for items that require more than standard ground-level loading or unloading.
          </p>

          <div className="mt-12 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-6 text-center">
              Box truck transportation is a strong fit for:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Boxed goods",
                "Palletized freight, when compatible",
                "Business deliveries",
                "Industrial supplies",
                "Operations equipment",
                "General cargo",
                "Commercial pickup and delivery",
                "Loads requiring liftgate support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
              Every job is reviewed for weight, timing, route, and equipment fit before acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Network details */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="section-heading">
            Based in Charlotte. Serving Customers Nationwide.
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A Reliable Trucking Company is based in Charlotte, North Carolina and provides
            transportation support for customers nationwide.
          </p>
          <div className="space-y-4 text-base text-gray-300 leading-relaxed max-w-3xl mx-auto border-t border-white/5 pt-8">
            <p>
              Our Charlotte home base allows us to support local, regional, and long-distance
              transportation needs depending on route, timing, availability, and load details.
            </p>
            <p>
              Customers can call to discuss where the load is picking up, where it needs to go,
              what it weighs, when it needs to move, and whether the job fits our schedule and
              equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Support Details */}
      <section className="py-20 sm:py-28 bg-navy-950 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Transportation Support for Practical Cargo Needs
          </h2>
          <p className="section-subheading text-center max-w-2xl mx-auto">
            We support businesses, brokers, shippers, warehouses, organizations, and customers who
            need commercial items or general cargo transported.
          </p>
          <div className="mt-12 space-y-6 text-base text-gray-300 leading-relaxed max-w-3xl mx-auto text-center border-t border-white/5 pt-8">
            <p>
              This may include goods, supplies, equipment, boxed items, freight, and other cargo
              that fits our equipment and service capabilities.
            </p>
            <p>
              We focus less on labels and more on the load itself: what it is, where it is, where
              it needs to go, what it weighs, and whether we can transport it safely and reliably.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Load Ready to Move?"
        body="Call or text A Reliable Trucking Company to discuss pickup, delivery, weight, timing, route, and availability."
        showEmail
      />
    </>
  )
}
