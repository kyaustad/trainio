// src/emails/auth/VerifyEmail.tsx

import { Link, Text } from "react-email";

import { EmailButton } from "./components/email-button";
import { EmailHeading } from "./components/email-heading";
import { EmailLayout } from "./components/email-layout";

interface VerifyEmailProps {
  verificationUrl: string;
  userName?: string;
}

export default function VerifyEmail({
  verificationUrl,
  userName,
}: VerifyEmailProps) {
  return (
    <EmailLayout preview="Verify your email address for Trainio">
      <EmailHeading>Verify your email address</EmailHeading>

      <Text style={styles.text}>{userName ? `Hi ${userName},` : "Hi,"}</Text>

      <Text style={styles.text}>
        Thanks for signing up for Trainio. Before you can start using your
        account, we need to verify your email address.
      </Text>

      <Text style={styles.text}>
        Click the button below to verify your email address.
      </Text>

      <div style={styles.buttonContainer}>
        <EmailButton href={verificationUrl}>Verify email address</EmailButton>
      </div>

      <Text style={styles.smallText}>
        {`This verification link will expire for security reasons. If the button
          doesn't work, copy and paste the following URL into your browser:`}
      </Text>

      <Link href={verificationUrl} style={styles.link}>
        {verificationUrl}
      </Link>

      <Text style={styles.smallText}>
        {`If you didn't create a Trainio account, you can safely ignore this
          email.`}
      </Text>
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

  smallText: {
    color: "#6b7280",
    fontSize: "13px",
    lineHeight: "20px",
    margin: "24px 0 8px",
  },

  buttonContainer: {
    margin: "28px 0",
  },

  link: {
    color: "#4b5563",
    fontSize: "12px",
    lineHeight: "18px",
    wordBreak: "break-all" as const,
  },
};
