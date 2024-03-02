import SocialLinks from "../SocialLinks";
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
          <p>Say Hello 😄</p>

          <a href="mailto:eleneqaldani1@gmail.com">eleneqaldani1@gmail.com</a>
        </TopSection>

        <hr />

        <BottomSection>
          <p>&copy; Elene Qaldani 2024</p>

          <SocialLinks />
        </BottomSection>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
