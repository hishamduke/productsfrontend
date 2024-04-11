"use client";

import { Badge } from "@/components/ui/badge";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";

export function ErrorInParams() {
  const searchParams = useSearchParams();
  const errorMsg = searchParams.get("error");
  const path = usePathname();

  if (errorMsg)
    return (
      <div className="mx-auto">
        <Badge
          className="border-red-200 text-red-500 flex gap-2 py-2"
          variant="outline"
        >
          {errorMsg}{" "}
          <Link href={path}>
            <XIcon className="w-4 h-4 cursor-pointer" />
          </Link>
        </Badge>
      </div>
    );
}
