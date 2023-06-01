import styles from "./SassAnimation.module.scss";
import img from "./sass-1-logo.png";
type Props = {};

const SassAnimation = (props: Props) => {
  return (
    <div className={styles.body}>
      <div className={styles.logo}>
        <svg viewBox=" 0 0 200 200">
          <circle
            className={styles["circleBg"]}
            cx="100"
            cy="100"
            r="90"
            stroke="#C2619132"
            fillOpacity="0"
          />
          <circle
            className={styles["circle"]}
            cx="100"
            cy="100"
            r="90"
            stroke="#C26191"
            fillOpacity="0"
          />
        </svg>
        <img className={styles.image} src={img} />
      </div>
    </div>
  );
};

export default SassAnimation;
