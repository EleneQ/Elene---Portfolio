import { Container } from "@/styles/util-styles";
import styled from "styled-components";

export const ProjectsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-block: 5rem;

  & > * {
    flex: 1;
  }
`;

export const DescriptionContainer = styled.div`

`;
