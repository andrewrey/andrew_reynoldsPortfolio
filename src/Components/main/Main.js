import Background from "./mainComponents/Background";
import Skills from "./mainComponents/Skills";
import Projects from "./mainComponents/Projects";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <Background />
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
