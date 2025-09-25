const fs = require('fs');
const path = require('path');

// Configuración del repositorio (hardcoded para ser independiente)
const config = {
  "baseUrl": "/docv9/",
  "repository": "jfinfotest/docv9"
};

const repoName = config.baseUrl.replace(/\//g, '');
console.log('Repository name:', repoName);

// Actualizar index.html
if (fs.existsSync('index.html')) {
  let indexContent = fs.readFileSync('index.html', 'utf8');
  
  // Solo actualizar si no ha sido adaptado previamente
  if (!indexContent.includes(`/${repoName}/`)) {
    indexContent = indexContent.replace(/href="\//g, `href="/${repoName}/`);
    indexContent = indexContent.replace(/src="\//g, `src="/${repoName}/`);
    indexContent = indexContent.replace(/content="\//g, `content="/${repoName}/`);
    fs.writeFileSync('index.html', indexContent);
    console.log('Updated index.html');
  } else {
    console.log('index.html already adapted');
  }
}

// Actualizar manifest.webmanifest
if (fs.existsSync('manifest.webmanifest')) {
  let manifestContent = fs.readFileSync('manifest.webmanifest', 'utf8');
  const manifest = JSON.parse(manifestContent);
  
  // Solo actualizar si no ha sido adaptado previamente
  if (manifest.start_url !== `/${repoName}/`) {
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
    
    fs.writeFileSync('manifest.webmanifest', JSON.stringify(manifest, null, 2));
    console.log('Updated manifest.webmanifest');
  } else {
    console.log('manifest.webmanifest already adapted');
  }
}

// Actualizar service worker si existe
if (fs.existsSync('sw.js')) {
  let swContent = fs.readFileSync('sw.js', 'utf8');
  
  // Solo actualizar si no ha sido adaptado previamente
  if (!swContent.includes(`+ '/${repoName}'`)) {
    swContent = swContent.replace(/self\.location\.origin/g, `self.location.origin + '/${repoName}'`);
    fs.writeFileSync('sw.js', swContent);
    console.log('Updated sw.js');
  } else {
    console.log('sw.js already adapted');
  }
}

console.log('Path adaptation completed successfully!');