import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import '@mantine/core/styles.css';
import { theme } from "../../theme"

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { AppProvider } from "../../context/appContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "E-Comm",
  description: "E-Comm Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* <QueryClientProvider client={queryClient}> */}
          <MantineProvider theme={theme}>
            <AppProvider>
              {children}
            </AppProvider>
          </MantineProvider>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
