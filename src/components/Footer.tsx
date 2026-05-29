import { ArrowUpRight } from 'lucide-react'
import Container from './ui/Container'
import { useT } from '../i18n/useT'

export default function Footer() {
  const { t } = useT()

  return (
    <footer className="border-t border-app-text/[0.04] bg-app-bg">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="TestSuite"
                className="h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-sm text-app-text/30 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {Object.entries(t.footer.columns).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-app-text/40 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-app-text/35 hover:text-app-text transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-app-text/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-app-text/20">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <a
            href="https://marketplace.atlassian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-app-text/25 hover:text-app-text/50 transition-colors"
          >
            {t.footer.marketplace}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
