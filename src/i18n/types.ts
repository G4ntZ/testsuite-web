export interface TranslationDict {
  nav: {
    items: { label: string; href: string }[]
    docs: string
    getStarted: string
    language: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
  }
  features: {
    badge: string
    title: string
    description: string
    items: {
      title: string
      description: string
      category: string
    }[]
  }
  architecture: {
    badge: string
    title: string
    description: string
    diagram: {
      title: string
      issuePanels: string
      adminPage: string
      projectPage: string
      functions: string
      jiraApi: string
    }
    stack: { name: string; description: string }[]
  }
  modules: {
    badge: string
    title: string
    description: string
    items: {
      title: string
      subtitle: string
      features: string[]
      learnMore: string
    }[]
    stats: { value: string; label: string }[]
  }
  api: {
    badge: string
    title: string
    description: string
    endpoints: {
      path: string
      description: string
    }[]
    codeLabel: string
    copyLabel: string
    copiedLabel: string
  }
  comparison: {
    badge: string
    title: string
    description: string
    columns: string[]
    rows: { name: string; testsuite: string | boolean; zephyr: string | boolean; xray: string | boolean; qtest: string | boolean }[]
  }
  cta: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    footnote: string
  }
  footer: {
    description: string
    columns: Record<string, { label: string; href: string }[]>
    copyright: string
    marketplace: string
  }
}

export type Language = 'es' | 'en'
