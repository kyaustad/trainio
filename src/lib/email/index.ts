"use server";

import { Resend } from "resend";
import PasswordResetEmail from "../../../emails/password-reset";
import { env } from "@/env";
import { jsx } from "react/jsx-runtime";
import Welcome from "../../../emails/welcome";
import VerifyEmail from "../../../emails/verify-email";

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
      verificationUrl: string;
      userName: string;
    })
  | (BaseSendEmailProps & {
      email: "test";
      subject: string;
    });

export async function sendEmail({
  destination,
  ...emailProps
}: SendEmailProps) {
  // Test Email
  if (emailProps.email === "test") {
    await resend.emails.send({
      from: sender.default,
      to: destination,
      subject: emailProps.subject,
      react: jsx(Welcome, {}),
    });
  }

  // Verification Email
  if (emailProps.email === "verification") {
    await resend.emails.send({
      from: sender.verification,
      to: destination,
      subject: "Verify your email - Trainio",
      react: jsx(VerifyEmail, {
        verificationUrl: emailProps.verificationUrl,
        userName: emailProps.userName,
      }),
    });
  }
}
