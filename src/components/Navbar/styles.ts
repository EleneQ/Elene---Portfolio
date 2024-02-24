import styled from "styled-components";

export const StyledHeader = styled.header`
  display: fixed;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const StyledNavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
