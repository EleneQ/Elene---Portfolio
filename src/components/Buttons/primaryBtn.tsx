import { motion } from "framer-motion";
import { ButtonProps } from "@/types";
import styled from "styled-components";

const ButtonStyled = styled(motion.button)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.accent.medium};
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
`;

const PrimaryBtn = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default PrimaryBtn;
