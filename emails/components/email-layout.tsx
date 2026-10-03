// src/emails/components/EmailLayout.tsx

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";
import type { ReactNode } from "react";

interface EmailLayoutProps {
  preview: string;
  children: ReactNode;
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.logo}>trainio</Text>
          </Section>

          <Section style={styles.content}>{children}</Section>

          <Hr style={styles.hr} />

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              This email was sent by Trainio.
            </Text>

            <Text style={styles.footerText}>
              {`If you didn't request this email, you can safely ignore it.`}
            </Text>

            <Text style={styles.footerBrand}>© Trainio</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f5f7fa",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    margin: 0,
    padding: "40px 20px",
  },

  container: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    margin: "0 auto",
    maxWidth: "600px",
    overflow: "hidden" as const,
  },

  header: {
    padding: "28px 40px 20px",
  },

  logo: {
    color: "#111827",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    margin: 0,
  },

  content: {
    padding: "20px 40px 32px",
  },

  hr: {
    borderColor: "#e5e7eb",
    margin: 0,
  },

  footer: {
    padding: "24px 40px 30px",
  },

  footerText: {
    color: "#6b7280",
    fontSize: "12px",
    lineHeight: "18px",
    margin: "0 0 6px",
  },

  footerBrand: {
    color: "#9ca3af",
    fontSize: "12px",
    margin: "16px 0 0",
  },
};
