import heroBackground from "@/images/heroBackground.png";
import {
  StyledHero,
  HeroContainer,
  HeroTextSection,
  HeroSectionHeader,
} from "./styles";

const Home = () => {
  return (
    <StyledHero id="home">
      <HeroContainer>
        <HeroTextSection>
          <HeroSectionHeader>
            <div>We’re Help</div> To Build Your Dream Project
          </HeroSectionHeader>
          <p>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </HeroTextSection>
        <div>
          <img src={heroBackground} alt="illustration of hobbies" />
        </div>
      </HeroContainer>
    </StyledHero>
  );
};
export default Home;
