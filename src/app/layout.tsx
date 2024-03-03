import type { Metadata } from "next";
import React from "react";
import "../styles/global.scss";
import ReduxProvider from "@/providers/ReduxProvider";
import { MobxProvider } from "@/providers/MobxProvider";
export const metadata: Metadata = {
  title: "hw7",
  description: "Generated by lldan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MobxProvider>{children}</MobxProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
