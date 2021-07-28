import Logo from "../../UI/Logo";
import Hamburger from "../../UI/Hamburger";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <div className={styles.header__mobile_nav}>
      <div>
        <Logo />
        <Hamburger />
      </div>
    </div>
  );
};

export default MobileNav;
