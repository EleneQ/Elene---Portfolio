import { ButtonProps } from "@/types";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.accent.medium};
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.accent.medium} 1.95px 1.9px;
    background-color: ${({ theme }) => theme.colors.accent.light};
  }
`;

const PrimaryBtn = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
export default PrimaryBtn;
