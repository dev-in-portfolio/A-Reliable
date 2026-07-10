interface PageHeroProps {
  title: string
  description?: string
  canvasType?: "solarstorm" | "lattice" | "blackhole"
  children?: React.ReactNode
}

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-navy-950/10 bg-navy-950 text-white">
      <div className="container-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <span className="eyebrow text-brand-300">A Reliable Trucking Company</span>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-base leading-8 text-navy-200 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}