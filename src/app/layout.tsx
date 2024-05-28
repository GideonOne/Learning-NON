"use client"

import type { Metadata } from "next";
import './globals.css'
import '@mantine/core/styles.css';
import { useEffect, useState } from "react";
import { theme } from "../../theme"
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { AppProvider } from "../../context/appContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const metadata: Metadata = {
  title: "E-Comm",
  description: "E-Comm Application",
};
const queryClient = new QueryClient();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);

  useEffect(() => {
    const client = new QueryClient();
    setQueryClient(client);
    return () => {
      client.clear();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        {queryClient && (
          <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
              <AppProvider>
                {children}
              </AppProvider>
            </MantineProvider>
          </QueryClientProvider>
        )}
      </body>
    </html>
  );
}
