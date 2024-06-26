import { Card, border, Text, Image, CardHeader, HStack, Heading, CardBody, Stack, StackDivider, Badge, Center, Box, Link } from "@chakra-ui/react"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "午後三時半、生徒会室にて | でんげき×カラクリ UNI-VERSE",
  description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
  openGraph:
  {
    type: "website",
    url: "https://universe.dengeki-fox.net",
    title: "午後三時半、生徒会室にて | でんげき×カラクリ UNI-VERSE",
    description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
    siteName: "でんげき×カラクリUNI-VERSE!!",
    images: [{
      url: "https://universe.dengeki-fox.net/poster/2024/3pm.png",
    }],
  }
};

export default function KouenCard3pm({isLoadOnMain}:{isLoadOnMain:boolean}) {
    return (
      <>
        <Center>
        <Card className="kouen_card" id="4" border={"#FE6FFD solid 1px"} margin="10px">
        <CardHeader paddingBottom={"5px"}>
          <HStack>
          <Heading size='lg'>午後三時半、生徒会室にて</Heading>
          <Image marginRight={"0px"} height="40px" src="/poster/2024/logo/color/logo_4.png" />
          </HStack>
        </CardHeader>
        <CardBody paddingTop={"5px"}>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              {/* <Badge bgColor={"gray.800"} variant={"solid"} >劇団カラクリ</Badge> */}
              <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge>
              {/* <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge> */}
              <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge>
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/2024/3pm.png" className="kouen_poster" />
          </Center>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                あらすじ
              </Heading>
              <Text pt='2' fontSize='sm'>
              午後三時半、とある男子校の生徒会室。<br/>
              四人の生徒会役員は、異性に飢えた生徒たち(含自分達)を救済すべく「女子が集まるウハウハな学園祭」を目指し、議論を白熱させていた────
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                脚本
              </Heading>
              <Text pt='2' fontSize='sm'>
              あかざとう
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                演出
              </Heading>
              <Text pt='2' fontSize='sm'>
              ナギ
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                開演目安
              </Heading>
              <Text pt='2' fontSize='sm'>
                15:30
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
                <Link href="https://twitter.com/intent/tweet?text=演劇集団【でんげき】による、でんげき×カラクリUNIVERSE!!2024上演作品「午後三時半、生徒会室にて」の詳細はこちらから！%20%0D⇩⇩%0D&url=https://universe.dengeki-fox.net/2024/3pm %0D &hashtags=でんカラUNIVERSE2024,午後三時半生徒会室にて,演劇集団でんげき" target="_blank">
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
