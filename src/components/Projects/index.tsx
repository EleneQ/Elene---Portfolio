import { FaGithub } from "react-icons/fa";
import {
  ActionBtns,
  DescriptionContainer,
  GithubLink,
  ImageContainer,
  ContainerStyled,
  ProjectsStyled,
  ProjectContainer,
  Wave,
  ToolList,
} from "./styles";
import PrimaryBtn from "../Buttons/primaryBtn";
import monito from "@/images/monito.png";
import foodieland from "@/images/foodieland.png";
import hekto from "@/images/hekto.png";

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
            <img src={monito} alt="monito" loading="lazy" />
          </ImageContainer>

          <div>
            <h2>Mointo 🐕‍🦺 - Pet Adoption Agency</h2>

            <DescriptionContainer>
              <p>
                Monito is a pet adoption agency committed to making adoption
                accessible worldwide. The website features a user-friendly
                interface designed to streamline the search process, enabling
                users to discover their ideal pets effortlessly. Monito helps
                make pet adoption a straightforward and enjoyable process.
              </p>

              <ToolList>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Sass / Scss</li>
              </ToolList>
            </DescriptionContainer>

            <ActionBtns>
              <GithubLink
                href="https://github.com/EleneQ/Monito---Pet-Adoption-Agency"
                target="_blank"
              >
                <FaGithub style={{ fontSize: "1.7rem" }} />
              </GithubLink>
              <a href="https://monito.pages.dev/" target="_blank">
                <PrimaryBtn>View Project</PrimaryBtn>
              </a>
            </ActionBtns>
          </div>
        </ProjectContainer>

        {/* Project 2 */}
        <ProjectContainer>
          <ImageContainer>
            <img src={foodieland} alt="foodieland" loading="lazy" />
          </ImageContainer>

          <div>
            <h2>Foodieland 🍕 - Recipes</h2>

            <DescriptionContainer>
              <p>
                Foodieland serves as a digital hub for meal and cocktail
                recipes, offering a user-friendly interface to search and filter
                through a wide array of recipes. With just a click of a button,
                users can uncover new flavors and experience the joy of culinary
                discovery right in their own kitchen. Foodieland is an
                all-in-one destination for culinary inspiration and exploration.
              </p>

              <ToolList>
                <li>React</li>
                <li>Rest API</li>
                <li>Tailwind</li>
                <li>Sass / Scss</li>
              </ToolList>
            </DescriptionContainer>

            <ActionBtns>
              <GithubLink
                href="https://github.com/EleneQ/Foodieland---recipes-and-cocktails"
                target="_blank"
              >
                <FaGithub style={{ fontSize: "1.7rem" }} />
              </GithubLink>
              <a href="https://foodieland-recipe.netlify.app/" target="_blank">
                <PrimaryBtn>View Project</PrimaryBtn>
              </a>
            </ActionBtns>
          </div>
        </ProjectContainer>

        {/* Project 3 */}
        <ProjectContainer>
          <ImageContainer>
            <img src={hekto} alt="hekto" loading="lazy" />
          </ImageContainer>

          <div>
            <h2>Hekto 👒 - eCommerce</h2>

            <DescriptionContainer>
              <p>
                Hekto is an eCommerce platform. It provides a user-friendly
                interface that helps visitors filter, search and sort through
                all products. Users can register or login, review each product,
                add to card, pay using Stripe webhooks and ship to their
                address.
                <div style={{ marginTop: "1rem" }}>
                  For the admin, Hekto has a lot of special functionality, such
                  as creating and editing products, viewing all users, orders
                  and products, marking orders as delivered, etc.
                </div>
              </p>

              <ToolList>
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Material UI</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Stripe</li>
              </ToolList>
            </DescriptionContainer>

            <ActionBtns>
              <GithubLink
                href="https://github.com/EleneQ/Hekto---eCommerce-Store"
                target="_blank"
              >
                <FaGithub style={{ fontSize: "1.7rem" }} />
              </GithubLink>
              <a href="https://hekto-0me9.onrender.com/" target="_blank">
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
