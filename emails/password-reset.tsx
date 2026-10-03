// src/emails/auth/ResetPassword.tsx

import { Link, Text } from "react-email";

import { EmailButton } from "./components/email-button";
import { EmailHeading } from "./components/email-heading";
import { EmailLayout } from "./components/email-layout";

interface ResetPasswordProps {
  resetUrl: string;
  userName?: string;
}

export default function ResetPassword({
  resetUrl,
  userName,
}: ResetPasswordProps) {
  return (
    <EmailLayout preview="Reset your Trainio password">
      <EmailHeading>Reset your password</EmailHeading>

      <Text style={styles.text}>{userName ? `Hi ${userName},` : "Hi,"}</Text>

      <Text style={styles.text}>
        We received a request to reset the password for your Trainio account.
      </Text>

      <Text style={styles.text}>
        If you made this request, click the button below to choose a new
        password.
      </Text>

      <div style={styles.buttonContainer}>
        <EmailButton href={resetUrl}>Reset password</EmailButton>
      </div>

      <Text style={styles.warning}>
        {`If you didn't request a password reset, no changes have been made to
        your account. You can safely ignore this email.`}
      </Text>

      <Text style={styles.smallText}>
        {`If the button doesn't work, copy and paste this URL into your browser:`}
      </Text>

      <Link href={resetUrl} style={styles.link}>
        {resetUrl}
      </Link>
    </EmailLayout>
  );
}

const styles = {
  text: {
    color: "#374151",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0 0 16px",
  },

  warning: {
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    color: "#4b5563",
    fontSize: "13px",
    lineHeight: "20px",
    padding: "12px 16px",
    margin: "24px 0",
  },

  smallText: {
    color: "#6b7280",
    fontSize: "13px",
    lineHeight: "20px",
    margin: "20px 0 8px",
  },

  link: {
    color: "#4b5563",
    fontSize: "12px",
    lineHeight: "18px",
    wordBreak: "break-all" as const,
  },

  buttonContainer: {
    margin: "28px 0",
  },
};
