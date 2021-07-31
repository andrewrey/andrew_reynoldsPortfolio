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
        <div className={styles.background__decorations}>
          <div className={styles.background__circle_blue}></div>
          <div className={styles.background__img_circles}>
            <div className={styles.background__circle_img1}></div>
            <div className={styles.background__circle_img2}></div>
          </div>
          <div className={styles.background__circle_gold}>
            <div className={styles.background__circle_gold__inner}></div>
          </div>
        </div>
        <div className={styles.background__card}>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            nihil explicabo totam excepturi repudiandae consequuntur voluptate
            pariatur ea rem numquam.
          </p>
          <button>learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Background;
