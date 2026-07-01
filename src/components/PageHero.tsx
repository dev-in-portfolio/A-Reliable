interface PageHeroProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
