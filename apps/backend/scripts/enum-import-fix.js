const { generatedClientFiles, prettierDir } = require('./constants');
const fs = require('fs');
const { execSync } = require('child_process');

for (const file of generatedClientFiles) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/from '@prisma\/client'/g, "from './enums'");
  content = content.replace(
    /^import { ApiProperty } from '@nestjs\/swagger';\s*\n?/m,
    '',
  );
  content = content.replace(/^\s*@ApiProperty\(.*\)\s*\n?/gm, '');
  fs.writeFileSync(file, content);
}

execSync(`npx prettier --write "${prettierDir}/**/*.ts"`, {
  stdio: 'inherit',
});
console.log('✅ Enum imports are fixed successfully');
