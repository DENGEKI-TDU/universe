import { Box, Badge, Card, CardBody, CardHeader, Center, Heading, Image, Stack, StackDivider, Text, HStack, Flex, VStack, Link } from "@chakra-ui/react";
import React from "react";

export default function Main() {
  return (
    <>
    <Center>
      <Heading>2024年度<br /><Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text></Heading>
    </Center>
    <Center>
    <Box>
      <Text>
      <Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>でんげき×カラクリUNI-VERSE!!2024</Text>は、東京電機大学東京千住キャンパス{/* 5403教室*/}にて行われます！<br /><br/>
      </Text>
      <Text fontWeight={"bold"}>
        場所：東京電機大学東京千住キャンパス 5403教室<br/>
        開場：13:40<br/>
        開演：14:00(前半ブロック)、15:30(後半ブロック)<br/>
        終演：16:40<br/>
        終演時間は予定であり、前後する可能性があります。ご了承ください。<br/><br/>
        前半ブロックの3公演中、及び後半ブロックの2公演中は、公演の間であっても途中入退場はできません。<br/>
        ご覧になりたいブロックの開演時間までにお越しください。<br />
        <Text as="span" color={"red"}>
        {new Date <= new Date(2024,6,22) ? <>
        卒業生を含む学外の方は、セキュリティ上の観点から事前の登録が必要です。<br/>
        以下のフォームから6/22までにご登録ください。<br/>
        <Link color="blue" href="https://docs.google.com/forms/d/e/1FAIpQLScjdLOoQEcIKrhvZHsaOB41TT_otA3D04FUc5oVCD0T-IIQRQ/viewform?usp=sf_link" borderBottom={"1px solid blue"}>こちらのフォームから登録を！</Link><br/>
        また、学外の方は入場時に受付が必要です。<br/>
        2号館1階にお立ち寄りの上、お越しください。
        </>
        : <>学外の方は入場時に受付が必要です。<br/>
        2号館1階にお立ち寄りの上、お越しください。</>}
        </Text>
      </Text>
      <Text>本公演の共通ハッシュタグは<Link href="https://x.com/search?q=%23%E3%81%A7%E3%82%93%E3%82%AB%E3%83%A9UNIVERSE2024" target="_blank" color="blue.500" fontWeight={"extrabold"}>#でんカラUNIVERSE2024</Link>です！</Text>
    </Box>
    </Center>
    <Center>
      <VStack>
      <Card className="kouen_card" id="1" border={"#69F0FD solid 1px"} margin="10px">
        <CardHeader paddingBottom={"5px"}>
          <HStack>
          <Heading size='lg'>ボタン</Heading><Image marginRight={"0px"} height="40px" src="/poster/2024/logo/color/logo_1.png" />
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
          <Image src="/poster/2024/button.jpg" className="kouen_poster" />
          </Center>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                あらすじ
              </Heading>
              <Text pt='2' fontSize='sm'>
              ある日、とあるオカルト研究部の部長が謎のボタンを持ってきた。曰く、「絶対に押してはいけない」とのこと。<br/>
              何が起こるかわからないボタン。ボタンを押してみたい気持ちと揺れ動く部員たち。<br/>
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
              <Heading size='xs' textTransform='uppercase'>
                開演目安
              </Heading>
              <Text pt='2' fontSize='sm'>
                14:00
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                上演時間目安
              </Heading>
              <Text pt='2' fontSize='sm'>
                10分間
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
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
          </Stack>
        </CardBody>
      </Card>
      <Card className="kouen_card" id="3" border={"#69F0FD solid 1px"} margin="10px">
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
          </Stack>
        </CardBody>
      </Card>
      <Card className="kouen_card" id="4" border={"#FE6FFD solid 1px"} margin="10px">
        <CardHeader paddingBottom={"5px"}>
          <Heading size='lg'>Comming soon...</Heading>
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
          <Image src="/poster/2024/logo/logo_4.png" className="kouen_poster" />
          </Center>
            {/* <Box>
              <Heading size='xs' textTransform='uppercase'>
                あらすじ
              </Heading>
              <Text pt='2' fontSize='sm'>
              ある日ケロポンは地動説を提唱する。<br />
              ケロポンの運命やいかに！
              </Text>
            </Box>
            <Box>
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
          </Stack>
        </CardBody>
      </Card>
      <Card className="kouen_card" id="5" border={"#69F0FD solid 1px"} margin="10px">
        <CardHeader paddingBottom={"5px"}>
          <Heading size='lg'>Comming soon...</Heading>
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
          <Image src="/poster/2024/logo/logo_5.png" className="kouen_poster" />
          </Center>
            {/* <Box>
              <Heading size='xs' textTransform='uppercase'>
                あらすじ
              </Heading>
              <Text pt='2' fontSize='sm'>
              ある日ケロポンは地動説を提唱する。<br />
              ケロポンの運命やいかに！
              </Text>
            </Box>
            <Box>
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
          </Stack>
        </CardBody>
      </Card>
      </VStack>
    </Center>
    </>
  );
}
