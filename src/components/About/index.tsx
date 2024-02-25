import about from "@/images/about.png";
import {
  AboutContainer,
  AboutStyled,
  TextSection,
  Image,
  SectionTitle,
} from "./styles";
import MySkills from "./MySkills";
import { useRef } from "react";
// import { useAnchorLink } from "@/hooks/useAnchorLink";
// import { SelectedPage } from "@/types";
// import { useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const { setSelectedPage } = useAnchorLink();

  // const inView = useInView(ref);

  // useEffect(() => {
  //   if (inView) {
  //     setSelectedPage(SelectedPage.About);
  //   }
  // }, [inView]);

  return (
    <AboutStyled id="about">
      <AboutContainer>
        <div ref={ref}>
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
