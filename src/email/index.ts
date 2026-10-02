"use server";

import { Resend } from "resend";
import PasswordResetEmail from "../../emails/password-reset";
import { env } from "@/env";
import { jsx } from "react/jsx-runtime";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendTestEmail({ destination }: { destination: string }) {
  await resend.emails.send({
    from: "Trainio <trainio@trainio.kyleaustad.dev>",
    to: destination,
    subject: "Test",
    react: jsx(PasswordResetEmail, {}),
  });
}
