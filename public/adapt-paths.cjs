const fs = require('fs');
const path = require('path');

// Leer configuración del repositorio
const config = JSON.parse(fs.readFileSync('github-config.json', 'utf8'));
const repoName = config.baseUrl.replace(/\//g, '');
console.log('Repository name:', repoName);

// Actualizar index.html
if (fs.existsSync('../dist/index.html')) {
  let indexContent = fs.readFileSync('../dist/index.html', 'utf8');
  indexContent = indexContent.replace(/href="\//g, `href="/${repoName}/`);
  indexContent = indexContent.replace(/src="\//g, `src="/${repoName}/`);
  indexContent = indexContent.replace(/content="\//g, `content="/${repoName}/`);
  fs.writeFileSync('../dist/index.html', indexContent);
  console.log('Updated index.html');
}

// Actualizar manifest.webmanifest
if (fs.existsSync('../dist/manifest.webmanifest')) {
  let manifestContent = fs.readFileSync('../dist/manifest.webmanifest', 'utf8');
  const manifest = JSON.parse(manifestContent);
  
  // Actualizar start_url y scope
  manifest.start_url = `/${repoName}/`;
  manifest.scope = `/${repoName}/`;
  
  // Actualizar rutas de iconos
  if (manifest.icons) {
    manifest.icons = manifest.icons.map(icon => {
      if (icon.src && !icon.src.startsWith('/')) {
        icon.src = `/${repoName}/${icon.src}`;
      } else if (icon.src && icon.src.startsWith('/') && !icon.src.startsWith(`/${repoName}/`)) {
        icon.src = `/${repoName}${icon.src}`;
      }
      return icon;
    });
  }
  
  fs.writeFileSync('../dist/manifest.webmanifest', JSON.stringify(manifest, null, 2));
  console.log('Updated manifest.webmanifest');
}

// Actualizar service worker si existe
if (fs.existsSync('../dist/sw.js')) {
  let swContent = fs.readFileSync('../dist/sw.js', 'utf8');
  swContent = swContent.replace(/self\.location\.origin/g, `self.location.origin + '/${repoName}'`);
  fs.writeFileSync('../dist/sw.js', swContent);
  console.log('Updated sw.js');
}

console.log('Path adaptation completed successfully');