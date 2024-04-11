"use server";

import { ofetcher } from "@/lib/ofetcher";
import { formDataToObject } from "@/lib/utils";
import { cookies } from "next/headers";
import { ZodError, z } from "zod";

export async function signUpAction(formData: FormData) {
  let errorMessage = "We could not process your request";
  const schema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(6, "Password must contain minimun of 6 letters"),
  });

  try {
    const data = schema.parse(formDataToObject(formData));
    const req = await ofetcher("/auth/signup", { method: "post", body: data });

    if (req.token) {
      cookies().set("auth", req.token);
      return false;
    } else {
      if (req.errorResponse?.code == 11000) {
        errorMessage =
          "This email is taken, Please login or use another email.";
      }
    }
  } catch (error) {
    if (error instanceof ZodError) {
      if (error.errors[0].message) {
        errorMessage = error.errors[0]?.message;
      }
    }
  } finally {
    return errorMessage;
  }
}
