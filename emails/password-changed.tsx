// src/emails/auth/PasswordChanged.tsx

import { Text } from "react-email";

import { EmailHeading } from "./components/email-heading";
import { EmailLayout } from "./components/email-layout";

interface PasswordChangedProps {
  userName?: string;
  supportUrl?: string;
}

export default function PasswordChanged({
  userName,
  supportUrl,
}: PasswordChangedProps) {
  return (
    <EmailLayout preview="Your Trainio password was changed">
      <EmailHeading>Your password was changed</EmailHeading>

      <Text style={styles.text}>{userName ? `Hi ${userName},` : "Hi,"}</Text>

      <Text style={styles.text}>
        Your Trainio account password was successfully changed.
      </Text>

      <div style={styles.notice}>
        <Text style={styles.noticeTitle}>{`Didn't make this change?`}</Text>

        <Text style={styles.noticeText}>
          {`If you didn't change your password, your account may have been
          compromised. Reset your password immediately and contact your
          administrator or Trainio support.`}
        </Text>
      </div>

      {supportUrl && (
        <Text style={styles.text}>
          <a href={supportUrl} style={styles.link}>
            Contact Trainio support
          </a>
        </Text>
      )}
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

  notice: {
    backgroundColor: "#fef2f2",
    borderRadius: "8px",
    margin: "24px 0",
    padding: "16px",
  },

  noticeTitle: {
    color: "#991b1b",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0 0 6px",
  },

  noticeText: {
    color: "#7f1d1d",
    fontSize: "13px",
    lineHeight: "20px",
    margin: 0,
  },

  link: {
    color: "#111827",
    fontWeight: "600",
  },
};
