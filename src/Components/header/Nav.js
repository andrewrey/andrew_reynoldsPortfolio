import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.nav_list}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#background">Background</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
