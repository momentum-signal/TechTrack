import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/lib/Providers";
// import clsx from "clsx";

export const metadata: Metadata = {
  title: "Tech Track",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
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

// <html lang="en" className="antialiased">
//   <head>
//     <meta name="color-scheme" content="light dark" />
//   </head>
//   <body
//   //  className={`${geistSans.variable} ${geistMono.variable}`}
//   >
//     {/* <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       {children}
//     </ThemeProvider>
//     <Toaster /> */}

//     <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
//       {children}
//     </Providers>
//   </body>
// </html>
