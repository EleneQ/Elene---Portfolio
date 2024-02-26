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
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTheme } from "styled-components";
import { SROnly } from "@/styles/util-styles";
import { navLinks } from "@/constants/navLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isBigScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader isTopOfPage={isTopOfPage}>
      <NavbarContainer>
        <StyledLogoContainer>
          <img src={logo} alt="logo" />
          <p>Elene</p>
        </StyledLogoContainer>

        {isBigScreen ? (
          <nav>
            <DesktopNavList isTopOfPage={isTopOfPage}>
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
              aria-expanded={isMobileMenuOpen}
            >
              <input
                type="checkbox"
                id="menu-checkbox"
                checked={isMobileMenuOpen}
                onChange={() => setIsMobileMenuOpen((prev) => !prev)}
              />
              <span />
              <span />
              <span />
              <SROnly>Menu</SROnly>
            </HamburgerMenu>

            {isMobileMenuOpen && (
              <MobileNavbar
                initial={{ y: "60%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              >
                <ul>
                  {navLinks.map((navLink, index) => (
                    <motion.li
                      key={navLink}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Link page={`${navLink}`} />
                    </motion.li>
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
