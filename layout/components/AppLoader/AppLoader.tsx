import React from "react";

import { ActivityIndicator } from "react-native";

import * as Styled from "./AppLoader.styled";

const AppLoader = () => {
  return (
    <Styled.Wrapper>
      <ActivityIndicator size="large" color="#fff" />
    </Styled.Wrapper>
  );
};

export default AppLoader;
