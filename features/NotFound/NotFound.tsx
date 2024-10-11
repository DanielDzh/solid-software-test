import React from "react";

import { Link } from "expo-router";

import * as Styled from "./NotFound.styled";

import { H1 } from "@/components";
import { useGlobalContext } from "@/hooks";

const NotFound = () => {
  const { globalTextColor } = useGlobalContext();
  return (
    <Styled.Wrapper>
      <H1 $color={globalTextColor}>Page not found</H1>
      <Link href="/" asChild>
        <Styled.Text $color={globalTextColor}>Go to home</Styled.Text>
      </Link>
    </Styled.Wrapper>
  );
};

export default NotFound;
