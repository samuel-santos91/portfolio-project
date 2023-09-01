import Image from "next/image";

import html from "@/public/assets/skills/html.png";
import css from "@/public/assets/skills/css.png";
import sass from "@/public/assets/skills/sass.png";
import tailwind from "@/public/assets/skills/tailwind.png";
import javascript from "@/public/assets/skills/js.png";
import typescript from "@/public/assets/skills/ts.png";
import react from "@/public/assets/skills/react.png";
import node from "@/public/assets/skills/node.png";
import express from "@/public/assets/skills/express.png";
import mysql from "@/public/assets/skills/mysql.png";

import classes from "@/styles/components/custom/SkillListIcons.module.scss";

const SkillListIcons = () => {
  return (
    <section className={classes["skills-section"]}>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={html}
          alt="html"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          HTML
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={css}
          alt="css"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          CSS
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="350"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={sass}
          alt="sass"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          Sass
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={tailwind}
          alt="tailwind"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          Tailwind
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="450"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={javascript}
          alt="javascript"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          JavaScript
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={typescript}
          alt="typescript"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          TypeScript
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="550"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={react}
          alt="react"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          React.js
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={node}
          alt="node"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          Node.js
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="650"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--express"]}
          src={express}
          alt="express"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          Express.js
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes["skills-section__block--icons"]}
          src={mysql}
          alt="mysql"
        />
        <figcaption className={classes["skills-section__block--title"]}>
          MySQL
        </figcaption>
      </div>
    </section>
  );
};

export default SkillListIcons;
