import {
  Box,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  HStack,
  Flex,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import KouenCardButton from "./button/page";
import KouenCardWelcomeToHell from "./welcomeToHell/page";
import KouenCardDisconnect from "./disconnect/page";
import KouenCard3pm from "./3pm/page";
import KouenCardYouAreHero from "./YouAreHero/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2024 | でんげき×カラクリ UNI-VERSE",
  description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
  openGraph:
  {
    type: "website",
    url: "https://universe.dengeki-fox.net",
    title: "2024 | でんげき×カラクリ UNI-VERSE",
    description: "でんげき×カラクリの合同企画「UNI-VERSE」の公式サイトです。",
    siteName: "でんげき×カラクリUNI-VERSE!!",
    images: [{
      url: "https://universe.dengeki-fox.net/logo.png",
    }],
  }
};

export default function Main() {
  return (
    <>
      <Center>
        <Heading>
          2024年度
          <br />
          <Text
            bgGradient="linear(to-r,#00BFFF,#FE6FFD)"
            bgClip="text"
            as="span"
            fontWeight={"extrabold"}
          >
            UNI-VERSE!!
          </Text>
        </Heading>
      </Center>
      <Center>
        <Box>
          <Text>
            <Text
              bgGradient="linear(to-r,#00BFFF,#FE6FFD)"
              bgClip="text"
              as="span"
              fontWeight={"extrabold"}
            >
              でんげき×カラクリUNI-VERSE!!2024
            </Text>
            は、6/29(土)に東京電機大学東京千住キャンパス5403教室にて行われます！
            <br />
            <br />
          </Text>
          <Text fontWeight={"bold"}>
            日付：6/29(土)
            <br />
            場所：東京電機大学東京千住キャンパス 5403教室
            <br />
            開場：13:40
            <br />
            開演：14:00(前半ブロック)、15:30(後半ブロック)
            <br />
            終演：16:40
            <br />
            終演時間は予定であり、前後する可能性があります。ご了承ください。
            <br />
            <br />
            前半ブロックの3公演中、及び後半ブロックの2公演中は、公演の間であっても途中入退場はできません。
            <br />
            ご覧になりたいブロックの開演時間までにお越しください。
            <br />
            <Text as="span" color={"red"} fontWeight={"extrabold"}>
              予約者多数のため、来場登録は締め切らせていただきました。たくさんのご予約ありがとうございました。
              <br />
            </Text>
            事前に登録をされた学外の方は学内への入場時に受付が必要です。
            <br />
            2号館1階にお立ち寄りの上、お越しください。
          </Text>
          <Text>
            本公演の共通ハッシュタグは
            <Link
              href="https://x.com/search?q=%23%E3%81%A7%E3%82%93%E3%82%AB%E3%83%A9UNIVERSE2024"
              target="_blank"
              color="blue.500"
              fontWeight={"extrabold"}
            >
              #でんカラUNIVERSE2024
            </Link>
            です！
          </Text>
        </Box>
      </Center>
      <Center>
        <VStack>
          <KouenCardButton />
          <KouenCardWelcomeToHell />
          <KouenCardDisconnect />
          <KouenCard3pm />
          <KouenCardYouAreHero />
        </VStack>
      </Center>
    </>
  );
}
