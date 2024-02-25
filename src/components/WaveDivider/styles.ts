import styled from "styled-components";

export const Wave = styled.div`
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
