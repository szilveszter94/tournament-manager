const path = require('path');
const glob = require('glob');

const prettierDir = '../frontend/src/interfaces';
const baseDir = `../${prettierDir}`;
const generatedClientPath = path.resolve(
  __dirname,
  baseDir,
);

const generatedClientFiles = glob.sync(
  `${generatedClientPath.replace(/\\/g, '/')}/**/*.ts`,
);

module.exports = {
  prettierDir,
  generatedClientPath,
  generatedClientFiles,
};
