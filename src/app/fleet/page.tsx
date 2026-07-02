import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import VideoShowcase from "@/components/VideoShowcase"

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
        canvasType="lattice"
      />

      {/* Fleet Overview Grid */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Fleet Capacity
            </span>
            <h2 className="mt-4 section-heading">
              Built for Practical Transportation Needs
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Transportation is not one-size-fits-all. The right equipment depends on the load,
              weight, route, pickup location, delivery location, and timing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "One Commercial Rig",
                desc: "Heavy-duty power and flexible routing capability for regional and long-distance freight transportation.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: "Three 26-Foot Box Trucks",
                desc: "Spacious, fully enclosed freight boxes protecting cargo from weather, theft, and environmental road hazards.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                title: "Heavy-Duty Liftgates",
                desc: "Equipped on all box trucks to enable smooth, ground-level loading and unloading without a commercial dock.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                ),
              },
              {
                title: "Nationwide Route Access",
                desc: "Originating in Charlotte, NC, serving local, regional, and cross-country transportation lanes.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
            ].map((spec) => (
              <div key={spec.title} className="glass-card p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                  {spec.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading tracking-wide">{spec.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loading Support Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Enclosed Transport with Practical Loading Support
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Our 26-foot box trucks are useful for loads that need enclosed transportation and
              careful handling. The liftgates provide added support for loading and unloading cargo
              that may not be suited for standard ground-level handling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-6">
                This equipment can support:
              </h3>
              <div className="space-y-4">
                {[
                  "Boxed goods & business inventory",
                  "General cargo & warehouse items",
                  "Industrial supplies & operations gear",
                  "Operations & light facility equipment",
                  "Commercial & retail direct deliveries",
                  "Loads requiring hydraulic liftgates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] shadow-2xl bg-navy-900">
                <Image
                  src="/assets/images/box-truck.png"
                  alt="A Reliable Trucking 26-foot box truck with a liftgate parked at warehouse in Charlotte, NC"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-400">Box Truck Fleet</span>
                  <p className="text-sm font-bold text-white font-heading mt-0.5">Hydraulic Liftgates for Ground Loading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media section */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Fleet Media
            </span>
            <h2 className="section-heading text-center">Company Media</h2>
            <p className="section-subheading text-center max-w-xl mx-auto mb-12">
              Moments from the road and around the operation.
            </p>
          </div>

          <VideoShowcase />
        </div>
      </section>

      {/* Review details */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Every Load Is Reviewed Before Acceptance
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Before accepting a transportation request, we review the details to make sure the job
              fits our equipment, route, timing, and service capabilities.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-6 text-center">We consider:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {[
                "Load type",
                "Estimated weight",
                "Pickup location",
                "Delivery location",
                "Timing & urgency",
                "Route access",
                "Equipment fit",
                "Liftgate needs",
                "Availability",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
              This helps us protect the customer, the cargo, the schedule, and the quality of service.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+15186458811"
              className="btn-premium-primary text-base font-bold uppercase tracking-wider px-10 py-5"
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
