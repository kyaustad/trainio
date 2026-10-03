import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { waitUntil } from "@vercel/functions";
import { sendEmail } from "@/lib/email";
import { admin as adminPlugin } from "better-auth/plugins/admin";
import { ac, admin, user, manager, creator } from "./permissions";

export const auth = betterAuth({
  plugins: [
    adminPlugin({
      ac,
      roles: {
        admin,
        user,
        manager,
        creator,
      },
      adminRoles: ["admin", "manager"],
    }),
  ],
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
    requireEmailVerification: true,
    // onExistingUserSignUp: async ({ user }) => {
    //   // Someone attempted to create an account using an existing users.
    // },
    customSyntheticUser: ({ coreFields, additionalFields, id }) => ({
      ...coreFields,
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      ...additionalFields,
      id,
    }),
  },

  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      void sendEmail({
        email: "verification",
        destination: user.email,
        userName: user.name,
        verificationUrl: url,
      });
    },
  },
});
