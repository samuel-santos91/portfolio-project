import { BsGithub } from "react-icons/bs";

import classes from "@/styles/components/Projects.module.scss";
import PetSitting from "./project-components/PetSitting";
import FoodOrdering from "./project-components/FoodOrdering";
import Dictionary from "./project-components/Dictionary";
import TaskList from "./project-components/TaskList";
import LandingPage from "./project-components/LandingPage";

const Projects = () => {
  return (
    <div id="projects" className={classes.projects}>
      <header className={classes["section-header"]}>
        <h2 className={classes["section-header__title"]}>Projects </h2>
        <hr />
      </header>

      <main>
        <PetSitting />
        <FoodOrdering />
        <Dictionary />
        <TaskList />
        <LandingPage />
      </main>

      <footer className={classes["visit-github-section"]}>
        <h4 className={classes["visit-github-section__header"]}>
          Visit my{" "}
          <span
            className={classes["visit-github-section__header--link"]}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <a
              href="https://github.com/samuel-santos91"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>{" "}
          account for more projects
        </h4>
        <div className={classes["visit-github-section__github-icon"]}>
          <a
            href="https://github.com/samuel-santos91"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <BsGithub size={30} aria-label="github link" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
