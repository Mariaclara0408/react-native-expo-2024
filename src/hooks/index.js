import { Children } from "react";
import { FontProvider } from "./font";

export function AppProvider({}) {
  return <FontProvider>{Children}</FontProvider>
}