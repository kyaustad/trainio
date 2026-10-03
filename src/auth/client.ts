import { createAuthClient } from "better-auth/react";
import { env } from "@/env";
import { adminClient } from "better-auth/client/plugins";
import { ac, admin, user, manager, creator } from "@/auth/permissions";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: env.NEXT_PUBLIC_BASE_URL,
  plugins: [
    adminClient({
      ac,
      roles: {
        admin,
        user,
        manager,
        creator,
      },
    }),
  ],
});
