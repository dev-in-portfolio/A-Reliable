import Image from "next/image"
import Link from "next/link"
import TrustBar from "@/components/TrustBar"
import CTASection from "@/components/CTASection"
import VideoShowcase from "@/components/VideoShowcase"
import CanvasBackground from "@/components/CanvasBackground"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-950 overflow-hidden border-b border-white/5 pt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/assets/media-originals/1030658424_1782848330626927.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-950/95" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <CanvasBackground type="solarstorm" opacity={0.35} />
        
        {/* Glow blobs */}
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl glow-blob" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-600/5 blur-3xl glow-blob" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left animate-fade-in">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-container border-white/10 text-brand-400">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Driven by Family, Built on Reliability
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight">
                  Freight Transportation
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                    You Can Count On
                  </span>
                </h1>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-300">
                  A Reliable Trucking Company provides dependable freight transportation, load pickup,
                  and delivery support from Charlotte, North Carolina to customers nationwide.
                </p>
                <p className="text-sm sm:text-base text-brand-300 italic border-l-2 border-brand-500 pl-4">
                  "We handle each load with clear communication, responsible transport, and professional
                  follow-through from pickup to delivery."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+15186458811"
                  className="btn-premium-primary text-base font-bold uppercase tracking-wider px-8 py-4.5 w-full sm:w-auto"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now: 518-645-8811
                </a>
                <Link
                  href="/services"
                  className="btn-premium-secondary text-base uppercase tracking-wider px-8 py-4.5 w-full sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-fade-in animate-delay-200">
              <div className="relative glass-card p-2 rounded-2xl shadow-2xl border-white/10 max-w-md mx-auto overflow-hidden">
                {/* Decorative overlay grids */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                <div className="relative rounded-xl overflow-hidden bg-navy-950 p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/logo/a-reliable-trucking-logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(217,119,6,0.2)]"
                      />
                      <div>
                        <p className="font-extrabold text-white text-sm font-heading tracking-wide">A Reliable</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Trucking Company</p>
                      </div>
                    </div>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>

                  <div className="space-y-4 text-sm text-gray-300">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-500/20 transition-colors">
                      <span className="font-semibold text-gray-400">Home Base</span>
                      <span className="text-white font-bold font-heading">Charlotte, NC</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-500/20 transition-colors">
                      <span className="font-semibold text-gray-400">Fleet Operations</span>
                      <span className="text-white font-bold font-heading">Rigs + Box Trucks</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-500/20 transition-colors">
                      <span className="font-semibold text-gray-400">Route Scope</span>
                      <span className="text-white font-bold font-heading">50 States Nationwide</span>
                    </div>
                  </div>

                  <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-4 text-xs text-brand-300 leading-relaxed">
                    <strong>Load Dispatch Notice:</strong> All transportation requests are reviewed for route, weight, timing, and equipment compatibility to guarantee professional service quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Our Approach */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Our Core Approach
            </span>
            <h2 className="mt-4 section-heading">
              Built for Reliable Pickup, Transport, and Delivery
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              When a load needs to move, details matter. Weight, route, timing, equipment fit,
              pickup location, and delivery location all play a role in getting the job done the
              right way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Show Up Prepared",
                desc: "Every load gets reviewed for weight, route, equipment fit, and timing before we commit. No shortcuts.",
                icon: (
                  <svg className="h-7 w-7 text-brand-400 animate-pulse-slow" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: "Communicate Clearly",
                desc: "We keep you informed through every step, from pickup coordination to delivery confirmation with complete transparency.",
                icon: (
                  <svg className="h-7 w-7 text-brand-400 animate-pulse-slow" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
              {
                title: "Follow Through",
                desc: "From pickup to delivery, we handle every load responsibly, professionally, and with the utmost care for cargo security.",
                icon: (
                  <svg className="h-7 w-7 text-brand-400 animate-pulse-slow" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-8 rounded-2xl border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-500 to-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-500/30 group-hover:bg-brand-500/5 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-white font-heading tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-24 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Operations Stats
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading">
              A Growing Operation Built on Reliability
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "2022", label: "Established" },
              { num: "1", label: "Active Rig" },
              { num: "3", label: "Box Trucks" },
              { num: "50", label: "States Served" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-8 rounded-2xl text-center border border-white/5 relative group">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-500/10 to-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-300 to-brand-500 font-heading tracking-tight">
                  {stat.num}
                </p>
                <p className="mt-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Services We Provide
            </span>
            <h2 className="mt-4 section-heading">What We Do</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              From local pickups in Charlotte to nationwide freight movement, we provide dependable transportation solutions tailored to your load's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Freight Transportation",
                desc: "Reliable freight movement for goods, supplies, equipment, and general cargo transported safely.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: "Load Pickup & Delivery",
                desc: "Direct Point A to Point B coordination. Contact us to confirm routing, weight limits, and dispatch availability.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                title: "Box Truck Transport",
                desc: "Three 26-foot box trucks equipped with heavy-duty liftgates for flexible ground loading and secure transit.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                title: "Nationwide Transport",
                desc: "Operational routes originating in Charlotte, NC, serving regional and long-haul lanes across the country.",
                icon: (
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
            ].map((srv) => (
              <div key={srv.title} className="glass-card p-8 rounded-2xl border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-500 to-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-500/30 group-hover:bg-brand-500/5 transition-all duration-300">
                  {srv.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-white font-heading tracking-wide">{srv.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="btn-premium-secondary text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
            >
              <span>View All Services Details</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
                About Us
              </span>
              <h2 className="section-heading">
                Driven by Family.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
                  Built on Reliability.
                </span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  A Reliable Trucking Company was built from the ground up with family, independence,
                  and long-term reliability at the center — established in 2022 with one rig.
                </p>
                <p>
                  Today, our fleet includes one rig and three 26-foot box trucks equipped with liftgates,
                  giving customers practical options for freight and pickup/delivery needs.
                </p>
                <p className="font-semibold text-white italic border-l-2 border-brand-500 pl-4">
                  Our name is our promise: reliability, communication, and care on every load.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/about" className="btn-premium-primary text-sm uppercase tracking-wider font-bold">
                  Read Our Full Story
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-[16/10] shadow-2xl bg-navy-900">
                <Image
                  src="/assets/images/semi-truck.png"
                  alt="A Reliable Trucking commercial semi-truck driving on the highway at sunset"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-400">Nationwide Shipping</span>
                  <p className="text-sm font-bold text-white font-heading mt-0.5">Direct Highway Routes from Charlotte, NC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Service Network
            </span>
            <h2 className="mt-4 section-heading">
              Based in Charlotte, North Carolina
            </h2>
            <p className="section-subheading">
              From the Queen City, we provide reliable freight transportation to customers across
              the country. Whether your load is local, regional, or long-distance — we are here to help.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="glass-card px-8 py-5 rounded-2xl border border-white/10 flex items-center gap-3.5 shadow-xl max-w-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider font-heading">Charlotte Base</p>
                <p className="text-xs text-gray-400">Serving Local, Regional, and Nationwide Routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-24 sm:py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
            Who We Support
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading leading-tight">
            Supporting Businesses, Brokers, and Shippers Nationwide
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We work with businesses, brokers, shippers, warehouses, and customers who need freight
            or general cargo transported reliably.
          </p>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto border-t border-white/5 pt-4">
            We do not force every load into one category. We review the details and determine
            whether the job fits our equipment, schedule, route, and service capabilities.
          </p>
          <div className="mt-10">
            <Link
              href="/customers-loads"
              className="btn-premium-secondary text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
            >
              <span>View Customers & Loads We Serve</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Media */}
      <section className="py-24 sm:py-32 bg-navy-950 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/10">
              Media Showcase
            </span>
            <h2 className="mt-4 section-heading">Company Operations in Action</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Explore key clips from dispatch, on-road transport, and safe cargo handling operations.
            </p>
          </div>

          <VideoShowcase />
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
