import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "A Reliable Trucking Company is open to hearing from qualified drivers and transportation professionals regarding future opportunities.",
}

const values = [
  "Reliability",
  "Safe and responsible driving",
  "Clear communication",
  "Professional conduct",
  "Respect for customers and freight",
  "Showing up prepared",
]

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        title="Interested in Working With A Reliable Trucking Company?"
        description="The company is open to hearing from qualified drivers and transportation professionals regarding possible future opportunities. This page does not represent a promise that a position is currently available."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Company standards</span>
            <h2 className="section-heading mt-3">The people behind the work matter</h2>
            <p className="section-subheading">
              Transportation work requires judgment, preparation, communication, and respect for the customer’s time and property.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value} className="flex gap-3 border-b border-navy-950/10 py-4 font-semibold text-navy-800">
                <span className="text-brand-600" aria-hidden="true">✓</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell max-w-4xl">
          <span className="eyebrow">Future opportunities</span>
          <h2 className="section-heading mt-3">Open to professional introductions</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-navy-700">
            <p>
              As the company continues to develop, A Reliable Trucking Company may consider working with
              qualified drivers, transportation professionals, and dependable people who align with the company’s standards.
            </p>
            <p>
              Sending an inquiry does not guarantee an interview, opening, contract, or employment opportunity.
              It simply provides a way to introduce yourself and share relevant experience.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:+15186458811" className="btn-primary w-full sm:w-auto">Call or Text 518-645-8811</a>
            <a href="mailto:areliabletrucking@proton.me" className="btn-secondary w-full sm:w-auto">Email an Introduction</a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Professional inquiries are welcome"
        body="Share your background, experience, location, and the type of transportation opportunity you are interested in discussing."
        showEmail
      />
    </>
  )
}