import styles from "./Experience.module.scss";
const Experience = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading-container"]}>
        <h1 className={styles["heading"]}>Education and Experience</h1>
      </div>
      <div className={styles["content"]}>
        <div className={styles["experience"]}>
          <div className={styles["point"]}>
            <p className={styles["text"]}>
              Bachelor of Engineering in Computer Engineering (Aug 2018 - Jun
              2022)
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Snjb’s KBJ College Of Engineering, Chandwad
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Completed a comprehensive curriculum focused on computer
              engineering.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Achieved a grade of 9.14, demonstrating strong academic
              performance.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Gained a solid foundation in core computer science concepts and
              programming languages.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Developed problem-solving skills and logical thinking through
              various projects and assignments.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Participated in team-based projects, fostering collaboration and
              communication skills.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Engaged in extracurricular activities to enhance leadership and
              organizational abilities.
            </p>
          </div>
        </div>
        <div className={styles["experience"]}>
          <div className={styles["point"]}>
            <p className={styles["text"]}>
              Associate Software Engineer at Coditas Solutions (Jul 2022 -
              Present)
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Developed and maintained responsive web applications using React
              and Next.js.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Collaborated with UX/UI designers for smooth user experiences.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Built reusable UI components using React, Redux, Recoil, and other
              frontend libraries.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Optimized website performance through efficient code and
              optimization techniques.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Implemented new features and functionality in collaboration with
              cross-functional teams.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Followed agile development methodologies and version control using
              Git and GitHub/GitLab.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Experience with Tailwind CSS and modular SCSS along with component
              libraries like Mui and ChakraUI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
