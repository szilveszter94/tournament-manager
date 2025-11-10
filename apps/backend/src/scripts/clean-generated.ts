import { rm, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

async function exists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function cleanGenerated() {
  const dirs = [
    join(process.cwd(), 'generated/client'),
    join(process.cwd(), 'generated/models'),
    join(process.cwd(), '../frontend/generated/api'),
    join(process.cwd(), '../frontend/generated/backend'),
  ];

  for (const dir of dirs) {
    if (await exists(dir)) {
      try {
        await rm(dir, { recursive: true, force: true });
        console.log(`🧹 Cleaned: ${dir}`);
      } catch (err) {
        console.warn(`⚠️ Failed to clean ${dir}:`, err);
      }
    } else {
      console.log(`ℹ️ Skipped (not found): ${dir}`);
    }
  }

  console.log('✅ All generate directories processed.');
}

void cleanGenerated();
