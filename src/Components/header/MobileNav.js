import Logo from "../../UI/Logo";
import Hamburger from "../../UI/Hamburger";
import Wrap from "../../UI/Wrap";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <div className={styles.header__mobile_nav}>
      <Wrap name={styles.mobile__wrap}>
        <Logo />
        <Hamburger />
      </Wrap>
    </div>
  );
};

export default MobileNav;
