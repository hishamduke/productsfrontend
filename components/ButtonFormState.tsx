"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

export default function ButtonFormState({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={`w-full flex gap-2 transition `}
    >
      <LoaderCircle
        data-show={pending ? true : null}
        className={`w-5 h-5  hidden 
        data-[show]:animate-spin data-[show]:block
        `}
      />
      {children}
    </Button>
  );
}
