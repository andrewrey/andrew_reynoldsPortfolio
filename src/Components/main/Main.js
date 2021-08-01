import Background from "./mainComponents/Background";
import Skills from "./mainComponents/Skills";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <Background />
      <Skills />
    </main>
  );
};

export default Main;
