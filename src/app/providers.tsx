import { Toaster } from "sonner";
import { ReactNode, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/shadcn/tooltip";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
      <Toaster richColors />
      <Suspense fallback={<div>{`Loading Placeholder...`}</div>}>
        <TooltipProvider>{children}</TooltipProvider>
      </Suspense>
    </ThemeProvider>
  );
}
