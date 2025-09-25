# FusionDoc

FusionDoc es un sitio de documentación estática moderno y responsivo construido con React, TypeScript y Vite. Diseñado para ser rápido, accesible y fácil de personalizar, con integración avanzada de IA y componentes interactivos.

## Características Principales

### 🚀 **Rendimiento y Tecnología**
- **Vite + React 18**: Tiempos de carga ultrarrápidos y hot reload instantáneo
- **TypeScript**: Desarrollo type-safe con mejor experiencia de desarrollo
- **Tailwind CSS**: Diseño moderno y responsivo con utilidades CSS
- **PWA Ready**: Aplicación web progresiva con soporte offline y service workers

### 🎨 **Interfaz y Experiencia de Usuario**
- **Modo Oscuro/Claro**: Soporte completo para temas con transiciones suaves
- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- **Temas Personalizables**: Múltiples esquemas de color y fuentes
- **Navegación Inteligente**: Sidebar colapsible, breadcrumbs y navegación contextual

### 🔍 **Búsqueda y Contenido**
- **Búsqueda Avanzada**: Indexación completa con Lunr.js y resultados en tiempo real
- **Markdown Enriquecido**: Soporte para GFM, matemáticas (KaTeX), diagramas (Mermaid)
- **Syntax Highlighting**: Prism.js con múltiples temas y lenguajes personalizados
- **Versionado**: Soporte para múltiples versiones de documentación

### 🤖 **Integración con IA (Google Gemini)**
- **Chat Inteligente**: Conversaciones contextuales sobre el contenido
- **Generación de Cuestionarios**: Evaluaciones automáticas basadas en el contenido
- **Generación de Podcasts**: Conversión de texto a audio con múltiples voces
- **Simplificación de Contenido**: Explicaciones adaptadas al nivel del usuario
- **Análisis de Código**: Explicación y traducción de fragmentos de código
- **Generación de Glosarios**: Términos técnicos explicados automáticamente

### 📊 **Componentes Interactivos**
- **Gráficos**: Chart.js integrado para visualizaciones de datos
- **Carruseles de Imágenes**: Galerías interactivas con lightbox
- **Acordeones y Pestañas**: Organización de contenido expandible
- **Líneas de Tiempo**: Visualización cronológica de eventos
- **Tarjetas de Estadísticas**: Métricas destacadas con animaciones
- **API Explorer**: Interfaz para probar endpoints REST
- **Scrollytelling**: Narrativas interactivas con scroll

### 🌐 **Internacionalización y Accesibilidad**
- **Multiidioma**: Soporte completo para español e inglés
- **Accesibilidad**: Cumple con estándares WCAG
- **SEO Optimizado**: Meta tags y estructura semántica

## Arquitectura del Proyecto

### Estructura de Directorios
```
docsv3/
├── src/                          # Código fuente de la aplicación
│   ├── components/              # Componentes React reutilizables
│   ├── context/                 # Contextos de React (Theme, Nav, etc.)
│   ├── hooks/                   # Custom hooks
│   ├── config/                  # Configuraciones (fuentes, temas)
│   ├── services/                # Servicios (carga de lenguajes Prism)
│   ├── utils/                   # Utilidades y helpers
│   └── styles/                  # Estilos CSS globales
├── public/                      # Archivos estáticos
│   ├── docs/                    # Documentación en Markdown
│   ├── assets/                  # Imágenes y recursos
│   ├── prism-languages/         # Lenguajes personalizados de Prism
│   └── scripts/                 # Scripts de utilidad
├── scripts/                     # Scripts de servidor y build
├── .github/workflows/           # GitHub Actions para CI/CD
└── dist/                        # Archivos de producción (generados)
```

### Tecnologías Principales

#### Frontend
- **React 18.2.0**: Biblioteca principal de UI
- **TypeScript 5.0.0**: Tipado estático
- **Vite 4.4.0**: Build tool y dev server
- **Tailwind CSS 3.4.0**: Framework CSS utility-first
- **React Router DOM 6.8.0**: Enrutamiento SPA

#### Procesamiento de Contenido
- **React Markdown 8.0.7**: Renderizado de Markdown
- **Remark GFM 3.0.1**: GitHub Flavored Markdown
- **Rehype KaTeX 7.0.0**: Renderizado de matemáticas
- **Prism.js 1.30.0**: Syntax highlighting
- **Mermaid 11.11.0**: Diagramas y gráficos

#### IA y Servicios
- **Google Generative AI 0.2.1**: Integración con Gemini
- **Lunr 2.3.9**: Motor de búsqueda cliente
- **Chart.js 4.4.3**: Gráficos interactivos

#### PWA y Optimización
- **Vite Plugin PWA 1.0.3**: Service workers y manifest
- **Workbox Window 7.3.0**: Estrategias de caché
- **Terser 5.44.0**: Minificación de JavaScript

## 🚀 Inicio Rápido

### Prerrequisitos
- **Node.js 18+**: Requerido para el entorno de desarrollo
- **npm**: Gestor de paquetes (incluido con Node.js)
- **Git**: Para clonar el repositorio

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/docsv7.git
cd docsv7

# Instalar dependencias
npm install

# Actualizar manifiesto de archivos
npm run update-file-manifest

# Iniciar servidor de desarrollo
npm run dev
```

### Configuración Básica

1. **Configurar la aplicación** en `src/constants.ts`:
```typescript
export const APP_CONFIG = {
    title: "FusionDoc",
    subtitle: "Next-Gen Documentation",
    icon: "/assets/logo.png"
};

export const THEME_CONFIG = {
    defaultTheme: 'dark', // 'light' o 'dark'
    defaultAppTheme: 'blue', // Tema de color
    defaultFont: 'Inter' // Fuente por defecto
};
```

2. **Configurar despliegue** en `deploy.config.js`:
```javascript
export const DEPLOY_CONFIG = {
    github: {
        repositoryName: "tu-repositorio", // Nombre de tu repo
        owner: "tu-usuario-github",
        branch: "main"
    }
};
```

3. **Añadir contenido** en la carpeta `public/docs/`:
```
public/docs/
├── v2.0/                    # Versión actual
│   ├── getting-started.md   # Página de inicio
│   ├── api/                 # Sección API
│   │   ├── introduction.md
│   │   └── endpoints.md
│   └── guides/              # Guías
│       └── tutorial.md
└── file-manifest.json      # Generado automáticamente
```

4. **Configurar IA (Opcional)** - Obtener API key de Google Gemini:
   - Visitar [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Generar una API key
   - Configurarla en la interfaz de configuración de la aplicación

### Primer Uso

1. **Desarrollo local**:
```bash
npm run dev
# Acceder a: http://localhost:5173
```

2. **Construcción para producción**:
```bash
npm run build
npm run serve
# Acceder a: http://localhost:3000
```

3. **Construcción para GitHub Pages**:
```bash
npm run build:github
npm run serve:github
# Acceder a: http://localhost:3000/docsv7/
```

### Scripts Disponibles

```bash
# Desarrollo
npm run predev          # Actualiza manifest de archivos antes del desarrollo
npm run dev             # Servidor de desarrollo (puerto 5173)

# Construcción
npm run prebuild        # Actualiza manifest de archivos antes del build
npm run build           # Build para producción (local)
npm run prebuild:github # Actualiza manifest de archivos antes del build GitHub
npm run build:github    # Build optimizado para GitHub Pages

# Servidor Local
npm run serve           # Sirve el build local en puerto 3000
npm run serve:github    # Sirve el build GitHub con base path correcto

# Preview
npm run preview         # Preview del build local con Vite
npm run preview:github  # Preview del build GitHub con Vite

# Utilidades
npm run update-file-manifest  # Actualiza manualmente el manifest de archivos (script ubicado en public/)
```

#### Descripción Detallada de Scripts

**Scripts de Desarrollo:**
- `predev`: Se ejecuta automáticamente antes de `dev` para actualizar el manifest
- `dev`: Inicia el servidor de desarrollo de Vite en puerto 5173

**Scripts de Build:**
- `prebuild`: Se ejecuta automáticamente antes de `build`
- `build`: Genera build para producción local (base path: `/`)
- `prebuild:github`: Se ejecuta automáticamente antes de `build:github`
- `build:github`: Genera build para GitHub Pages (base path: `/docsv7/`)

**Scripts de Servidor:**
- `serve`: Sirve el build local usando http-server
- `serve:github`: Sirve el build GitHub con Express, simulando GitHub Pages

**Scripts de Preview:**
- `preview`: Preview del build local usando Vite
- `preview:github`: Preview del build GitHub usando Vite

**Flujos de Trabajo Recomendados:**

```bash
# Para desarrollo local
npm run dev

# Para probar build local
npm run build
npm run serve

# Para probar GitHub Pages localmente
npm run build:github
npm run serve:github

# Para preview rápido con Vite
npm run build
npm run preview
```

## 🎨 Personalización

### Configuración de Temas
Personaliza los temas en `src/themes.ts`:

```typescript
export const THEMES = [
    {
        id: 'blue',
        name: 'Blue Ocean',
        colors: {
            primary: '#3B82F6',
            secondary: '#1E40AF',
            accent: '#60A5FA'
        }
    },
    // Añadir más temas...
];
```

### Configuración de Fuentes
Modifica las fuentes disponibles en `src/config/fonts.ts`:

```typescript
export const FONTS = [
    { id: 'Inter', name: 'Inter', class: 'font-inter' },
    { id: 'Roboto', name: 'Roboto', class: 'font-roboto' },
    // Añadir más fuentes...
];
```

### Componentes Personalizados
1. Crear componente en `src/components/`
2. Registrarlo en el procesador de Markdown
3. Usar en archivos `.md` con sintaxis especial

### Lenguajes de Programación Personalizados
Añadir lenguajes en `public/prism-languages/`:

```javascript
// public/prism-languages/prism-mylang.js
Prism.languages.mylang = {
    'keyword': /\b(?:if|else|function)\b/,
    'string': /"(?:[^"\\]|\\.)*"/,
    // Más reglas...
};
```

## 🚀 Despliegue

### GitHub Pages (Automático)
1. **Configurar repositorio**:
   - Crear repositorio en GitHub
   - Actualizar `deploy.config.js` con el nombre del repositorio

2. **Habilitar GitHub Pages**:
   - Ir a Settings → Pages
   - Seleccionar "GitHub Actions" como fuente

3. **Despliegue automático**:
   - Push a `main` activa el workflow
   - La aplicación se despliega automáticamente

### Netlify
```bash
# Construir para producción
npm run build

# Subir carpeta dist/ a Netlify
# O conectar repositorio para despliegue automático
```

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Servidor Propio
```bash
# Construir aplicación
npm run build

# Servir archivos estáticos desde dist/
# Usar nginx, Apache, o cualquier servidor web
```

## 🔧 Desarrollo Avanzado

### Estructura de Contextos
- **ThemeContext**: Gestión de temas y modo oscuro/claro
- **NavContext**: Navegación y estructura de documentos
- **I18nContext**: Internacionalización
- **VersionContext**: Gestión de versiones
- **GeminiContext**: Integración con IA

### Hooks Personalizados
- **useDarkMode**: Gestión del modo oscuro
- **useFont**: Gestión de fuentes
- **usePrismTheme**: Temas de syntax highlighting

### Servicios
- **prismLanguageLoader**: Carga dinámica de lenguajes
- **searchService**: Motor de búsqueda con Lunr.js

### Optimizaciones de Rendimiento
- **Code Splitting**: Componentes cargados bajo demanda
- **Lazy Loading**: Imágenes y componentes pesados
- **Service Workers**: Caché inteligente para PWA
- **Bundle Analysis**: Optimización de tamaño

## 🧪 Testing y Calidad

### Scripts de Calidad
```bash
# Linting (si está configurado)
npm run lint

# Type checking
npx tsc --noEmit

# Análisis de bundle
npm run build && npx vite-bundle-analyzer
```

### Mejores Prácticas
- **TypeScript**: Tipado estricto en toda la aplicación
- **Error Boundaries**: Manejo de errores en componentes
- **Accessibility**: Cumplimiento de estándares WCAG
- **Performance**: Optimización de Core Web Vitals

## 🎯 Características Destacadas

### Sistema de Componentes
- **Admonitions**: Notas, advertencias, tips
- **Cards**: Tarjetas informativas
- **Accordion**: Contenido colapsable
- **Timeline**: Líneas de tiempo interactivas
- **Charts**: Gráficos y visualizaciones
- **Image Gallery**: Galerías con lightbox

### Herramientas IA (Gemini)
- **Chat**: Asistente conversacional
- **Summarizer**: Resúmenes automáticos
- **Quiz Generator**: Generación de cuestionarios
- **Code Analyzer**: Análisis de código
- **Simplifier**: Simplificación de contenido

## 🔧 Desarrollo

### Agregar Nuevo Contenido
1. Crear archivos Markdown en `docs/v1.0/{idioma}/`
2. Ejecutar `npm run predev` para actualizar el manifest
3. El contenido aparecerá automáticamente en la navegación

### Personalizar Componentes
- Los componentes están en `src/components/`
- Usar TypeScript para type safety
- Seguir las convenciones de Tailwind CSS

### Temas y Estilos
- Configurar temas en `src/themes.ts`
- Personalizar Prism themes en `src/config/prism-themes.ts`
- Estilos globales en `src/styles/main.css`

## 🤝 Contribución

### Proceso de Contribución
1. **Fork** el proyecto
2. **Crear rama** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Desarrollar** siguiendo las convenciones del proyecto
4. **Commit** con mensajes descriptivos:
   ```bash
   git commit -m "feat: añadir componente de gráficos interactivos"
   ```
5. **Push** a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
6. **Crear Pull Request** con descripción detallada

### Convenciones de Código
- **Componentes**: PascalCase (`MyComponent.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useMyHook.ts`)
- **Utilidades**: camelCase (`myUtility.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`MY_CONSTANT`)

## 📚 Recursos y Documentación

### Enlaces Útiles
- **[React Documentation](https://reactjs.org/docs/)**: Documentación oficial de React
- **[Vite Guide](https://vitejs.dev/guide/)**: Guía de Vite
- **[Tailwind CSS](https://tailwindcss.com/docs)**: Documentación de Tailwind
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**: Manual de TypeScript
- **[Google Gemini API](https://ai.google.dev/)**: Documentación de la API de Gemini

### Comunidad
- **GitHub Issues**: Reportar bugs y solicitar features
- **Discussions**: Preguntas y discusiones generales
- **Wiki**: Documentación adicional y tutoriales

## 📄 Licencia

Este proyecto está bajo la **Licencia ISC**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

### Tecnologías Principales
- **[React](https://reactjs.org/)**: Biblioteca de UI
- **[Vite](https://vitejs.dev/)**: Build tool y dev server
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS

### Librerías Especializadas
- **[Mermaid](https://mermaid-js.github.io/)**: Diagramas y gráficos
- **[Prism.js](https://prismjs.com/)**: Syntax highlighting
- **[KaTeX](https://katex.org/)**: Renderizado de matemáticas
- **[Chart.js](https://www.chartjs.org/)**: Gráficos interactivos
- **[Lunr.js](https://lunrjs.com/)**: Motor de búsqueda cliente

### Servicios de IA
- **[Google Gemini](https://ai.google.dev/)**: Integración de IA generativa

---

**FusionDoc** - Creando documentación del futuro, hoy. 🚀