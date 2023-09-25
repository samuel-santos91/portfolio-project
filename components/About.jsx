import Image from "next/image";

import classes from "@/styles/components/About.module.scss";
import picture from "@/public/assets/profile/me.jpeg";

import SocialMediaIcons from "./custom/SocialMediaIcons";
import SkillListIcons from "./custom/SkillListIcons";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <section className={classes["section-header"]}>
        <h2 className={classes["section-header__title"]}>About Me </h2>
        <hr />
      </section>

      <section className={classes["about-main"]}>
        <section className={classes["about-main__image-and-icons"]}>
          <div data-aos="fade-up" data-aos-duration="1200">
            <Image
              className={classes["about-main__image-and-icons--image"]}
              src={picture}
              alt="My smliy face"
              width="auto"
            />
          </div>

          <SocialMediaIcons />
        </section>

        <section className={classes["about-main__text"]}>
          <p data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
            Introducing me, a{" "}
            <span className={classes["about-main__text--highlight"]}>
              Brazilian
            </span>{" "}
            music lover who has moved to{" "}
            <span className={classes["about-main__text--highlight"]}>
              Australia
            </span>{" "}
            and embarked on a career change into Web Development. With a diverse
            background in{" "}
            <span className={classes["about-main__text--highlight"]}>
              Mechanical Engineering
            </span>{" "}
            and teaching{" "}
            <span className={classes["about-main__text--highlight"]}>
              English
            </span>{" "}
            and{" "}
            <span className={classes["about-main__text--highlight"]}>
              Mathematics
            </span>
            , I have acquired a keen ability to adapt to new challenges and
            excell at{" "}
            <span className={classes["about-main__text--highlight"]}>
              problem-solving
            </span>
            .
            <br />
            <br /> As a{" "}
            <span className={classes["about-main__text--highlight"]}>
              Full Stack Developer
            </span>{" "}
            driven by a passion for leaning new skills and technologies, I bring
            my abilities and creativity to building{" "}
            <span className={classes["about-main__text--highlight"]}>
              dynamic
            </span>{" "}
            and{" "}
            <span className={classes["about-main__text--highlight"]}>
              engaging
            </span>{" "}
            web applications.
            <br />
            <br /> With a natural curiosity and drive to{" "}
            <span className={classes["about-main__text--highlight"]}>
              succeed
            </span>
            , I approach every project with{" "}
            <span className={classes["about-main__text--highlight"]}>
              enthusiasm
            </span>{" "}
            and commitment to{" "}
            <span className={classes["about-main__text--highlight"]}>
              excellence
            </span>
            .
            <br />
            <br />
            Technologies I have been working with:
          </p>
        </section>
      </section>

      <section>
        <SkillListIcons />
      </section>
    </div>
  );
};

export default About;
