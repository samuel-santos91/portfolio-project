import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";

import classes from "./Projects.module.scss";

import Project from "@/custom/Project";

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch("data/projects.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getList();
  }, []);

  return (
    <main id="projects" className={classes.projects}>
      <section className={classes["section-header"]}>
        <h2 className={classes["section-header__title"]}>Projects </h2>
        <hr />
      </section>

      <section>
        {data &&
          data.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              stack={project.stack}
              github={project.github}
              liveProject={project.liveProject}
            />
          ))}
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
