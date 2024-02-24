import logo from "@/images/logo.svg";
import Link from "./Link";
import { SelectedPage } from "@/types";
import { StyledHeader, StyledNavList, StyledLogoContainer } from "./styles";
import { Container } from "@/styles/util-styles";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <Container>
      <StyledHeader>
        <div>
          <StyledLogoContainer>
            <img src={logo} alt="logo" />
            <p>Elene</p>
          </StyledLogoContainer>

          <nav>
            <StyledNavList>
              <li>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
              <li>
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
              <li>
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
              <li>
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            </StyledNavList>
          </nav>
        </div>
      </StyledHeader>
    </Container>
  );
};
export default Navbar;
