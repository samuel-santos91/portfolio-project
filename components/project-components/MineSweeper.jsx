import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import classes from "../../containers/Projects/Projects.module.scss";
import minesweeper from "@/public/assets/projects/minesweeper.png";

const Minesweeper = () => {
  return (
    <main className={classes["project-section"]}>
      <a
        href="https://github.com/samuel-santos91/java-cli-minesweeper"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image className={classes.img} src={minesweeper} alt="minesweeper game screenshot" />
      </a>
      <section className={classes.item}>
        <h3 className={classes["item__title"]}>Java CLI Minesweeper</h3>
        <p className={classes["item__description"]}>
          Minesweeper game built with Java. Playable in the command line.
        </p>
        <ul className={classes["item__made-with"]}>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            Java
          </li>
        </ul>
        <div className={classes["item__icons"]}>
          <ul>
            <li className={classes.github}>
              <a
                href="https://github.com/samuel-santos91/java-cli-minesweeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={40} aria-label="github link" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Minesweeper;
