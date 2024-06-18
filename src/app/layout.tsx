import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react"
import { Box, Center, ChakraProvider, HStack, Link, VStack } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import {BIZ_UDGothic} from "next/font/google"
import { Text } from "@chakra-ui/react";

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
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/vnd.microsoft.icon"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png" 
          />
          <meta property="og:title" content="でんげき×カラクリUNI-VERSE!!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://universe.dengeki-fox.net" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="でんげき×カラクリUNI-VERSE!!" />
          <meta name="twitter:site" content="@TDUdramaclub" />
          <meta name="twitter:creator" content="@TDUdramaclub" />
          <meta
            name="twitter:image"
            content="https://universe.dengeki-fox.net/logo.png"
          />
          <meta
            property="og:image"
            content="https://universe.dengeki-fox.net/logo.png"
          />
        </head>
        <ChakraProvider>
        <body className={BIZ_UDGothicFont.className}>
          <Link href="/">
          <Image src="header.png" width={"100%"} />
          </Link>
          <Center>
          <Box width="80%">
          {children}
          </Box>
          </Center>
          <Analytics />
        </body>
        <footer>
          <Box bgGradient={"linear(to-r,#69F0FD,#FE6FFD)"} width={"100%"}>
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
                            X:<Link href="https://x.com/tdu100ju_pd">@tdu1000ju_pd</Link> <br/>
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
        </footer>
        </ChakraProvider>
      </html>
  );
}
