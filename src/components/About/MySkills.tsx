import { skillList } from "@/constants/skillList";
import { MySkillsStyled, SeeAllBtn } from "./styles";
import { useState } from "react";
import { Tooltip, TooltipParent } from "@/styles/util-styles";

const MySkills = () => {
  const maxVisibleSkills = 6;
  const [seeAllSkills, setSeeAllSkills] = useState(false);

  const visibleSkills = seeAllSkills
    ? skillList
    : skillList.slice(0, maxVisibleSkills);

  return (
    <MySkillsStyled>
      <h3>Skills: </h3>

      <ul>
        {visibleSkills.map((skill) => (
          <li key={skill.title}>
            <TooltipParent>
              <img
                src={
                  skill.imgQuery
                    ? `https://skillicons.dev/icons?i=${skill.imgQuery}`
                    : skill.imgUrl
                }
                alt={skill.title}
              />
              <Tooltip>{skill.title}</Tooltip>
            </TooltipParent>
          </li>
        ))}
      </ul>

      {skillList.length > maxVisibleSkills && (
        <SeeAllBtn onClick={() => setSeeAllSkills((prev) => !prev)}>
          {seeAllSkills ? "Collapse" : "See All"}
        </SeeAllBtn>
      )}
    </MySkillsStyled>
  );
};

export default MySkills;
