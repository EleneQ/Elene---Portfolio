import heroBackground from "@/images/heroBackground.png";
import {
  StyledHero,
  HeroContainer,
  HeroTextSection,
  HeroSectionHeader,
  Description,
  ImageSection,
} from "./styles";
import SocialLinks from "../SocialLinks";
import { useTheme } from "styled-components";
import useMediaQuery from "@/hooks/useMediaQuery";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <StyledHero id="home">
      <HeroContainer>
        <HeroTextSection>
          <HeroSectionHeader>
            Full-Stack
            <div>Developer.</div>
          </HeroSectionHeader>

          <Description>
            Hi, I'm Elene. I love creating scalable, adaptable front-end and
            full-stack projects. My passion is helping people turn their ideas
            into reality.
          </Description>

          <SocialLinks
            style={{
              marginTop: "1.5rem",
              justifyContent: isSmallScreen ? "center" : "",
            }}
          />
        </HeroTextSection>

        <ImageSection>
          <img src={heroBackground} alt="illustration of hobbies" />
          <div className="blob" />
        </ImageSection>
      </HeroContainer>
    </StyledHero>
  );
};
export default Home;
