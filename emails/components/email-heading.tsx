// src/emails/components/EmailHeading.tsx

import { Heading } from "react-email";

interface EmailHeadingProps {
  children: React.ReactNode;
}

export function EmailHeading({ children }: EmailHeadingProps) {
  return <Heading style={styles.heading}>{children}</Heading>;
}

const styles = {
  heading: {
    color: "#111827",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    lineHeight: "32px",
    margin: "0 0 16px",
  },
};
