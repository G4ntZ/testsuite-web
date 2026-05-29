import { Check, Minus } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Container from './ui/Container'
import { useT } from '../i18n/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function renderCell(value: boolean | string | number) {
  if (value === true)
    return <Check className="h-4 w-4 text-emerald-400 mx-auto" />
  if (value === false)
    return <Minus className="h-4 w-4 text-white/10 mx-auto" />
  return (
    <span className="text-xs font-medium text-white/40">{String(value)}</span>
  )
}

export default function Comparison() {
  const { t } = useT()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation()

  return (
    <section id="compare" className="section-padding relative">
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
            label={t.comparison.badge}
            title={t.comparison.title}
            description={t.comparison.description}
          />
        </div>

        <div
          ref={tableRef}
          className={`glass rounded-2xl overflow-hidden transition-all duration-600 ${
            tableVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.04]">
                  {t.comparison.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`py-4 px-6 text-xs font-medium uppercase tracking-wider ${
                        i === 0
                          ? 'text-left text-white/30'
                          : i === 1
                          ? 'text-center text-brand-400 bg-brand-500/[0.03]'
                          : 'text-center text-white/20'
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-b border-white/[0.02] transition-colors hover:bg-white/[0.01] ${
                      i % 2 === 0 ? 'bg-white/[0.005]' : ''
                    }`}
                  >
                    <td className="py-3.5 px-6 text-white/60">{row.name}</td>
                    <td className="py-3.5 px-6 bg-brand-500/[0.02]">
                      {renderCell(row.testsuite)}
                    </td>
                    <td className="py-3.5 px-6">{renderCell(row.zephyr)}</td>
                    <td className="py-3.5 px-6">{renderCell(row.xray)}</td>
                    <td className="py-3.5 px-6">{renderCell(row.qtest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  )
}
