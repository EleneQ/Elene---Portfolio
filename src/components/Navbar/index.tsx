import logo from "@/images/logo.svg";
import Link from "./Link";
import { StyledHeader, StyledNavList, StyledLogoContainer } from "./styles";
import { Container } from "@/styles/util-styles";

const Navbar = () => {
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
                <Link page="Home" />
              </li>
              <li>
                <Link page="About" />
              </li>
              <li>
                <Link page="Projects" />
              </li>
              <li>
                <Link page="Contact" />
              </li>
            </StyledNavList>
          </nav>
        </div>
      </StyledHeader>
    </Container>
  );
};
export default Navbar;
