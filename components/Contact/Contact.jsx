import Image from "next/image";

import classes from "./Contact.module.scss";
import SocialMediaIcons from "../../custom/SocialMediaIcons/SocialMediaIcons";
import next from "@/public/assets/skills/next.png";

const Contact = () => {
  return (
    <footer id="contact" className={classes.contact}>
      <section className={classes["section-header"]}>
        <h2 className={classes["section-header__title"]}>Contact </h2>
        <hr />
      </section>

      <section className={classes["contact-main"]}>
        <h3 className={classes["contact-main__title"]}>
          What's the next move?
        </h3>
        <p className={classes["contact-main__para"]}>
          Send me an email at{" "}
          <span className={classes["contact-main__para--link"]}>
            <a href="mailto:samuel.santiagosantos@hotmail.com">
              samuel.santiagosantos@hotmail.com
            </a>
          </span>{" "}
          or
          <br />
          give me a shout on{" "}
          <span className={classes["contact-main__para--link"]}>
            <a
              href="https://www.linkedin.com/in/samuel-santos-webdev/"
              target="_blank"
            >
              social media
            </a>
          </span>
          .
        </p>
        <a
          className={classes["contact-main__email-link"]}
          href="mailto:samuel.santiagosantos@hotmail.com"
          rel="noopener noreferrer"
          target="_blank"
          data-aos="flip-left"
          data-aos-duration="1200"
        >
          Send Email
        </a>

        <SocialMediaIcons />
      </section>
      <section className={classes["built-with-section"]}>
        <p className={classes["built-with-section__line"]}>
          This{" "}
          <a
            className={classes["built-with-section__line--link"]}
            href="https://github.com/samuel-santos91/portfolio-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio
          </a>{" "}
          was built with Next.js
        </p>

        <Image
          className={classes["built-with-section__img"]}
          src={next}
          alt="next.js icon"
        />
      </section>
    </footer>
  );
};

export default Contact;
