import Image from "next/image"
import Link from "next/link"
import TrustBar from "@/components/TrustBar"
import CTASection from "@/components/CTASection"

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="mb-8 inline-block">
              <Image
                src="/assets/logo/a-reliable-trucking-logo.png"
                alt="A Reliable Trucking Company logo"
                width={140}
                height={140}
                className="mx-auto h-28 w-28 sm:h-36 sm:w-36 object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 animate-slide-up">
              Driven by Family, Built on Reliability
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up animate-delay-100">
              Freight Transportation
              <span className="block text-brand-400">You Can Count On</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300 animate-slide-up animate-delay-200">
              A Reliable Trucking Company provides dependable freight transportation, load pickup,
              and delivery support from Charlotte, North Carolina to customers nationwide.
            </p>
            <p className="mt-4 text-base text-gray-400 italic animate-slide-up animate-delay-300">
              We handle each load with clear communication, responsible transport, and professional
              follow-through from pickup to delivery.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
              <a
                href="tel:+15186458811"
                className="inline-flex items-center gap-3 rounded-xl bg-brand-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-600/30 hover:bg-brand-700 hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now: 518-645-8811
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all"
              >
                View Services
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
              Our Approach
            </p>
            <h2 className="mt-3 section-heading">
              Built for Reliable Pickup, Transport, and Delivery
            </h2>
            <p className="section-subheading">
              When a load needs to move, details matter. Weight, route, timing, equipment fit,
              pickup location, and delivery location all play a role in getting the job done the
              right way.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-8 text-center card-hover">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/25">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Show Up Prepared</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Every load gets reviewed for weight, route, equipment fit, and timing before we commit.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-8 text-center card-hover">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/25">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Communicate Clearly</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We keep you informed through every step, from pickup coordination to delivery confirmation.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-8 text-center card-hover">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/25">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Follow Through</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                From pickup to delivery, we handle every load responsibly and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-400">
              By the Numbers
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              A Growing Operation Built on Reliability
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center card-hover">
              <p className="text-4xl font-extrabold text-brand-400">2022</p>
              <p className="mt-2 text-sm text-gray-400 font-medium uppercase tracking-wider">Established</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center card-hover">
              <p className="text-4xl font-extrabold text-brand-400">1</p>
              <p className="mt-2 text-sm text-gray-400 font-medium uppercase tracking-wider">Rig</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center card-hover">
              <p className="text-4xl font-extrabold text-brand-400">3</p>
              <p className="mt-2 text-sm text-gray-400 font-medium uppercase tracking-wider">Box Trucks</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center card-hover">
              <p className="text-4xl font-extrabold text-brand-400">50</p>
              <p className="mt-2 text-sm text-gray-400 font-medium uppercase tracking-wider">States Served</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
              Services
            </p>
            <h2 className="mt-3 section-heading">What We Do</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              From local pickups to nationwide freight movement, we provide dependable transportation solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 card-hover">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Freight Transportation</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reliable freight movement for goods, supplies, equipment, and general cargo transported safely.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 card-hover">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Load Pickup & Delivery</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Point A to point B service. Call us to discuss pickup, delivery, weight, timing, and availability.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 card-hover">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Box Truck Transport</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                26-foot box trucks with liftgates for enclosed, secure transportation and flexible loading.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 card-hover">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">Nationwide Transport</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Based in Charlotte, NC, serving customers across local, regional, and nationwide routes.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary text-base px-8 py-4">
              View All Services
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
                About Us
              </p>
              <h2 className="mt-3 section-heading text-3xl sm:text-4xl">
                Driven by Family.
                <span className="block text-brand-600">Built on Reliability.</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-8">
                <p>
                  A Reliable Trucking Company was built from the ground up with family, independence,
                  and long-term reliability at the center — established in 2022 with one rig.
                </p>
                <p>
                  Today, our fleet includes one rig and three 26-foot box trucks equipped with liftgates,
                  giving customers practical options for freight and pickup/delivery needs.
                </p>
                <p className="font-medium text-navy-900 italic">
                  Our name is our promise: reliability, communication, and care on every load.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-1 shadow-2xl shadow-brand-500/20">
                <div className="rounded-2xl bg-white p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/assets/logo/a-reliable-trucking-logo.png"
                      alt="A Reliable Trucking Company logo"
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain"
                    />
                    <div>
                      <p className="font-bold text-navy-900 text-lg">A Reliable</p>
                      <p className="text-sm text-gray-500">Trucking Company</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                      <span className="text-sm text-gray-700">Family-owned & operated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                      <span className="text-sm text-gray-700">Based in Charlotte, NC</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                      <span className="text-sm text-gray-700">Serving customers nationwide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                      <span className="text-sm text-gray-700">Licensed & insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                      <span className="text-sm text-gray-700">1 rig + 3 box trucks with liftgates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
              Our Location
            </p>
            <h2 className="mt-3 section-heading">
              Proudly Based in Charlotte, North Carolina
            </h2>
            <p className="section-subheading">
              From the Queen City, we provide reliable freight transportation to customers across
              the country. Whether your load is local, regional, or long-distance — we are here to help.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 px-8 py-5 shadow-sm">
              <svg className="h-8 w-8 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-lg font-semibold text-navy-900">Charlotte, NC &mdash; Serving All 50 States</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-400">
              Who We Support
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Supporting Businesses, Brokers, and Customers Nationwide
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We work with businesses, brokers, shippers, warehouses, and customers who need freight
              or general cargo transported reliably.
            </p>
            <p className="mt-4 text-gray-400">
              We do not force every load into one category. We review the details and determine
              whether the job fits our equipment, schedule, route, and service capabilities.
            </p>
            <div className="mt-8">
              <Link href="/customers-loads" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all">
                Customers & Loads We Serve
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Company Media</h2>
            <p className="section-subheading">
              Moments from the road and behind the scenes with A Reliable Trucking Company.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover">
              <video controls muted playsInline preload="metadata" className="w-full aspect-video object-cover">
                <source src="/assets/media-originals/1030658424_1782848330626927.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover">
              <video controls muted playsInline preload="metadata" className="w-full aspect-video object-cover">
                <source src="/assets/media-originals/116599418_1782848490588070.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover">
              <video controls muted playsInline preload="metadata" className="w-full aspect-video object-cover">
                <source src="/assets/media-originals/127677300_1782848524108806.mp4" type="video/mp4" />
              </video>
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
