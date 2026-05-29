# Test Management Suite — Documentación Completa del Producto

**Versión:** 0.1.54  
**Plataforma:** Atlassian Forge (Jira Cloud)  
**App ID:** `ari:cloud:ecosystem::app/42cc364c-b0de-4cf4-a862-b38c77276c4d`  
**Stack:** React 18, ECharts, Zustand, dnd-kit, lucide-react, Recharts, jsPDF, html2canvas  
**Runtime:** Node.js 22.x, ARM64, 256 MB  

---

## 📋 Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Arquitectura General del Producto](#arquitectura-general-del-producto)
3. [Módulos de Panel de Issue](#módulos-de-panel-de-issue)
   - [Panel: Test Case — Hello World](#panel-test-case--hello-world)
   - [Panel: Test Plan — Test Plan UI](#panel-test-plan--test-plan-ui)
   - [Panel: Test Run — Test Run UI](#panel-test-run--test-run-ui)
   - [Panel: Iteration — Iteration UI](#panel-iteration--iteration-ui)
   - [Panel: Test Suite — Test Suite UI](#panel-test-suite--test-suite-ui)
   - [Panel: DataSet — DataSet UI](#panel-dataset--dataset-ui)
4. [Módulo de Administración — Admin Page](#módulo-de-administración--admin-page)
5. [Módulo de Gestión Centralizada — Project Page](#módulo-de-gestión-centralizada--project-page)
   - [Tab: Home — Dashboard General](#tab-home--dashboard-general)
   - [Tab: Test Suites — Gestión de Suites y Casos](#tab-test-suites--gestión-de-suites-y-casos)
   - [Tab: Test Plans — Planes de Prueba y Métricas](#tab-test-plans--planes-de-prueba-y-métricas)
   - [Tab: Test Runs — Rendimiento QA y Ejecuciones](#tab-test-runs--rendimiento-qa-y-ejecuciones)
   - [Tab: DataSets — Datos Estructurados para Testing](#tab-datasets--datos-estructurados-para-testing)
6. [Web Triggers / API REST](#web-triggers--api-rest)
7. [Infraestructura Backend Completa](#infraestructura-backend-completa)
8. [Diferenciadores Competitivos](#diferenciadores-competitivos)
9. [Especificaciones Técnicas](#especificaciones-técnicas)
10. [Roadmap](#roadmap)

---

## Resumen Ejecutivo

**Test Management Suite** es una solución completa de gestión de calidad (QA) nativa de Jira Cloud, construida sobre la plataforma Atlassian Forge. El producto consta de **8 módulos frontend** + **10 funciones backend** + **4 web triggers API REST**, integrando todas las actividades de testing en el ecosistema Jira sin dependencias externas.

### Propuesta de Valor

| Pilar | Descripción |
|---|---|
| **Paneles contextuales** | 6 paneles de issue que se muestran automáticamente según el tipo de Jira (Test Case, Test Plan, Test Run, Iteration, Test Suite, DataSet) |
| **Gestión centralizada** | Project Page con 5 tabs: Home, Suites, Plans, Runs, DataSets — gestión global del proyecto |
| **Visualización profesional** | ECharts y Recharts: gauges, líneas, barras, pie charts, heatmaps, stacked bars |
| **Productividad** | Drag & drop para reordenar pasos y casos, creación rápida, exportación PDF/CSV/JSON |
| **Trazabilidad completa** | Vínculo bidireccional entre todos los tipos: Suites ↔ Planes ↔ Casos ↔ Runs ↔ Iteraciones ↔ DataSets |
| **API REST** | 4 web triggers para integración CI/CD: obtener steps, condiciones y test runs vía HTTP |
| **100% nativo Jira** | Sin sincronización externa, sin plugins third-party, sin latencia de sync |
| **Enterprise-ready** | Admin page con control de permisos, tokens API, IP whitelist, configuración de flujos |

---

## Arquitectura General del Producto

```
┌──────────────────────────────────────────────────────┐
│                ATLASSIAN FORGE APP                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │ Issue Panels│  │ Admin Page   │  │Project Page │ │
│  │ (6 módulos) │  │ (config)     │  │(gestión)    │ │
│  └──────┬──────┘  └──────┬───────┘  └──────┬──────┘ │
│         │                │                 │         │
│  ┌──────┴────────────────┴─────────────────┴──────┐  │
│  │              Forge Functions (10)              │  │
│  │  Resolvers + Web Triggers + Shared Helpers     │  │
│  └──────────────────────┬────────────────────────┘  │
│                         │                            │
│  ┌──────────────────────┴────────────────────────┐  │
│  │           Jira REST API v3 + KVS              │  │
│  └───────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

### Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React 18, CSS Modules, hooks personalizados |
| Charts | ECharts 6 (project-page, test-plan-ui), Recharts (iteration) |
| Drag & Drop | dnd-kit (project-page), HTML5 Drag API (hello-world) |
| UI Kit | Atlaskit (Button, Toggle, Spinner, Tooltip, Flag, TextField, DropdownMenu, Lozenge, Tabs, GroupMultiSelect) |
| Estado | Zustand 5 (project-page), estado local (resto) |
| Exportación | jsPDF + html2canvas (PDF), File API (CSV/JSON) |
| Iconografía | lucide-react + SVG personalizados |
| Backend | Node.js 22, Forge Functions, Jira REST API v3, KVS |
| Persistencia | KVS (Key-Value Store), localStorage |
| Auth API | Bearer Token validation via admin config |
| Runtime | ARM64, 256 MB memory |

### Mapeo de Issue Types → Módulos

| Jira Issue Type | Panel (jira:issueActivity) | Frontend | Backend Function |
|---|---|---|---|
| **Test Case** | Test Case | `static/hello-world` | `src/index.js` → `resolver` |
| **Test Plan** | Test Plan | `static/test-plan-ui` | `src/resolver-test-plan-ui.js` |
| **Test Run** | Test Run | `static/test-run-ui` | `src/resolver-test-run.js` |
| **Iteration** | Iteration | `static/iteration` | `src/resolver-iteration.js` |
| **Test Suite** | Test Suite | `static/test-suite-ui` | `src/resolver-test-suite.js` |
| **DataSet** | DataSet | `static/dataset-ui` | `src/resolver-dataset.js` |

### Módulos Globales

| Tipo | Nombre | Frontend | Backend Function | Propósito |
|---|---|---|---|---|
| `jira:adminPage` | Configuración | `static/admin-page` | `src/admin.jsx` | Configurar proyecto, seguridad, issue linking |
| `jira:projectPage` | Project Page | `static/project-page` | `src/resolver-managment.js` | Gestión centralizada QA a nivel proyecto |
| `jira:globalPage` | Global Page | `static/project-page` | `src/resolver-managment.js` | Gestión centralizada QA a nivel global |

---

## Módulos de Panel de Issue

### Panel: Test Case — Hello World

**Issue type:** `Test Case`  
**Frontend:** `static/hello-world`  
**Backend:** `src/index.js`

#### Descripción
Panel de edición completo para casos de prueba individuales. Gestiona los pasos, condiciones, precondiciones, y asociaciones del test case.

#### Funcionalidades

| Feature | Detalle |
|---|---|
| **Modo Vista / Edición** | Toggle entre vista tabular de pasos (solo lectura) y editor de pasos tipo tarjeta (editable) |
| **Editor de pasos** | Cada paso tiene: Acción (select: Escribir/Clic/Validar/Esperar/Navegar/Marcar/Scroll), Elemento, Valor, Resultado Esperado |
| **Restricciones por acción** | "Clic" deshabilita Valor, "Esperar" y "Navegar" deshabilitan Elemento |
| **Precondiciones** | Textarea editable para precondiciones del caso |
| **Resultado Esperado Global** | Textarea editable para resultado esperado global |
| **Browser y ejecución** | Select de browser (Edge/Chrome/Firefox) + toggle Manual/Automatizado con campo URL CI/CD |
| **Reordenar pasos** | Drag & drop con HTML5 Drag API |
| **Exportar/Importar JSON** | Descargar o cargar pasos como archivo JSON |
| **Vincular DataSet** | Buscar y asociar un DataSet al Test Case (crea Jira issue link). Mostrar DataSet vinculado con opción de desvincular |
| **Valor desde DataSet** | Los valores de los pasos pueden tomarse de columnas de un DataSet vinculado (dropdown de columnas) |
| **Agregar/Copiar pasos** | Modal para buscar otro Test Case y agregar (merge) o copiar (overwrite) sus pasos |
| **Adjuntar imágenes** | Listar attachments del issue Jira; asociar imagen como "resultado esperado" de un paso. Click para ver en modal ampliado |
| **Control de permisos** | Solo usuarios en grupos configurados pueden editar (check-user-permission) |
| **Crear defecto** | Desde el modal de paso, crear un Bug en Jira con descripción ADF (panel + tabla con datos del paso + comentario) y vincularlo al Test Run |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `getSteps` | Cargar pasos desde KVS (`testSteps:{key}`) |
| `getStepsByKey` | Cargar pasos de otro Test Case (para copiar/merge) |
| `saveSteps` | Guardar pasos en KVS |
| `getConditionsData` | Cargar precondiciones, globalExpected, browser, executionType, ciCdUrl |
| `saveConditionsData` | Guardar datos de condiciones |
| `getDataSet` | Encontrar DataSet vinculado al Test Case via Jira issue links |
| `getDataSetByKey` | Obtener columnas del DataSet por key |
| `searchDataSets` | Buscar DataSets via JQL |
| `createLinkedDataset` | Crear Jira issue link (Test Case ↔ DataSet) |
| `deleteLinkedDataset` | Eliminar Jira issue link |
| `check-user-permission` | Verificar si el usuario está en grupos permitidos |
| `getIssueAttachments` | Listar imágenes adjuntas al issue |
| `getAttachmentContent` | Obtener contenido binario de un attachment (base64 + mime) |

---

### Panel: Test Plan — Test Plan UI

**Issue type:** `Test Plan`  
**Frontend:** `static/test-plan-ui`  
**Backend:** `src/resolver-test-plan-ui.js`

#### Descripción
Panel de gestión de planes de prueba con navegación por sidebar (4 vistas) y dashboard de métricas basado en iteraciones y ejecuciones.

#### Funcionalidades

| Feature | Detalle |
|---|---|
| **Sidebar con 4 tabs** | Dashboard, Test Cases, Test Suites, Iterations |
| **Dashboard** | Métricas de la última iteración: 3 gauges (aprobación, aprob. sin omitidos, rechazo), 2 pie charts (aprobados vs rechazados, distribución por estado), chart de estados por iteración, chart de métricas, stacked bar, heatmap |
| **Test Cases vinculados** | Tabla con key (link), resumen, botón Quitar. Búsqueda + autocompletar para agregar |
| **Test Suites vinculadas** | Tabla expandible con carga on-demand de casos hijos. Búsqueda + autocompletar |
| **Crear iteración** | Botón que: 1) recolecta casos directos + de suites, 2) crea Iteration issue, 3) genera Test Run por cada caso, 4) copia steps + conditions a cada Test Run, 5) aplica transiciones de workflow |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `getLastIterationMetrics` | Métricas (approved/skipped/failed, rates) de la iteración más reciente |
| `getLinkedTestRuns` | Test runs de la última iteración |
| `getLinkedTestCases` / `saveLinkedTestCases` | Gestionar casos vinculados (`linked:{key}`) |
| `getLinkedTestSuite` / `saveLinkedTestSuite` | Gestionar suites vinculadas (`tsuitelinked:{key}`) |
| `searchTestCases` / `searchTestSuite` | Búsqueda JQL |
| `createIteration` | Pipeline completo de creación de iteración |
| `getTestCasesForSuite` | Casos hijos de una suite (`tslinked:{key}`) |
| `getChartDataForTestRuns` | Datos multi-serie para charts ECharts |

---

### Panel: Test Run — Test Run UI

**Issue type:** `Test Run`  
**Frontend:** `static/test-run-ui`  
**Backend:** `src/resolver-test-run.js`

#### Descripción
Vista de solo lectura de los pasos heredados de un Test Case durante la ejecución. Permite crear defectos (Bugs) desde cualquier paso.

#### Funcionalidades

| Feature | Detalle |
|---|---|
| **Tabla de pasos** | Vista de solo lectura con columnas: #, Acción, Elemento, Valor, Resultado Esperado |
| **Información del caso** | Precondiciones, resultado esperado global, browser, tipo ejecución, URL CI/CD (solo lectura) |
| **Modal de paso** | Click en cualquier fila abre modal con: detalle del paso + "Comentario adicional" (500 chars) + botón "Crear defecto" |
| **Crear defecto** | Crea Bug en Jira con descripción ADF (panel + tabla con info del paso + comentario). Vincula el Bug al Test Run ("Detected in") y opcionalmente al Requirement original |
| **Ver defecto** | Si el paso ya tiene un defecto creado, muestra botón "Ver defecto" que navega al Bug |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `getTestRunSteps` | Cargar pasos del Test Run (`testRun:{key}`) |
| `getConditionsData` | Cargar condiciones |
| `createDefectIssue` | Crear Bug + link a Test Run y Requirement |

---

### Panel: Iteration — Iteration UI

**Issue type:** `Iteration`  
**Frontend:** `static/iteration`  
**Backend:** `src/resolver-iteration.js`

#### Descripción
Panel ligero que muestra la distribución de estados de los Test Runs vinculados a una iteración mediante un gráfico donut.

#### Funcionalidades

| Feature | Detalle |
|---|---|
| **Donut chart** | Recharts: distribución de Test Runs por estado Jira (5 colores pastel, inner radius 60%) |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `getLinkedTestRuns` | Test Runs vinculados a la iteración via issue link "Test Run" |

---

### Panel: Test Suite — Test Suite UI

**Issue type:** `Test Suite`  
**Frontend:** `static/test-suite-ui`  
**Backend:** `src/resolver-test-suite.js`

#### Descripción
Panel para vincular y gestionar casos de prueba dentro de una suite.

#### Funcionalidades

| Feature | Detalle |
|---|---|
| **Búsqueda de casos** | Input con sugerencias dropdown. Muestra key + summary. Filtra ya vinculados |
| **Tabla de vinculados** | #, Key (link navegable), Resumen, botón Quitar |
| **Agregar/Quitar** | Click en sugerencia agrega, botón Quitar remueve |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `getLinkedTestCases` / `saveLinkedTestCases` | Gestionar casos vinculados (`tslinked:{key}`) |
| `searchTestCases` | Búsqueda JQL |

---

### Panel: DataSet — DataSet UI

**Issue type:** `DataSet`  
**Frontend:** `static/dataset-ui`  
**Backend:** `src/resolver-dataset.js`

#### Descripción
Editor de tablas de datos con modos manual y CSV. Se integra con Test Cases para data-driven testing.

#### Funcionalidades

| Feature | Detalle |
|---|---|
| **Selección de modo** | Dos botones: "Crear Manualmente" (desde cero) o "Cargar desde CSV" (importar) |
| **Modo Manual** | Definir columnas, agregar/eliminar filas y columnas, editar celdas inline, renombrar headers |
| **Modo CSV** | Subir archivo .csv; headers = primera línea, datos = resto. Celdas solo lectura |
| **Columna "used"** | Toggle (Atlassian) por fila para marcar como usado. Utilizado por el web trigger de data-driven testing |
| **Persistencia** | Guardar en KVS con estructura: `{ columns, rows, mode, createdAt }` |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `getDataset` | Cargar dataset desde KVS (`dataset-{key}`) |
| `saveDataset` | Guardar dataset en KVS |

---

## Módulo de Administración — Admin Page

**Tipo:** `jira:adminPage` (Global Admin)  
**Frontend:** `static/admin-page`  
**Backend:** `src/admin.jsx`

### Descripción
Página de configuración global accesible desde la administración de Jira. Permite parametrizar todos los aspectos del producto.

### Funcionalidades

#### Tab General

| Campo | Descripción |
|---|---|
| App Name | Nombre de la aplicación |
| Project Key | Key del proyecto Jira donde se crearán los issues de testing |
| Plugin Enabled | Toggle para activar/desactivar el plugin |
| Debug Mode | Toggle para modo debug |

#### Tab Seguridad

| Campo | Descripción |
|---|---|
| API Key Enabled | Habilitar autenticación por API Key |
| Grupos Permitidos | Multi-select de grupos Jira (búsqueda asíncrona). Solo miembros de estos grupos pueden editar |
| IP Whitelist | Lista de IPs permitidas (textarea, una por línea) |
| Rate Limiting | Toggle para limitar tasa de requests |
| API Tokens | Crear/eliminar tokens de API. Mostrar token generado con botón de copiar |

#### Tab Issue Linking

| Campo | Descripción |
|---|---|
| Dataset Link Name | Nombre del tipo de link Jira para DataSet ↔ Test Case |
| Test Run - Test Case Link | Nombre del tipo de link para Test Run ↔ Test Case |
| Manual Test Transition ID | ID numérico de la transición Jira para Test Runs manuales |
| Automated Test Transition ID | ID numérico de la transición Jira para Test Runs automatizados |

#### Backend — Resolvers

| Resolver | Propósito |
|---|---|
| `get-settings` | Cargar configuración desde KVS (`config`) |
| `save-settings` | Guardar configuración en KVS |
| `get-groups` | Buscar grupos Jira via `/rest/api/3/groups/picker` |

---

## Módulo de Gestión Centralizada — Project Page

**Tipo:** `jira:projectPage` + `jira:globalPage`  
**Frontend:** `static/project-page`  
**Backend:** `src/resolver-managment.js` (36 resolvers)

### Descripción
Módulo central de gestión QA con 5 tabs. Permite buscar, crear, gestionar y visualizar todos los recursos de testing desde una interfaz unificada, sin depender de un issue específico.

### Modo de Ejecución

A diferencia de los paneles de issue, **Project Page** se ejecuta a nivel de proyecto Jira (no atado a un issue). Esto permite gestionar cualquier recurso de testing del proyecto sin restricciones de contexto.

---

#### Tab: Home — Dashboard General

Vista de aterrizaje con KPIs globales del proyecto QA.

| Feature | Detalle |
|---|---|
| **KPIs Globales** | 4 tarjetas: Total Suites, Total Plans, Runs (hoy), Total DataSets. Colores distintivos por módulo |
| **Cálculo en tiempo real** | Backend ejecuta 4 consultas JQL en paralelo con `maxResults: 0` para solo conteos |
| **Acceso rápido** | 4 botones de navegación directa a cada tab con íconos SVG QA, título y descripción |
| **Actividad reciente** | Última suite, plan y dataset consultados (persistidos en localStorage) |

---

#### Tab: Test Suites — Gestión de Suites y Casos

Layout de 3 paneles resizeables.

##### Panel Izquierdo — Lista de Casos

| Feature | Detalle |
|---|---|
| **Secciones agrupadas** | Casos en secciones expandibles/colapsables con animación CSS |
| **Indicadores de estado** | Dot verde (automatizado) / azul (manual) con tooltips enriquecidos y leyenda |
| **Badge de pasos** | Chip gris con conteo por caso |
| **Ordenamiento** | Sort por ID (numérico) y Título (texto), asc/desc |
| **Filtros inline** | Búsqueda por texto, filtro por tipo ejecución, filtro "con/sin pasos" |
| **Selección múltiple** | Checkboxes estilizados CSS, select-all por sección |
| **Desvincular** | Modal de confirmación con conteo |
| **Exportar suite** | JSON con todos los datos de cada caso (steps, preconditions, etc.) |
| **Navegación por teclado** | ↑↓ Enter para navegar y seleccionar filas |
| **Drag & Drop** | dnd-kit: reordenar casos con mouse/teclado/touch. Optimistic update + persistencia |
| **Vista compacta** | Toggle con íconos lucide para maximizar densidad |
| **Crear caso** | Modal con editor de pasos + precondiciones + globalExpected |
| **Vincular existentes** | Modal de búsqueda con debounce 300ms |
| **Skeleton loading** | Animación shimmer en carga |
| **Barra de resumen** | "12 casos · 8 manuales · 4 automatizados · 45 pasos totales" |

##### Panel Central — Detalle de Caso

| Feature | Detalle |
|---|---|
| **Información completa** | Key, título, tipo ejecución, browser, URL CI/CD |
| **Tabla de pasos** | #, Acción, Elemento, Valor, Resultado Esperado |
| **Botones Jira / Editar** | Navegación al issue y al panel de edición |
| **Header sticky** | Título permanente al hacer scroll |
| **Empty state contextual** | Con suite: badge + guía. Sin suite: bienvenida + instrucciones |
| **Auto-selección** | Al seleccionar suite, auto-selecciona el primer caso |

##### Panel Derecho — Árbol de Suites

| Feature | Detalle |
|---|---|
| **Búsqueda JQL** | Server-side con paginación |
| **Jerarquía de sub-suites** | Expand/colapsar con carga on-demand de hijos |
| **Crear suite** | Modal con título + descripción, toast de éxito/error |
| **Paginación** | "Cargar más" con nextPageToken |

---

#### Tab: Test Plans — Planes de Prueba y Métricas

Layout de 2 paneles resizeables. Sub-navegación vertical en el detalle del plan.

##### Panel Izquierdo — Lista de Planes

| Feature | Detalle |
|---|---|
| **Búsqueda JQL** | Server-side con paginación |
| **Selección** | Dot azul + key + summary |

##### Panel Derecho — SubSidebar + Contenido

| Sub-tab | Detalle |
|---|---|
| **Dashboard** | 3 gauges semafóricos, 2 pie charts, chart de estados por iteración, chart de métricas históricas, stacked bar, heatmap. Selectores de tipo de chart (línea/barras) |
| **Test Cases** | Tabla de vinculados + búsqueda con autocompletar. Agregar/quitar con persistencia |
| **Test Suites** | Tabla expandible con carga on-demand de casos hijos. Agregar/quitar con persistencia |

---

#### Tab: Test Runs — Rendimiento QA y Ejecuciones

Layout de 2 paneles resizeables.

##### Panel Izquierdo — Filtros

| Feature | Detalle |
|---|---|
| **Filtro por fecha** | Inputs date con íconos Calendar (lucide) |
| **Filtro por Plan** | SearchInput con autocompletar + badge de selección |
| **Filtro por QA** | Búsqueda de usuarios Jira por nombre (`/rest/api/3/user/search`) con sugerencias de displayName + email |
| **Botón Aplicar** | Ejecuta filtros vía `getTestRunMetrics` |
| **Resumen KPIs** | Total, Pass rate (verde), Fail rate (rojo), Avg/día, QAs únicos |

##### Panel Derecho — Dashboard

| Feature | Detalle |
|---|---|
| **4 KPI Cards** | Total Runs, Pass Rate, Avg/Día, QAs |
| **4 Charts ECharts** | Línea (ejecuciones por día), Pie (distribución por estado), Bar (pass rate por QA), Heatmap (actividad QA × día) |
| **Tabla de resultados** | Lista completa con badges de estado (verde/rojo/gris) |
| **Exportar PDF** | Captura charts vía html2canvas + tabla renderizada con jsPDF |
| **Exportar JSON** | Descarga completa de datos |

---

#### Tab: DataSets — Datos Estructurados para Testing

Layout de 2 paneles resizeables.

##### Panel Izquierdo — Lista de DataSets

| Feature | Detalle |
|---|---|
| **Búsqueda JQL** | Server-side con paginación |
| **+ Crear** | Modal con título → crea issue Jira + lo selecciona automáticamente |

##### Panel Derecho — Editor de Tabla

| Feature | Detalle |
|---|---|
| **Editor de columnas/celdas** | Click en header → rename inline. Celdas editables con focus azul |
| **Agregar/Eliminar** | + Columna, + Fila, × Eliminar fila |
| **Editar título** | Click en título del header → PUT a Jira API |
| **Importar CSV** | FileReader con validación (≥2 líneas, headers no vacíos, columnas consistentes) |
| **Exportar CSV** | BOM UTF-8, valores escapados |
| **Modo CSV (solo lectura)** | Badge púrpura, edición deshabilitada |
| **Persistencia** | Botón Guardar → KVS con estructura completa |

---

## Web Triggers / API REST

La suite expone 4 endpoints HTTP para integración con pipelines CI/CD y herramientas externas.

### `GET /get-condi-webtrigger`

Obtiene datos de condiciones de un Test Case.

| Parámetro | Tipo | Descripción |
|---|---|---|
| `issueKey` | body JSON | Key del issue |

**Respuesta:** `{ preconditions, globalExpected, browser, executionType, ciCdUrl }`

---

### `GET /get-steps-web-trigger`

Obtiene los pasos de un Test Case.

| Parámetro | Tipo | Descripción |
|---|---|---|
| `issueKey` | body JSON | Key del issue |

**Respuesta:** Array de steps `[{ action, element, value, expected }]`

---

### `GET /get-test-run-web-trigger`

Obtiene los pasos de un Test Run.

| Parámetro | Tipo | Descripción |
|---|---|---|
| `issueKey` | body JSON | Key del Test Run |

**Respuesta:** Array de steps del Test Run

---

### `GET /get-test-run-dataset`

**Autenticado (Bearer Token).** Obtiene pasos de Test Run con resolución de valores desde DataSet.

| Parámetro | Tipo | Descripción |
|---|---|---|
| `issueKey` | body JSON | Key del Test Run |
| `Authorization` | header | `Bearer {apiToken}` |

**Comportamiento:**
1. Valida el Bearer token contra los tokens configurados en Admin Page
2. Carga los pasos del Test Run desde KVS
3. Resuelve placeholders `{{dataset.colName}}` en los valores de los pasos con datos reales del DataSet vinculado
4. Marca las filas del DataSet como "usadas" (toggle)
5. Retorna los pasos con valores reales

---

## Infraestructura Backend Completa

### Resumen de Archivos Backend

| Archivo | Función | Resolvers |
|---|---|---|
| `src/index.js` | Test Case panel | 16 resolvers (steps, conditions, dataset linking, attachments, permissions) |
| `src/resolver-test-plan-ui.js` | Test Plan panel | 11 resolvers (metrics, charts, linking, iterations) |
| `src/resolver-test-run.js` | Test Run panel | 3 resolvers (steps, conditions, defect creation) |
| `src/resolver-iteration.js` | Iteration panel | 1 resolver (test runs) |
| `src/resolver-test-suite.js` | Test Suite panel | 3 resolvers (linked cases) |
| `src/resolver-dataset.js` | DataSet panel | 2 resolvers (get/save dataset) |
| `src/admin.js` | Admin page | 3 resolvers (settings, groups) |
| `src/resolver-managment.js` | Project/Global page | 36 resolvers (gestión centralizada completa) |

### Resolvers del Project Page (36)

#### Suites & Cases
| Resolver | KVS / Jira | Propósito |
|---|---|---|
| `searchTestSuites` | Jira search | Buscar suites con paginación |
| `createTestSuite` | Jira create | Crear issue Test Suite |
| `createTestCase` | Jira create + KVS | Crear TC + vincular a suite + init steps |
| `createTestCaseWithData` | Jira create + KVS | Crear TC con steps + preconditions + globalExpected |
| `createSubSuite` | KVS | Crear sub-suite con relación jerárquica |
| `getLinkedTestCases` | KVS `tslinked:{key}` | Leer + enriquecer con executionType, stepsCount, browser |
| `getSuiteChildren` | KVS `suiteChildren:{key}` | Leer hijos de suite |
| `saveLinkedTestCases` | KVS `tslinked:{key}` | Guardar vinculaciones |
| `unlinkTestCasesFromSuite` | KVS `tslinked:{key}` | Eliminar vinculaciones (maneja formato string/objeto) |
| `reorderCases` | KVS `tslinked:{key}` | Reordenar array preservando objetos |
| `exportSuiteData` | KVS | Exportar datos completos por caso en paralelo |
| `getSteps` | KVS `testSteps:{key}` | Leer pasos |
| `getConditionsData` | KVS `conditions-data:{key}` | Leer condiciones |
| `searchTestCases` | Jira search | Buscar Test Cases |

#### Plans & Iterations
| Resolver | KVS / Jira | Propósito |
|---|---|---|
| `searchTestPlans` | Jira search | Buscar planes con paginación |
| `getPlanLinkedTestCases` | KVS `linked:{key}` | Leer casos vinculados al plan |
| `savePlanLinkedTestCases` | KVS | Guardar casos vinculados |
| `getPlanLinkedTestSuite` | KVS `tsuitelinked:{key}` | Leer suite vinculada |
| `savePlanLinkedTestSuite` | KVS | Guardar suite vinculada |
| `searchPlanTestSuite` | Jira search | Buscar suites (por título O key) |
| `getPlanLinkedTestRuns` | Jira links | Test runs de última iteración |
| `getLastIterationMetrics` | Jira links | Métricas de aprobación/rechazo |
| `getChartDataForTestRuns` | Jira links | Datos multi-serie para ECharts |
| `getTestCasesForSuite` | KVS `tslinked:{key}` | Casos hijos de suite |
| `createPlanIteration` | Jira + KVS | Crear iteración + Test Runs + copiar steps/conditions |

#### Runs & Users
| Resolver | Jira | Propósito |
|---|---|---|
| `getTestRunMetrics` | Jira search | Dashboard analytics con filtros |
| `searchJiraUsers` | Jira REST | Buscar usuarios por nombre |

#### DataSets
| Resolver | KVS / Jira | Propósito |
|---|---|---|
| `searchDataSets` | Jira search | Buscar DataSets |
| `createDataSet` | Jira create | Crear issue DataSet |
| `getDataset` | KVS `dataset-{key}` | Leer dataset |
| `saveDataset` | KVS | Guardar dataset |
| `updateDataSetTitle` | Jira PUT | Actualizar título vía API |

#### Home & Overview
| Resolver | Jira | Propósito |
|---|---|---|
| `getOverviewMetrics` | Jira search (x4) | Conteos paralelos: suites, plans, datasets, runs hoy |

### Shared Helpers & Utilities

| Archivo | Propósito |
|---|---|
| `src/kvs/simple.js` | Wrappers `saveConfig(key, config)` y `getConfig(key)` para KVS |
| `src/kvs/auth.js` | `validateBearerToken(request)` — valida Bearer token contra admin config |
| `src/utils/api.js` | `getissuelinkDataSet()`, `getTCforTR()`, `checkUserPermission()` |

### KVS Keys Globales

| Key Pattern | Estructura | Módulos que la usan |
|---|---|---|
| `testSteps:{key}` | `[{ action, element, value, expected }]` | Hello World, Project Page, Test Run |
| `conditions-data:{key}` | `{ preconditions, globalExpected, browser, executionType, ciCdUrl }` | Hello World, Project Page, Test Run |
| `tslinked:{suiteKey}` | `[{ key, summary }]` | Test Suite UI, Project Page |
| `linked:{planKey}` | `[{ key, summary }]` | Test Plan UI, Project Page |
| `tsuitelinked:{planKey}` | `[{ key, summary }]` | Test Plan UI, Project Page |
| `dataset-{key}` | `{ columns, rows, createdAt, mode }` | DataSet UI, Project Page |
| `suiteChildren:{parentKey}` | `['CHILD-1', ...]` | Project Page |
| `testRun:{key}` | `[{ action, element, value, expected }]` | Test Run UI |
| `counter:{planKey}` | `number` | Test Plan UI, Project Page |
| `config` | `{ general, security, issueLinking }` | Admin Page, todos |

---

## Diferenciadores Competitivos

| Diferenciador | Descripción | Competidores |
|---|---|---|
| **6 paneles contextuales** | Cada tipo de issue Jira tiene su panel automático con funcionalidad específica | Solo Zephyr y Xray (más caros) |
| **Gestión centralizada** | Project Page con 5 tabs unificados para gestión global | Ninguno tiene vista centralizada equivalente |
| **Data-driven testing** | Editor de tablas + CSV + resolución de placeholders en web trigger | Exclusivo |
| **Creación de defectos** | Desde cualquier paso de Test Run, crear Bug con ADF descriptivo + link automático | Solo Xray (workflow diferente) |
| **Drag & drop** | Reordenar pasos y casos con mouse/teclado/touch. Optimistic update | Ninguno ofrece ambos |
| **Dashboard analytics QA** | Filtros por fecha, plan, QA con 4 charts + exportación PDF/JSON | Solo Xray con costo extra |
| **11 charts ECharts** | Gauges, líneas, barras, pie, heatmap, stacked bar — en toda la suite | La mayoría usa charts básicos |
| **API REST** | 4 web triggers para CI/CD con auth Bearer token | Solo Xray tiene API comparable |
| **Admin page completa** | Configuración de permisos, API tokens, IP whitelist, rate limiting | Solo qTest Enterprise |
| **Iconografía SVG QA propia** | 5 íconos de dominio diseñados a medida | Todos usan íconos genéricos |
| **100% nativo Jira Cloud** | Sin sync externa, sin plugins third-party | Solo Zephyr/Xray |
| **Persistencia de preferencias** | Tab, vista, anchos — localStorage | Ninguno |

---

## Especificaciones Técnicas

### Performance

| Métrica | Valor |
|---|---|
| Bundle total | ~2.3 MB gzip (8 módulos frontend combinados) |
| Bundle principal (project-page) | ~655 KB JS + ~6 KB CSS gzip |
| Code splitting | ECharts, jsPDF, html2canvas en chunks separados |
| Dependencias clave | React 18, ECharts 6, Zustand 5, dnd-kit, lucide-react, Recharts, jsPDF, html2canvas, Atlaskit |
| Runtime | Node.js 22.x, ARM64, 256 MB memory |
| Caché frontend | Zustand con TTL 5 min, invalidación granular |
| Optimistic updates | Drag & drop y vinculaciones con actualización local instantánea |
| Debounce | 300ms en búsquedas server-side |

### Accesibilidad

| Feature | Estado |
|---|---|
| Escape key | Todos los modales (project-page) |
| ARIA attributes | role, aria-modal, aria-labelledby, aria-expanded, aria-selected, role="treeitem", role="row" |
| Keyboard navigation | ↑↓ Enter en listas, Space/↑↓/Enter en drag & drop |
| Focus visible | `:focus-visible` con outline azul en todos los elementos interactivos |
| Labels | aria-label en inputs, htmlFor/id en formularios |

### Persistencia

| Mecanismo | Uso |
|---|---|
| `localStorage` | Preferencias de usuario: tab activo, vista compacta, última suite/plan/dataset |
| KVS | Todos los datos de negocio: steps, conditions, vinculaciones, datasets, config |
| Jira Issues | Entidades principales: Test Case, Test Plan, Test Run, Iteration, Test Suite, DataSet, Bug |
| Jira Issue Links | Relaciones: Plan→Iteration, Iteration→TestRun, TestCase↔DataSet, TestRun→Bug |

### Permisos Jira

| Scope | Uso |
|---|---|
| `storage:app` | Acceso a KVS |
| `read:issue:jira-software` | Lectura de issues |
| `read:jira-work` | Lectura de workflows, transiciones |
| `write:jira-work` | Creación/modificación de issues |
| `read:jira-user` | Búsqueda de usuarios y grupos |

---

## Roadmap

### Fase 1 — Corto plazo
- Vista Kanban/Board de casos de prueba en Project Page
- Dashboard de suite enriquecido en panel central
- Menú contextual (click derecho) en filas de caso
- Auto-guardado periódico en editor DataSet

### Fase 2 — Mediano plazo
- Test Run history en detalle de caso
- Comparación entre Planes (gráfico superpuesto)
- Vista ejecutiva multi-módulo en Home
- Data-driven testing avanzado (simulación, fixtures Playwright/Cypress)

### Fase 3 — Largo plazo
- Activity feed / audit trail global
- Modo oscuro (variables CSS + toggle)
- Integración CI/CD pipeline status
- Búsqueda global unificada
- Notificaciones en tiempo real

### Fase 4 — Exploratorio
- AI-assisted test case generation
- Test case versioning con diff visual
- Gamificación QA (badges, leaderboard)
- Dashboard cross-project para managers

---

*Documento generado para propósitos de cotización, documentación de producto y contenido web.*  
*Última actualización: Mayo 2026*
