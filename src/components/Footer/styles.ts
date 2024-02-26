import { Container } from "@/styles/util-styles";
import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.background.primary};
  margin-top: 3rem;

  hr {
    margin-block: 2rem;
  }
`;

export const FooterContainer = styled(Container)`
  padding-block: 5rem;
`;

export const TopSection = styled.div`
  p {
    color: ${({ theme }) => theme.colors.accent.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    margin-bottom: 2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
  }
`;
