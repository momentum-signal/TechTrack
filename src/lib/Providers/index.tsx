"use client";

import * as React from "react";

import { ThemeProviderProps } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider {...themeProps}>{children}</ThemeProvider>
        <Toaster />
      </QueryClientProvider>
    </SessionProvider>
  );
}
