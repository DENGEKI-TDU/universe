import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react"
import { Box, Center, ChakraProvider, HStack, Link, VStack } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import {BIZ_UDGothic} from "next/font/google"
import { Text } from "@chakra-ui/react";
import Favicon from "/public/favicon.ico"
import Favicon_png from "/public/apple-touch-icon.png"
import Favicon_svg from "/public/favicon.svg"

const BIZ_UDGothicFont = BIZ_UDGothic({
  weight: "400",
  subsets: ["latin"]
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "でんげき×カラクリ UNI-VERSE",
  description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
  icons:[{rel: "shortct icon",url:Favicon.src},{rel:"apple-touch-icon",url:Favicon_png.src},{rel:"icon",url:Favicon_svg.src}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="jp">
        <ChakraProvider>
        <body className={BIZ_UDGothicFont.className}>
          <Link href="/">
          <Image src="/header.png" width={"100%"} />
          </Link>
          <Center>
          <Box width="80%">
          {children}
          </Box>
          </Center>
          <Analytics />
        </body>
          <Box position={"relative"} bgGradient={"linear(to-r,#69F0FD,#FE6FFD)"} width={"100%"}>
              <Center width="100%" height="100%">
                <VStack width="100%">
                  <Box width="100%" marginTop="15px">
                    <Center>
                      ©でんげき×カラクリUNI-VERSE!!実行委員会
                    </Center>
                  </Box>
                  <Box className="mainSentence" width="100%">
                    <HStack width="100%">
                      <Center width={"100%"}>
                      <Box width="40%" height="100%" margin={"5px"} borderRadius={"lg"} backgroundColor={"rgba(255,255,255,0.5)"}>
                        <VStack>
                          <Text>演劇集団でんげき</Text>
                            <Text>X:<Link href="https://x.com/TDUdramaclub">@TDUdramaclub</Link> <br/>
                            Site:<Link href="https://dengeki-fox.net">https://dengeki-fox.net</Link>
                          </Text>
                        </VStack>
                      </Box>
                      <Box width="40%" height="100%" margin={"5px"} borderRadius={"lg"} backgroundColor={"rgba(255,255,255,0.5)"}>
                        <VStack>
                          <Text>劇団カラクリ</Text>
                          <Text>
                            X:<Link href="https://x.com/tdu1000ju_pd">@tdu1000ju_pd</Link> <br/>
                            Instagram:<Link href="https://www.instagram.com/karakuri_tdu/">@karakuri_tdu</Link>
                          </Text>
                        </VStack>
                      </Box>
                      </Center>
                    </HStack>
                  </Box>
                  <Box className="mainPhoneSentence" width="100%">
                    <VStack width="100%">
                      <Box width="90%" height="100%" margin={"5px"} borderRadius={"lg"} backgroundColor={"rgba(255,255,255,0.5)"}>
                        <VStack>
                          <Text>演劇集団でんげき</Text>
                            <Text>X:<Link href="https://x.com/TDUdramaclub">@TDUdramaclub</Link> <br/>
                            Site:<Link href="https://dengeki-fox.net">https://dengeki-fox.net</Link>
                          </Text>
                        </VStack>
                      </Box>
                      <Box width="90%" height="100%" margin={"5px"} borderRadius={"lg"} backgroundColor={"rgba(255,255,255,0.5)"}>
                        <VStack>
                          <Text>劇団カラクリ</Text>
                          <Text>
                            X:<Link href="https://x.com/tdu100ju_pd">@tdu1000ju_pd</Link> <br/>
                            Instagram:<Link href="https://www.instagram.com/karakuri_tdu/">@karakuri_tdu</Link>
                          </Text>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                </VStack>
              </Center>
          </Box>
        </ChakraProvider>
      </html>
  );
}
