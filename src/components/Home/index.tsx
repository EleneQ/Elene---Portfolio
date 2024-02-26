import heroBackground from "@/images/heroBackground.png";
import {
  StyledHero,
  HeroContainer,
  HeroTextSection,
  HeroSectionHeader,
  Description,
} from "./styles";
import SocialLinks from "../SocialLinks";

const Home = () => {

  return (
    <StyledHero id="home">
      <HeroContainer>
        <HeroTextSection>
          <HeroSectionHeader>
            <div>We’re Help</div> To Build Your Dream Project
          </HeroSectionHeader>

          <Description>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </Description>

          <SocialLinks />
        </HeroTextSection>

        <div>
          <img src={heroBackground} alt="illustration of hobbies" />
        </div>
      </HeroContainer>
    </StyledHero>
  );
};
export default Home;
