"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "@/components/theme/theme-toggle";
import { routes } from "@/routes";
import { Logo } from "@/assets/icons";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: routes.HOME },
  { name: "Internships", href: routes.INTERNSHIPS },
  { name: "About", href: routes.ABOUT },
  { name: "Dashboard", href: routes.DASHBOARD },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-14 items-center justify-between px-10">
        {/* App Logo */}
        <div className="flex items-center gap-2">
          <Logo />
          <h2 className="font-medium text-xl">TechTrack</h2>
        </div>
        {/* Nav Items  */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Search Bar and Profile */}
        <div className="flex justify-between items-end gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 bg-muted pl-8"
            />
          </div>
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Button>
            <Link href={routes.LOGIN}>Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
