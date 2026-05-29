import type { TranslationDict, Language } from './types'
import es from './es'
import en from './en'

export { es, en }
export type { TranslationDict, Language }

const translations: Record<Language, TranslationDict> = { es, en }

export function getTranslation(lang: Language): TranslationDict {
  return translations[lang]
}
