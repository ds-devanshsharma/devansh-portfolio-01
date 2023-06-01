import Lottie from "lottie-react";
import styles from "./About.module.scss";
import MainImage from "./MainImage.json";
const About = () => {
  return (
    <section className={styles["about"]}>
      <div className={styles["content"]}>
        <p className={styles.mainQuote}>
          Welcome to my portfolio website! I'm <b>Samkit Kothari</b> , an
          experienced frontend engineer specializing in React and Next.js.
          Explore my work and see how I transform ideas into captivating digital
          experiences.
        </p>
        <br />
        <p>
          "Pixels to Perfection: Sculpting Immersive Experiences through
          Frontend Brilliance."
        </p>
        <br />
        <p>
          <b>
            <em>Code. Create. Inspire.</em>
          </b>
        </p>
        <br />
        <div className={styles["buttonContainer"]}>
          <button className={styles["button"]}>
            <a href="/files/resume.pdf" className={styles.link} download>
              Resume
            </a>
          </button>
          <button className={styles["button"]}>
            <a href="#profileQuestions" className={styles.link}>
              About Me
            </a>
          </button>
        </div>
      </div>
      <Lottie animationData={MainImage} className={styles["image"]} />
    </section>
  );
};

export default About;
