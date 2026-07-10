import Image from "next/image"
import Link from "next/link"
import TrustBar from "@/components/TrustBar"
import CTASection from "@/components/CTASection"

const services = [
  {
    title: "Freight Transportation",
    description:
      "Transportation support for compatible freight, goods, supplies, equipment, and commercial cargo.",
    href: "/services",
  },
  {
    title: "26-Foot Box Truck Service",
    description:
      "Enclosed transportation with liftgate support for loads that fit the available equipment.",
    href: "/fleet",
  },
  {
    title: "Pickup and Delivery",
    description:
      "Direct transportation from pickup location to delivery location, subject to route and schedule review.",
    href: "/services",
  },
]

const callChecklist = [
  "Pickup location",
  "Delivery location",
  "Load description",
  "Estimated weight and dimensions, when available",
  "Preferred pickup date",
  "Delivery timing",
  "Liftgate or special handling needs",
]

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-warm-100">
        <div className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20">
          <div>
            <span className="eyebrow">Family-owned transportation company</span>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-navy-950 sm:text-5xl lg:text-6xl">
              Reliable Freight Transportation from Charlotte to Routes Nationwide
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-700">
              A Reliable Trucking Company provides freight transportation, box truck service, pickup,
              and delivery support for businesses, brokers, shippers, and customers with loads that
              need to move.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+15186458811" className="btn-primary w-full sm:w-auto">
                Call or Text 518-645-8811
              </a>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Request Transportation
              </Link>
            </div>
            <p className="mt-6 text-sm font-semibold text-navy-600">
              Family-owned. Based in Charlotte, North Carolina. Established in 2022.
            </p>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-900 shadow-[0_24px_60px_rgba(16,24,32,0.18)]">
              <Image
                src="/assets/images/semi-truck.png"
                alt="Representative commercial semi-truck traveling on a highway at sunset"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="text-sm font-extrabold">Freight transportation</p>
                <p className="mt-1 text-sm text-navy-200">
                  Supporting local, regional, and long-distance transportation requests.
                </p>
              </div>
            </div>
            <span className="representative-label">Representative fleet imagery.</span>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Transportation services</span>
            <h2 className="section-heading mt-3">Practical support for freight that needs to move</h2>
            <p className="section-subheading">
              Each request is reviewed according to the load, route, timing, access, equipment fit,
              and current availability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="border-t-4 border-brand-500 bg-warm-50 p-7 shadow-sm">
                <span className="text-sm font-extrabold text-brand-600">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-navy-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-navy-600">{service.description}</p>
                <Link href={service.href} className="mt-6 inline-flex font-extrabold text-brand-700 hover:text-brand-600">
                  Learn more <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-navy-900 shadow-xl">
              <Image
                src="/assets/images/box-truck.png"
                alt="Representative 26-foot commercial box truck positioned near a loading facility"
                fill
                className="object-cover"
              />
            </div>
            <span className="representative-label">Representative fleet imagery.</span>
          </div>

          <div>
            <span className="eyebrow">About the company</span>
            <h2 className="section-heading mt-3">Built from the ground up</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-navy-700">
              <p>
                A Reliable Trucking Company was established in 2022 as a family-owned operation built
                around independence, responsibility, and dependable service.
              </p>
              <p>
                The company operates one commercial rig and three 26-foot box trucks equipped with
                liftgates, providing practical options for compatible freight and pickup or delivery needs.
              </p>
              <p className="border-l-4 border-brand-500 pl-5 font-bold text-navy-950">
                Reliability is not just part of the name. It is the standard the company works to earn
                on every accepted load.
              </p>
            </div>
            <Link href="/about" className="btn-primary mt-8">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <span className="eyebrow text-brand-300">Fleet snapshot</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
              Equipment for practical freight needs
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-navy-200">
              The company’s available equipment provides options for enclosed box truck transportation
              and commercial rig transportation. Final equipment selection depends on the complete load details.
            </p>
            <Link href="/fleet" className="mt-8 inline-flex rounded border border-white/30 px-5 py-3 font-extrabold text-white hover:border-white hover:bg-white/10">
              View Fleet and Equipment
            </Link>
          </div>

          <dl className="grid gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              ["1", "Commercial rig"],
              ["3", "26-foot box trucks"],
              ["Liftgates", "Available on box trucks"],
              ["Reviewed", "Every request before acceptance"],
            ].map(([value, label]) => (
              <div key={label} className="bg-navy-950 p-6">
                <dt className="font-heading text-2xl font-extrabold text-brand-300">{value}</dt>
                <dd className="mt-2 text-sm leading-6 text-navy-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Prepare your request</span>
            <h2 className="section-heading mt-3">What to have ready when you call</h2>
            <p className="section-subheading">
              Having these details available helps the company review your request more efficiently.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {callChecklist.map((item) => (
              <li key={item} className="flex gap-3 border-b border-navy-950/10 py-4 text-navy-800">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-black text-brand-700" aria-hidden="true">
                  ✓
                </span>
                <span className="font-semibold leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-navy-950/10 bg-warm-100 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Safety and responsibility</span>
            <h2 className="section-heading mt-3">Every load is reviewed before acceptance</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Equipment fit", "The load must fit the available equipment, loading method, and access conditions."],
              ["Route and timing", "Pickup, delivery, route, schedule, and availability are reviewed before commitment."],
              ["Communication", "Accepted transportation requests are handled with direct customer communication."],
            ].map(([title, description], index) => (
              <article key={title}>
                <span className="text-sm font-extrabold text-brand-600">0{index + 1}</span>
                <h3 className="mt-3 font-heading text-xl font-extrabold text-navy-950">{title}</h3>
                <p className="mt-3 leading-7 text-navy-600">{description}</p>
              </article>
            ))}
          </div>
          <Link href="/safety-compliance" className="btn-secondary mt-10">
            View Safety and Transportation Standards
          </Link>
        </div>
      </section>

      <CTASection
        heading="Have a load that needs to move?"
        body="Call or text to discuss the pickup location, delivery location, timing, load details, and equipment needs."
        showEmail
      />
    </>
  )
}