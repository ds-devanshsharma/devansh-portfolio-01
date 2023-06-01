import styles from "./StrapiAnimation.module.scss";
import img from "./strapi.svg";
const StrapiAnimation = () => {
  return (
    <div className={styles.main}>
      <img src={img} />
    </div>
  );
};

export default StrapiAnimation;
