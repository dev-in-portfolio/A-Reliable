import CanvasBackground from "@/components/CanvasBackground"

interface PageHeroProps {
  title: string
  description?: string
  canvasType?: "solarstorm" | "lattice" | "blackhole"
  children?: React.ReactNode
}

export default function PageHero({ title, description, canvasType, children }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 py-24 sm:py-32 overflow-hidden border-b border-white/5">
      {/* Background Grids & Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-12 -left-32 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-32 h-96 w-96 rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />

      {canvasType && <CanvasBackground type={canvasType} opacity={0.25} />}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10 animate-fade-in pt-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-heading leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
