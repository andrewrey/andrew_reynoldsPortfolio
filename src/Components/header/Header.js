import styles from "./Header.module.scss";
import Button from "../../UI/Button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Andrew Reynolds - Front End Developer</h1>
      <Nav />
      <Button text={"Learn More"} />
    </header>
  );
};

export default Header;
