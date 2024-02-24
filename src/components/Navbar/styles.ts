import styled from "styled-components";
import { Container } from "@/styles/util-styles";

export const StyledHeader = styled.header`
  display: fixed;
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  top: 0;
  z-index: 40;
  width: 100%;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
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

  li > a {
    font-size: ${({ theme }) => theme.typography.fontSize.regular};
    color: ${({ theme }) => theme.colors.text.secondary.lightest};

    &.active {
      color: ${({ theme }) => theme.colors.accent.medium};
    }
  }
`;

/* SMALL SCREENS */
export const MobileNavbar = styled.nav`
  position: absolute;
  z-index: 50;
  top: 3rem;
  right: 0;
  color: black;
  border: 1px solid red;
  padding-inline: 5rem;
  padding-block: 3rem;
  background-color: white;

  li {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    a {
      font-size: ${({ theme }) => theme.typography.fontSize.regular};
      color: black;

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
    background: #fff;
    border-radius: 10px;
    height: 4px;
    margin: 3px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

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
      transform: rotatez(-45deg);
    }

    &:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translateX(20px) rotatez(45deg);
      /* transform: translate(20px, -5px) rotatez(45deg); */
    }
  }
`;
