import { readFile, writeFile, mkdir, readdir } from 'fs/promises';
import { generate } from 'openapi-typescript-codegen';
import { join } from 'path';

async function generateClient() {
  try {
    await generate({
      input: join(process.cwd(), 'swagger.json'),
      output: join(process.cwd(), '../frontend/generated/api'),
      clientName: 'AppClient',
    });
    console.log('Next.js API client generated at ./api');

    const sourceDir = join(process.cwd(), 'custom-models/shared');
    const destinationDir = join(process.cwd(), '../frontend/generated/backend');
    await copyAndModifyFolder(sourceDir, destinationDir);

    console.log('✅ Copied custom shared.ts model to generated/models');
  } catch (err) {
    console.error('Error generating API client:', err);
    process.exit(1);
  }
}

async function copyAndModifyFolder(sourceDir: string, destinationDir: string) {
  await mkdir(destinationDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(sourceDir, entry.name);
    const destPath = join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      await copyAndModifyFolder(srcPath, destPath);
    } else {
      let content = await readFile(srcPath, 'utf-8');

      // Replace old import path with the new one
      content = content.replace(
        /from\s+['"]\.\.\/\.\.\/generated\/client['"]/g,
        `from '@/generated/api'`,
      );

      await writeFile(destPath, content, 'utf-8');
    }
  }
}

void generateClient();
