import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monts = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Atif | Web Developer",
  description:
    "Explore Ahmad Atif's digital creations—a fusion of technology and creativity, inviting you on a captivating journey through the world of web development.",
  generator: "Next.js",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#082f49",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  );
}
