import type { TranslationDict } from './types'

const es: TranslationDict = {
  nav: {
    items: [
      { label: 'Funcionalidades', href: '#features' },
      { label: 'Módulos', href: '#modules' },
      { label: 'API', href: '#api' },
      { label: 'Comparativa', href: '#compare' },
      { label: 'Docs', href: '#docs' },
    ],
    docs: 'Documentación',
    getStarted: 'Comenzar',
    language: 'Idioma',
  },
  hero: {
    badge: 'Disponible en Atlassian Marketplace',
    title: 'Gestión de Pruebas Enterprise',
    titleHighlight: 'Nativo en Jira Cloud',
    description:
      'Seis paneles contextuales, un dashboard QA centralizado, web triggers CI/CD y 11 gráficos analíticos. Sin sincronización externa, sin latencia, sin concesiones. Construido sobre Atlassian Forge para equipos que entregan con confianza.',
    ctaPrimary: 'Probar en Marketplace',
    ctaSecondary: 'Ver Documentación',
    stats: [
      { value: '6', label: 'Paneles Contextuales' },
      { value: '36+', label: 'Resolvers Backend' },
      { value: '4', label: 'Endpoints REST' },
      { value: '100%', label: 'Nativo Jira Cloud' },
    ],
  },
  features: {
    badge: '¿Por qué TestSuite?',
    title: 'Todo lo que tu equipo QA necesita, dentro de Jira',
    description:
      'Sin bases de datos externas, sin latencia de sincronización, sin plugins de terceros. Una plataforma de testing profundamente integrada construida sobre Atlassian Forge.',
    items: [
      {
        title: 'Paneles Contextuales',
        description:
          'Seis paneles inteligentes que se adaptan automáticamente a cada tipo de issue Jira. Test Cases, Plans, Runs, Iterations, Suites y DataSets — cada uno con herramientas específicas que aparecen exactamente cuando las necesitas.',
        category: 'Core',
      },
      {
        title: 'Dashboard QA Centralizado',
        description:
          'Gestión a nivel de proyecto con 5 pestañas unificadas: KPIs, Suites, Planes con métricas, Runs con heatmaps y editor de DataSets. Todo en un solo lugar, sin cambiar de contexto.',
        category: 'Core',
      },
      {
        title: 'Pruebas Data-Driven',
        description:
          'Editor de hojas de cálculo integrado con soporte para entrada manual e importación CSV. Vincula DataSets a Test Cases y resuelve placeholders en tiempo de ejecución vía web triggers CI/CD.',
        category: 'Testing',
      },
      {
        title: 'Drag & Drop',
        description:
          'Reordena pasos y casos con mouse, teclado o touch. Actualizaciones optimistas que mantienen la UI ágil mientras los cambios persisten al instante. Navegable por teclado para power users.',
        category: 'UX',
      },
      {
        title: 'Analytics Enterprise',
        description:
          '11 visualizaciones con ECharts: gauges, líneas, barras, pie charts, heatmaps y stacked bars. Filtra por rango de fechas, plan de prueba o QA engineer. Exporta dashboards completos a PDF o JSON.',
        category: 'Analytics',
      },
      {
        title: 'Creación de Defectos',
        description:
          'Convierte cualquier paso fallido en un Bug de Jira con un solo clic. Descripciones ADF auto-generadas con contexto del paso, vinculadas al Test Run y al Requisito. Sin crear bugs manualmente nunca más.',
        category: 'Workflow',
      },
      {
        title: 'Endpoints CI/CD',
        description:
          'Cuatro web triggers REST exponen pasos, condiciones y datos de ejecución a tus pipelines. Auth por Bearer token con IP whitelisting y rate limiting. Listo para integración con Playwright y Cypress.',
        category: 'DevOps',
      },
      {
        title: 'Seguridad Enterprise',
        description:
          'Panel de administración con permisos por grupo, gestión de tokens API, IP whitelisting y rate limiting. Control total sobre quién puede editar, ejecutar y acceder a tu infraestructura de testing.',
        category: 'Seguridad',
      },
    ],
  },
  architecture: {
    badge: 'Arquitectura',
    title: 'Un stack diseñado para rendimiento nativo en Jira',
    description:
      'Construido completamente sobre Atlassian Forge. Sin servidores externos, sin infraestructura que administrar, sin datos saliendo de tu instancia Jira.',
    diagram: {
      title: 'Atlassian Forge App',
      issuePanels: 'Paneles de Issue',
      adminPage: 'Admin Page',
      projectPage: 'Project Page',
      functions: 'Forge Functions (10) — Resolvers + Web Triggers',
      jiraApi: 'Jira REST API v3 + Key-Value Store',
    },
    stack: [
      { name: 'React 18', description: '6 paneles contextuales' },
      { name: 'ECharts 6', description: '11 tipos de visualización' },
      { name: 'Forge KVS', description: 'Persistencia instantánea' },
      { name: 'REST API', description: '4 endpoints CI/CD' },
      { name: 'Zustand 5', description: 'Actualizaciones optimistas' },
      { name: 'Jira Nativo', description: 'Cero dependencias externas' },
    ],
  },
  modules: {
    badge: 'Plataforma',
    title: '8 módulos integrados, una experiencia sin fricción',
    description:
      'Cada módulo está diseñado para su tipo de issue Jira. Los paneles aparecen automáticamente en contexto — sin configuración manual, sin cambiar de pestaña, sin fricción.',
    items: [
      {
        title: 'Panel Test Case',
        subtitle: 'Editor de pasos con drag-and-drop',
        features: [
          'Toggle modo Vista/Edición',
          '7 tipos de acción con validación contextual',
          'Reordenar pasos con drag & drop',
          'Importar/exportar JSON',
          'Vinculación con DataSets para data-driven testing',
          'Visor de imágenes adjuntas',
          'Copiar/fusionar pasos de otros casos',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Panel Test Plan',
        subtitle: 'Sidebar de 4 tabs con dashboard de métricas',
        features: [
          'Dashboard con 3 gauges + 2 pie charts',
          'Casos y suites vinculados',
          'Jerarquía expandible de suites',
          'Creación de iteración en un clic',
          'Stacked bar y heatmap',
          'Análisis de tendencias históricas',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Panel Test Run',
        subtitle: 'Vista de ejecución con creación de defectos',
        features: [
          'Tabla de pasos heredada del Test Case',
          'Creación de defectos inline por paso',
          'Descripciones ADF auto-generadas',
          'Vinculación opcional a requisito',
          'Campo de comentario de 500 caracteres',
          'Navegación directa a bugs vinculados',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Panel Iteration',
        subtitle: 'Resumen visual de distribución de estados',
        features: [
          'Donut chart de estados de Test Runs',
          'Paleta de 5 colores pastel',
          'Inner radius 60% para legibilidad',
          'Sincronización en tiempo real con Jira',
          'Render ultrarrápido con Recharts',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Panel Test Suite',
        subtitle: 'Agrupación y jerarquía de casos',
        features: [
          'Búsqueda con autocompletar',
          'Tabla con key, resumen, acciones',
          'Agregar/quitar en un clic',
          'Prevención de duplicados',
          'Soporte para sub-suites expandibles',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Panel DataSet',
        subtitle: 'Editor de datos estructurados para testing',
        features: [
          'Modos manual y CSV',
          'Edición de celdas inline',
          'Agregar/eliminar/renombrar columnas',
          'Toggle "usado" por fila',
          'Exportación CSV con BOM UTF-8',
          'Integración con web triggers',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Admin Page',
        subtitle: 'Configuración global y seguridad',
        features: [
          'Configuración de proyecto y app',
          'Permisos basados en grupos Jira',
          'Generación de tokens API',
          'IP whitelisting',
          'Control de rate limiting',
          'Configuración de tipos de link',
        ],
        learnMore: 'Más información',
      },
      {
        title: 'Project Page',
        subtitle: 'Gestión centralizada QA con 5 tabs',
        features: [
          'Home: 4 tarjetas KPI + acceso rápido',
          'Suites: layout de 3 paneles con dnd-kit',
          'Plans: sub-sidebar con métricas',
          'Runs: filtros + 4 gráficos ECharts',
          'DataSets: editor de hojas de cálculo',
          '36 resolvers impulsando el backend',
        ],
        learnMore: 'Más información',
      },
    ],
    stats: [
      { value: '6', label: 'Paneles' },
      { value: '10', label: 'Funciones' },
      { value: '36+', label: 'Resolvers' },
      { value: '11', label: 'Gráficos' },
      { value: '4', label: 'Endpoints' },
      { value: '1', label: 'Admin Panel' },
    ],
  },
  api: {
    badge: 'API y Web Triggers',
    title: 'Integra testing en tu pipeline CI/CD',
    description:
      'Cuatro endpoints HTTP exponen datos de prueba a tus flujos de automatización. Autenticación Bearer token, IP whitelisting y rate limiting incluidos.',
    endpoints: [
      {
        path: '/get-condi-webtrigger',
        description:
          'Obtén precondiciones, resultado esperado global, navegador, tipo de ejecución y URL CI/CD para cualquier Test Case.',
      },
      {
        path: '/get-steps-web-trigger',
        description:
          'Recupera todos los pasos de prueba con acción, elemento, valor y resultado esperado desde un Test Case.',
      },
      {
        path: '/get-test-run-web-trigger',
        description:
          'Obtén los pasos heredados de cualquier instancia de ejecución de Test Run.',
      },
      {
        path: '/get-test-run-dataset',
        description:
          'Endpoint autenticado con Bearer que resuelve placeholders de DataSet en los pasos del Test Run y marca filas como consumidas.',
      },
    ],
    codeLabel: 'Terminal',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado',
  },
  comparison: {
    badge: 'Comparativa',
    title: 'Mira cómo se compara TestSuite',
    description:
      'Desarrollamos funcionalidades que ningún otro plugin de gestión de pruebas para Jira ofrece. Nativo, rápido y completo.',
    columns: ['Funcionalidad', 'TestSuite', 'Zephyr', 'Xray', 'qTest'],
    rows: [
      { name: 'Paneles contextuales por issue', testsuite: '6', zephyr: '1', xray: '2', qtest: '0' },
      { name: 'Dashboard centralizado de proyecto', testsuite: true, zephyr: false, xray: false, qtest: true },
      { name: 'Data-driven testing (CSV + placeholders)', testsuite: true, zephyr: false, xray: false, qtest: 'limitado' },
      { name: 'Creación de defectos en un clic', testsuite: true, zephyr: false, xray: true, qtest: false },
      { name: 'Drag & drop (pasos + casos)', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: 'Heatmaps en analytics', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: 'Web triggers CI/CD (4 endpoints)', testsuite: true, zephyr: false, xray: true, qtest: false },
      { name: 'IP whitelist + rate limiting', testsuite: true, zephyr: false, xray: false, qtest: true },
      { name: 'Navegación por teclado completa', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: 'Actualizaciones optimistas', testsuite: true, zephyr: false, xray: false, qtest: false },
      { name: '11 tipos de gráficos', testsuite: true, zephyr: 'básico', xray: 'básico', qtest: 'básico' },
      { name: 'Exportación PDF + JSON', testsuite: true, zephyr: 'solo PDF', xray: 'solo PDF', qtest: false },
    ],
  },
  cta: {
    badge: 'Disponible en Atlassian Marketplace',
    title: '¿Listo para transformar tu',
    titleHighlight: 'flujo de QA?',
    description:
      'Instala en menos de 2 minutos. Sin migración, sin herramientas externas, sin latencia de sync. Solo abre Jira y empieza a testear.',
    ctaPrimary: 'Instalar desde Marketplace',
    ctaSecondary: 'Agendar una Demo',
    footnote: 'Gratis para equipos de hasta 10 usuarios. Sin tarjeta de crédito.',
  },
  footer: {
    description:
      'Plataforma enterprise de gestión de pruebas construida nativamente para Jira Cloud sobre Atlassian Forge. Sin sync, sin latencia, sin concesiones.',
    columns: {
      Producto: [
        { label: 'Funcionalidades', href: '#features' },
        { label: 'Módulos', href: '#modules' },
        { label: 'API', href: '#api' },
        { label: 'Documentación', href: '#docs' },
        { label: 'Changelog', href: '#' },
      ],
      Recursos: [
        { label: 'Primeros Pasos', href: '#' },
        { label: 'Referencia API', href: '#' },
        { label: 'Guía CI/CD', href: '#' },
        { label: 'Seguridad', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
      Empresa: [
        { label: 'Nosotros', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contacto', href: '#' },
        { label: 'Partners', href: '#' },
      ],
      Legal: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Licencia', href: '#' },
      ],
    },
    copyright: 'TestSuite. Construido sobre Atlassian Forge.',
    marketplace: 'Atlassian Marketplace',
  },
}

export default es
