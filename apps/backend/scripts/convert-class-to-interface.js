const { generatedClientFiles } = require('./constants');
const fs = require('fs');

for (const file of generatedClientFiles) {
  let content = fs.readFileSync(file, 'utf-8');

  // Remove class declaration and replace with interface
  content = content.replace(/export class (\w+)/g, 'export interface $1');

  // Remove definite assignment assertions or constructor stubs
  content = content.replace(/!:/g, ':');
  fs.writeFileSync(file, content, 'utf-8');
}
console.log('✅ DTO classes converted to interfaces.');
