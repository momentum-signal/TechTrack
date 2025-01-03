import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/lib/Providers";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" suppressContentEditableWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
