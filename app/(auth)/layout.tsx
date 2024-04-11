import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] ">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6 ">{children}</div>
      </div>
      <div className="hidden bg-gradient-to-r from-blue-100 to-cyan-100 lg:block"></div>
    </div>
  );
}
