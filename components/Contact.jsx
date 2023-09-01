import classes from "@/styles/components/Contact.module.scss";
import SocialMediaIcons from "./custom/SocialMediaIcons";

const Contact = () => {
  return (
    <div id="contact" className={classes.contact}>
      <header className={classes["section-header"]}>
        <h2 className={classes["section-header__title"]}>Contact </h2>
        <hr />
      </header>

      <main className={classes["contact-main"]}>
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
          <span className={classes["contact-main__para--highlight"]}>
            social media
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
      </main>
    </div>
  );
};

export default Contact;
