"use server";

import { Resend } from "resend";
import PasswordResetEmail from "../../emails/password-reset";
import { env } from "@/env";
import { jsx } from "react/jsx-runtime";

const resend = new Resend(env.RESEND_API_KEY);
const sender = {
  verification: "TrainIO <verify@trainio.kyleaustad.dev>",
  default: "TrainIO <trainio@trainio.kyleaustad.dev>",
};
type BaseSendEmailProps = {
  destination: string;
};
type SendEmailProps =
  | (BaseSendEmailProps & {
      email: "verification";
      url: string;
    })
  | (BaseSendEmailProps & {
      email: "test";
      subject: string;
    });

export async function sendEmail({
  destination,
  ...emailProps
}: SendEmailProps) {
  await resend.emails.send({
    from: emailProps.email === "test" ? sender.default : sender.verification,
    to: destination,
    subject: emailProps.email === "test" ? emailProps.subject : "Test",
    react: jsx(PasswordResetEmail, {}),
  });
}
