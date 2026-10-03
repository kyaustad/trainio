import { Button } from "react-email";

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
}

export function EmailButton({ href, children }: EmailButtonProps) {
  return (
    <Button href={href} style={styles.button}>
      {children}
    </Button>
  );
}

const styles = {
  button: {
    backgroundColor: "#111827",
    borderRadius: "8px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "600",
    padding: "12px 20px",
    textDecoration: "none",
  },
};
