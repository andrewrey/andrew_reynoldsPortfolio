import styles from "./SkillsList.module.scss";

const SkillsList = () => {
  return (
    <ul className={styles.skills__list}>
      <li>
        <h2>Coding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          sapiente
        </p>
      </li>
      <li>
        <h2>Managment</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa
          deleniti ad.
        </p>
      </li>
      <li>
        <h2>Logistics</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, dicta
          quia.
        </p>
      </li>
    </ul>
  );
};

export default SkillsList;
