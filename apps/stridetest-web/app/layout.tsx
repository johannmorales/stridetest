"use client";
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { ContentWrapper } from "@/components/content-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-[#F6FAFD]",
          fontSans.variable,
        )}
      >
        <Providers>
          <ContentWrapper>{children}</ContentWrapper>
        </Providers>
      </body>
    </html>
  );
}
