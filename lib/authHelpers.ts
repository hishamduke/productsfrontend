import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function isLoggedIn() {
  return cookies().get("auth") != undefined;
}

export async function logoutAction() {
  "use server";
  cookies().delete("auth");
  redirect("/login");
}
