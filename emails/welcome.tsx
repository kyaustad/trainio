// src/emails/auth/Welcome.tsx

import { Text } from "react-email";

import { EmailButton } from "./components/email-button";
import { EmailHeading } from "./components/email-heading";
import { EmailLayout } from "./components/email-layout";

interface WelcomeProps {
  userName?: string;
  dashboardUrl: string;
}

export default function Welcome({ userName, dashboardUrl }: WelcomeProps) {
  return (
    <EmailLayout preview="Welcome to Trainio">
      <EmailHeading>
        Welcome to Trainio{userName ? `, ${userName}` : ""}
      </EmailHeading>

      <Text style={styles.text}>
        Your email has been verified and your Trainio account is ready to go.
      </Text>

      <Text style={styles.text}>
        {`Trainio gives you one place to access your training, complete courses,
          track your progress, and stay up to date with your organization.`}
      </Text>

      <div style={styles.buttonContainer}>
        <EmailButton href={dashboardUrl}>Go to Trainio</EmailButton>
      </div>

      <Text style={styles.text}>{`We're glad to have you here.`}</Text>
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

  buttonContainer: {
    margin: "28px 0",
  },
};
