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
  bgClass = "bg-navy-950",
}: CTASectionProps) {
  return (
    <section className={`${bgClass} border-t border-white/10 py-16 text-white sm:py-20`}>
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
            {heading}
          </h2>
          {body && <p className="mt-4 text-base leading-7 text-navy-200 sm:text-lg">{body}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-none">
          <a href="tel:+15186458811" className="btn-primary w-full sm:w-auto">
            Call or Text 518-645-8811
          </a>
          {showEmail && (
            <a
              href="mailto:areliabletrucking@proton.me"
              className="inline-flex w-full items-center justify-center rounded border border-white/25 px-5 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Email Us
            </a>
          )}
        </div>
      </div>
    </section>
  )
}