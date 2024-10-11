import React, { ReactNode, useEffect, useState } from "react";

import { Container, AppLoader } from "./components";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [domLoaded, setDowLoaded] = useState(false);

  useEffect(() => {
    setDowLoaded(true);
  }, []);

  if (!domLoaded) {
    return <AppLoader />;
  }
  return <Container>{children}</Container>;
};

export default Layout;
