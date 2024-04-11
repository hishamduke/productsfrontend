import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "./loginAction";
import { redirect } from "next/navigation";
import { ErrorInParams } from "@/components/error-badge";
import ButtonFormState from "@/components/ButtonFormState";

export default function Login() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const loginError = await loginAction(formData);
        if (loginError) {
          redirect(`/login?error=${loginError}`);
        } else {
          redirect("/profile");
        }
      }}
    >
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
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
            name="email"
            placeholder="mail@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required name="password" />
        </div>
        <ErrorInParams />

        <ButtonFormState>Login</ButtonFormState>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
}
