import type { TranslationDict } from './types'

const en: TranslationDict = {
  nav: {
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Modules', href: '#modules' },
      { label: 'API', href: '#api' },
      { label: 'Compare', href: '#compare' },
      { label: 'Docs', href: '#docs' },
    ],
    docs: 'Documentation',
    getStarted: 'Get Started',
    language: 'Language',
  },
  hero: {
    badge: 'Now available on Atlassian Marketplace',
    title: 'Enterprise Test Management',
    titleHighlight: 'Natively in Jira Cloud',
    description:
      'Six context-aware panels, a centralized QA dashboard, CI/CD web triggers, and 11 analytics charts. Zero external sync, zero latency, zero compromises. Built on Atlassian Forge for teams that ship with confidence.',
    ctaPrimary: 'Try it on Marketplace',
    ctaSecondary: 'View Documentation',
    stats: [
      { value: '6', label: 'Context-Aware Panels' },
      { value: '36+', label: 'Backend Resolvers' },
      { value: '4', label: 'REST Endpoints' },
      { value: '100%', label: 'Native Jira Cloud' },
    ],
  },
  features: {
    badge: 'Why TestSuite',
    title: 'Everything your QA team needs, inside Jira',
    description:
      'No external databases, no sync latency, no third-party plugins. Just a deeply integrated testing platform built on Atlassian Forge.',
    items: [
      {
        title: 'Context-Aware Panels',
        description:
          'Six intelligent panels that adapt automatically to each Jira issue type. Test Cases, Plans, Runs, Iterations, Suites, and DataSets — each with purpose-built tooling that appears exactly when you need it.',
        category: 'Core',
      },
      {
        title: 'Centralized QA Dashboard',
        description:
          'Project-level management with 5 unified tabs: Home KPIs, Test Suites, Plans with metrics, Runs analytics with heatmaps, and DataSet editors. Everything in one place, no context switching.',
        category: 'Core',
      },
      {
        title: 'Data-Driven Testing',
        description:
          'Built-in spreadsheet editor supports manual entry and CSV import. Link DataSets to Test Cases and resolve placeholders at runtime via our CI/CD web triggers. Parametrize your tests like never before.',
        category: 'Testing',
      },
      {
        title: 'Drag & Drop Reordering',
        description:
          'Reorder test steps and cases with mouse, keyboard, or touch. Optimistic updates keep the UI snappy while changes persist instantly. Keyboard-navigable for power users.',
        category: 'UX',
      },
      {
        title: 'Enterprise Analytics',
        description:
          '11 ECharts-powered visualizations: gauges, line charts, bar charts, pie charts, heatmaps, and stacked bars. Filter by date range, test plan, or QA engineer. Export full dashboards to PDF or JSON.',
        category: 'Analytics',
      },
      {
        title: 'One-Click Defect Creation',
        description:
          'Turn any failing test step into a Jira Bug with a single click. Auto-generated ADF descriptions with step context, linked back to the Test Run and Requirement. No manual bug filing ever again.',
        category: 'Workflow',
      },
      {
        title: 'CI/CD API Endpoints',
        description:
          'Four REST web triggers expose test steps, conditions, and run data to your pipelines. Bearer token auth with IP whitelisting and rate limiting. Ready for Playwright and Cypress integration.',
        category: 'DevOps',
      },
      {
        title: 'Enterprise Security',
        description:
          'Admin panel with group-based permissions, API token management, IP whitelisting, and rate limiting. Full control over who can edit, execute, and access your testing infrastructure.',
        category: 'Security',
      },
    ],
  },
  architecture: {
    badge: 'Architecture',
    title: 'A stack designed for Jira-native performance',
    description:
      'Built entirely on Atlassian Forge. No external servers, no infrastructure to manage, no data leaving your Jira instance.',
    diagram: {
      title: 'Atlassian Forge App',
      issuePanels: 'Issue Panels',
      adminPage: 'Admin Page',
      projectPage: 'Project Page',
      functions: 'Forge Functions (10) — Resolvers + Web Triggers',
      jiraApi: 'Jira REST API v3 + Key-Value Store',
    },
    stack: [
      { name: 'React 18', description: '6 context-aware panels' },
      { name: 'ECharts 6', description: '11 visualization types' },
      { name: 'Forge KVS', description: 'Instant persistence' },
      { name: 'REST API', description: '4 CI/CD endpoints' },
      { name: 'Zustand 5', description: 'Optimistic updates' },
      { name: 'Jira Native', description: 'Zero external deps' },
    ],
  },
  modules: {
    badge: 'Platform',
    title: '8 integrated modules, one seamless experience',
    description:
      'Every module is purpose-built for its Jira issue type. Panels appear automatically in context — no manual setup, no tab switching, no friction.',
    items: [
      {
        title: 'Test Case Panel',
        subtitle: 'Rich step editor with drag-and-drop',
        features: [
          'View/Edit mode toggle',
          '7 action types with contextual validation',
          'Drag & drop step reordering',
          'JSON import/export',
          'DataSet linking for data-driven tests',
          'Image attachment viewer',
          'Copy/merge steps from other cases',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'Test Plan Panel',
        subtitle: '4-tab sidebar with full metrics dashboard',
        features: [
          'Dashboard with 3 gauges + 2 pie charts',
          'Linked test cases and suites',
          'Expandable suite hierarchy',
          'One-click iteration creation',
          'Stacked bar and heatmap charts',
          'Historical trend analysis',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'Test Run Panel',
        subtitle: 'Read-only execution view with defect creation',
        features: [
          'Inherited step table from Test Case',
          'Inline defect creation per step',
          'Auto-generated ADF bug descriptions',
          'Optional requirement linking',
          '500-char comment field per defect',
          'Direct navigation to linked bugs',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'Iteration Panel',
        subtitle: 'Lightweight status distribution overview',
        features: [
          'Donut chart of Test Run statuses',
          '5-color pastel palette',
          'Inner radius 60% for readability',
          'Real-time Jira status sync',
          'Lightning-fast render with Recharts',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'Test Suite Panel',
        subtitle: 'Case grouping and hierarchy management',
        features: [
          'Autocomplete search for cases',
          'Table with key, summary, actions',
          'One-click add/remove',
          'Duplicate prevention',
          'Expandable sub-suite support',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'DataSet Panel',
        subtitle: 'Structured data editor for testing',
        features: [
          'Manual and CSV modes',
          'Inline cell editing',
          'Column add/remove/rename',
          'Per-row "used" toggle',
          'CSV export with UTF-8 BOM',
          'Web trigger integration',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'Admin Page',
        subtitle: 'Global configuration and security',
        features: [
          'Project and app settings',
          'Group-based permissions',
          'API token generation',
          'IP whitelisting',
          'Rate limiting controls',
          'Issue link type configuration',
        ],
        learnMore: 'Learn more',
      },
      {
        title: 'Project Page',
        subtitle: 'Centralized QA management with 5 tabs',
        features: [
          'Home: 4 KPI cards + quick nav',
          'Suites: 3-panel layout with dnd-kit',
          'Plans: sub-sidebar with metrics',
          'Runs: filters + 4 ECharts',
          'DataSets: full spreadsheet editor',
          '36 resolvers powering the backend',
        ],
        learnMore: 'Learn more',
      },
    ],
    stats: [
      { value: '6', label: 'Issue Panels' },
      { value: '10', label: 'Functions' },
      { value: '36+', label: 'Resolvers' },
      { value: '11', label: 'Charts' },
      { value: '4', label: 'Endpoints' },
      { value: '1', label: 'Admin Panel' },
    ],
  },
  api: {
    badge: 'API & Web Triggers',
    title: 'Integrate testing into your CI/CD pipeline',
    description:
      'Four HTTP endpoints expose test data to your automation workflows. Bearer token auth, IP whitelisting, and rate limiting included.',
    endpoints: [
      {
        path: '/get-condi-webtrigger',
        description:
          'Retrieve preconditions, global expected result, browser, execution type, and CI/CD URL for any Test Case.',
      },
      {
        path: '/get-steps-web-trigger',
        description:
          'Fetch all test steps with action, element, value, and expected result data from a Test Case.',
      },
      {
        path: '/get-test-run-web-trigger',
        description:
          'Retrieve the inherited test steps for any Test Run execution instance.',
      },
      {
        path: '/get-test-run-dataset',
        description:
          'Bearer-authenticated endpoint that resolves DataSet placeholders in Test Run steps and marks rows as consumed.',
      },
    ],
    codeLabel: 'Terminal',
    copyLabel: 'Copy',
    copiedLabel: 'Copied',
  },
  comparison: {
    badge: 'Comparison',
    title: 'See how TestSuite compares',
    description:
      'We built features that no other test management plugin for Jira offers. Native, fast, and complete.',
    columns: ['Feature', 'TestSuite', 'Zephyr', 'Xray', 'qTest'],
    rows: [
      { name: 'Context-aware issue panels', testsuite: '6', zephyr: '1', xray: '2', qtest: '0' },
      { name: 'Centralized project dashboard', testsuite: true, zephyr: false, xray: false, qtest: true },
      { name: 'Data-driven testing (CSV + placeholders)', testsuite: true, zephyr: false, xray: false, qtest: 'limited' },
      { name: 'One-click defect creation from steps', testsuite: true, zephyr: false, xray: true, qtest: false },
      { name: 'Drag & drop (steps + cases)', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: 'Heatmaps in analytics', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: 'CI/CD web triggers (4 endpoints)', testsuite: true, zephyr: false, xray: true, qtest: false },
      { name: 'IP whitelist + rate limiting', testsuite: true, zephyr: false, xray: false, qtest: true },
      { name: 'Keyboard navigation throughout', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: 'Optimistic updates', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: '11 chart types', testsuite: true, zephyr: 'basic', xray: 'basic', qtest: 'basic' },
      { name: 'PDF + JSON export', testsuite: true, zephyr: 'PDF only', xray: 'PDF only', qtest: false },
    ],
  },
  cta: {
    badge: 'Available on Atlassian Marketplace',
    title: 'Ready to transform your',
    titleHighlight: 'QA workflow?',
    description:
      'Install in under 2 minutes. No migration, no external tools, no sync latency. Just open Jira and start testing.',
    ctaPrimary: 'Install from Marketplace',
    ctaSecondary: 'Schedule a Demo',
    footnote: 'Free for teams up to 10 users. No credit card required.',
  },
  footer: {
    description:
      'Enterprise test management platform built natively for Jira Cloud on Atlassian Forge. No sync, no latency, no compromises.',
    columns: {
      Product: [
        { label: 'Features', href: '#features' },
        { label: 'Modules', href: '#modules' },
        { label: 'API', href: '#api' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Changelog', href: '#' },
      ],
      Resources: [
        { label: 'Getting Started', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'CI/CD Guide', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
      Company: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Partners', href: '#' },
      ],
      Legal: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'License', href: '#' },
      ],
    },
    copyright: 'TestSuite. Built on Atlassian Forge.',
    marketplace: 'Atlassian Marketplace',
  },
}

export default en
