import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.main}>
          <div className={styles.mainBox}>
            <div className={styles.titles}>
              <p className={styles.mainTitle}>SPACE</p>
              <p className={styles.secondaryTitle}>DEV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
