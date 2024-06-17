import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react"
import { Box, Center, ChakraProvider, Link } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import {BIZ_UDGothic} from "next/font/google"

const BIZ_UDGothicFont = BIZ_UDGothic({
  weight: "400",
  subsets: ["latin"]
})

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
        <head>
          <link
            rel="icon"
            href="/icon.svg"
            type="image/svg+xml"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon.png"
            type="image/png"
          />
          {/* <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        </head>
        <body className={BIZ_UDGothicFont.className}>
        <ChakraProvider>
          <Link href="/">
          <Image src="header.png" width={"100%"} />
          </Link>
          <Center>
          <Box width="80%">
          {children}
          </Box>
          </Center>
          </ChakraProvider>
          <Analytics />
        </body>
      </html>
  );
}
