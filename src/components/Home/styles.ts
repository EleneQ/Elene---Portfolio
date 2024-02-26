import styled from "styled-components";
import { Container } from "@/styles/util-styles";
import star from "@/images/star.svg";

export const StyledHero = styled.section`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 1rem;
  gap: 2rem;

  & > * {
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const HeroTextSection = styled.div`
  order: 2;
  text-align: center;
  max-width: 500px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: left;
    order: unset;
    max-width: none;
  }
`;

export const SocialLinks = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
    margin-right: 1rem;
  }
`;

export const HeroSectionHeader = styled.h1`
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  font-size: ${({ theme }) => theme.typography.fontSize.large2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: relative;
    z-index: 1;

    div {
      position: relative;
      max-width: 480px;

      &::after {
        content: "";
        position: absolute;
        top: -40px;
        right: 35px;
        width: 150px;
        aspect-ratio: 1;
        background-image: url(${star});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.large2};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.typography.fontSize.largest};
    }
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary.light};
  line-height: 2rem;
  max-width: 430px;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 470px;
    margin-inline: unset;
  }
`;
