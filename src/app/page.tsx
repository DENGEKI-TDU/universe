import Image from "next/image";
import { Heading, Text, Center, VStack, Box, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Center>
        <VStack>
        <Heading>みんなでつくる、<Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>それぞれの</Text>世界。<br/>
        みんなとつくる、<Text bgGradient="linear(to-r,#FE6FFD,#69F0FD)" bgClip="text" as="span" fontWeight={"extrabold"}>ひとつの</Text>世界。</Heading>
        </VStack>
      </Center>
      <Box width={"100%"} height={"5px"} marginTop="5px" marginBottom="5px" bgGradient={"linear(to-r,#69F0FD,#FE6FFD)"}></Box>
      <VStack>
      <Text>
      <Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text>計画は、東京電機大学鳩山キャンパス演劇部<Text as="span" fontWeight={"extrabold"}>演劇集団【でんげき】</Text>と、東京電機大学東京千住キャンパス演劇部<Text as="span" fontWeight={"extrabold"}>劇団カラクリ</Text>が一つになって、一つの劇空間を創る計画です。
      </Text>
      <Text>今年のUNI-VERSE計画詳細は<Link href="/2024" color="white" fontWeight={"bold"} bgClip={"text"} bgGradient={"linear(to-r,#69F0FD,#FE6FFD)"}>こちら！</Link></Text>
      <Text>UNI-VERSE計画の詳細は<Link href="/about" color="white" fontWeight={"bold"} bgClip={"text"} bgGradient={"linear(to-r,#FE6FFD,#69F0FD)"}>こちら！</Link></Text>
      </VStack>
    </main>
  );
}
