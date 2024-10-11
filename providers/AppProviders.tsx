import React, { ReactNode } from "react";

import ContextProvider from "./ContextProvider";

type Props = {
  children: ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default AppProviders;
