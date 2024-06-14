import { Box, Badge, Card, CardBody, CardHeader, Center, Heading, Image, Stack, StackDivider, Text, HStack, Flex, VStack, Link } from "@chakra-ui/react";
import React from "react";

export default function Main() {
  return (
    <>
    <Center>
      <Heading>2024年度<br /><Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text></Heading>
    </Center>
    {/* <Center>詳細決定までお待ちください。</Center> */}
    <Box>
      <Text>
      <Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>でんげき×カラクリUNI-VERSE!!2024</Text>は、東京電機大学東京千住キャンパス{/* 5403教室*/}にて行われます！<br />
      </Text>
      {/* <Text fontWeight={"bold"}>
        開場：13:40<br/>
        開演：14:00<br/>
        終演：16:40<br/>
        終演時間は予定であり、前後する可能性があります。ご了承ください。
      </Text> */}
      <Text>本公演の共通ハッシュタグは<Link href="https://x.com/search?q=%23%E3%81%A7%E3%82%93%E3%82%AB%E3%83%A9UNIVERSE2024" target="_blank" color="blue.500">#でんカラUNIVERSE2024</Link>です！</Text>
    </Box>
    <Center>
      <VStack>
      <Card className="kouen_card" id="1" border={"#69F0FD solid 1px"} margin="10px">
        <CardHeader>
          <Heading size='lg'>Comming soon...</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              <Badge variant={"solid"} >劇団カラクリ</Badge>
              {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
              <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge>
              {/* <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge> */}
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/2024/logo/logo_1.png" className="kouen_poster" />
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
      <Card className="kouen_card" id="2" border={"#FE6FFD solid 1px"} margin="10px">
        <CardHeader>
          <Heading size='lg'>Comming soon...</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              {/* <Badge variant={"solid"} >劇団カラクリ</Badge> */}
              <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge>
              <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge>
              {/* <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge> */}
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/2024/logo/logo_2.png" className="kouen_poster" />
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
      <Card className="kouen_card" id="3" border={"#69F0FD solid 1px"} margin="10px">
        <CardHeader>
          <Heading size='lg'>Comming soon...</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              <Badge variant={"solid"} >劇団カラクリ</Badge>
              {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
              <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge>
              {/* <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge> */}
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/2024/logo/logo_3.png" className="kouen_poster" />
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
      <Card className="kouen_card" id="4" border={"#FE6FFD solid 1px"} margin="10px">
        <CardHeader>
          <Heading size='lg'>Comming soon...</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              {/* <Badge variant={"solid"} >劇団カラクリ</Badge> */}
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
        <CardHeader>
          <Heading size='lg'>Comming soon...</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              <Badge variant={"solid"} >劇団カラクリ</Badge>
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
      <Card className="kouen_card" id="6" border={"#69F0FD solid 1px"} margin="10px">
        <CardHeader>
          <Heading size='lg'>Comming soon...</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box textAlign={"right"}>
            <HStack>
              <Badge variant={"solid"} >劇団カラクリ</Badge>
              {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
              {/* <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge> */}
              <Badge colorScheme="pink" variant={"solid"} >後半ブロック</Badge>
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/tmp_poster.png" className="kouen_poster" />
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
