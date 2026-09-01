import "dotenv/config";
import type { Config } from "drizzle-kit";

const url = process.env.DATABASE_URL as string;
const isRemote =
	url?.includes("supabase.co") ||
	url?.includes("supabase.com") ||
	url?.includes("sslmode=require");

export default {
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	dialect: "postgresql",
	dbCredentials: {
		url,
		ssl: isRemote ? { rejectUnauthorized: false } : false,
	},
} satisfies Config;
