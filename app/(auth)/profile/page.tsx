import { Button } from "@/components/ui/button";
import { ofetcher } from "@/lib/ofetcher";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const req = await ofetcher("/auth/me", {
    headers: { Authorization: cookies().get("auth")?.value ?? "" },
  });

  return (
    <div className="h-full   mt-10 lg:mt-0">
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        User profile{" "}
      </h2>
      <form
        action={async () => {
          "use server";
          cookies().delete("auth");
          redirect("/login");
        }}
        className=" flex flex-col gap-4 "
      >
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
            Email
          </p>
          <p className="leading-7 ">{req?.user?.email}</p>
        </div>

        <Button>Logout</Button>
      </form>
    </div>
  );
}

export default Page;