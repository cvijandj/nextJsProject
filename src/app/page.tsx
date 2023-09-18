import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{ position: "relative", width: "100%", height: "fit-content" }}
      >
        <Image
          className={styles.main__picture}
          src={require("@/images/woodworking.jpg")}
          alt="Obrada drveta rucno"
        />
        <div className={styles.main__text__container}>
          <p className={styles.main__text1}>Ми смо</p>
          <p className={styles.main__text2}>Атеље Симикић</p>
        </div>
      </div>
    </main>
  );
}
