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
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Story
            </p>
            <h2 className="mt-2 section-heading">
              Driven by Family, Built on Reliability
            </h2>
          </div>
          <div className="mt-10 space-y-6 text-gray-600 leading-8">
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
            <p>
              Our work is practical, but our standard is personal. Customers trust us with their
              freight, goods, supplies, equipment, timing, and delivery expectations. We take that
              responsibility seriously.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Our Name Is Our Promise</h2>
          </div>
          <div className="mt-10 text-gray-600 leading-8">
            <p className="text-center">
              Reliability is more than a word in our company name. It is the standard we work to
              earn on every load.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div key={item} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">
              Family-Owned, Professionally Operated
            </h2>
          </div>
          <div className="mt-10 space-y-6 text-gray-600 leading-8">
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

      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            From One Rig to a Flexible Fleet
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The company started with one rig and grew through experience, determination, and
            opportunity. Over time, the operation evolved into its current fleet: one rig and three
            26-foot box trucks with liftgates.
          </p>
          <p className="mt-4 text-gray-400">
            That growth gives A Reliable Trucking Company flexibility to support different load
            types, route needs, and transportation requests while staying focused on the same
            foundation the company started with: reliability.
          </p>
          <div className="mt-8">
            <a
              href="tel:+15186458811"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Call/Text: 518-645-8811
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
