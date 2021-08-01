import SkillsList from "../mainSubComponents/SkillsList";
import styles from "./Skills.module.scss";
import skillImg from "../../../Assets/IMG_2256.jpeg";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__wrap}>
        <div>
          <img src={skillImg} alt="Entrance to Web Summit" />
        </div>
        <div className={styles.skills_list}>
          <SkillsList />
        </div>
      </div>
    </section>
  );
};

export default Skills;
