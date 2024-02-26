import { createContext, useState, ReactNode } from "react";
import { SelectedPage } from "@/types";

interface ContextType {
  selectedPage: SelectedPage | null;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage | null>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const AnchorLinkContext = createContext<ContextType>({
  selectedPage: SelectedPage.Home,
  setSelectedPage: () => {},
});

export const AnchorLinkProvider = ({ children }: ProviderProps) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage | null>(
    SelectedPage.Home
  );

  return (
    <AnchorLinkContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </AnchorLinkContext.Provider>
  );
};
