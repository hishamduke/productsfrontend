"use server";

import { ofetcher } from "@/lib/ofetcher";
import { formDataToObject } from "@/lib/utils";
import { cookies } from "next/headers";
import { z } from "zod";

export async function loginAction(formData: FormData) {
  let errorMessage = "";
  const schema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(6),
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
        errorMessage = "We could not process your request";
      }
    }
  } catch (error) {
    console.log("ERROR", JSON.stringify(error));
  } finally {
    return errorMessage;
  }
}
