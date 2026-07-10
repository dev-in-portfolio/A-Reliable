import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about A Reliable Trucking Company, a family-owned freight transportation company based in Charlotte, North Carolina.",
}

const timeline = [
  { year: "2022", text: "A Reliable Trucking Company was established as a family-owned transportation business." },
  { year: "Started", text: "The operation began with one commercial rig and a focus on dependable service." },
  { year: "Expanded", text: "The fleet grew to include three 26-foot box trucks equipped with liftgates." },
  { year: "Today", text: "The company reviews local, regional, and long-distance transportation requests from its Charlotte base." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Family-Owned Company Built on Reliability"
        description="A Reliable Trucking Company was established in 2022 with a straightforward purpose: build an independent transportation business that creates opportunity for the family behind it and provides dependable service to customers."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="section-heading mt-3">Built from the ground up</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-navy-700">
              <p>
                The company was built around family, purpose, independence, and the belief that reliability
                still matters. Transportation is practical work, but the responsibility behind it is personal.
              </p>
              <p>
                Customers trust a transportation company with freight, equipment, timing, pickup instructions,
                and delivery expectations. A Reliable Trucking Company approaches each accepted request with
                direct communication and attention to the details that determine whether the job is a good fit.
              </p>
              <p className="border-l-4 border-brand-500 pl-5 font-bold text-navy-950">
                The goal is not to accept every load. The goal is to accept the right loads and follow through responsibly.
              </p>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-900 shadow-xl">
              <Image
                src="/assets/images/semi-truck.png"
                alt="Representative commercial semi-truck traveling on a highway"
                fill
                className="object-cover"
              />
            </div>
            <span className="representative-label">Representative fleet imagery.</span>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Company growth</span>
            <h2 className="section-heading mt-3">From one rig to a flexible fleet</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 md:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.year} className="bg-white p-6 sm:p-7">
                <p className="font-heading text-xl font-extrabold text-brand-700">{item.year}</p>
                <p className="mt-3 leading-7 text-navy-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow text-brand-300">What the name means</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
              Reliability is the standard behind the name
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-navy-200">
            <p>
              Reliability means showing up prepared, communicating clearly, respecting the customer’s time,
              reviewing the request carefully, using appropriate equipment, and following through from pickup to delivery.
            </p>
            <p>
              The company’s available equipment includes one commercial rig and three 26-foot box trucks equipped
              with liftgates. Every request is still reviewed for route, weight, dimensions, access, timing, and availability.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to discuss a transportation request?"
        body="Call or text to talk through the load, route, timing, and equipment needs."
        showEmail
      />
    </>
  )
}