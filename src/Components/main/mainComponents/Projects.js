import styles from "./Projects.module.scss";
import ProjectList from "../mainSubComponents/projectList";

const Projects = () => {
  return (
    <section className={styles.project}>
      <div className={styles.project__wrap}>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
