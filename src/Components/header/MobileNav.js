import Logo from "../../UI/Logo";
import Modal from "../../UI/Modal";
import Nav from "./Nav";
import Hamburger from "../../UI/Hamburger";
import Wrap from "../../UI/Wrap";
import styles from "./MobileNav.module.scss";

const MobileNav = ({ onToggle, viewModal, animation, onClose }) => {
  return (
    <>
      <div className={styles.header__mobile_nav}>
        {viewModal && (
          <Modal onClose={onClose} animationClass={animation}>
            <Nav />
          </Modal>
        )}
        <Wrap name={styles.mobile__wrap}>
          <Logo />
          <Hamburger onToggle={onToggle} />
        </Wrap>
      </div>
    </>
  );
};

export default MobileNav;
