import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export function loadEnv() {
  // Load base .env
  dotenv.config();

  const envName = process.env.ENV || 'qa';
  const envFile = `${envName}.env`;

  const envPath = path.resolve(process.cwd(), envFile);

  if (!fs.existsSync(envPath)) {
    throw new Error(`❌ Environment file not found: ${envFile}`);
  }

  dotenv.config({ path: envPath });

  console.log(`✅ Loaded environment: ${envFile}`);
}