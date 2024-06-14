import { Box, Center, Image, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Main() {
  return (
    <>
      <Center>
        <Heading><Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text>計画って？</Heading>
      </Center>
      <Box className="aboutCard">
        <Center width="100%" height="100%">
          <HStack width="100%" height={"100%"}>
          <Box width={"5px"} height={"500px"} marginRight={"3%"} bgGradient={"linear(to-b,#69F0FD,#FE6FFD)"} />
          <Text marginTop="10px" width={"94%"}>
          「みんなの想い、もっと見せて、聴かせて。」<br/>
          これがこの計画の始まりです。<br />
          <br />
          演劇集団【でんげき】、劇団カラクリ。<br/>
          それぞれの特色あふれる演劇部の、特色あふれる舞台。<br />
          部員みんなからあふれ出る心の声、舞台にかける思い。<br/>
          それらを組み合わせて、それぞれの演劇部の特徴が入り混じった一つの劇空間を創ってみない？<br />
          そんな空間創りの計画、<br/>
          <Text as="span" fontSize={"2xl"}><Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text>計画。</Text>
          </Text>
          <Box width={"5px"} height={"500px"} marginLeft={"3%"} bgGradient={"linear(to-t,#69F0FD,#FE6FFD)"} />
          </HStack>
        </Center>
      </Box>
      <Box className="phoneAboutCard">
        <Center>
          <Box bgGradient={"linear(to-br,#69F0FD,#FE6FFD)"} width={"100%"} color="black" borderRadius={"xl"}>
            <Box marginTop={"25px"} marginRight={"20px"} marginLeft={"20px"} backgroundColor={"rgba(255,255,255,0.85)"} borderRadius={"xl"}>
              <Center>
                <Text marginTop="10px" width={"94%"}>
                  「みんなの想い、もっと見せて、聴かせて。」<br/>
                  これがこの計画の始まりです。<br />
                  <br />
                  演劇集団【でんげき】、劇団カラクリ。<br/>
                  それぞれの特色あふれる演劇部の、特色あふれる舞台。<br />
                  部員みんなからあふれ出る心の声、舞台にかける思い。<br/>
                  それらを組み合わせて、それぞれの演劇部の特徴が入り混じった一つの劇空間を創ってみない？<br />
                  そんな空間創りの計画、<br/>
                  <Text as="span" fontSize={"2xl"}><Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text>計画。</Text>
                </Text>
              </Center>
            </Box>
            <Center margin="10px">
            <Image width="95%" src="/logo.png" />
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}
