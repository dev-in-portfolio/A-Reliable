import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about A Reliable Trucking Company, a family-owned freight transportation company based in Charlotte, NC and serving customers nationwide.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Family-Owned Company Built from the Ground Up"
        description="A Reliable Trucking Company is a family-owned freight transportation company based in Charlotte, North Carolina and serving customers nationwide. Established in 2022, the company was built with a clear purpose: to create something independent, dependable, and meaningful for the family behind it."
        canvasType="solarstorm"
      />

      {/* Story Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Our Story
            </span>
            <h2 className="mt-4 section-heading">
              Driven by Family, Built on Reliability
            </h2>
          </div>
          <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              A Reliable Trucking Company was built on more than transportation. It was built on
              family, purpose, independence, and the belief that reliability still matters.
            </p>
            <p>
              What began with one rig has grown through hard work, persistence, and real-world
              experience into a flexible transportation operation. Today, the company operates one
              rig and three 26-foot box trucks equipped with liftgates, allowing us to support a
              range of freight transportation, pickup, and delivery needs.
            </p>
            <p className="font-semibold text-white border-l-2 border-brand-500 pl-4 py-1">
              Our work is practical, but our standard is personal. Customers trust us with their
              freight, goods, supplies, equipment, timing, and delivery expectations. We take that
              responsibility seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Name Is Our Promise</h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Reliability is more than a word in our company name. It is the standard we work to
              earn on every load.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Showing up prepared",
              "Communicating clearly",
              "Respecting the customer's time",
              "Reviewing each load carefully",
              "Using the right equipment for the job",
              "Handling freight and cargo responsibly",
              "Driving safely",
              "Following through from pickup to delivery",
            ].map((item) => (
              <div key={item} className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operation Section */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading font-heading">
              Family-Owned, Professionally Operated
            </h2>
          </div>
          <div className="space-y-6 text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              A Reliable Trucking Company carries a family-driven mindset into the way we serve.
              The company was built to create stability, opportunity, and a dependable future — and
              that purpose shows in the way we approach our work.
            </p>
            <p>
              We believe customers deserve transportation support that feels direct, honest, and
              professional. No unnecessary confusion. No overpromising. Just clear communication,
              responsible service, and dependable follow-through.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 py-20 sm:py-28 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading leading-tight">
            From One Rig to a Flexible Fleet
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            The company started with one rig and grew through experience, determination, and
            opportunity. Over time, the operation evolved into its current fleet: one rig and three
            26-foot box trucks with liftgates.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-6">
            That growth gives A Reliable Trucking Company flexibility to support different load
            types, route needs, and transportation requests while staying focused on the same
            foundation the company started with: reliability.
          </p>
          <div className="pt-4">
            <a
              href="tel:+15186458811"
              className="btn-premium-primary text-base font-bold uppercase tracking-wider px-10 py-5"
            >
              Call / Text: 518-645-8811
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have Questions About Our Story?"
        body="We would be glad to tell you more. Call or text to learn how we can support your transportation needs."
      />
    </>
  )
}
