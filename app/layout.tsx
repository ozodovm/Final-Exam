import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/react-query/QueryProvider";
import { ContextProvider } from "@/context/Context";
import { lazy, Suspense } from "react";

// Componentlarni lazy loading yordamida import qilish
const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ContextProvider>
            <Suspense fallback={<div>Loading Header...</div>}>
              <Header />
            </Suspense>
            {children}
            <Suspense fallback={<div>Loading Footer...</div>}>
              <Footer />
            </Suspense>
          </ContextProvider>
        </Providers>
      </body>
    </html>
  );
}