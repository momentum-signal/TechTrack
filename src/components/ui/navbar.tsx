"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { routes } from "@/lib/routes";
import { Logo } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "../theme/theme-toggle";

const navItems = [
  { name: "Home", href: routes.HOME },
  { name: "Internships", href: routes.INTERNSHIPS },
  { name: "About", href: routes.ABOUT },
  { name: "Dashboard", href: routes.DASHBOARD },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const user = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-14 px-5 md:px-10 lg:px-20 items-center justify-between w-full">
        {/* App Logo */}
        <div className="flex items-center gap-2">
          <Logo />
          <h2 className="font-medium text-xl">TechTrack</h2>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
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

        <div className="flex justify-between items-end gap-4">
          {/* Search Bar and Profile */}
          {/* <div className="relative hidden md:flex">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 bg-muted pl-8"
            />
          </div> */}

          {/* Light & Dark toggle button */}
          <ThemeToggle />
          {user ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Button className="hidden sm:inline-flex">
              <Link href={routes.LOGIN}>Login</Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2">
                  <Logo />
                  <h2 className="font-medium text-xl">TechTrack</h2>
                </div>

                <div className="relative mt-8">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 bg-muted pl-8"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                  {!user && (
                    <Button className="w-full">
                      <Link href={routes.LOGIN}>Login</Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
