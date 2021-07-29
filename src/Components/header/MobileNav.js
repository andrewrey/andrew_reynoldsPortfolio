import { useState } from "react";
import Logo from "../../UI/Logo";
import Modal from "../../UI/Modal";
import Nav from "./Nav";
import Hamburger from "../../UI/Hamburger";
import Wrap from "../../UI/Wrap";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  const [viewModal, setViewModal] = useState(false);
  return (
    <div className={styles.header__mobile_nav}>
      <Modal>
        <Nav />
      </Modal>
      <Wrap name={styles.mobile__wrap}>
        <Logo />
        <Hamburger />
      </Wrap>
    </div>
  );
};

export default MobileNav;
