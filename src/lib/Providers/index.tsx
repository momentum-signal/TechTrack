"use client";

import * as React from "react";

import { ThemeProviderProps } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
      <Toaster />
    </SessionProvider>
  );
}
