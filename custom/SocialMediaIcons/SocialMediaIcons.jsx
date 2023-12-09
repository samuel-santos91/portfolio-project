import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import classes from "./SocialMediaIcons.module.scss"

const SocialMediaIcons = () => {
  return (
    <div className={classes.icons}>
      <ul>
        <li className={classes.github}>
          <a
            href="https://github.com/samuel-santos91"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-anchor-placement="top-bottom"
          >
            <BsGithub size={30} aria-label="github link" />
          </a>
        </li>
        <li className={classes.linkedin}>
          <a
            href="https://www.linkedin.com/in/samuel-santos-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <BsLinkedin size={30} aria-label="linkedin link" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
