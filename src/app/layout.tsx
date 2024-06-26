import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnchorLink from "./_components/AnchorLink";
import Link from "next/link";
import Footer from "./_components/_dumbComponents/Footer";
import Nav from "./_components/_dumbComponents/Nav";
import { Toaster } from "sonner";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AéroDéco",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins_init.variable}>
        <link rel="icon" href="/bg.png" sizes="any" />
        <Analytics></Analytics>

        <Nav></Nav>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
