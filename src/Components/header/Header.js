import styles from "./Header.module.scss";
import MobileNav from "./MobileNav";
import Button from "../../UI/Button";
import Wrap from "../../UI/Wrap";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <MobileNav />
      <Wrap name={styles["header__wrap"]}>
        <h1>
          Andrew Reynolds <span>Front End Developer</span>
        </h1>
        <Nav />
        <Button text={"Learn More"} />
      </Wrap>
    </header>
  );
};

export default Header;
