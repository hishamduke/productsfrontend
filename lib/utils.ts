import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formDataToObject(formData: FormData) {
  let object: Record<string, any> = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return object;
}
