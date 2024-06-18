import Image from "next/image";
import { Heading, Text, Center, VStack, Box, Link, Stack, Card, CardBody, CardHeader, StackDivider } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <>
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
      <main>
        <Center>
          <Box className="mainSentence">
            <Heading>みんなでつくる、<Text bgGradient="linear(to-r,#00BFFF,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>それぞれの</Text>世界。<br/>
            みんなとつくる、<Text bgGradient="linear(to-r,#FE6FFD,#00BFFF)" bgClip="text" as="span" fontWeight={"extrabold"}>ひとつの</Text>世界。</Heading>
          </Box>
          <Box className="mainPhoneSentence">
            <Heading fontSize={"lg"}>みんなでつくる、<Text bgGradient="linear(to-r,#00BFFF,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>それぞれの</Text>世界。<br/>
            みんなとつくる、<Text bgGradient="linear(to-r,#FE6FFD,#00BFFF)" bgClip="text" as="span" fontWeight={"extrabold"}>ひとつの</Text>世界。</Heading>
          </Box>
        </Center>
        <Box width={"100%"} height={"5px"} marginTop="5px" marginBottom="5px" bgGradient={"linear(to-r,#69F0FD,#FE6FFD)"}></Box>
        <VStack>
        <Text>
        <Text bgGradient="linear(to-r,#00BFFF,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text>計画は、東京電機大学鳩山キャンパス演劇部<Text as="span" fontWeight={"extrabold"}>演劇集団【でんげき】</Text>と、東京電機大学東京千住キャンパス演劇部<Text as="span" fontWeight={"extrabold"}>劇団カラクリ</Text>が一つになって、一つの劇空間を創る計画です。
        </Text>
        <Box border="linear(to-tr,#00BFFF,#FE6FFD) solid 3px">
          <Text fontSize={"lg"}>今年のUNI-VERSE計画詳細は<Link href="/2024" color="white" fontWeight={"bold"} bgClip={"text"} bgGradient={"linear(to-r,#00BFFF,#FE6FFD)"} borderBottom={"3px solid #00BFFF"}>こちら！</Link></Text>
          <Text fontSize={"lg"}>UNI-VERSE計画の詳細は<Link href="/about" color="white" fontWeight={"bold"} bgClip={"text"} bgGradient={"linear(to-r,#FE6FFD,#00BFFF)"} borderBottom={"3px solid #FE6FFD"}>こちら！</Link></Text>
        </Box>
        <Box bgGradient={"linear(to-tl,#69F0FD,#FE6FFD)"} marginTop="20px" color="black" borderRadius={"lg"} marginBottom="10px">
        <Card margin="5px">
          <CardHeader>
            <Heading size='md'>参加団体SNS・サイトなど
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='sm' textTransform='uppercase'>
                  演劇集団【でんげき】
                </Heading>
                <Box marginTop={"5px"} borderColor={"#fc8819"} borderWidth={"1px"} borderRadius={"lg"}>
                <Heading margin="3px" size='xs' textTransform='uppercase'>
                  X
                </Heading>
                <Text margin="3px" pt='2' fontSize='sm'>
                  <Link href="https://x.com/tdudramaclub" target="_blank" color="blue">@TDUdramaclub</Link>
                </Text>
                <Heading margin="3px" size='xs' textTransform='uppercase'>
                  公式サイト
                </Heading>
                <Text margin="3px" pt='2' fontSize='sm'>
                  <Link href="https://dengeki-fox.net" target="_blank" color="blue">https://dengeki-fox.net</Link>
                </Text>
                </Box>
              </Box>
              <Box>
                <Heading size='sm' textTransform='uppercase'>
                  劇団カラクリ
                </Heading>
                <Box marginTop={"5px"} borderColor={"#1e1e1e"} borderWidth={"1px"} borderRadius={"lg"}>
                <Heading margin="3px" size='xs' textTransform='uppercase'>
                  X
                </Heading>
                <Text margin="3px" pt='2' fontSize='sm'>
                  <Link href="https://x.com/tdu1000ju_pd" target="_blank" color="blue">@tdu1000ju_pd</Link>
                </Text>
                <Heading margin="3px" size='xs' textTransform='uppercase'>
                  instagram
                </Heading>
                <Text margin="3px" pt='2' fontSize='sm'>
                  <Link href="https://www.instagram.com/karakuri_tdu/" target="_blank" color="blue">@karakuri_tdu</Link>
                </Text>
                </Box>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        </Box>
        </VStack>
      </main>
    </>
  );
}
