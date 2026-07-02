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
  bgClass = "bg-gradient-to-br from-navy-900 via-navy-800 to-brand-950/20",
}: CTASectionProps) {
  return (
    <section className={`relative ${bgClass} py-20 sm:py-24 border-t border-white/5 overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading leading-tight">
          {heading}
        </h2>
        {body && (
          <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            {body}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:+15186458811"
            className="btn-premium-primary text-base px-10 py-5 font-bold uppercase tracking-wider w-full sm:w-auto"
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call / Text: 518-645-8811
          </a>
          {showEmail && (
            <a
              href="mailto:areliabletrucking@proton.me"
              className="text-sm font-semibold text-gray-300 hover:text-white underline underline-offset-4 transition-colors py-2"
            >
              areliabletrucking@proton.me
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
