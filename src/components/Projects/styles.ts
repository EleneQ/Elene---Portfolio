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

export const Wave = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
  }

  &.wave-top {
    top: -1px;

    svg {
      width: calc(142% + 1.3px);
      height: 90px;
    }

    .shape-fill {
      fill: ${({ theme }) => theme.colors.background.secondary};
    }
  }

  &.wave-bottom {
    bottom: -1px;

    svg {
      width: calc(122% + 1.3px);
      height: 60px;
    }

    .shape-fill {
      fill: white;
    }
  }
`;

export const ContainerStyled = styled(Container)`
  padding-block: 7rem;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

export const ImageContainer = styled.div`
  height: 330px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 40px;

  img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    object-position: top;
    object-fit: cover;
    transition-duration: 13s;
    transition-delay: 0.1s;

    &:hover {
      object-position: bottom;
    }
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

export const ToolList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.3rem;

  li {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.blue[900]};
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
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
