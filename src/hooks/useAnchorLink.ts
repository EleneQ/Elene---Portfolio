import { AnchorLinkContext } from "@/context/anchorLink";
import { useContext } from "react";

export const useAnchorLink = () => {
  return useContext(AnchorLinkContext);
};
