import React from "react"
import { Link, Text } from "@chakra-ui/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Link href="/2024" marginBottom={"5px"}><Text bgGradient="linear(to-r,#00BFFF,#FE6FFD)" bgClip="text" as="span" fontWeight={"extrabold"}>{"<<"} 2024年公演一覧に戻る</Text></Link>
    </>
  );
}