import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'fs';

// Build siempre en ruta raíz - GitHub Pages manejará las rutas en el workflow
const baseUrl = '/';

// Plugin para copiar temas de Prism durante el desarrollo
const copyPrismThemes = () => {
  return {
    name: 'copy-prism-themes',
    configureServer(server) {
      // Middleware para servir temas de prism-themes
      server.middlewares.use('/prism-themes', (req, res, next) => {
        const filePath = path.join(__dirname, 'node_modules/prism-themes/themes', req.url.replace('/prism-themes/', ''));
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'text/css');
          fs.createReadStream(filePath).pipe(res);
        } else {
          next();
        }
      });
      
      // Middleware para servir temas core de prismjs
      server.middlewares.use('/prism-core', (req, res, next) => {
        const filePath = path.join(__dirname, 'node_modules/prismjs/themes', req.url.replace('/prism-core/', ''));
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'text/css');
          fs.createReadStream(filePath).pipe(res);
        } else {
          next();
        }
      });
    },
    generateBundle() {
      // Copiar archivos de prism-themes al build
      const prismThemesSource = path.join(__dirname, 'node_modules/prism-themes/themes');
      const prismCoreSource = path.join(__dirname, 'node_modules/prismjs/themes');
      const distPrismThemes = path.join(__dirname, 'dist/prism-themes');
      const distPrismCore = path.join(__dirname, 'dist/prism-core');
      
      // Crear directorios si no existen
      if (!fs.existsSync(distPrismThemes)) {
        fs.mkdirSync(distPrismThemes, { recursive: true });
      }
      if (!fs.existsSync(distPrismCore)) {
        fs.mkdirSync(distPrismCore, { recursive: true });
      }
      
      // Copiar archivos CSS de prism-themes
      if (fs.existsSync(prismThemesSource)) {
        const files = fs.readdirSync(prismThemesSource);
        files.forEach(file => {
          if (file.endsWith('.css')) {
            fs.copyFileSync(
              path.join(prismThemesSource, file),
              path.join(distPrismThemes, file)
            );
          }
        });
      }
      
      // Copiar archivos CSS de prismjs core
      if (fs.existsSync(prismCoreSource)) {
        const files = fs.readdirSync(prismCoreSource);
        files.forEach(file => {
          if (file.endsWith('.css')) {
            fs.copyFileSync(
              path.join(prismCoreSource, file),
              path.join(distPrismCore, file)
            );
          }
        });
      }
    }
  };
};





export default defineConfig({
  base: baseUrl,
  plugins: [
    react(), 
    copyPrismThemes(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Static Docs Site',
        short_name: 'DocsSite',
        description: 'A modern, responsive static documentation site',
        theme_color: '#01403A',
        background_color: '#ffffff',
        display: 'standalone',
        scope: baseUrl,
        start_url: baseUrl,
        lang: 'en',
        orientation: 'portrait-primary',
        categories: ['productivity', 'education'],
        prefer_related_applications: false,
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: 'pwa_icons/android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa_icons/android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa_icons/android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa_icons/android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa_icons/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa_icons/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'masked-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  root: 'src',
  publicDir: '../public',
  define: {
    global: 'globalThis'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimizeDeps: {
    include: ['buffer']
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html')
      }
    }
  },
  assetsInclude: ['**/*.md', '**/*.json'],
  server: {
    port: 5173,
    host: 'localhost'
  }
});