import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  BottomSection,
  FooterContainer,
  FooterStyled,
  TopSection,
} from "./styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <TopSection>
          <p>Say Hello 👇</p>

          <a href="mailto:eleneqaldani1@gmail.com">eleneqaldani1@gmail.com</a>
        </TopSection>

        <hr />

        <BottomSection>
          <p>&copy; Elene Qaldani 2024</p>

          <div>
            <a href="">
              <FaGithub style={{ fontSize: "1.5rem" }} />
            </a>

            <a href="">
              <FaLinkedin style={{ fontSize: "1.5rem" }} />
            </a>
          </div>
        </BottomSection>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
