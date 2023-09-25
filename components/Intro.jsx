import classes from "@/styles/components/Intro.module.scss";

const Intro = () => {
  return (
    <div id="intro" className={classes.intro}>
      <section className={classes.info}>
        <p className={classes["info__para"]}>Hello, I am</p>
        <h1 className={classes["info__header1"]}>Samuel Santos.</h1>
        <h2 className={classes["info__header2"]}>
          {" "}
          A&nbsp;
          <span
            className={`${classes["info__header2--highlight"]} ${classes["info__header2--animation-one"]}`}
          >
            full stack
          </span>{" "}
          developer
          <br /> that loves to
          <br />{" "}
          <span
            className={`${classes["info__header2--highlight"]} ${classes["info__header2--animation-two"]}`}
          >
            discover
          </span>{" "}
          and{" "}
          <span
            className={`${classes["info__header2--highlight"]} ${classes["info__header2--animation-three"]}`}
          >
            create
          </span>
          <span className={classes["info__header2--animation-three"]}>.</span>
        </h2>
      </section>

      <section className={classes.quote}>
        <p>
          <i>
            “Every great developer you know got there by solving problems they
            were unqualified to solve until they actually did it.” <br />
            <br />
            <strong>Patrick McKenzie</strong>
          </i>
        </p>
      </section>
    </div>
  );
};

export default Intro;
