import ButtonFormState from "@/components/ButtonFormState";
import { ofetcher } from "@/lib/ofetcher";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FetchError } from "ofetch";
import React from "react";
import jwt from "jsonwebtoken";

function formatDate(dateString: string | number) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: January is 0
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
}

async function Page() {
  const authCookie = cookies().get("auth");
  const req = await ofetcher("/auth/me", {
    headers: { Authorization: authCookie?.value ?? "" },
  }).catch((e: FetchError) => {
    if (e.data?.message?.includes("Unauthorized")) {
      redirect("/login");
    }
  });
  const cook = authCookie;
  const decodedCookie = jwt.decode(cook?.value ?? "");
  let expiry = 0;
  if (decodedCookie instanceof Object) {
    expiry = (decodedCookie.exp ?? 0) * 1000;
  }

  return (
    <div className="h-full   mt-10 lg:mt-0">
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your profile
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

        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
            Profile create on
          </p>
          <p className="leading-7 ">{formatDate(req.user?.createdAt)}</p>
        </div>

        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
            Session validity
          </p>
          <p className="leading-7 ">{formatDate(expiry)}</p>
        </div>

        <ButtonFormState>Logout</ButtonFormState>
      </form>
    </div>
  );
}

export default Page;
