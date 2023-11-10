import Image from "next/image";

import classes from "@/styles/components/custom/SkillListIcons.module.scss";

const SkillIcon = ({img, title, style = "icons"}) => {
    return (
        <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="650"
        data-aos-anchor-placement="top-bottom"
        className={classes["skills-section__block"]}
      >
        <Image
          className={classes[`skills-section__block--${style}`]}
          src={img}
          alt={title}
        />
        <figcaption className={classes["skills-section__block--title"]}>
          {title}
        </figcaption>
      </div>
    )
}

export default SkillIcon;