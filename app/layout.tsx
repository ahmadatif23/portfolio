import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/shared/Navbar";

const monts = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Atif | Web Developer",
  description:
    "Explore Ahmad Atif's digital creations—a fusion of technology and creativity, inviting you on a captivating journey through the world of web development.",
  generator: "Next.js",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#e0fbfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monts.className + " bg-theme-3 text-theme-5"}>
        <main className="flex min-h-[100dvh] w-screen flex-col">
          <Navbar />

          <div className="flex h-full w-full flex-1 items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
