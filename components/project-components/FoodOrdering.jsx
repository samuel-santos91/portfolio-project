import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import classes from "@/styles/components/Projects.module.scss";
import foodOrder from "@/public/assets/projects/foodorder.png";

const FoodOrdering = () => {
  return (
    <main className={classes["project-section"]}>
      <a
        href="https://samuel-santos91.github.io/food-ordering-app/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image className={classes.img} src={foodOrder} alt="food order webpage screenshot" />
      </a>
      <section className={classes.item}>
        <h3 className={classes["item__title"]}>Food Ordering App</h3>
        <p className={classes["item__description"]}>
          Food ordering prototype that allows you to add your food choice to the
          cart, increase or remove the quantity and finalise the order.
        </p>
        <ul className={classes["item__made-with"]}>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            {" "}
            React.js
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            Sass
          </li>
        </ul>
        <div className={classes["item__icons"]}>
          <ul>
            <li className={classes.github}>
              <a
                href="https://github.com/samuel-santos91/food-ordering-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={40} aria-label="github link" />
              </a>
            </li>
            <li className={classes.webpage}>
              <a
                href="https://samuel-santos91.github.io/food-ordering-app/"
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

export default FoodOrdering;
