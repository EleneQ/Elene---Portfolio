import styled from "styled-components";
import { Container } from "@/styles/util-styles";
import star from "@/images/star.svg";
import elene from "@/images/elene.jpg";

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

export const ImageSection = styled.div`
  position: relative;

  .blob {
    -webkit-animation: blobMorph 6s ease-in-out infinite,
      blobMove 10s alternate infinite;
    animation: blobMorph 6s ease-in-out infinite,
      blobMove 10s alternate infinite;
    background-image: url(${elene});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid white;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    position: relative;
    transition: all 0.3s ease-in-out;
    width: 50%;
    aspect-ratio: 1;
    position: absolute;
    bottom: 80px;
    right: 20px;
    z-index: 2;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      bottom: 125px;
      right: 50px;
    }
  }

  @keyframes blobMorph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  @keyframes blobMove {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(15px, -15px);
    }
    50% {
      transform: translate(30px, 0px);
    }
    75% {
      transform: translate(15px, 15px);
    }
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
      max-width: 450px;

      &::after {
        content: "";
        position: absolute;
        top: -40px;
        right: 0;
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
  line-height: 1.7em;
  max-width: 430px;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 500px;
    margin-inline: unset;
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
  }
`;
