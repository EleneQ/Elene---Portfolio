import styled from "styled-components";
import { Container } from "@/styles/util-styles";

export const AboutStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Image = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 400px;
    margin-inline: auto;
  }
`;

export const TextSection = styled.div`
  max-width: 470px;
  margin-inline: auto;

  & > div {
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      text-align: left;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.accent.medium};
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary.medium};
    line-height: 2em;
  }
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.large2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  margin-block: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.large3};
  }
`;

export const MySkillsStyled = styled.div`
  margin-top: 1.5rem;

  h3 {
    color: ${({ theme }) => theme.colors.text.primary.dark};
    font-size: ${({ theme }) => theme.typography.fontSize.large1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;

    li {
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      justify-content: center;
    }
  }
`;
