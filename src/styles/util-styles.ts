import styled from "styled-components";

export const Container = styled.div`
  max-width: 100rem;
  padding-inline: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-inline: calc(5% + 1rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-inline: 8.5rem;
  }
`;

export const SROnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
