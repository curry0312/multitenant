"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:border-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn(poppins.className, "text-5xl font-semibold")}>
          funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="hidden items-center gap-4 lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={item.href === pathname}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button
          asChild
          variant="default"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}
