import React, { useState, useEffect } from "react";

import resume from "@/public/assets/pdf/resume.pdf";
import classes from "@/styles/components/NavBar.module.scss";

const NavBar = () => {
  const [position, setPosition] = useState(0); 
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navbar = visible ? classes.visible : classes.hidden;

  return (
    <nav className={`${classes.navigation} ${navbar}`}>
      <section className={classes["logo-section"]}>
        <a href="" aria-label="logo">
          <svg
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="logo"
          >
            <circle r="36" cx="40" cy="40" strokeWidth="5" />
            <text x="30%" y="53%" strokeWidth="0.4" dy=".3em">
              S
            </text>
          </svg>
        </a>
      </section>

      <section className={classes["link-section"]}>
        <ul className={classes["link-section__options"]}>
          <li className={classes["link-section__options--about"]}>
            <a href="#about">About</a>
          </li>
          <li className={classes["link-section__options--projects"]}>
            <a href="#projects">Projects</a>
          </li>
          <li className={classes["link-section__options--contact"]}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={classes["link-section__resume"]}>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
