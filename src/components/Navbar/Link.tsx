import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/types";
import { useAnchorLink } from "@/context/anchorLink";

interface Props {
  page: string;
}

const Link = ({ page }: Props) => {
  const { selectedPage, setSelectedPage } = useAnchorLink();

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
