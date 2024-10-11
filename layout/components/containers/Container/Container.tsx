import React from "react";

import * as Styled from "./Container.styled";

import { PropsWithChildren } from "@/types";

const Container = ({ children }: PropsWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>;
};
export default Container;
