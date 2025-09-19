import type { Config } from 'drizzle-kit';

export default {
  out: './drizzle',
  schema: './database/schema.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    databaseId: 'd1d20d11-1d8f-4ef8-9d87-4596505bb7b3',
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    token: process.env.CLOUDFLARE_TOKEN!,
  },
} satisfies Config;
