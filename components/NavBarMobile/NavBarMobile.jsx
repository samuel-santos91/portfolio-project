import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbArchive } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import React, { useState, useEffect } from "react";

import resume from "@/public/assets/pdf/resume.pdf";
import classes from "./NavBarMobile.module.scss";

const NavBarMobile = () => {
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

  const headerScroll = visible ? classes.visibleH : classes.hiddenH;
  const footerScroll = visible ? classes.visibleF : classes.hiddenF;

  return (
    <nav>
      <header className={`${headerScroll} ${classes.header}`}>
        <section className={classes["logo-section"]}>
          <a href="#" aria-label="logo">
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
        <section className={classes["resume-button"]}>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </section>
      </header>

      <footer className={`${footerScroll} ${classes.footer}`}>
        <div className={classes["icons-section"]}>
          <div
            className={`${classes["icons-section--icons"]} ${classes["icons-section--home"]}`}
          >
            <a href="#intro" aria-label="intro">
              <AiOutlineHome size={35} />
            </a>
          </div>
          <div
            className={`${classes["icons-section--icons"]} ${classes["icons-section--about"]}`}
          >
            <a href="#about" aria-label="about">
              <BsPerson size={35} />
            </a>
          </div>
          <div
            className={`${classes["icons-section--iconx"]} ${classes["icons-section--projects"]}`}
          >
            <a href="#projects" aria-label="projects">
              <TbArchive size={35} />
            </a>
          </div>
          <div
            className={`${classes["icons-section--icons"]} ${classes["icons-section--contact"]}`}
          >
            <a href="#contact" aria-label="contact">
              <MdOutlineMail size={35} />
            </a>
          </div>
        </div>
      </footer>
    </nav>
  );
};

export default NavBarMobile;
