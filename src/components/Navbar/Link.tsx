import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/types";
import { useAnchorLink } from "@/hooks/useAnchorLink";

interface Props {
  page: string;
}

const Link = ({ page }: Props) => {
  const { selectedPage, setSelectedPage } = useAnchorLink();

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${isSelected ? "active" : ""}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
