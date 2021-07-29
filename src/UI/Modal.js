import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const portalElements = document.getElementById("overlay");

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  <>
    {createPortal(<Backdrop onClose={onClose} />, portalElements)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElements)}
  </>;
};

export default Modal;
