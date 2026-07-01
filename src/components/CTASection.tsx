interface CTASectionProps {
  heading: string
  body?: string
  showEmail?: boolean
  bgClass?: string
}

export default function CTASection({
  heading,
  body,
  showEmail = false,
  bgClass = "bg-brand-600",
}: CTASectionProps) {
  return (
    <section className={`${bgClass} py-16 sm:py-20`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
        {body && (
          <p className="mt-4 text-lg leading-8 text-white/90">{body}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15186458811"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-sm hover:bg-gray-100 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call/Text: 518-645-8811
          </a>
          {showEmail && (
            <a
              href="mailto:areliabletrucking@proton.me"
              className="text-white/90 hover:text-white underline underline-offset-2 transition-colors"
            >
              areliabletrucking@proton.me
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
