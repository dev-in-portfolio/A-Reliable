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
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Reliable Freight Movement from Pickup to Delivery
          </h2>
          <p className="section-subheading text-center">
            Freight transportation is at the center of what we do. A Reliable Trucking Company
            helps move loads for customers who need dependable transportation handled with care,
            communication, and professionalism.
          </p>
          <div className="mt-8 space-y-6 text-gray-600 leading-8">
            <p>
              Each transportation request is reviewed based on the load details, including what needs
              to move, how much it weighs, where it is picking up, where it is going, and whether the
              route and equipment are the right fit.
            </p>
            <p className="font-medium text-navy-900">
              Our goal is simple: pick it up, transport it responsibly, and deliver it the right way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Point A to Point B, Handled Responsibly
          </h2>
          <p className="section-subheading text-center">
            Need something picked up and dropped off? A Reliable Trucking Company provides pickup
            and delivery support for customers who need freight, goods, supplies, equipment, boxed
            items, or general cargo transported from one location to another.
          </p>
          <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-navy-900">
              Customers should be ready to provide:
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Pickup location",
                "Delivery location",
                "Load description",
                "Estimated weight",
                "Preferred pickup timing",
                "Preferred delivery timing",
                "Special handling needs",
                "Whether liftgate support may be needed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <a href="tel:+15186458811" className="btn-primary">
                Call/Text: 518-645-8811
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            26-Foot Box Trucks with Liftgate Support
          </h2>
          <p className="section-subheading text-center">
            Our three 26-foot box trucks provide enclosed transportation for loads that need
            practical, flexible equipment. Each box truck is equipped with a liftgate, adding
            support for items that require more than standard ground-level loading or unloading.
          </p>
          <div className="mt-8 rounded-xl bg-navy-900 text-gray-300 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">
              Box truck transportation may be a strong fit for:
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Boxed goods",
                "Palletized freight, when compatible",
                "Business deliveries",
                "Supplies",
                "Equipment",
                "General cargo",
                "Commercial pickup and delivery",
                "Loads requiring liftgate support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-400">
              Every job is reviewed for weight, timing, route, and equipment fit before acceptance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Based in Charlotte. Serving Customers Nationwide.
          </h2>
          <p className="section-subheading text-center">
            A Reliable Trucking Company is based in Charlotte, North Carolina and provides
            transportation support for customers nationwide.
          </p>
          <div className="mt-8 space-y-6 text-gray-600 leading-8">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Transportation Support for Practical Cargo Needs
          </h2>
          <p className="section-subheading text-center">
            We support businesses, brokers, shippers, warehouses, organizations, and customers who
            need commercial items or general cargo transported.
          </p>
          <div className="mt-8 space-y-6 text-gray-600 leading-8">
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
