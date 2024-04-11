import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { isLoggedIn, logoutAction } from "@/lib/authHelpers";
import { Home, HomeIcon, LogIn, LogOut, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Component, ReactElement, ReactNode } from "react";
import { Button } from "../ui/button";

export default function Navbar({}: {}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <MenuItem logo={<Home className="w-4 h-4" />} label="Home" href="/" />

        {isLoggedIn() ? (
          <form action={logoutAction}>
            <button className="w-full">
              <DropdownMenuItem className="flex gap-2">
                <LogIn className="w-4 h-4" />
                Logout
              </DropdownMenuItem>
            </button>
          </form>
        ) : (
          <MenuItem
            logo={<LogIn className="w-4 h-4" />}
            label="Login"
            href="/login"
          />
        )}

        <DropdownMenuItem>Contact us</DropdownMenuItem>
        <DropdownMenuItem>About us</DropdownMenuItem>
        <DropdownMenuItem>Terms and service</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuItem({
  label,
  logo,
  href,
}: {
  label: string;
  logo: ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <DropdownMenuItem className="flex gap-2">
        {logo}
        {label}
      </DropdownMenuItem>
    </Link>
  );
}
