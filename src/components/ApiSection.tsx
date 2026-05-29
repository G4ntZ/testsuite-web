import { Terminal, Lock, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import Container from './ui/Container'
import { useT } from '../i18n/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ApiSection() {
  const { t } = useT()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="api" className="section-padding relative">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
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
            label={t.api.badge}
            title={t.api.title}
            description={t.api.description}
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-2 max-w-5xl mx-auto">
          {t.api.endpoints.map((endpoint, i) => (
            <EndpointCard
              key={endpoint.path}
              path={endpoint.path}
              description={endpoint.description}
              auth={endpoint.path === '/get-test-run-dataset'}
              index={i}
            />
          ))}
        </div>
        <CodeExample />
      </Container>
    </section>
  )
}

function EndpointCard({
  path,
  description,
  auth,
  index,
}: {
  path: string
  description: string
  auth: boolean
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-5 transition-all duration-600 group ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 font-mono ring-1 ring-inset ring-emerald-500/20">
          GET
        </span>
        <code className="text-sm font-medium text-app-text/80 font-mono break-all">
          {path}
        </code>
        {auth && (
          <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium text-amber-400">
            <Lock className="h-2.5 w-2.5" />
            Auth
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-app-text/40">{description}</p>
    </div>
  )
}

function CodeExample() {
  const { t } = useT()
  const [copied, setCopied] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const code = `curl -X GET \\
  https://your-instance.atlassian.net/forge/app/trigger/get-test-run-dataset \\
  -H "Authorization: Bearer ts_api_xxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"issueKey": "TSP-42"}'`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      ref={ref}
      className={`mt-12 max-w-3xl mx-auto transition-all duration-600 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="glass-strong rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-app-text/[0.04]">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-app-text/30" />
            <span className="text-xs text-app-text/30 font-mono">{t.api.codeLabel}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-app-text/30 hover:text-app-text transition-colors"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? t.api.copiedLabel : t.api.copyLabel}
          </button>
        </div>
        <pre className="p-5 overflow-x-auto">
          <code className="text-sm font-mono text-app-text/60 leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
