const fs = require('fs');
const path = require('path');
const { removeDirRecursive } = require('./remove-dir');
const { generatedClientPath, backendDir } = require('./constants');

// Clean interfaces
removeDirRecursive(backendDir);
console.log(`✅ Deleted old generated files from: ${backendDir}`);

// Ensure backend directory exists
fs.mkdirSync(backendDir, { recursive: true });

// Recursively scan frontend folder for .ts files
function getTSFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getTSFiles(fullPath));
    } else if (entry.isFile() && fullPath.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Copy files from frontend to backend
function copyFiles() {
  const tsFiles = getTSFiles(generatedClientPath);
  tsFiles.forEach((file) => {
    const relativePath = path.relative(generatedClientPath, file); // preserve folder structure
    const destPath = path.join(backendDir, relativePath);

    // Make sure the destination folder exists
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    // Copy the file
    fs.copyFileSync(file, destPath);
  });
  console.log(`✅ Copied interfaces successfully to ${generatedClientPath}`);
}

copyFiles();