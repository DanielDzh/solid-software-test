import React, { ReactNode, useEffect, useState } from "react";

import { GlobalContext } from "@/context";

type Props = {
  children: ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [globalBackgroundColor, setGlobalBackgroundColor] =
    useState<string>("#000000");
  const [globalTextColor, setGlobalTextColor] = useState<string>("#ffffff");

  useEffect(() => {
    if (globalBackgroundColor === "#000000") {
      setGlobalTextColor("#fff");
    } else {
      setGlobalTextColor("#000000");
    }
  }, [globalBackgroundColor]);

  const value = {
    globalBackgroundColor,
    setGlobalBackgroundColor,
    globalTextColor,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
