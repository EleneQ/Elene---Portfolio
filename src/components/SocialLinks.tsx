import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

export const LinksStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const SocialLinks = () => {
  return (
    <LinksStyled>
      <a href="">
        <FaGithub />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
    </LinksStyled>
  );
};
export default SocialLinks;
