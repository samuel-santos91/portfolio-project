import { BsGithub } from "react-icons/bs";
import Image from "next/image";

import petsitting from "@/public/assets/projects/pet_sitting.png";
import classes from "../../containers/Projects/Projects.module.scss";

const PetSitting = () => {
  return (
    <main className={classes["project-section"]}>
      <a
        href="https://github.com/samuel-santos91/pet-sitting-services-app"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <Image className={classes.img} src={petsitting} alt="petsitting webpage screenshot" />
      </a>
      <section className={classes.item}>
        <h3 className={classes["item__title"]}>Pet Sitting Services</h3>
        <p className={classes["item__description"]}>
          Full stack app that allows you to join as a customer or a sitter to
          request or provide services for your or someone else's pet.
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
            Tailwind
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            Express.js
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            TypeScript
          </li>
          <li
            data-aos="flip-left"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
          >
            MySQL
          </li>
        </ul>
        <div className={classes["item__icons"]}>
          <ul>
            <li className={classes.github}>
              <a
                href="https://github.com/samuel-santos91/pet-sitting-services-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={40} aria-label="github link" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PetSitting;
