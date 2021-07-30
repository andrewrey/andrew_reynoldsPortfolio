import styles from "./Background.module.scss";

const Background = () => {
  return (
    <section>
      <div className={styles.background__wrap}>
        <div className={styles.title}>
          <h2>
            Becoming a <span>Front End Developer</span>
            <br />
            The Background Story
          </h2>
        </div>
        <div>
          <div className={styles.background__circle_blue}></div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Background;
