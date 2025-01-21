import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/commons/layouts";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata: Metadata = {
  title: "코드셰이퍼",
  description: "당신의 비즈니스를 현실로",
};

export default function RootLayout({
  children,
  drawer
}: Readonly<{
  children: React.ReactNode,
  drawer:  React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {drawer}
          <Layout>
            {children}
          </Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
