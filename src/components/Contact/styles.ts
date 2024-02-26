import { Container } from "@/styles/util-styles";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactContainer = styled(Container)`
  text-align: center;
  padding-block: 6rem;

  h2 {
    color: ${({ theme }) => theme.colors.text.primary.dark};
    font-size: ${({ theme }) => theme.typography.fontSize.large2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 3rem;
  }
`;

export const ContactContent = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 5rem;
  }
`;

export const FormStyled = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: rgba(243, 209, 191, 0.5) 0px 7px 40px 0px;
  border-radius: 30px;
  width: 100%;
  max-width: 400px;
  margin-inline: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-block: 4.5rem;
    max-width: 420px;
    margin-inline: 0;
    margin-left: auto;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  textarea {
    resize: none;
  }

  textarea,
  input {
    width: 100%;
    border-radius: 5px;
    padding: 0.7rem 1rem;
    color: ${({ theme }) => theme.colors.text.blue[900]};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.error};
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;

    img {
      max-height: 440px;
    }
  }
`;

export const SuccessMessage = styled(motion.div)`
  position: absolute;
  top: 35px;
  color: ${({ theme }) => theme.colors.success};
`;
