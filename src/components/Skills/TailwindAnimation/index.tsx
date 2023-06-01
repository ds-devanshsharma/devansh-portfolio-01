import styles from "./TailwindAnimation.module.scss";
import img from "./Tailwind_CSS_Logo.svg.png";
const TailwindAnimation = () => {
  return (
    <div className={styles.main}>
      <img src={img} />
    </div>
  );
};

export default TailwindAnimation;
