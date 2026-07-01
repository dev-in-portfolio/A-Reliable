import Image from "next/image"
import Link from "next/link"
import TrustBar from "@/components/TrustBar"
import CTASection from "@/components/CTASection"

export default function HomePage() {
  return (
    <>
      <section className="relative bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src="/assets/logo/a-reliable-trucking-logo.png"
              alt="A Reliable Trucking Company logo"
              width={120}
              height={120}
              className="mx-auto h-24 w-24 object-contain mb-6"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
              Driven by Family, Built on Reliability
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Freight Transportation You Can Count On
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A Reliable Trucking Company provides dependable freight transportation, load pickup,
              and delivery support from Charlotte, North Carolina to customers nationwide.
            </p>
            <p className="mt-4 text-base text-gray-400 italic">
              Driven by Family, Built on Reliability, we handle each load with clear communication,
              responsible transport, and professional follow-through from pickup to delivery.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+15186458811" className="btn-primary text-lg px-8 py-4">
                Call Now: 518-645-8811
              </a>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">
              Built for Reliable Pickup, Transport, and Delivery
            </h2>
            <p className="section-subheading">
              When a load needs to move, details matter. Weight, route, timing, equipment fit,
              pickup location, and delivery location all play a role in getting the job done the
              right way.
            </p>
            <p className="mt-6 text-gray-600 leading-8">
              A Reliable Trucking Company helps customers move freight, goods, supplies, equipment,
              and general cargo with dependable transportation support. Whether the load is local,
              regional, or long-distance, our focus stays the same: show up, communicate clearly,
              transport responsibly, and follow through.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy-900">
                Freight Transportation
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reliable freight movement for customers who need goods, supplies, equipment, or
                general cargo transported safely and professionally.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy-900">
                Load Pickup & Delivery
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Need something picked up and dropped off? Call us to discuss pickup location, delivery
                location, estimated weight, timing, and availability.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy-900">
                Box Truck Transportation
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Our 26-foot box trucks with liftgates provide enclosed, practical transportation
                support for loads that need secure handling and flexible equipment.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy-900">
                Nationwide Transport
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Based in Charlotte, North Carolina, we provide transportation support for customers
                across local, regional, and nationwide routes.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Story
            </p>
            <h2 className="mt-2 section-heading">
              Driven by Family. Built on Reliability.
            </h2>
            <p className="section-subheading">
              A Reliable Trucking Company was built from the ground up with family, independence,
              and long-term reliability at the center. Established in 2022, the company began with
              one rig and grew through hard work, persistence, and real-world transportation
              experience.
            </p>
            <p className="mt-6 text-gray-600 leading-8">
              Today, our fleet includes one rig and three 26-foot box trucks equipped with liftgates,
              giving customers practical transportation options for a range of freight and pickup/
              delivery needs.
            </p>
            <p className="mt-4 text-gray-600 leading-8 font-medium italic">
              Our name is our promise: reliability, communication, and care on every load.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">
              Flexible Equipment for Practical Transportation Needs
            </h2>
            <p className="section-subheading">
              Our fleet includes one rig and three 26-foot box trucks equipped with liftgates.
              This gives us flexible options for freight transportation, pickup and delivery,
              commercial cargo, boxed goods, equipment, supplies, and general load transport.
            </p>
            <p className="mt-6 text-gray-600 leading-8">
              Every transportation request is reviewed for weight, route, timing, equipment fit,
              and availability before acceptance.
            </p>
            <div className="mt-8">
              <Link href="/fleet" className="btn-secondary">
                View Fleet & Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">
              Supporting Businesses, Brokers, Shippers, and Customers Nationwide
            </h2>
            <p className="section-subheading">
              A Reliable Trucking Company works with customers who need freight or general cargo
              transported from one location to another. We support businesses, brokers, shippers,
              warehouses, commercial customers, and customers with pickup/drop-off transportation
              needs.
            </p>
            <p className="mt-6 text-gray-600 leading-8">
              We do not force every load into one category. We review the details and determine
              whether the job fits our equipment, schedule, route, and service capabilities.
            </p>
            <div className="mt-8">
              <Link href="/customers-loads" className="btn-secondary">
                Customers & Loads We Serve
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Need a Load Picked Up and Delivered?"
        body="Call or text A Reliable Trucking Company to discuss your route, timing, load details, and availability."
        showEmail
      />
    </>
  )
}
