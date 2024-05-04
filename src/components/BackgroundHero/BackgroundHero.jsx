import styles from "../BackgroundHero/BackgroundHero.module.css";

function BackgroundHero() {
  return (
    <div className={styles.backgroundHero}>
      {/* Pattern Section (rectangles) */}
      <div className={styles.pattern}>
        <div className={styles.rectangle_38}></div>
        <div className={styles.rectangle_09}></div>
        <div className={styles.rectangle_08}></div>
        <div className={styles.rectangle_10}></div>
      </div>

      {/* Glow Section */}
      <div className={styles.glow}>
        <div className={styles.rectangle_34}></div>
        <div className={styles.rectangle_35}></div>
      </div>

      {/* BG 01  */}
      <div className={styles.BG_01}></div>
    </div>
  );
}

export default BackgroundHero;
