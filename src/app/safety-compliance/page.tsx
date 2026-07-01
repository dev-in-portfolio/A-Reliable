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
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Safety Is Part of Reliability</h2>
          </div>
          <div className="mt-8 space-y-6 text-gray-600 leading-8">
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
            <p>This helps us determine whether the load can be handled safely and professionally.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Licensed & Insured</h2>
            <p className="section-subheading">
              A Reliable Trucking Company is licensed and insured. DOT and MC information are confirmed
              and can be provided upon request.
            </p>
          </div>
          <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 justify-center text-green-700 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold">Licensed & Insured</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-500">DOT Number</p>
                <p className="mt-1 font-semibold text-navy-900">Available upon request</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-500">MC Number</p>
                <p className="mt-1 font-semibold text-navy-900">Available upon request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Equipment Fit Matters</h2>
          </div>
          <div className="mt-8 space-y-6 text-gray-600 leading-8">
            <p>
              With one rig and three 26-foot box trucks equipped with liftgates, we take equipment
              fit seriously.
            </p>
            <p>
              Liftgate capability can be helpful for certain loads, but each job still needs to be
              reviewed for weight, access, pickup conditions, delivery conditions, and safe handling.
            </p>
            <p>
              We do not accept loads blindly. We review the details first so the job can be handled
              responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Professional Follow-Through from Pickup to Delivery
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Clear Communication", icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" },
              { label: "Responsible Transport", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Safe Driving", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <svg className="mx-auto h-8 w-8 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <p className="mt-3 text-sm font-medium text-white">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-400">
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
