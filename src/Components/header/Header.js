import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Andrew Reynolds - Front End Developer</h1>
      <Nav />
    </header>
  );
};

export default Header;
