import { ArrowRight, Star } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'
import { useT } from '../i18n/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CtaSection() {
  const { t } = useT()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div
          ref={ref}
          className={`relative glass rounded-3xl p-10 sm:p-16 lg:p-20 text-center overflow-hidden transition-all duration-700 ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute inset-0 bg-card-glow opacity-30" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs font-medium text-amber-400 mb-6">
              <Star className="h-3 w-3 fill-amber-400" />
              {t.cta.badge}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {t.cta.title}
              <br />
              <span className="gradient-text-brand">{t.cta.titleHighlight}</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-white/35 max-w-lg mx-auto text-balance">
              {t.cta.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg">
                {t.cta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg">
                {t.cta.ctaSecondary}
              </Button>
            </div>

            <p className="mt-6 text-xs text-white/20">
              {t.cta.footnote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
