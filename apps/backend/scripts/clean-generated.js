const fs = require('fs');
const path = require('path');
const { generatedClientPath } = require('./constants');

function removeDirRecursive(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDirRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

removeDirRecursive(generatedClientPath);
console.log(`✅ Deleted old generated files from: ${generatedClientPath}`);
