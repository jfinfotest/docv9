// --- GENERAL APP CONFIGURATION ---
export const APP_CONFIG = {
    title: "FusionDocJF",
    subtitle: "Next-Gen Documentation",
    icon: "/assets/logo.png", // Path in the `/public` folder or a full URL
};

// --- DOCS SOURCE CONFIGURATION ---
export const DOCS_CONFIG = {
    // 'local': Read docs from the `/docs` folder in your project root.
    // 'github': Fetch docs from a GitHub repository.
    source: 'local', 
};

// --- UTILITY FUNCTIONS ---
// Check if we're running in GitHub Pages environment
export const isGitHubPages = () => {
    // Check for GitHub Pages hostname patterns
    const hostname = window.location.hostname;
    return hostname.includes('github.io') || hostname.includes('github.com');
};

// Get repository name from URL
export const getRepoName = () => {
    if (isGitHubPages()) {
        // Extract repository name from GitHub Pages URL
        // Format: https://username.github.io/repository-name/
        const pathParts = window.location.pathname.split('/').filter(part => part.length > 0);
        if (pathParts.length > 0) {
            return pathParts[0];
        }
    }
    // Fallback: use the configured repository name from deploy.config.js
    // This provides a consistent fallback that matches the build configuration
    return 'docsv7'; // Updated to match deploy.config.js
};

// Get the correct base path for assets based on the current environment
export const getBasePath = () => {
    // Check if there's a build-time configuration available (GitHub Pages)
    if (typeof __GITHUB_PAGES_CONFIG__ !== 'undefined') {
        return __GITHUB_PAGES_CONFIG__.basePath || '';
    }
    
    // Check if there's a post-build configuration available
    if (typeof window !== 'undefined' && window.APP_CONFIG) {
        const config = window.APP_CONFIG;
        return config.basePath || '';
    }
    
    // Fallback to automatic detection
    if (typeof window !== 'undefined' && isGitHubPages()) {
        const repoName = getRepoName();
        return repoName ? `/${repoName}` : '';
    }
    
    // For local development
    return '';
};

// Get the correct docs path
export const getDocsPath = () => {
    // Check if there's a build-time configuration available (GitHub Pages)
    if (typeof __GITHUB_PAGES_CONFIG__ !== 'undefined') {
        return __GITHUB_PAGES_CONFIG__.docsPath || '/docs';
    }
    
    // Check if there's a post-build configuration available
    if (typeof window !== 'undefined' && window.APP_CONFIG) {
        const config = window.APP_CONFIG;
        return config.docsPath || '/docs';
    }
    
    // Fallback to automatic detection
    const basePath = getBasePath();
    return basePath ? `${basePath}/docs` : '/docs';
};

// Get the correct base path for the build mode (used by Vite)
export const getBuildBasePath = () => {
    // This function is used during build time to determine the base path
    // For GitHub Pages, we need the subdirectory path
    // For local development, we use relative paths
    if (isGitHubPages()) {
        const repoName = getRepoName();
        return repoName ? `/${repoName}` : '';
    }
    return '';
};

// --- GITHUB CONFIGURATION (only used if DOCS_CONFIG.source is 'github') ---
export const GITHUB_CONFIG = {
    owner: "your-github-username", // Your GitHub username
    repo: "your-repo-name",         // The name of your repository
    branch: "main",                 // The branch where your docs are
    docsPath: "docs",               // The folder in your repo where docs are stored
    token: '', // Optional: A GitHub token for private repos or to increase rate limits.
};

// --- THEME & APPEARANCE ---
export const THEME_CONFIG = {
    defaultTheme: 'dark', // 'light' or 'dark'
    defaultAppTheme: 'blue', // Must match an ID from the `THEMES` array in `/src/themes.ts`
    defaultFont: 'Inter', // Must match an ID from the `FONTS` array in config/fonts.ts
};

// --- HEADER & NAVIGATION ---
export const HEADER_LINKS = [
    { icon: 'GitHub', label: 'GitHub', url: 'https://github.com/' },
    { icon: 'Twitter', label: 'Twitter', url: 'https://twitter.com/' },
    { icon: 'Discord', label: 'Discord', url: 'https://discord.com/' },
];

// --- FOOTER ---
export const FOOTER_CONFIG = {
    enabled: true,
    text: `Copyright © {year} ${APP_CONFIG.title}. All rights reserved.`,
};

// --- EDIT PAGE BUTTON ---
export const EDIT_PAGE_BUTTON_CONFIG = {
    enabled: true, // Only works when DOCS_CONFIG.source is 'github'
};

// --- ANNOUNCEMENT BANNER ---
export const ANNOUNCEMENT_BANNER_CONFIG = {
    enabled: false,
    id: "v1-release", // A unique ID for this banner. If you change it, users will see the banner again.
    content: "🎉 We've just launched our new feature! Check it out.",
    link: {
        href: "/features/new-feature", // Can be an internal or external link
        text: "Learn more",
    },
};

// --- SIDEBAR BUSINESS/COMPANY INFO ---
export const SIDEBAR_BUSINESS_INFO_CONFIG = {
    enabled: true,
    logo: '/assets/company-logo.svg', // Path in `/public` folder
    title: 'Powered by FusionDoc',
    link: 'https://github.com/cog-creators/fusion-doc',
    footerText: `© {year} Your Company Inc.` // `{year}` will be replaced with the current year
};

// --- INTERNATIONALIZATION (I18N) ---
export const I18N_CONFIG = {
    enabled: true,
    defaultLang: 'es',
    languages: [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
    ],
};

// --- VERSIONING ---
export const VERSION_CONFIG = {
    enabled: true,
    defaultVersion: 'v2.0',
    versions: ['v2.0'],
};

// --- MAINTENANCE MODE ---
export const MAINTENANCE_MODE_CONFIG = {
    enabled: false,
    message: "We're currently performing scheduled maintenance. We'll be back online shortly. Thanks for your patience!",
};

// --- UI TEXT TRANSLATIONS ---
// This is used for static UI text. Content from markdown files is not translated here.
export const UI_TEXT = {
    en: {
        searchPlaceholder: "Search docs...",
        onThisPage: "On this page",
        editThisPage: "Edit this page",
        previousPage: "Previous",
        nextPage: "Next",
        sidebarNoItems: "No items in this section.",
        // Settings
        settingsTitle: "Settings",
        appTheme: "App Theme",
        font: "Font",
        codeTheme: "Code Block Theme",
        preview: "Preview",
        resetCodeTheme: "Reset Code Theme",
        geminiApiKey: "Gemini API Key",
        pasteApiKey: "Paste your API key here",
        keyStored: "Your key is stored only in your browser's local storage.",
        apiKeyActive: "API Key is active.",
        apiKeyNotSet: "API Key not set.",
        saveKey: "Save Key",
        keySaved: "Key Saved!",
        showKey: "Show Key",
        hideKey: "Hide Key",
        docsSource: "Docs Source",
        githubApiUsage: "GitHub API Usage",
        requestsUsed: (used, limit) => `${used} / ${limit} requests used`,
        resetsAt: (time) => `Resets at ${time}`,
        loadingApiUsage: "Loading API usage...",
        // Dark Mode Toggle
        toggleDarkMode: "Toggle dark mode",
        // Language & Version Dropdowns
        language: "Language",
        version: "Version",
        search: "Search",
        lightMode: "Light mode",
        darkMode: "Dark mode",
        settings: "Settings",
        about: "About",
        // Settings Drawer
        openSettings: "Open settings",
        // About Modal
        openAbout: "About this site",
        hideMenu: "Hide menu",
        showMenu: "Show menu",
        closeSearch: "Close search",
        aboutTitle: "About",
        aboutCoreTechnologies: "Core Technologies",
        closeAbout: "Close about modal",
        aboutCreatedBy: "Created by the FusionDoc Team",
        // Search Results
        searchResults: (count) => `${count} results found`,
        indexingContent: "Indexing content...",
        noResultsFound: "No results found.",
        // Error Boundary
        errorTitle: "Something went wrong",
        errorMessage: "An unexpected error occurred. Please try refreshing the page.",
        errorDetails: "Error Details",
        // Content Loading
        contentFailedToLoad: "Content failed to load",
        contentDecodingError: "Failed to decode content from Base64.",
        contentNotAvailable: "This content is scheduled for future release and is not yet available.",
        localFileNotFound: (path, status) => `Could not fetch local file ${path}: ${status}`,
        githubFileNotFound: (path, message) => `Could not fetch ${path}: ${message}`,
        // Nav Errors
        manifestNotFound: (path) => `Could not find '${path}'. This file is required for local mode.`,
        manifestInvalid: "The 'file-manifest.json' is invalid. Expected an object with a 'files' property containing an array.",
        localFileLoadError: (path) => `Could not load local file: ${path}`,
        navBuildLocalError: (details) => `Failed to build navigation from local files. Details: ${details}`,
        githubApiError: (status, statusText) => `GitHub API error: ${status} - ${statusText}`,
        navBuildGithubError: (details) => `Failed to build navigation. Please check your GitHub config and repo structure. Details: ${details}`,
        // Gemini Features
        askAbout: (title) => `Ask about "${title}"`,
        thisDocument: 'this document',
        askAnything: "Ask me anything about this document!",
        allAnswersBasedOnText: "All answers are based solely on the provided text.",
        askAQuestion: "Ask a question...",
        sendMessage: "Send Message",
        clearChat: "Clear Chat",
        closeChat: "Close Chat",
        geminiInitError: "Failed to initialize Gemini. Please check your API key.",
        geminiError: (error) => `An error occurred with Gemini: ${error}`,
        noApiKey: "No Gemini API key set. Please add one in settings.",
        // Quiz Generator
        quizFor: (title) => `Quiz for: ${title}`,
        closeQuiz: "Close Quiz",
        testYourKnowledge: "Test Your Knowledge",
        quizDescription: "Let AI generate a quiz based on this document to test your comprehension.",
        generateQuiz: "Generate Quiz",
        generatingQuiz: "Generating quiz...",
        thisMayTakeAMoment: "This may take a moment...",
        questionOf: (current, total) => `Question ${current} of ${total}`,
        submitForGrading: "Submit for Grading",
        quizResults: "Quiz Results",
        youScored: (score, total) => `You scored ${score} out of ${total}`,
        scoreAverage: (avg) => `(${avg} / 5.0 avg.)`,
        noAnswerProvided: "No answer provided.",
        yourAnswer: "Your Answer:",
        idealAnswer: "Ideal Answer:",
        aiFeedback: "AI Feedback:",
        tryAgain: "Try Again",
        copyResults: "Copy Results",
        // Podcast Generator
        podcastFor: (title) => `Podcast for: ${title}`,
        closePodcast: "Close Podcast",
        podcastStyle: "Podcast Style",
        monologue: "Monologue",
        monologueDesc: "A single speaker narrates the topic.",
        dialogue: "Dialogue",
        dialogueDesc: "Two speakers discuss the topic.",
        podcastVoices: "Podcast Voices",
        monologueSpeakerName: "Speaker Name",
        dialogueSpeaker1Name: "Speaker 1 Name",
        dialogueSpeaker2Name: "Speaker 2 Name",
        voice: "Voice",
        speakerNameError: "Please enter a name for each speaker.",
        generatingScript: "Generating script...",
        generatingAudio: "Generating audio...",
        script: "Script",
        generatePodcast: "Generate Podcast",
        downloadAudio: "Download Audio",
        copyScript: "Copy Script",
        startOver: "Start Over",
        // Mermaid Component
        mermaidRendering: "Rendering diagram...",
        mermaidError: "Diagram Error",
        mermaidLibraryNotLoadedError: "Mermaid library is not loaded.",
        // Code Block
        shiftScrollToZoom: "(Shift + Scroll to Zoom)",
        // API Explorer
        response: "Response",
        status: "Status",
        time: "Time",
        size: "Size",
        body: "Body",
        tryItOut: "Try it out",
        parameters: "Parameters",
        requestBody: "Request Body",
        sendRequest: "Send Request",
        paramIsRequired: (name) => `Parameter "${name}" is required.`,
        invalidJsonInBody: "Invalid JSON in request body.",
        unknownNetworkError: "An unknown network error occurred.",
        configError: "Configuration Error",
        configErrorDetails: "The `baseUrl` and `endpoints` properties are required for the API Explorer.",
        // Cards
        learnMore: "Learn More",
        goToPage: "Go to page",
        // Component Errors
        ctaInvalidSyntax: "Invalid CTA Syntax",
        ctaInvalidSyntaxDetails: "Could not parse the Call to Action block. Please check the frontmatter syntax in your markdown file.",
        fileTreeError: "File Tree Error",
        fileTreeErrorDetails: "Could not parse the `file-tree` block content. Please check the syntax.",
        carouselError: "Carousel Error",
        carouselErrorDetails: "No images found. Please check the YAML syntax in your `carousel` block.",
        heroSectionInvalidSyntax: "Invalid Hero Section Syntax",
        heroSectionInvalidSyntaxDetails: "Could not parse content. Ensure the `title` is defined in the frontmatter.",
        teamProfileError: "Team Profile Error",
        teamProfileErrorDetails: "No members found. Please check the YAML syntax in your `team-profile` block.",
        liveCodeEmbedInvalidUrl: "Invalid Embed URL",
        liveCodeEmbedInvalidUrlDetails: "Could not generate embed for the provided URL or the service is not supported. Supported services: CodePen, JSFiddle, CodeSandbox.",
        featureListError: "Feature List Error",
        featureListErrorDetails: "No features found. Check the YAML syntax in your `feature-list` block.",
        comparisonTableError: "Comparison Table Error",
        comparisonTableErrorDetails: "Ensure `headers` and `rows` are correctly defined in your YAML block.",
        chartConfigError: "Chart Configuration Error",
        chartConfigErrorDetails: "Could not parse the YAML content. Please check the syntax.",
        scrollytellingError: "Scrollytelling Error",
        scrollytellingErrorDetails: "No steps found. Check the YAML syntax in your `scrollytelling` block.",
        tutorialSliderError: "Tutorial Slider Error",
        tutorialSliderErrorDetails: "No steps found. Check the YAML syntax in your `tutorial-slider` block.",
        statCardsError: "Stat Cards Error",
        statCardsErrorDetails: "No items found. Check the YAML syntax in your `stat-cards` block.",
        quizError: "Invalid Quiz Syntax",
        quizErrorDetails: "Could not find valid questions. Please check the YAML syntax in your `quiz` block.",
        stepsError: "Invalid Steps Syntax",
        stepsErrorDetails: "Could not parse the Steps block. Each step must start with `### Step Title`.",
        videoEmbedError: "Invalid Video URL",
        videoEmbedErrorDetails: (src) => `Could not generate embed for the provided URL: ${src}`,
        // Other Interactive
        scrollToBegin: "Scroll to begin tutorial",
        stepOf: (current, total) => `Step ${current} of ${total}`,
        previous: "Previous",
        next: "Next",
        restart: "Restart",
        send: "Send",
        headers: "Headers",
        requestBodyPlaceholder: "Request body (e.g., JSON)",
        headersPlaceholder: '{\n  "Content-Type": "application/json"\n}',
        maintenanceInProgress: "Maintenance In Progress",
        thankYouForPatience: "Thank you for your patience.",
        dismissAnnouncement: "Dismiss announcement",
        photoOf: (name) => `Photo of ${name}`,
        previousImage: "Previous image",
        nextImage: "Next image",
        goToImage: (index) => `Go to image ${index}`,
        viewImageFullscreen: (alt) => `View image in fullscreen: ${alt}`,
        // Code Analyzer
        codeAnalyzerTitle: "AI Code Analyzer",
        selectCodeBlock: "1. Select a code block",
        chooseAction: "2. Choose an action",
        explainCode: "Explain Code",
        translateCode: "Translate Code",
        translateTo: "Translate to:",
        analyze: "Analyze",
        backToSelection: "← Back to selection",
        originalCode: (lang) => `Original Code (${lang})`,
        aiExplanation: "AI Explanation",
        translationTo: (lang) => `Translation to ${lang}`,
        noCodeBlocksFound: "No Code Blocks Found",
        noCodeBlocksFoundDetails: "This page does not contain any code snippets to analyze.",
        codeAnalysisError: (err) => `Error analyzing code. ${err}`,
        codeAnalysisFailed: "Code analysis failed",
        closeAnalyzer: "Close analyzer",
        resetAnalyzer: "Reset analyzer",
        // Tooltips
        copyCode: "Copy code",
        codeCopied: "Code copied!",
        toggleSidebar: "Toggle sidebar",
        openNavigationMenu: "Open navigation menu",
        switchToLightMode: "Switch to light mode",
        switchToDarkMode: "Switch to dark mode",
        goToGitHub: "Go to GitHub",
        hideApiKey: "Hide API key",
        showApiKey: "Show API key",
        saveApiKey: "Save API key",
        apiKeySavedSuccessfully: "API key saved successfully!",
        openAiActions: "Open AI actions",
        closeAiActions: "Close AI actions",
        chatWithAi: "Chat with AI",
        summarizeDocument: "Summarize document",
        simplifyDocument: "Simplify document",
        generateQuizTooltip: "Generate quiz",
        generatePodcastTooltip: "Generate podcast",
        analyzeCodeTooltip: "Analyze code",
        generateGlossaryTooltip: "Generate glossary",
        editThisPageTooltip: "Edit this page on GitHub",
        closeMenu: "Close menu",
        expandSection: "Expand section",
        collapseSection: "Collapse section",
        closeSettings: "Close settings",
        selectTheme: "Select theme",
        hideLineNumbers: "Hide line numbers",
        showLineNumbers: "Show line numbers",
        toggleLineNumbers: "Toggle line numbers",
        exitFullscreen: "Exit fullscreen",
        enterFullscreen: "Enter fullscreen",
        generateSummary: "Generate Summary",
        simplifyConcept: "Simplify Concept",
        generateAiPodcast: "Generate AI Podcast",
        generateGlossary: "Generate Glossary",
        generateAiQuiz: "Generate AI Quiz",
        analyzeCode: "Analyze Code",
        selectLanguage: "Select language"
    },
    es: {
        searchPlaceholder: "Buscar en la documentación...",
        onThisPage: "En esta página",
        editThisPage: "Editar esta página",
        previousPage: "Anterior",
        nextPage: "Siguiente",
        sidebarNoItems: "No hay elementos en esta sección.",
        // Settings
        settingsTitle: "Configuración",
        appTheme: "Tema de la Aplicación",
        font: "Fuente",
        codeTheme: "Tema del Bloque de Código",
        preview: "Vista Previa",
        resetCodeTheme: "Restablecer Tema del Código",
        geminiApiKey: "Clave de API de Gemini",
        pasteApiKey: "Pega tu clave de API aquí",
        keyStored: "Tu clave se almacena únicamente en el almacenamiento local de tu navegador.",
        apiKeyActive: "La clave de API está activa.",
        apiKeyNotSet: "Clave de API no establecida.",
        saveKey: "Guardar Clave",
        keySaved: "¡Clave Guardada!",
        showKey: "Mostrar Clave",
        hideKey: "Ocultar Clave",
        docsSource: "Fuente de Documentos",
        githubApiUsage: "Uso de la API de GitHub",
        requestsUsed: (used, limit) => `${used} / ${limit} solicitudes usadas`,
        resetsAt: (time) => `Se reinicia a las ${time}`,
        loadingApiUsage: "Cargando uso de la API...",
        // Dark Mode Toggle
        toggleDarkMode: "Alternar modo oscuro",
        // Language & Version Dropdowns
        language: "Idioma",
        version: "Versión",
        search: "Buscar",
        lightMode: "Modo claro",
        darkMode: "Modo oscuro",
        settings: "Configuración",
        about: "Acerca de",
        // Settings Drawer
        openSettings: "Abrir configuración",
        // About Modal
        openAbout: "Acerca de este sitio",
        hideMenu: "Ocultar menú",
        showMenu: "Mostrar menú",
        closeSearch: "Cerrar búsqueda",
        aboutTitle: "Acerca de",
        aboutCoreTechnologies: "Tecnologías Principales",
        closeAbout: "Cerrar 'Acerca de'",
        aboutCreatedBy: "Creado por el equipo de FusionDoc",
        // Search Results
        searchResults: (count) => `${count} resultados encontrados`,
        indexingContent: "Indexando contenido...",
        noResultsFound: "No se encontraron resultados.",
        // Error Boundary
        errorTitle: "Algo salió mal",
        errorMessage: "Ocurrió un error inesperado. Por favor, intenta refrescar la página.",
        errorDetails: "Detalles del Error",
        // Content Loading
        contentFailedToLoad: "Falló la carga del contenido",
        contentDecodingError: "Falló la decodificación del contenido desde Base64.",
        contentNotAvailable: "Este contenido está programado para un futuro lanzamiento y aún no está disponible.",
        localFileNotFound: (path, status) => `No se pudo obtener el archivo local ${path}: ${status}`,
        githubFileNotFound: (path, message) => `No se pudo obtener ${path}: ${message}`,
        // Nav Errors
        manifestNotFound: (path) => `No se pudo encontrar '${path}'. Este archivo es necesario para el modo local.`,
        manifestInvalid: "El 'file-manifest.json' es inválido. Se esperaba un objeto con una propiedad 'files' que contenga un array.",
        localFileLoadError: (path) => `No se pudo cargar el archivo local: ${path}`,
        navBuildLocalError: (details) => `Falló la construcción de la navegación desde archivos locales. Detalles: ${details}`,
        githubApiError: (status, statusText) => `Error de la API de GitHub: ${status} - ${statusText}`,
        navBuildGithubError: (details) => `Falló la construcción de la navegación. Por favor, verifica tu configuración de GitHub y la estructura del repositorio. Detalles: ${details}`,
        // Gemini Features
        askAbout: (title) => `Preguntar sobre "${title}"`,
        thisDocument: 'este documento',
        askAnything: "¡Pregúntame cualquier cosa sobre este documento!",
        allAnswersBasedOnText: "Todas las respuestas se basan únicamente en el texto proporcionado.",
        askAQuestion: "Haz una pregunta...",
        sendMessage: "Enviar Mensaje",
        clearChat: "Limpiar Chat",
        closeChat: "Cerrar Chat",
        geminiInitError: "Falló la inicialización de Gemini. Por favor, verifica tu clave de API.",
        geminiError: (error) => `Ocurrió un error con Gemini: ${error}`,
        noApiKey: "No se ha establecido una clave de API de Gemini. Por favor, agrega una en la configuración.",
        // Quiz Generator
        quizFor: (title) => `Cuestionario para: ${title}`,
        closeQuiz: "Cerrar Cuestionario",
        testYourKnowledge: "Pon a Prueba tu Conocimiento",
        quizDescription: "Permite que la IA genere un cuestionario basado en este documento para probar tu comprensión.",
        generateQuiz: "Generar Cuestionario",
        generatingQuiz: "Generando cuestionario...",
        thisMayTakeAMoment: "Esto puede tomar un momento...",
        questionOf: (current, total) => `Pregunta ${current} de ${total}`,
        submitForGrading: "Enviar para Calificación",
        quizResults: "Resultados del Cuestionario",
        youScored: (score, total) => `Obtuviste ${score} de ${total}`,
        scoreAverage: (avg) => `(${avg} / 5.0 promedio)`,
        noAnswerProvided: "No se proporcionó respuesta.",
        yourAnswer: "Tu Respuesta:",
        idealAnswer: "Respuesta Ideal:",
        aiFeedback: "Retroalimentación de IA:",
        tryAgain: "Intentar de Nuevo",
        copyResults: "Copiar Resultados",
        // Podcast Generator
        podcastFor: (title) => `Podcast para: ${title}`,
        closePodcast: "Cerrar Podcast",
        podcastStyle: "Estilo de Podcast",
        monologue: "Monólogo",
        monologueDesc: "Un solo locutor narra el tema.",
        dialogue: "Diálogo",
        dialogueDesc: "Dos locutores discuten el tema.",
        podcastVoices: "Voces del Podcast",
        monologueSpeakerName: "Nombre del Locutor",
        dialogueSpeaker1Name: "Nombre del Locutor 1",
        dialogueSpeaker2Name: "Nombre del Locutor 2",
        voice: "Voz",
        speakerNameError: "Por favor, ingresa un nombre para cada locutor.",
        generatingScript: "Generando guión...",
        generatingAudio: "Generando audio...",
        script: "Guión",
        generatePodcast: "Generar Podcast",
        downloadAudio: "Descargar Audio",
        copyScript: "Copiar Guión",
        startOver: "Empezar de Nuevo",
        // Mermaid Component
        mermaidRendering: "Renderizando diagrama...",
        mermaidError: "Error de Diagrama",
        mermaidLibraryNotLoadedError: "La librería Mermaid no está cargada.",
        // Code Block
        shiftScrollToZoom: "(Shift + Scroll para Zoom)",
        // API Explorer
        response: "Respuesta",
        status: "Estado",
        time: "Tiempo",
        size: "Tamaño",
        body: "Cuerpo",
        tryItOut: "Pruébalo",
        parameters: "Parámetros",
        requestBody: "Cuerpo de la Solicitud",
        sendRequest: "Enviar Solicitud",
        paramIsRequired: (name) => `El parámetro "${name}" es requerido.`,
        invalidJsonInBody: "JSON inválido en el cuerpo de la solicitud.",
        unknownNetworkError: "Ocurrió un error de red desconocido.",
        configError: "Error de Configuración",
        configErrorDetails: "Las propiedades `baseUrl` y `endpoints` son requeridas para el Explorador de API.",
        // Cards
        learnMore: "Aprender Más",
        goToPage: "Ir a la página",
        // Component Errors
        ctaInvalidSyntax: "Sintaxis de CTA Inválida",
        ctaInvalidSyntaxDetails: "No se pudo analizar el bloque de Llamada a la Acción. Por favor, verifica la sintaxis del frontmatter en tu archivo markdown.",
        fileTreeError: "Error del Árbol de Archivos",
        fileTreeErrorDetails: "No se pudo analizar el contenido del bloque `file-tree`. Por favor, verifica la sintaxis.",
        carouselError: "Error del Carrusel",
        carouselErrorDetails: "No se encontraron imágenes. Por favor, verifica la sintaxis YAML en tu bloque `carousel`.",
        heroSectionInvalidSyntax: "Sintaxis de Sección Hero Inválida",
        heroSectionInvalidSyntaxDetails: "No se pudo analizar el contenido. Asegúrate de que el `title` esté definido en el frontmatter.",
        teamProfileError: "Error del Perfil del Equipo",
        teamProfileErrorDetails: "No se encontraron miembros. Por favor, verifica la sintaxis YAML en tu bloque `team-profile`.",
        liveCodeEmbedInvalidUrl: "URL de Embed Inválida",
        liveCodeEmbedInvalidUrlDetails: "No se pudo generar el embed para la URL proporcionada o el servicio no es compatible. Servicios compatibles: CodePen, JSFiddle, CodeSandbox.",
        featureListError: "Error de Lista de Características",
        featureListErrorDetails: "No se encontraron características. Verifica la sintaxis YAML en tu bloque `feature-list`.",
        comparisonTableError: "Error de Tabla de Comparación",
        comparisonTableErrorDetails: "Asegúrate de que `headers` y `rows` estén correctamente definidos en tu bloque YAML.",
        chartConfigError: "Error de Configuración del Gráfico",
        chartConfigErrorDetails: "No se pudo analizar el contenido YAML. Por favor, verifica la sintaxis.",
        scrollytellingError: "Error de Scrollytelling",
        scrollytellingErrorDetails: "No se encontraron pasos. Verifica la sintaxis YAML en tu bloque `scrollytelling`.",
        tutorialSliderError: "Error del Slider de Tutorial",
        tutorialSliderErrorDetails: "No se encontraron pasos. Verifica la sintaxis YAML en tu bloque `tutorial-slider`.",
        statCardsError: "Error de Tarjetas de Estadísticas",
        statCardsErrorDetails: "No se encontraron elementos. Verifica la sintaxis YAML en tu bloque `stat-cards`.",
        quizError: "Sintaxis de Cuestionario Inválida",
        quizErrorDetails: "No se pudieron encontrar preguntas válidas. Por favor, verifica la sintaxis YAML en tu bloque `quiz`.",
        stepsError: "Sintaxis de Pasos Inválida",
        stepsErrorDetails: "No se pudo analizar el bloque de Pasos. Cada paso debe comenzar con `### Título del Paso`.",
        videoEmbedError: "URL de Video Inválida",
        videoEmbedErrorDetails: (src) => `No se pudo generar el embed para la URL proporcionada: ${src}`,
        // Other Interactive
        scrollToBegin: "Desplázate para comenzar el tutorial",
        stepOf: (current, total) => `Paso ${current} de ${total}`,
        previous: "Anterior",
        next: "Siguiente",
        restart: "Reiniciar",
        send: "Enviar",
        headers: "Encabezados",
        requestBodyPlaceholder: "Cuerpo de la solicitud (ej., JSON)",
        headersPlaceholder: '{\n  "Content-Type": "application/json"\n}',
        maintenanceInProgress: "Mantenimiento en Progreso",
        thankYouForPatience: "Gracias por tu paciencia.",
        dismissAnnouncement: "Descartar anuncio",
        photoOf: (name) => `Foto de ${name}`,
        previousImage: "Imagen anterior",
        nextImage: "Siguiente imagen",
        goToImage: (index) => `Ir a la imagen ${index}`,
        viewImageFullscreen: (alt) => `Ver imagen en pantalla completa: ${alt}`,
        // Code Analyzer
        codeAnalyzerTitle: "Analizador de Código IA",
        selectCodeBlock: "1. Selecciona un bloque de código",
        chooseAction: "2. Elige una acción",
        explainCode: "Explicar Código",
        translateCode: "Traducir Código",
        translateTo: "Traducir a:",
        analyze: "Analizar",
        backToSelection: "← Volver a la selección",
        originalCode: (lang) => `Código Original (${lang})`,
        aiExplanation: "Explicación de IA",
        translationTo: (lang) => `Traducción a ${lang}`,
        noCodeBlocksFound: "No se encontraron bloques de código",
        noCodeBlocksFoundDetails: "Esta página no contiene ningún fragmento de código para analizar.",
        codeAnalysisError: (err) => `Error al analizar el código. ${err}`,
        codeAnalysisFailed: "Falló el análisis del código",
        closeAnalyzer: "Cerrar analizador",
        resetAnalyzer: "Reiniciar analizador",
        // Tooltips
        copyCode: "Copiar código",
        codeCopied: "¡Código copiado!",
        toggleSidebar: "Alternar barra lateral",
        openNavigationMenu: "Abrir menú de navegación",
        switchToLightMode: "Cambiar a modo claro",
        switchToDarkMode: "Cambiar a modo oscuro",
        goToGitHub: "Ir a GitHub",
        hideApiKey: "Ocultar clave API",
        showApiKey: "Mostrar clave API",
        saveApiKey: "Guardar clave API",
        apiKeySavedSuccessfully: "¡Clave API guardada exitosamente!",
        openAiActions: "Abrir acciones de IA",
        closeAiActions: "Cerrar acciones de IA",
        chatWithAi: "Chatear con IA",
        summarizeDocument: "Resumir documento",
        simplifyDocument: "Simplificar documento",
        generateQuizTooltip: "Generar cuestionario",
        generatePodcastTooltip: "Generar podcast",
        analyzeCodeTooltip: "Analizar código",
        generateGlossaryTooltip: "Generar glosario",
        editThisPageTooltip: "Editar esta página en GitHub",
        closeMenu: "Cerrar menú",
        expandSection: "Expandir sección",
        collapseSection: "Contraer sección",
        closeSettings: "Cerrar configuración",
        selectTheme: "Seleccionar tema",
        hideLineNumbers: "Ocultar números de línea",
        showLineNumbers: "Mostrar números de línea",
        toggleLineNumbers: "Alternar números de línea",
        exitFullscreen: "Salir de pantalla completa",
        enterFullscreen: "Entrar en pantalla completa",
        generateSummary: "Generar Resumen",
        simplifyConcept: "Simplificar Concepto",
        generateAiPodcast: "Generar Podcast con IA",
        generateGlossary: "Generar Glosario",
        generateAiQuiz: "Generar Cuestionario con IA",
        analyzeCode: "Analizar Código",
        selectLanguage: "Seleccionar idioma"
    },
};