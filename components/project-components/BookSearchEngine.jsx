import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import classes from "@/styles/components/Projects.module.scss";
import image from "@/public/assets/projects/book_search_engine.png";

const Dictionary = () => {
  return (
    <main className={classes["project-section"]}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image className={classes.img} src={image} alt="webpage screenshot" />
      </a>
      <section className={classes.item}>
        <h3 className={classes["item__title"]}>Google Books API Search Engine</h3>
        <p className={classes["item__description"]}>
          Application that fetches data from the Google Books API to display the
          book cover and other details.
        </p>
        <ul className={classes["item__made-with"]}>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            React.js
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            Sass
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            REST API
          </li>
        </ul>
        <div className={classes["item__icons"]}>
          <ul>
            <li className={classes.github}>
              <a
                href="https://github.com/samuel-santos91/google-books-api-search-engine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={40} aria-label="github link" />
              </a>
            </li>
            <li className={classes.webpage}>
              <a
                href=""
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

export default Dictionary;
