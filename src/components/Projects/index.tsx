import project from "@/images/project.png";
import {
  ActionBtns,
  DescriptionContainer,
  GithubLink,
  ImageContainer,
  ContainerStyled,
  ProjectsStyled,
  ProjectContainer,
  Wave,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import PrimaryBtn from "../Buttons/primaryBtn";

const Projects = () => {
  return (
    <ProjectsStyled id="projects">
      <Wave className="wave-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </Wave>

      <ContainerStyled>
        {/* Project 1 */}
        <ProjectContainer>
          <ImageContainer>
            <img src={project} alt="" />
          </ImageContainer>

          <div>
            <h2>Example Project Name</h2>

            <DescriptionContainer>
              <p>
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </DescriptionContainer>

            <ActionBtns>
              <GithubLink href="https://github.com/" target="_blank">
                <FaGithub style={{ fontSize: "1.7rem" }} />
              </GithubLink>
              <a href="https://github.com/" target="_blank">
                <PrimaryBtn>View Project</PrimaryBtn>
              </a>
            </ActionBtns>
          </div>
        </ProjectContainer>

        {/* Project 2 */}
        <ProjectContainer>
          <ImageContainer>
            <img src={project} alt="" />
          </ImageContainer>

          <div>
            <h2>Example Project Name</h2>

            <DescriptionContainer>
              <p>
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </DescriptionContainer>

            <ActionBtns>
              <GithubLink href="https://github.com/" target="_blank">
                <FaGithub style={{ fontSize: "1.7rem" }} />
              </GithubLink>
              <a href="https://github.com/" target="_blank">
                <PrimaryBtn>View Project</PrimaryBtn>
              </a>
            </ActionBtns>
          </div>
        </ProjectContainer>

        {/* Project 3 */}
        <ProjectContainer>
          <ImageContainer>
            <img src={project} alt="" />
          </ImageContainer>

          <div>
            <h2>Example Project Name</h2>

            <DescriptionContainer>
              <p>
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </DescriptionContainer>

            <ActionBtns>
              <GithubLink href="https://github.com/" target="_blank">
                <FaGithub style={{ fontSize: "1.7rem" }} />
              </GithubLink>
              <a href="https://github.com/" target="_blank">
                <PrimaryBtn>View Project</PrimaryBtn>
              </a>
            </ActionBtns>
          </div>
        </ProjectContainer>
      </ContainerStyled>

      <Wave className="wave-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Wave>
    </ProjectsStyled>
  );
};
export default Projects;
