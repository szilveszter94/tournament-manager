import { copyFile, mkdir } from 'fs/promises';
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

    const source = join(process.cwd(), 'custom-models/shared.ts');
    const destinationDir = join(process.cwd(), '../frontend/generated/backend');
    const destination = join(destinationDir, 'shared.ts');

    await mkdir(destinationDir, { recursive: true });
    await copyFile(source, destination);

    console.log('✅ Copied custom shared.ts model to generated/models');
  } catch (err) {
    console.error('Error generating API client:', err);
    process.exit(1);
  }
}

void generateClient();
