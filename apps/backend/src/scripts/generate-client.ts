import { generate } from 'openapi-typescript-codegen';
import { join } from 'path';

async function generateClient() {
  try {
    await generate({
      input: join(process.cwd(), 'swagger.json'),
      output: join(process.cwd(), '../frontend/generated/services/api'),
      clientName: 'AppClient',
    });
    console.log('Next.js API client generated at ./services/api');
  } catch (err) {
    console.error('Error generating API client:', err);
    process.exit(1);
  }
}

void generateClient();
