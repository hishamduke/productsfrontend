import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpAction } from "./signupaction";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ErrorInParams } from "@/components/error-badge";
import ButtonFormState from "@/components/ButtonFormState";

export default function Signup() {
  if (cookies().get("auth")) {
    redirect("/profile");
  }

  return (
    <form
      action={async (formData) => {
        "use server";
        const signup = await signUpAction(formData);
        if (signup) {
          redirect(`/signup?error=${signup}`);
        }
      }}
      className="space-y-2"
    >
      <div className="grid gap-2 ">
        <h1 className="text-3xl font-bold">Signup</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="mail@example.com"
            required
            name="email"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required name="password" />
        </div>

        <ErrorInParams />
        <ButtonFormState>Signup</ButtonFormState>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </form>
  );
}
