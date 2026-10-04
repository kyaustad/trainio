import { auth } from "@/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const noSession = session?.session === undefined;
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {process.versions.bun}
      {`\n`}
      <br></br>
      {noSession ? "No Session" : "Session Indeed"}
    </div>
  );
}
