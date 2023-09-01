import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import classes from "@/styles/components/Projects.module.scss";
import landingpage from "@/public/assets/projects/landingpage.png";

const LandingPage = () => {
  return (
    <main className={classes["project-section"]}>
      <a
        href="https://samuel-santos91.github.io/landing-page/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image className={classes.img} src={landingpage} alt="landing-page webpage screenshot" />
      </a>
      <section className={classes.item}>
        <h3 className={classes["item__title"]}>Landing Page</h3>
        <p className={classes["item__description"]}>
          Fully responsive landing page project of a guitar store that also
          contains a survey form to promote classes to interested students.
        </p>
        <ul className={classes["item__made-with"]}>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            HTML
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            CSS
          </li>
        </ul>
        <div className={classes["item__icons"]}>
          <ul>
            <li className={classes.github}>
              <a
                href="https://github.com/samuel-santos91/landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={40} aria-label="github link" />
              </a>
            </li>
            <li className={classes.webpage}>
              <a
                href="https://samuel-santos91.github.io/landing-page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink size={40} aria-label="external link" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
