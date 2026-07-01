import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Work With Us | A Reliable Trucking Company",
  description:
    "A Reliable Trucking Company is open to connecting with dependable drivers and transportation professionals for future opportunities.",
}

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        title="Work With a Company Built on Reliability"
        description="A Reliable Trucking Company is built on professionalism, safe transportation, communication, and follow-through. As the company continues to grow, we are open to connecting with dependable drivers, transportation professionals, and reliable people who understand the importance of doing the job the right way."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Standards
            </p>
            <h2 className="mt-2 section-heading">What We Value</h2>
          </div>
          <div className="mt-10 space-y-6 text-gray-600 leading-8">
            <p>
              We value people who take transportation seriously, communicate clearly, respect the
              customer's time and property, show up prepared, understand safety and responsibility,
              care about doing the job correctly, and represent the company professionally.
            </p>
            <p className="font-medium text-navy-900">
              This is not about filling seats. It is about connecting with people who fit the
              standard behind the name.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Take transportation seriously",
              "Communicate clearly",
              "Respect the customer's time and property",
              "Show up prepared",
              "Understand safety and responsibility",
              "Care about doing the job correctly",
              "Represent the company professionally",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-gray-50 px-4 py-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Future Opportunities</h2>
          <p className="section-subheading">
            A Reliable Trucking Company may consider future opportunities with reliable transportation
            professionals, drivers, or service-minded individuals who align with the company's values.
          </p>
          <div className="mt-8">
            <p className="text-gray-600">
              For professional inquiries, contact us directly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15186458811"
                className="btn-primary"
              >
                Call/Text: 518-645-8811
              </a>
              <a
                href="mailto:areliabletrucking@proton.me"
                className="btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Be Part of Something Reliable?"
        body="If you share our values and standards, we want to hear from you."
      />
    </>
  )
}
