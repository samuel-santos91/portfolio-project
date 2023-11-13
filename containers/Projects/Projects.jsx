import { BsGithub } from "react-icons/bs";

import classes from "./Projects.module.scss";

import PetSitting from "../../components/project-components/PetSitting";
import FoodOrdering from "../../components/project-components/FoodOrdering";
import Dictionary from "../../components/project-components/Dictionary";
import TaskList from "../../components/project-components/TaskList";
import BookSearchEngine from "../../components/project-components/BookSearchEngine";
import ECommerce from "../../components/project-components/ECommerce";
import Minesweeper from "../../components/project-components/MineSweeper";

const Projects = () => {
  return (
    <main id="projects" className={classes.projects}>
      <section className={classes["section-header"]}>
        <h2 className={classes["section-header__title"]}>Projects </h2>
        <hr />
      </section>

      <section>
        <PetSitting />
        <ECommerce/>
        <BookSearchEngine />
        <Dictionary />
        <Minesweeper/>
        <TaskList />
        <FoodOrdering />
      </section>

      <section className={classes["visit-github-section"]}>
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
      </section>
    </main>
  );
};

export default Projects;
