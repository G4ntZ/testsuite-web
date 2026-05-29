import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { TranslationDict, Language } from './types'
import { getTranslation } from './index'

const STORAGE_KEY = 'testsuite-lang'

interface LanguageContextValue {
  lang: Language
  t: TranslationDict
  setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored === 'es' || stored === 'en') return stored

  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === 'es') return 'es'
  if (browserLang === 'en') return 'en'

  return 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(detectLanguage)

  const t = useMemo(() => getTranslation(lang), [lang])

  const setLanguage = useCallback((newLang: Language) => {
    setLang(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
    document.documentElement.lang = newLang
  }, [])

  useEffect(() => {
    if (lang === 'es' || lang === 'en') return
    setLanguage('es')
  }, [lang, setLanguage])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, t, setLanguage }),
    [lang, t, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
