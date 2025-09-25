import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'fs';

// Build siempre en ruta raíz - GitHub Pages manejará las rutas en el workflow
const baseUrl = '/';

// Custom plugin to preserve external modules and replace imports
const preserveExternalModules = () => {
  const backups = new Map();
  
  // Define external modules to preserve
  const externalModules = [
    'constants.js',
    'github-config.json',
    'assets',
    'docs',
    'prism-languages'
  ];
  
  const copyDirectory = (src, dest) => {
    if (!fs.existsSync(src)) return;
    
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };
  
  return {
    name: 'preserve-external-modules',
    buildStart() {
      console.log('📦 Backing up external modules...');
      
      // Backup each external module
      for (const module of externalModules) {
        const distPath = path.resolve(__dirname, 'dist', module);
        const publicPath = path.resolve(__dirname, 'public', module);
        
        if (fs.existsSync(distPath)) {
          if (fs.statSync(distPath).isDirectory()) {
            // For directories, we'll store the backup info
            backups.set(module, { type: 'directory', source: publicPath });
            console.log(`📁 Marked directory for backup: dist/${module}`);
          } else {
            // For files, read and store content
            const content = fs.readFileSync(distPath, 'utf-8');
            backups.set(module, { type: 'file', content });
            console.log(`📄 Backed up file: dist/${module}`);
          }
        }
      }
    },
    resolveId(id, importer) {
      // Redirect constants.js imports to the dist version
      if (id.includes('public/constants.js') || id.endsWith('constants.js')) {
        const distPath = path.resolve(__dirname, 'dist/constants.js');
        console.log(`🔄 Redirecting ${id} to ${distPath}`);
        return distPath;
      }
      return null;
    },
    buildEnd() {
      console.log('✅ Restoring external modules...');
      
      // Restore each backed up module
      for (const [module, backup] of backups) {
        const distPath = path.resolve(__dirname, 'dist', module);
        
        if (backup.type === 'file') {
          fs.writeFileSync(distPath, backup.content);
          console.log(`✅ Restored file: dist/${module}`);
        } else if (backup.type === 'directory' && fs.existsSync(backup.source)) {
          // Remove existing directory and copy from public
          if (fs.existsSync(distPath)) {
            fs.rmSync(distPath, { recursive: true, force: true });
          }
          copyDirectory(backup.source, distPath);
          console.log(`✅ Restored directory: dist/${module}`);
        }
      }
      
      console.log('🎉 All external modules preserved successfully!');
    }
  };
};

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
    preserveExternalModules(),
    copyPrismThemes(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      devOptions: {
        enabled: true
      },
      useCredentials: false,
      injectManifest: {
        injectionPoint: undefined
      },
      manifestFilename: 'manifest.webmanifest',
      disable: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
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
        categories: ['productivity', 'education'],
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
        '@': path.resolve(__dirname, './src'),
      },
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