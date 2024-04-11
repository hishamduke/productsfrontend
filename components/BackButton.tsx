import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function BackButton() {
  return (
    <Link href={"/"} className="hover:scale-105 transition">
      <ArrowLeft />
    </Link>
  );
}
