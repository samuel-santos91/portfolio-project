import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import classes from "../containers/Projects/Projects.module.scss";

const Project = ({
  image,
  title,
  description,
  stack,
  github,
  liveProject = null,
}) => {
  return (
    <main className={classes["project-section"]}>
      <a
        href={liveProject ? liveProject : github}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image className={classes.img} src={image} width={500} height={500} alt="webpage screenshot" />
      </a>

      <section className={classes.item}>
        <h3 className={classes["item__title"]}>{title}</h3>
        <p className={classes["item__description"]}>{description}</p>
        <ul className={classes["item__made-with"]}>
          {stack.map((tech) => (
            <li
              key={tech}
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className={classes["item__icons"]}>
          <ul>
            <li className={classes.github}>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} aria-label="github link" />
              </a>
            </li>
            {liveProject && (
              <li className={classes.webpage}>
                <a href={liveProject} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink size={40} aria-label="external link" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Project;
