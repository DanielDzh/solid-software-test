import React from "react";

import * as Styled from "./Container.styled";

import { useGlobalContext } from "@/hooks";
import { PropsWithChildren } from "@/types";

const Container = ({ children }: PropsWithChildren) => {
  const { globalBackgroundColor, setGlobalBackgroundColor } =
    useGlobalContext();

  const handleBackgroundPress = () => {
    const randomColor = Math.floor(Math.random() * 16777211).toString(16);
    setGlobalBackgroundColor("#" + randomColor);
  };
  return (
    <Styled.Container
      onPress={handleBackgroundPress}
      $backgroundColor={globalBackgroundColor}
    >
      {children}
    </Styled.Container>
  );
};
export default Container;
