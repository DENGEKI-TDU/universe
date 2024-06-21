import { Card, border, Text, Image, CardHeader, HStack, Heading, CardBody, Stack, StackDivider, Badge, Center, Box, Link } from "@chakra-ui/react"
import Head from "next/head"

export default function KouenCardDisconnect() {
    return (
      <>
        
          <meta property="og:title" content="DISCONNECT | でんげき×カラクリUNI-VERSE!!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://universe.dengeki-fox.net" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="DISCONNECT | でんげき×カラクリUNI-VERSE!!" />
          <meta name="twitter:site" content="@TDUdramaclub" />
          <meta name="twitter:creator" content="@TDUdramaclub" />
          <meta
            name="twitter:image"
            content="https://universe.dengeki-fox.net/poster/2024/dicsonnect.png"
          />
          <meta
            property="og:image"
            content="https://universe.dengeki-fox.net/poster/2024/disconnect.png"
          />
        
        <Center>
        <Card className="kouen_card" id="3" border={"#00BFFF solid 1px"} margin="10px">
        <CardHeader paddingBottom={"5px"}>
          <HStack>
          <Heading size='lg'>DISCONNECT</Heading>
          <Image marginRight={"0px"} height="40px" src="/poster/2024/logo/color/logo_3.png" />
          </HStack>
        </CardHeader>
        <CardBody paddingTop={"5px"}>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              <Badge bgColor={"gray.800"} variant={"solid"} >劇団カラクリ</Badge>
              {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
              <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge>
              {/* <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge> */}
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/2024/disconnect.png" className="kouen_poster" />
          </Center>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                あらすじ
              </Heading>
              <Text pt='2' fontSize='sm'>
              ネット依存症と診断された主人公アレックスは、多くの人と関わり、多くの事を体験し、何を思うのか。<br/>
              <br/>
              ネットを使用するすべての人に観てもらいたい作品です。
              </Text>
            </Box>
            {/* <Box>
              <Heading size='xs' textTransform='uppercase'>
                脚本
              </Heading>
              <Text pt='2' fontSize='sm'>
              鳩山ケロ美
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                演出
              </Heading>
              <Text pt='2' fontSize='sm'>
              千住ケロ太郎
              </Text>
            </Box> */}
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                開演目安
              </Heading>
              <Text pt='2' fontSize='sm'>
                14:50
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                上演時間目安
              </Heading>
              <Text pt='2' fontSize='sm'>
                20分間
              </Text>
            </Box>
            
            <Box>
              <HStack>
                <Link href="https://twitter.com/intent/tweet?text=劇団カラクリによる、でんげき×カラクリUNIVERSE!!2024上演作品「DISCONNECT」の詳細はこちらから！%20%0D⇩⇩%0D&url=https://universe.dengeki-fox.net/2024/disconnect %0D &hashtags=でんカラUNIVERSE2024,DISCONNECT,劇団カラクリ" target="_blank">
                <Box borderRadius={"md"} bgColor={"black"} color="white" height={"35px"}><Center><HStack margin={"5px"}><Image src="/xLogo/logo-white.png" height={"15px"} /><Text>Xで共有する</Text></HStack></Center></Box>
                </Link>
              </HStack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
        </Center>
      </>
    )
}
