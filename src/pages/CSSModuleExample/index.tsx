import { clsx } from "clsx";
import styles from "./css-module-example.module.css";

export default () => {
  return (
    <div className={clsx(styles.container, styles.noselect)}>
      <div className={styles.canvas}>
        <div className={clsx(styles.tracker, styles.tr1)}></div>
        <div className={clsx(styles.tracker, styles.tr2)}></div>
        <div className={clsx(styles.tracker, styles.tr3)}></div>
        <div className={clsx(styles.tracker, styles.tr4)}></div>
        <div className={clsx(styles.tracker, styles.tr5)}></div>
        <div className={clsx(styles.tracker, styles.tr6)}></div>
        <div className={clsx(styles.tracker, styles.tr7)}></div>
        <div className={clsx(styles.tracker, styles.tr8)}></div>
        <div className={clsx(styles.tracker, styles.tr9)}></div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardGlare}></div>
            <div className={styles.cyberLines}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className={styles.prompt}>HOVER ME</p>
            <div className={styles.title}>
              CYBER
              <br />
              CARD
            </div>
            <div className={styles.glowingElements}>
              <div className={styles.glow1}></div>
              <div className={styles.glow2}></div>
              <div className={styles.glow3}></div>
            </div>
            <div className={styles.subtitle}>
              <span>INTERACTIVE</span>
              <span className={styles.highlight}>3D EFFECT</span>
            </div>
            <div className={styles.cardParticles}>
              <span></span>
              <span></span>
              <span></span>
              {" "}
              <span></span>
              <span></span
              >
              <span></span>
            </div>
            <div className={styles.cornerElements}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.scanLine}></div>
          </div>
        </div>
      </div>
    </div>

  );
};
