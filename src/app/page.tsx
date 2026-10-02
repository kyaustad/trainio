"use client";

import { Button } from "@/components/shadcn/button";
import { sendTestEmail } from "@/email";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button
        onClick={async () => {
          await sendTestEmail({ destination: "kyleaustad@gmail.com" });
        }}
      >
        Send Test email
      </Button>
    </div>
  );
}
