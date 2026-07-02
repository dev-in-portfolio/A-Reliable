import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Safety & Compliance | Licensed & Insured Freight Transportation",
  description:
    "A Reliable Trucking Company is licensed and insured, reviewing each load for route, weight, equipment fit, timing, and safe transportation.",
}

export default function SafetyCompliancePage() {
  return (
    <>
      <PageHero
        title="Responsible Transportation Backed by Care, Communication, and Compliance"
        description="A Reliable Trucking Company is licensed and insured, providing customers with dependable transportation support built on professionalism, safety, and responsibility."
        canvasType="blackhole"
      />

      {/* Safety is Reliability */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Our Safety Standards
            </span>
            <h2 className="mt-4 section-heading">Safety Is Part of Reliability</h2>
          </div>
          <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center border-b border-white/5 pb-10">
            <p>
              A reliable transportation company does more than move a load from one place to another.
              It reviews the job, considers the equipment, communicates clearly, and handles the load
              responsibly from pickup to delivery.
            </p>
            <p>
              Every transportation request is reviewed based on weight, route, timing, equipment fit,
              handling needs, pickup conditions, delivery conditions, service capabilities, and
              availability.
            </p>
            <p className="font-bold text-white text-xl">
              This helps us determine whether the load can be handled safely and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* License Info */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-20 sm:py-28 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-heading">Licensed & Insured</h2>
            <p className="section-subheading max-w-xl mx-auto">
              A Reliable Trucking Company is fully licensed and insured. DOT and MC credentials are confirmed
              and can be provided upon request.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto text-center">
            <div className="flex items-center gap-3 justify-center text-green-400 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold font-heading tracking-wide">Fully Compliant Status</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-white/5 border border-white/5 p-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">DOT Number</p>
                <p className="mt-2 font-extrabold text-white text-sm font-heading">Available Upon Request</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/5 p-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">MC Number</p>
                <p className="mt-2 font-extrabold text-white text-sm font-heading">Available Upon Request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Fit */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Equipment Fit Matters</h2>
          </div>
          <div className="space-y-6 text-base text-gray-300 leading-relaxed max-w-3xl mx-auto text-center border-b border-white/5 pb-10">
            <p>
              With one rig and three 26-foot box trucks equipped with liftgates, we take equipment
              fit seriously.
            </p>
            <p>
              Liftgate capability can be helpful for certain loads, but each job still needs to be
              reviewed for weight, access, pickup conditions, delivery conditions, and safe handling.
            </p>
            <p className="text-brand-300 font-semibold">
              We do not accept loads blindly. We review the details first so the job can be handled
              responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Action Columns */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 py-20 sm:py-28 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading leading-tight mb-12">
            Professional Follow-Through from Pickup to Delivery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "Clear Communication",
                desc: "Real-time coordination and direct dispatch updates.",
                icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
              },
              {
                label: "Responsible Transport",
                desc: "Commitment to cargo safety, weight limits, and secured transit.",
                icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                label: "Safe Driving",
                desc: "Fully compliant commercial driving practices at all times.",
                icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
              },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 rounded-2xl border border-white/5">
                <svg className="mx-auto h-8 w-8 text-brand-400 animate-pulse-slow" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <p className="mt-4 text-sm font-bold text-white font-heading tracking-wide uppercase">{item.label}</p>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Our goal is to make sure each accepted load is handled with care from start to finish.
          </p>
        </div>
      </section>

      <CTASection
        heading="Have Questions About Load Fit or Requirements?"
        body="We are glad to discuss safety, compliance, equipment fit, and transportation details before any load is accepted."
      />
    </>
  )
}
