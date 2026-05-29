import { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowUpRight, Globe, Check } from 'lucide-react'
import Button from './ui/Button'
import { useT } from '../i18n/useT'
import type { Language } from '../i18n/types'

const FLAGS: Record<Language, string> = {
  es: '\u{1F1EA}\u{1F1F8}',
  en: '\u{1F1FA}\u{1F1F8}',
}

const LABELS: Record<Language, string> = {
  es: 'Español',
  en: 'English',
}

export default function Navbar() {
  const { t, lang, setLanguage } = useT()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="TestSuite"
            className="h-8 w-auto group-hover:opacity-90 transition-opacity"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm text-white/50 transition-colors hover:text-white hover:bg-surface-hover"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm text-white/50 transition-colors hover:text-white hover:bg-surface-hover"
              aria-label={t.nav.language}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">{FLAGS[lang]}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-1 w-40 glass rounded-xl border border-white/[0.08] py-1 shadow-2xl animate-scale-in origin-top-right">
                {(Object.entries(LABELS) as [Language, string][]).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setLanguage(key)
                      setIsLangOpen(false)
                    }}
                    className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-white/70 hover:text-white hover:bg-surface-hover transition-colors"
                  >
                    <span>{FLAGS[key]}</span>
                    <span>{label}</span>
                    {lang === key && (
                      <Check className="h-3.5 w-3.5 text-brand-400 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" href="#docs">
            {t.nav.docs}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
          <Button size="sm">{t.nav.getStarted}</Button>
        </div>

        <button
          className="flex md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-surface-hover transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="border-t border-white/[0.05] bg-[#0A0A0B]/95 backdrop-blur-xl md:hidden animate-slide-down">
          <div className="flex flex-col gap-1 px-4 py-4">
            {t.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm text-white/50 transition-colors hover:text-white hover:bg-surface-hover"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-white/[0.05] grid grid-cols-2 gap-2">
              {(Object.entries(LABELS) as [Language, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setLanguage(key)
                    setIsMobileOpen(false)
                  }}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    lang === key
                      ? 'bg-brand-500/10 text-brand-400'
                      : 'text-white/50 hover:text-white hover:bg-surface-hover'
                  }`}
                >
                  <span>{FLAGS[key]}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/[0.05]">
              <Button className="w-full" size="md">
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
