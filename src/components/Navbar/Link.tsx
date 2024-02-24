import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      style={{
        transition: "all",
        animationDuration: "3s",
        color: selectedPage === lowerCasePage ? "red" : "black",
      }}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
