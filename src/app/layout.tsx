import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "でんげき×カラクリ UNI-VERSE",
  description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  );
}
