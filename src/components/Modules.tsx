import { LucideIcon, ArrowRight, FileText, ClipboardCheck, Play, RotateCw, Layers, Database, Shield, LayoutDashboard } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Container from './ui/Container'
import { useT } from '../i18n/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MODULE_ICONS: LucideIcon[] = [
  FileText,
  ClipboardCheck,
  Play,
  RotateCw,
  Layers,
  Database,
  Shield,
  LayoutDashboard,
]

const MODULE_COLORS = [
  'from-blue-500 to-cyan-400',
  'from-violet-500 to-purple-400',
  'from-emerald-500 to-green-400',
  'from-amber-500 to-yellow-400',
  'from-rose-500 to-pink-400',
  'from-sky-500 to-indigo-400',
  'from-red-500 to-orange-400',
  'from-cyan-500 to-blue-500',
]

function ModuleCard({
  title,
  subtitle,
  features,
  learnMore,
  icon: Icon,
  color,
  index,
}: {
  title: string
  subtitle: string
  features: string[]
  learnMore: string
  icon: LucideIcon
  color: string
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 transition-all duration-600 group ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} bg-opacity-10`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/40 mt-0.5">{subtitle}</p>
        </div>
      </div>

      <ul className="space-y-2">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-sm text-white/50">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/20" />
            {feat}
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-white/[0.04]">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/25 group-hover:text-brand-400 transition-colors cursor-pointer">
          {learnMore}
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  )
}

export default function Modules() {
  const { t } = useT()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()

  return (
    <section id="modules" className="section-padding relative">
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
            label={t.modules.badge}
            title={t.modules.title}
            description={t.modules.description}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.modules.items.map((mod, i) => (
            <ModuleCard
              key={mod.title}
              {...mod}
              icon={MODULE_ICONS[i]}
              color={MODULE_COLORS[i]}
              index={i}
            />
          ))}
        </div>

        <div
          ref={statsRef}
          className={`mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-600 ${
            statsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {t.modules.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
