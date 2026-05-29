import { Layers, Database, FileText, Clock, ShieldCheck, BarChart, LucideIcon } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Container from './ui/Container'
import { useT } from '../i18n/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STACK_ICONS: LucideIcon[] = [Layers, BarChart, Database, FileText, Clock, ShieldCheck]
const STACK_COLORS = [
  'text-sky-400',
  'text-violet-400',
  'text-emerald-400',
  'text-amber-400',
  'text-rose-400',
  'text-brand-400',
]

export default function Architecture() {
  const { t } = useT()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section className="section-padding relative border-y border-white/[0.03]">
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
            label={t.architecture.badge}
            title={t.architecture.title}
            description={t.architecture.description}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <ArchitectureDiagram />
          <StackList />
        </div>
      </Container>
    </section>
  )
}

function ArchitectureDiagram() {
  const { t } = useT()
  const { ref, isVisible } = useScrollAnimation()
  const d = t.architecture.diagram

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 delay-200 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95'
      }`}
    >
      <div className="glass rounded-2xl p-8 space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
          </div>
          <span className="text-[11px] text-white/20 font-mono ml-2">
            {d.title}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[d.issuePanels, d.adminPage, d.projectPage].map((label) => (
            <div
              key={label}
              className="flex items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/20 py-3 px-2"
            >
              <span className="text-xs font-medium text-brand-300 text-center">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-1">
          <div className="w-px h-4 bg-white/10" />
        </div>

        <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] py-3 px-4">
          <span className="text-xs font-medium text-white/30 font-mono">
            {d.functions}
          </span>
        </div>

        <div className="flex justify-center py-1">
          <div className="w-px h-4 bg-white/10" />
        </div>

        <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] py-3 px-4">
          <span className="text-xs font-medium text-white/20 font-mono">
            {d.jiraApi}
          </span>
        </div>
      </div>
    </div>
  )
}

function StackList() {
  const { t } = useT()

  return (
    <div className="grid gap-3">
      {t.architecture.stack.map((item, i) => {
        const Icon = STACK_ICONS[i]
        return (
          <StackItem
            key={item.name}
            name={item.name}
            description={item.description}
            icon={Icon}
            color={STACK_COLORS[i]}
            index={i}
          />
        )
      })}
    </div>
  )
}

function StackItem({
  name,
  description,
  icon: Icon,
  color,
  index,
}: {
  name: string
  description: string
  icon: LucideIcon
  color: string
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 glass rounded-xl p-4 transition-all duration-400 ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-white/30 mt-0.5">{description}</p>
      </div>
    </div>
  )
}
