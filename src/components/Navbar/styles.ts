import styled from "styled-components";
import { Container } from "@/styles/util-styles";
import { motion } from "framer-motion";

export const StyledHeader = styled.header<{ isTopOfPage: boolean }>`
  position: fixed;
  top: 0;
  z-index: 30;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  background-color: ${({ theme, isTopOfPage }) =>
    isTopOfPage ? "transparent" : theme.colors.background.primary.medium};
  box-shadow: ${({ isTopOfPage }) =>
    isTopOfPage ? "" : "rgba(0, 0, 0, 0.45) 0px 5px 15px"};
  transition: background-color 0.3s ease-in-out;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
  max-width: none;

  .cv-link {
    border: 2px solid ${({ theme }) => theme.colors.accent.medium};
    border-radius: 3px;
    padding: 0.45rem;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-size: ${({ theme }) => theme.typography.fontSize.large1};
  }
`;

export const DesktopNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: calc(4vw + 1rem);

  .nav-link {
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.accent.medium};
    }
  }
`;

/* SMALL SCREENS */
export const MobileNavbar = styled(motion.nav)`
  position: absolute;
  z-index: 50;
  top: 3rem;
  right: 0;
  padding-inline: 5rem;
  padding-block: 3rem;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 5px 20px 0px;

  li {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    a {
      font-size: ${({ theme }) => theme.typography.fontSize.regular};
      color: ${({ theme }) => theme.colors.text.blue[900]};

      &.active {
        color: ${({ theme }) => theme.colors.accent.medium};
      }
    }
  }
`;

export const HamburgerMenu = styled.label`
  display: flex;
  flex-direction: column;
  width: 50px;
  cursor: pointer;

  span {
    background: ${({ theme }) => theme.colors.text.secondary.lightest};
    border-radius: 10px;
    height: 4px;
    margin: 3px 0;
    transition: 0.2s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
      width: 50%;
    }

    &:nth-of-type(2) {
      width: 100%;
    }

    &:nth-of-type(3) {
      width: 75%;
    }
  }

  input[type="checkbox"] {
    display: none;

    &:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(5px, 0px);
    }

    &:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-40deg);
    }

    &:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translateX(20px) rotatez(43deg);
    }
  }
`;
