import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import MobileNav from "./MobileNav";
import Button from "../../UI/Button";
import Wrap from "../../UI/Wrap";
import Nav from "./Nav";

const Header = () => {
  const [viewModal, setViewModal] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const toggleViewHandler = () => {
    setViewModal((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("effect");
    const windowResizeHandler = () => {
      if (window.innerWidth > 768) {
        setViewModal(false);
      }
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowResizeHandler);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);
  return (
    <header className={styles.header}>
      {windowSize < 768 && (
        <MobileNav
          onToggle={toggleViewHandler}
          window={windowSize}
          viewModal={viewModal}
        />
      )}
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
