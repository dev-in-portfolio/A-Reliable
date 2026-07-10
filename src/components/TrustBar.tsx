const trustItems = [
  "Family-Owned",
  "Established 2022",
  "Based in Charlotte, NC",
  "Local to Long-Distance Requests",
]

export default function TrustBar() {
  return (
    <section className="border-y border-navy-950/10 bg-white">
      <div className="container-shell grid grid-cols-2 divide-x divide-y divide-navy-950/10 sm:grid-cols-4 sm:divide-y-0">
        {trustItems.map((item) => (
          <div key={item} className="flex min-h-24 items-center justify-center px-4 py-5 text-center">
            <span className="text-sm font-extrabold text-navy-900">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}