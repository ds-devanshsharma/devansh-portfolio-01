import Lottie from "lottie-react";
import styles from "./Skills.module.scss";
import reactImage from "./react.json";
import nextImage from "./next.json";
import htmlImage from "./html.json";
import cssImage from "./css.json";
import firebaseImage from "./firebase.json";
import cImage from "./c.json";
import pythonImage from "./python.json";
import javascriptImage from "./javascript.json";
import SassAnimation from "./SassAnimation/SassAnimation";
import TypescriptAnimation from "./TypescriptAnimation";
import TailwindAnimation from "./TailwindAnimation";
import StrapiAnimation from "./StrapiAnimation";
import BootstrapAnimation from "./BootstrapAnimation";
import CPlusPlus from "./CPlusPlusAnimation";
const Skills = () => {
  return (
    <section className={styles["skills"]}>
      <h2 className={styles["heading"]}>Skills</h2>
      <div className={styles["skills-grid"]}>
        <div className={styles["skill"]}>
          <Lottie animationData={reactImage} className={styles["image"]} />
          <h3 className={styles["label"]}>React JS</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={nextImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Next JS</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={javascriptImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Javascript</h3>
        </div>
        <div className={styles["skill"]}>
          <TypescriptAnimation />
          <h3 className={styles["label"]}>Typescript</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={htmlImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Html</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={cssImage} className={styles["heightImage"]} />
          <h3 className={styles["label"]}>Css-3</h3>
        </div>
        <div className={styles["skill"]}>
          <SassAnimation />
          <h3 className={styles["label"]}>Sass</h3>
        </div>
        <div className={styles["skill"]}>
          <BootstrapAnimation />
          <h3 className={styles["label"]}>Bootstrap</h3>
        </div>
        <div className={styles["skill"]}>
          <TailwindAnimation />
          <h3 className={styles["label"]}>Tailwind Css</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie
            animationData={firebaseImage}
            className={styles["heightImage"]}
          />
          <h3 className={styles["label"]}>Firebase</h3>
        </div>
        <div className={styles["skill"]}>
          <StrapiAnimation />
          <h3 className={styles["label"]}>Strapi</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={cImage} className={styles["heightImage"]} />
          <h3 className={styles["label"]}>C</h3>
        </div>
        <div className={styles["skill"]}>
          <CPlusPlus />
          <h3 className={styles["label"]}>C++</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={pythonImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Python</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
