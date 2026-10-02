import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { waitUntil } from "@vercel/functions";
import { sendTestEmail } from "@/email";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  advanced: {
    backgroundTasks: {
      handler: waitUntil,
    },
  },
  emailAndPassword: {
    enabled: true,
  },

  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendTestEmail({ destination: "kylaustad@gmail" });
    },
  },
});
