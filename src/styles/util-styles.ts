import styled from "styled-components";

export const Container = styled.div`
  max-width: 100rem;
  margin-inline: auto;
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

/* Tooltip */
export const Tooltip = styled.span`
  visibility: hidden;
  width: auto;
  background-color: black;
  color: white;
  text-align: center;
  padding: 7px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.5s, transform 0.3s;
  font-size: ${({ theme }) => theme.typography.fontSize.small};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const TooltipParent = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;
