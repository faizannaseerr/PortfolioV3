import type { Metadata } from "next";
import "./globals.css";
import Loading from "@/components/Loading";
import Delay from "@/components/Delay";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Faizan Naseer",
  description: "Faizan Naseer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-screen sm:py-12 sm:px-20 py-8 px-8 bg-[#F8F8F8]"
      >
        <Loading />
        <Delay children={children} />
        <Analytics />
        {/* {children} */}
      </body>
    </html>
  );
}
