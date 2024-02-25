import { Container } from "@/styles/util-styles";
import styled from "styled-components";

export const ContactContainer = styled(Container)`
  text-align: center;
  padding-block: 4rem;

  h2 {
    color: ${({ theme }) => theme.colors.text.primary.dark};
    font-size: ${({ theme }) => theme.typography.fontSize.large2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 3rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 5rem;
  }

  img {
    max-height: 400px;
  }
`;

export const FormStyled = styled.form`
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
`;

export const ErrorText = styled.p`
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.error};
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent.medium};
  color: ${({ theme }) => theme.colors.text.secondary.lightest};
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;
