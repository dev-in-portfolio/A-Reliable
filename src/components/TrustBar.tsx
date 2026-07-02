const trustItems = [
  "Family-Owned",
  "Based in Charlotte, NC",
  "Serving Nationwide",
  "Licensed & Insured",
  "Box Truck Service",
  "Liftgate Support",
  "Freight Transportation",
]

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-navy-900/60 overflow-hidden backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 group">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(217,119,6,0.8)] group-hover:scale-125 transition-transform duration-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
