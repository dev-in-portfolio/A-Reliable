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
        canvasType="lattice"
      />

      {/* Our Standards */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Company Culture
            </span>
            <h2 className="mt-4 section-heading">What We Value</h2>
          </div>
          <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center border-b border-white/5 pb-10">
            <p>
              We value people who take transportation seriously, communicate clearly, respect the
              customer's time and property, show up prepared, understand safety and responsibility,
              care about doing the job correctly, and represent the company professionally.
            </p>
            <p className="font-bold text-white text-xl">
              This is not about filling seats. It is about connecting with people who fit the
              standard behind the name.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Take transportation seriously",
              "Communicate clearly",
              "Respect the customer's time and property",
              "Show up prepared",
              "Understand safety and responsibility",
              "Care about doing the job correctly",
              "Represent the company professionally",
            ].map((item) => (
              <div key={item} className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 flex-shrink-0">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-300 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="section-heading">Future Opportunities</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A Reliable Trucking Company may consider future opportunities with reliable transportation
            professionals, drivers, or service-minded individuals who align with the company's values.
          </p>
          
          <div className="pt-8 border-t border-white/5 max-w-xl mx-auto space-y-4">
            <p className="text-sm text-gray-400">
              For professional inquiries or to connect with us, contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="tel:+15186458811"
                className="btn-premium-primary text-sm uppercase tracking-wider font-bold w-full sm:w-auto"
              >
                Call / Text: 518-645-8811
              </a>
              <a
                href="mailto:areliabletrucking@proton.me"
                className="btn-premium-secondary text-sm uppercase tracking-wider font-bold w-full sm:w-auto"
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
