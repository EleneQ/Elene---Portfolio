import about from "@/images/about.png";
import {
  AboutContainer,
  AboutStyled,
  TextSection,
  Image,
  SectionTitle,
} from "./styles";
import MySkills from "./MySkills";

const About = () => {
  return (
    <AboutStyled id="about">
      <AboutContainer>
        <div>
          <Image src={about} alt="illustrations" />
        </div>
        <TextSection>
          <h2>About</h2>

          <div>
            <SectionTitle>An Experienced Programmer</SectionTitle>
            <p>
              Hi👋 I'm Elene, a full-stack developer from Georgia. I love art and
              creating beautiful, easy-to-use websites. I started out as a game
              developer using Unity and, after gaining some experience working
              in the industry, I transitioned into web development - my true
              passion.
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
