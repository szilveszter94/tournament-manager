const path = require('path');
const glob = require('glob');

const prettierDir = '../frontend/src/interfaces';
const frontendDir = `../${prettierDir}`;
const backendDir = path.resolve(__dirname, '../generated/interfaces');
const generatedClientPath = path.resolve(__dirname, frontendDir);

const generatedClientFiles = glob.sync(
  `${generatedClientPath.replace(/\\/g, '/')}/**/*.ts`,
);

module.exports = {
  backendDir,
  frontendDir,
  prettierDir,
  generatedClientPath,
  generatedClientFiles,
};
