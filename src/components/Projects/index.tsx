import project from "@/images/project.png";
import { DescriptionContainer, ProjectsContainer } from "./styles";

const Projects = () => {
  return (
    <section id="projects">
      <ProjectsContainer>
        <div>
          <h2>Example Project Name</h2>
          <DescriptionContainer>
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </DescriptionContainer>
          <div>
            <p>GH</p>
            <p>View Project</p>
          </div>
        </div>
        <div>
          <img src={project} alt="" />
        </div>
      </ProjectsContainer>
    </section>
  );
};
export default Projects;
