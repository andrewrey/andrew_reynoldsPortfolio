import imgLogo from "../Assets/logo_transparent.png";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={imgLogo} alt="company logo" />
    </div>
  );
};

export default Logo;
