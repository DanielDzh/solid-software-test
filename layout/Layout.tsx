import React, { ReactNode } from "react";

import { Container } from "./components";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
