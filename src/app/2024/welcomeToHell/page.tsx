import { Card, border, Text, Image, CardHeader, HStack, Heading, CardBody, Stack, StackDivider, Badge, Center, Box, Link } from "@chakra-ui/react"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "地獄にようこそ | でんげき×カラクリ UNI-VERSE",
  description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
  openGraph:
  {
    type: "website",
    url: "https://universe.dengeki-fox.net",
    title: "地獄にようこそ | でんげき×カラクリ UNI-VERSE",
    description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
    siteName: "でんげき×カラクリUNI-VERSE!!",
    images: [{
      url: "https://universe.dengeki-fox.net/poster/2024/welcomeToHell.png",
    }],
  }
};

export default function KouenCardWelcomeToHell() {
    return (
      <>
        <Center>
          <Card className="kouen_card" id="2" border={"#FE6FFD solid 1px"} margin="10px">
          <CardHeader paddingBottom={"5px"}>
            <HStack>
            <Heading size='lg'>地獄にようこそ</Heading><Image marginRight={"0px"} height="40px" src="/poster/2024/logo/color/logo_2.png" />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={"5px"}>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box textAlign={"right"}>
              <HStack>
                {/* <Badge bgColor={"gray.800"} variant={"solid"} >劇団カラクリ</Badge> */}
                <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge>
                <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge>
                {/* <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge> */}
              </HStack>
            </Box>
            <Center>
            <Image src="/poster/2024/welcomeToHell.png" className="kouen_poster" />
            </Center>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  あらすじ
                </Heading>
                <Text pt='2' fontSize='sm'>
                ある日、目を覚ますと二人は見知らぬ場所にいた。曰くそこは地獄だというが……<br/>
                地獄を舞台にしたちょっぴり怖い？二人のドタバタコメディをお楽しみください
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  脚本
                </Heading>
                <Text pt='2' fontSize='sm'>
                煮成焼也
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  演出
                </Heading>
                <Text pt='2' fontSize='sm'>
                マリン
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  開演目安
                </Heading>
                <Text pt='2' fontSize='sm'>
                  14:10
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  上演時間目安
                </Heading>
                <Text pt='2' fontSize='sm'>
                  30分間
                </Text>
              </Box>
              <Box>
                <HStack>
                  <Link href="https://twitter.com/intent/tweet?text=演劇集団【でんげき】による、でんげき×カラクリUNIVERSE!!2024上演作品「地獄にようこそ」の詳細はこちらから！%20%0D⇩⇩%0D&url=https://universe.dengeki-fox.net/2024/welcomeToHell %0D &hashtags=でんカラUNIVERSE2024,地獄にようこそ,演劇集団でんげき" target="_blank">
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