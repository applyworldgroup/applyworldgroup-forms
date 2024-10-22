"use client";import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Forms", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="border-b bg-secondary w-full">
      <div className="container max-w-7xl mx-auto  px-4 sm:px-6  lg:px-8 flex items-center justify-between">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                width={80}
                height={60}
                src="/our-company.png"
                alt="Logo"
                className="transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <ModeToggle />
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
