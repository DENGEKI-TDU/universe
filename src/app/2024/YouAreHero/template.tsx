import React from "react"
import { Link, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Head>
      <meta
          property="og:title"
          content="You are Hero! | でんげき×カラクリUNI-VERSE!!"
        />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://universe.dengeki-fox.net" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="You are Hero! | でんげき×カラクリUNI-VERSE!!"
      />
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
      {children}
      <Link href="/2024" marginBottom={"5px"}><Text bgGradient="linear(to-r,#00BFFF,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>{"<<"} 2024年公演一覧に戻る</Text></Link>
    </>
  );
}