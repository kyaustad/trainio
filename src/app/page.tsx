import { SignUpForm } from "@/components/auth";
import ThemeToggle from "@/components/custom/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ThemeToggle className="absolute top-4 right-4" />
      <SignUpForm />
    </div>
  );
}
