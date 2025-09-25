const fs = require('fs');
const path = require('path');

// Leer configuración del repositorio
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'github-config.json'), 'utf8'));
const repoName = config.baseUrl.replace(/\//g, '');
console.log('Repository name:', repoName);

// Actualizar index.html
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(path.join(distPath, 'index.html'))) {
  let indexContent = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
  
  // Verificar si ya está adaptado
  if (indexContent.includes(`href="/${repoName}/`)) {
    console.log('index.html already adapted');
  } else {
    indexContent = indexContent.replace(/href="\//g, `href="/${repoName}/`);
    indexContent = indexContent.replace(/src="\//g, `src="/${repoName}/`);
    indexContent = indexContent.replace(/content="\//g, `content="/${repoName}/`);
    fs.writeFileSync(path.join(distPath, 'index.html'), indexContent);
    console.log('Updated index.html');
  }
} else {
  console.log('index.html not found');
}

// Actualizar manifest.webmanifest
if (fs.existsSync(path.join(distPath, 'manifest.webmanifest'))) {
  let manifestContent = fs.readFileSync(path.join(distPath, 'manifest.webmanifest'), 'utf8');
  const manifest = JSON.parse(manifestContent);
  
  // Verificar si ya está adaptado
  if (manifest.start_url === `/${repoName}/`) {
    console.log('manifest.webmanifest already adapted');
  } else {
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
    
    fs.writeFileSync(path.join(distPath, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2));
    console.log('Updated manifest.webmanifest');
  }
} else {
  console.log('manifest.webmanifest not found');
}

// Actualizar service worker si existe
if (fs.existsSync(path.join(distPath, 'sw.js'))) {
  let swContent = fs.readFileSync(path.join(distPath, 'sw.js'), 'utf8');
  
  // Verificar si ya está adaptado
  if (swContent.includes(`self.location.origin + '/${repoName}'`)) {
    console.log('sw.js already adapted');
  } else {
    swContent = swContent.replace(/self\.location\.origin/g, `self.location.origin + '/${repoName}'`);
    fs.writeFileSync(path.join(distPath, 'sw.js'), swContent);
    console.log('Updated sw.js');
  }
} else {
  console.log('sw.js not found');
}

console.log('Path adaptation completed successfully');