import { LucideIcon, Layers, LayoutDashboard, Database, ArrowLeftRight, BarChart3, Shield, Webhook, Lock } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Container from './ui/Container'
import { useT } from '../i18n/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ICONS: LucideIcon[] = [
  Layers,
  LayoutDashboard,
  Database,
  ArrowLeftRight,
  BarChart3,
  Shield,
  Webhook,
  Lock,
]

function FeatureCard({
  title,
  description,
  icon: Icon,
  category,
  index,
}: {
  title: string
  description: string
  icon: LucideIcon
  category: string
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card hover className="group h-full">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 ring-1 ring-brand-500/20 group-hover:bg-brand-500/15 transition-colors">
            <Icon className="h-5 w-5 text-brand-400" />
          </div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-white/20">
            {category}
          </span>
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-white/40">{description}</p>
      </Card>
    </div>
  )
}

export default function Features() {
  const { t } = useT()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-[0.03]" />
      <Container>
        <div
          ref={headerRef}
          className={`transition-all duration-600 ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHeading
            label={t.features.badge}
            title={t.features.title}
            description={t.features.description}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              icon={ICONS[i]}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
