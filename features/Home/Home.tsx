import React from "react";

import * as Styled from "./Home.styled";

import { H1 } from "@/components";
import { useGlobalContext } from "@/hooks";

const Home = () => {
  const { globalTextColor } = useGlobalContext();
  return (
    <Styled.Wrapper>
      <H1 $color={globalTextColor}>Hello there</H1>
    </Styled.Wrapper>
  );
};

export default Home;
