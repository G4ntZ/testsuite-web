import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import type { TranslationDict, Language } from './types'

export function useT(): {
  t: TranslationDict
  lang: Language
  setLanguage: (lang: Language) => void
} {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useT must be used within a LanguageProvider')
  }
  return ctx
}
