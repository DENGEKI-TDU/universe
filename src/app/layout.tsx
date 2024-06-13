import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react"
import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"

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
        <body>
        <ChakraProvider>
          <Image src="header.png" width={"100%"} />
          <Center>
          <Box width="80%">
          {children}
          </Box>
          </Center>
          </ChakraProvider>
        </body>
      </html>
  );
}
