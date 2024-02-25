import { Container } from "@/styles/util-styles";
import styled from "styled-components";

export const ProjectsStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.background.primary};
  position: relative;

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.large1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
  }
`;

export const WaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 2;

  svg {
    position: relative;
    display: block;
    width: calc(142% + 1.3px);
    height: 90px;
  }

  .shape-fill {
    fill: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const WaveBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 60px;
  }

  .shape-fill {
    fill: white;
  }
`;

export const ContainerStyled = styled(Container)`
  padding-block: 7rem;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    & > *:not(:first-child) {
      margin-top: 2rem;
    }

    & > *:nth-child(odd) {
      & > :first-child {
        order: 2;
      }
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 500px;
  margin-inline: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: unset;
    margin-inline: none;

    & > * {
      flex: 1;
    }
  }
`;

export const ActionBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const GithubLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
`;

export const ProjectLink = styled.a`
  background-color: ${({ theme }) => theme.colors.accent.medium};
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  height: 300px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptionContainer = styled.div`
  margin-block: 1rem;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: saturate(140%) blur(10px);
    padding: 1rem 2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.tertiary.light};
    font-size: 15px;
    line-height: 1.5em;
  }
`;
