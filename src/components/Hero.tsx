import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'
import { useT } from '../i18n/useT'

export default function Hero() {
  const { t } = useT()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-hero-glow-2" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-brand-400 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance animate-fade-in animate-delay-100">
            {t.hero.title}
            <br />
            <span className="gradient-text-brand">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40 sm:text-xl text-balance animate-fade-in animate-delay-200">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in animate-delay-300">
            <Button size="lg">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg">
              {t.hero.ctaSecondary}
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in animate-delay-400">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-white/30 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />
    </section>
  )
}
