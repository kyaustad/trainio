import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { db } from "@/db"; // your drizzle instance
import { waitUntil } from "@vercel/functions";
import { sendEmail } from "@/lib/email";
import { admin as adminPlugin } from "better-auth/plugins/admin";
import { ac, admin, user, manager, creator } from "./permissions";
import * as schema from "@/db/schema";

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
      defaultRole: "admin",
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: schema,
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

  // Additional Fields
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
      fName: {
        type: "string",
        input: true,
      },
      lName: {
        type: "string",
        input: true,
      },
    },
  },
});
