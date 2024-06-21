import {
  Card,
  border,
  Text,
  Image,
  CardHeader,
  HStack,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Badge,
  Center,
  Box,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

export default function KouenCardButton() {
  return (
    <>
      <meta
        property="og:title"
        content="ボタン | でんげき×カラクリUNI-VERSE!!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://universe.dengeki-fox.net" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ボタン | でんげき×カラクリUNI-VERSE!!"
      />
      <meta name="twitter:site" content="@TDUdramaclub" />
      <meta name="twitter:creator" content="@TDUdramaclub" />
      <meta
        name="twitter:image"
        content="https://universe.dengeki-fox.net/poster/2024/button.jpg"
      />
      <meta
        property="og:image"
        content="https://universe.dengeki-fox.net/poster/2024/button.jpg"
      />

      <Center>
        <Card
          className="kouen_card"
          id="1"
          border={"#00BFFF solid 1px"}
          margin="10px"
        >
          <CardHeader paddingBottom={"5px"}>
            <HStack>
              <Heading size="lg">ボタン</Heading>
              <Image
                marginRight={"0px"}
                height="40px"
                src="/poster/2024/logo/color/logo_1.png"
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={"5px"}>
            <Stack divider={<StackDivider />} spacing="4">
              <Box textAlign={"right"}>
                <HStack>
                  <Badge bgColor={"gray.800"} variant={"solid"}>
                    劇団カラクリ
                  </Badge>
                  {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
                  <Badge colorScheme="blue" variant={"solid"}>
                    前半ブロック
                  </Badge>
                  {/* <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge> */}
                </HStack>
              </Box>
              <Center>
                <Image src="/poster/2024/button.jpg" className="kouen_poster" />
              </Center>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  あらすじ
                </Heading>
                <Text pt="2" fontSize="sm">
                  ある日、とあるオカルト研究部の部長が謎のボタンを持ってきた。曰く、「絶対に押してはいけない」とのこと。
                  <br />
                  何が起こるかわからないボタン。ボタンを押してみたい気持ちと揺れ動く部員たち。
                  <br />
                  謎のボタンが巻き起こす10分間のドタバタ奇劇の一部始終をとくとご覧あれ。
                </Text>
              </Box>
              {/* <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    脚本
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    脚本家名
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    演出
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    演出太郎、演出補佐太郎(補佐)
                  </Text>
                </Box> */}
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  開演目安
                </Heading>
                <Text pt="2" fontSize="sm">
                  14:00
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  上演時間目安
                </Heading>
                <Text pt="2" fontSize="sm">
                  10分間
                </Text>
              </Box>
              <Box>
                <HStack>
                  <Link
                    href="https://twitter.com/intent/tweet?text=劇団カラクリによる、でんげき×カラクリUNIVERSE!!2024上演作品「ボタン」の詳細はこちらから！%20%0D⇩⇩%0D&url=https://universe.dengeki-fox.net/2024/button %0D &hashtags=でんカラUNIVERSE2024,ボタン,劇団カラクリ"
                    target="_blank"
                  >
                    <Box
                      borderRadius={"md"}
                      bgColor={"black"}
                      color="white"
                      height={"35px"}
                    >
                      <Center>
                        <HStack margin={"5px"}>
                          <Image src="/xLogo/logo-white.png" height={"15px"} />
                          <Text>Xで共有する</Text>
                        </HStack>
                      </Center>
                    </Box>
                  </Link>
                </HStack>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </>
  );
}
