import logo from "@/images/logo.svg";
import Link from "./Link";
import {
  StyledHeader,
  NavbarContainer,
  DesktopNavList,
  StyledLogoContainer,
  HamburgerMenu,
  MobileNavbar,
} from "./styles";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTheme } from "styled-components";
import { SROnly } from "@/styles/util-styles";
import { navLinks } from "@/constants/navLinks";

const Navbar = () => {
  const theme = useTheme();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const isBigScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  return (
    <StyledHeader>
      <NavbarContainer>
        <StyledLogoContainer>
          <img src={logo} alt="logo" />
          <p>Elene</p>
        </StyledLogoContainer>

        {isBigScreen ? (
          <nav>
            <DesktopNavList>
              {navLinks.map((navLink) => (
                <li key={navLink}>
                  <Link page={`${navLink}`} />
                </li>
              ))}
            </DesktopNavList>
          </nav>
        ) : (
          <div style={{ position: "relative" }}>
            <HamburgerMenu
              htmlFor="menu-checkbox"
              aria-controls="primary-navigation"
              aria-expanded={mobileMenuIsOpen}
            >
              <input
                type="checkbox"
                id="menu-checkbox"
                checked={mobileMenuIsOpen}
                onChange={() => setMobileMenuIsOpen((prev) => !prev)}
              />
              <span />
              <span />
              <span />
              <SROnly>Menu</SROnly>
            </HamburgerMenu>

            {mobileMenuIsOpen && (
              <MobileNavbar>
                <ul>
                  {navLinks.map((navLink) => (
                    <li key={navLink}>
                      <Link page={`${navLink}`} />
                    </li>
                  ))}
                </ul>
              </MobileNavbar>
            )}
          </div>
        )}
      </NavbarContainer>
    </StyledHeader>
  );
};
export default Navbar;
