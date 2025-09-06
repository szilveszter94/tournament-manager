const { generatedClientPath } = require('./constants');
const { removeDirRecursive } = require('./remove-dir');

removeDirRecursive(generatedClientPath);
console.log(`✅ Deleted old generated files from: ${generatedClientPath}`);
