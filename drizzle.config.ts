import { defineConfig } from "drizzle-kit"


if (!process.env.DATABASE_URL) {
    throw new Error('Database URL not found. Please set DRIZZLE_DATABASE_URL in your environment variables.');
}

export default defineConfig({
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL
    },
    verbose: true,
    strict: true,
});

