"use server";

import { ofetcher } from "@/lib/ofetcher";
import { formDataToObject } from "@/lib/utils";
import { cookies } from "next/headers";
import { ZodError, z } from "zod";

export async function loginAction(formData: FormData) {
  let errorMessage = "";
  const schema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(6, "Password must contain minimun of 6 letters"),
  });

  try {
    const data = schema.parse(formDataToObject(formData));
    const req = await ofetcher("/auth/login", { method: "post", body: data });

    if (req.token) {
      cookies().set("auth", req.token);
      return false;
    } else {
      const error = req?.error;
      if (error) {
        if (typeof error == "string") {
          errorMessage = error;
        }
      } else {
        errorMessage = "We could not process your request";
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
