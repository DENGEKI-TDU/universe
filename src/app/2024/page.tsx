import { Box, Badge, Card, CardBody, CardHeader, Center, Heading, Image, Stack, StackDivider, Text, HStack } from "@chakra-ui/react";
import React from "react";

export default function Main() {
  return (
    <>
    <Center>
      <Heading>2024年度<br /><Text bgGradient="linear(to-r,#69F0FD,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>UNI-VERSE!!</Text></Heading>
    </Center>
    <Center>詳細決定までお待ちください。</Center>
    {/* <Center>
      <Card id="1" border={"#69F0FD solid 1px"}>
        <CardHeader>
          <Heading size='lg'>ケロポンの愉快な一日(仮)</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
          <Box alignContent={"right"}>
            <HStack>
              <Badge variant={"solid"} >劇団カラクリ</Badge> */}
              {/* <Badge colorScheme="orange" variant={"solid"} >演劇集団【でんげき】</Badge> */}
              {/* <Badge colorScheme="blue" variant={"solid"} >前半ブロック</Badge>
            </HStack>
          </Box>
          <Center>
          <Image src="/poster/tmp_poster.png" width="50%" />
          </Center>
            <Box>
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
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Center>　*/}
    </>
  );
}
