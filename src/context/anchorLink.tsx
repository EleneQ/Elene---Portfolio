import { createContext, useState, ReactNode, useContext } from "react";
import { SelectedPage } from "@/types";

interface ContextType {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
}

interface ProviderProps {
  children: ReactNode;
}

const AnchorLinkContext = createContext<ContextType>({
  selectedPage: SelectedPage.Home,
  setSelectedPage: () => {},
});

export const useAnchorLink = () => {
  return useContext(AnchorLinkContext);
};

export const DogDataProvider = ({ children }: ProviderProps) => {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);

  return (
    <AnchorLinkContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </AnchorLinkContext.Provider>
  );
};
