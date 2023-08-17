import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from '@vercel/analytics/react';
import "../globals.css";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SigmaGram',
  description: 'Socialmedia for sigmas',
  icons: { icon: '/assets/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {

          helpPageUrl: "https://clerk.com/support",

          logoImageUrl: "https://clerk.com/logo.png",

          logoPlacement: "outside",

          privacyPageUrl: "https://clerk.com/privacy",

          showOptionalFields: true,

          socialButtonsPlacement: "bottom",

          socialButtonsVariant: "iconButton",

          termsPageUrl: "https://clerk.com/terms",

            }
      }}
    >
      
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
        <Topbar/>
          <div className="w-full pt-18">
          <div>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
    <Analytics />
    
    </>
  );
}