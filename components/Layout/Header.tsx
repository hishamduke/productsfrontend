import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex ">
      <div className="fixed left-0 top-0  items-center w-full   border-b lg:border-0  backdrop-blur-md  pb-8 pt-8   lg:rounded-xl     ">
        <div className="container  flex justify-between ">
          <Link href={"/"}>
            <code className="font-extrabold text-3xl flex gap-2 items-start">
              <ShoppinCartIcon />
              PRODUCTS.com
            </code>
          </Link>
          <div className="px-12">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppinCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  );
}
