"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Paperclip, User } from "lucide-react";

import { routes } from "@/lib/routes";

const paths = [
  { path: routes.DASHBOARD, label: "Dashboard", icon: Home },
  { path: routes.APPLICATION, label: "Applications", icon: Paperclip },
  { path: routes.PROFILE, label: "Profile", icon: User },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden h-screen border-r bg-muted/40 md:block py-3">
      <div className="flex h-full flex-col gap-2">
        {/* Sidebar Navigation */}
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {paths.map(({ path, label, icon: Icon }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
