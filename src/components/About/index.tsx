import about from "@/images/about.png";
import {
  AboutContainer,
  AboutStyled,
  TextSection,
  Image,
  SectionTitle,
} from "./styles";
import MySkills from "./MySkills";
import { SelectedPage } from "@/types";
import { useAnchorLink } from "@/hooks/useAnchorLink";

const About = () => {
  const { setSelectedPage } = useAnchorLink();

  return (
    <AboutStyled id="about">
      <AboutContainer
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <div>
          <Image src={about} alt="illustrations" />
        </div>
        <TextSection>
          <h2>About</h2>

          <div>
            <SectionTitle>An Experienced Programmer</SectionTitle>
            <p>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
          </div>

          <div>
            <MySkills />
          </div>
        </TextSection>
      </AboutContainer>
    </AboutStyled>
  );
};
export default About;
