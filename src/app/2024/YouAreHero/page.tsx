import { Card, border, Text, Image, CardHeader, HStack, Heading, CardBody, Stack, StackDivider, Badge, Center, Box, Link } from "@chakra-ui/react"
import { Head } from "next/document"

export default function Home(){
  return(
    <>
      <KouenCardYouAreHero />
      <Link href="/2024">←←公演全体のページに戻る</Link>
    </>
  )
}

export function KouenCardYouAreHero(){
    return (
      <>
        <Head>
          <meta property="og:title" content="You are Hero! | でんげき×カラクリUNI-VERSE!!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://universe.dengeki-fox.net" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="You are Hero! | でんげき×カラクリUNI-VERSE!!" />
          <meta name="twitter:site" content="@TDUdramaclub" />
          <meta name="twitter:creator" content="@TDUdramaclub" />
          <meta
            name="twitter:image"
            content="https://universe.dengeki-fox.net/poster/2024/YouAreHero.png"
          />
          <meta
            property="og:image"
            content="https://universe.dengeki-fox.net/poster/2024/YouAreHero.png"
          />
        </Head>
        <Center>
        <Card className="kouen_card" id="5" border={"#00BFFF solid 1px"} margin="10px">
        <CardHeader paddingBottom={"5px"}>
          <HStack>
            <Heading size='lg'>You are Hero!</Heading>
            <Image src="/poster/2024/logo/color/logo_5.png" height={"40px"}/>
          </HStack>
        </CardHeader>
        <CardBody paddingTop={"5px"}>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              <Badge bgColor={"gray.800"} variant={"solid"} >劇団カラクリ</Badge>
              {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
              {/* <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge> */}
              <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge>
            </HStack>
          </Box>
          <Center>
              <Image src="/poster/2024/YouAreHero.jpg" className="kouen_poster" />
          </Center>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                あらすじ
              </Heading>
              <Text pt='2' fontSize='sm'>
              宇宙から襲来した機械生命体「メカリテ」により、人類は窮地に立たされた。<br/>
              しかし、そこに現れた、超人的な力を持った謎の戦士により、人類は逆転。<br/>
              人々にヒーローと呼ばれる彼女と、彼女に憧れる少年が出会うとき、物語は始まる。<br/>
              はたして、人類はメカリテに勝利することができるのか……！
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
                16:00
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                上演時間目安
              </Heading>
              <Text pt='2' fontSize='sm'>
                40分間
              </Text>
            </Box>
            <Box>
              <HStack>
                <Link href="https://twitter.com/intent/tweet?text=劇団カラクリによる、でんげき×カラクリUNIVERSE!!2024上演作品「You are Hero!」の詳細はこちらから！%20%0D⇩⇩%0D&url=https://universe.dengeki-fox.net/2024/YouAreHero %0D &hashtags=でんカラUNIVERSE2024,YouareHero,劇団カラクリ" target="_blank">
                <Box borderRadius={"lg"} bgColor={"black"} color="white" height={"55px"}><Center><HStack margin={"10px"}><Image src="/xLogo/logo-white.png" height={"35px"} /><Text>Xで共有する</Text></HStack></Center></Box>
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