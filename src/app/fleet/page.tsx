import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fleet & Equipment | 26-Foot Box Trucks with Liftgates",
  description:
    "A Reliable Trucking Company operates one rig and three 26-foot box trucks with liftgates for flexible freight transportation and pickup/delivery needs.",
}

export default function FleetPage() {
  return (
    <>
      <PageHero
        title="Flexible Equipment for Reliable Freight Transportation"
        description="A Reliable Trucking Company operates a practical fleet built to support freight transportation, pickup and delivery, box truck service, and general cargo movement. Our fleet includes one rig and three 26-foot box trucks equipped with liftgates."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Built for Practical Transportation Needs
          </h2>
          <p className="section-subheading text-center">
            Transportation is not one-size-fits-all. The right equipment depends on the load,
            weight, route, pickup location, delivery location, and timing.
          </p>
          <p className="mt-6 text-gray-600 leading-8 text-center">
            Our fleet gives us flexible options for customers who need dependable load transport
            without unnecessary complications.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">One Rig</h3>
              <p className="mt-2 text-sm text-gray-600">Flexible power for varied transportation needs</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Three 26-Foot Box Trucks</h3>
              <p className="mt-2 text-sm text-gray-600">Enclosed transport for secure cargo handling</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Liftgate Support</h3>
              <p className="mt-2 text-sm text-gray-600">Equipment for practical loading and unloading</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Nationwide Routes</h3>
              <p className="mt-2 text-sm text-gray-600">Flexible pickup and delivery capability</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Enclosed Transport with Practical Loading Support
          </h2>
          <p className="section-subheading text-center">
            Our 26-foot box trucks are useful for loads that need enclosed transportation and
            careful handling. The liftgates provide added support for loading and unloading cargo
            that may not be suited for standard ground-level handling.
          </p>
          <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-navy-900">
              This equipment can support:
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Boxed goods",
                "General cargo",
                "Supplies",
                "Equipment",
                "Business items",
                "Commercial deliveries",
                "Certain palletized freight",
                "Loads needing liftgate assistance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">
            Every Load Is Reviewed Before Acceptance
          </h2>
          <p className="section-subheading text-center">
            Before accepting a transportation request, we review the details to make sure the job
            fits our equipment, route, timing, and service capabilities.
          </p>
          <div className="mt-8 rounded-xl bg-navy-900 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white text-center">We consider:</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Load type",
                "Estimated weight",
                "Pickup location",
                "Delivery location",
                "Timing",
                "Route",
                "Equipment fit",
                "Liftgate needs",
                "Handling needs",
                "Availability",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <svg className="h-4 w-4 flex-shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-400">
              This helps us protect the customer, the cargo, the schedule, and the quality of service.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a
              href="tel:+15186458811"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              Not sure if your load fits? Call/Text: 518-645-8811
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Load That Needs the Right Equipment?"
        body="Call us to discuss your transportation needs and find out if our fleet is the right fit."
      />
    </>
  )
}
