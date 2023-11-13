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
import next from "@/public/assets/skills/next.png";
import firebase from "@/public/assets/skills/firebase.png";
import java from "@/public/assets/skills/java.png";
import spring from "@/public/assets/skills/spring.png";
import nest from "@/public/assets/skills/nest.png";

import classes from "./SkillListIcons.module.scss";

import SkillIcon from "../../custom/SkillIcon";

const SkillListIcons = () => {
  return ( 
    //Sections have been duplicated to generate infinite carousel
    <div className={classes["animation-section"]}>
      <section className={classes["skills-section"]}>
        <SkillIcon img={html} title={"HTML"}/>
        <SkillIcon img={css} title={"CSS"}/>
        <SkillIcon img={sass} title={"Sass"}/>
        <SkillIcon img={tailwind} title={"Tailwind"}/>
        <SkillIcon img={javascript} title={"JavaScript"}/>
        <SkillIcon img={typescript} title={"TypeScript"}/>
        <SkillIcon img={react} title={"React.js"}/>
        <SkillIcon img={next} title={"Next.js"} style="next"/>
        <SkillIcon img={node} title={"Node.js"}/>
        <SkillIcon img={express} title={"Express.js"} style="express"/>
        <SkillIcon img={nest} title={"Nest.js"}/>
        <SkillIcon img={java} title={"Java"}/>
        <SkillIcon img={spring} title={"Spring"}/>
        <SkillIcon img={firebase} title={"Firestore"}/>
        <SkillIcon img={mysql} title={"MySQL"}/>
      </section>

      <section className={classes["skills-section"]}>
      <SkillIcon img={html} title={"HTML"}/>
        <SkillIcon img={css} title={"CSS"}/>
        <SkillIcon img={sass} title={"Sass"}/>
        <SkillIcon img={tailwind} title={"Tailwind"}/>
        <SkillIcon img={javascript} title={"JavaScript"}/>
        <SkillIcon img={typescript} title={"TypeScript"}/>
        <SkillIcon img={react} title={"React.js"}/>
        <SkillIcon img={next} title={"Next.js"} style="next"/>
        <SkillIcon img={node} title={"Node.js"}/>
        <SkillIcon img={express} title={"Express.js"} style="express"/>
        <SkillIcon img={nest} title={"Nest.js"}/>
        <SkillIcon img={java} title={"Java"}/>
        <SkillIcon img={spring} title={"Spring"}/>
        <SkillIcon img={firebase} title={"Firestore"}/>
        <SkillIcon img={mysql} title={"MySQL"}/>
      </section>
    </div>
  );
};

export default SkillListIcons;
