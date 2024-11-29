import { routes } from "@/routes";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tech Track",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    { name: "Home", href: routes.HOME },
    { name: "Internships", href: routes.INTERNSHIPS },
    { name: "About", href: routes.ABOUT },
    { name: "Dashboard", href: routes.DASHBOARD },
  ],
};
