import { createContext } from "react";

import { GlobalContextT } from "./types";

const GlobalContextDefaultValues: GlobalContextT = {
  globalBackgroundColor: "#000000",
  globalTextColor: "#000000",
  setGlobalBackgroundColor: () => {},
};

export const GlobalContext = createContext<GlobalContextT>(
  GlobalContextDefaultValues,
);
