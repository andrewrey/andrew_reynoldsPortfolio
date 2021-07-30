import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const portalElements = document.getElementById("overlay");

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children, animationClass }) => {
  return (
    <div
      className={
        animationClass
          ? `${styles.modal} ${styles.open}`
          : `${styles.modal} ${styles.close}`
      }
    >
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose, animationClass }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElements)}
      {createPortal(
        <ModalOverlay animationClass={animationClass}>{children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;
