import { createAccessControl } from "better-auth/plugins/access";
import {
  defaultStatements,
  adminAc,
  userAc,
} from "better-auth/plugins/admin/access";

// Permissions
const statement = {
  ...defaultStatements,
  organization: ["update", "change-billing", "delete"],
  course: ["create", "update", "delete", "view"],
  team: ["create", "update", "delete", "add-user", "remove-user"],
} as const;

export const ac = createAccessControl(statement);

export const admin = ac.newRole({
  organization: ["update", "change-billing", "delete"],
  course: ["create", "update", "delete", "view"],
  team: ["create", "update", "delete", "add-user", "remove-user"],
  ...adminAc.statements,
});

export const user = ac.newRole({
  course: ["view"],
  ...userAc.statements,
});

export const manager = ac.newRole({
  team: ["add-user", "remove-user"],
  ...user.statements,
});

export const creator = ac.newRole({
  course: ["create", "update", "delete", "view"],
  ...userAc.statements,
});
