import styles from "./Hamburger.module.scss";

const Hamburger = ({ onToggle }) => {
  return (
    <div className={styles.hamburger} onClick={onToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hamburger;
