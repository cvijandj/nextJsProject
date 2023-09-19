import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
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
      <div className={styles.row}>
        <div className={styles.row__text}>
          <h1>Атеље Симикић је породична компанија</h1>
          Нудимо широк спектар производа и услуга који задовољавају различите
          потребе и укусе наших клијената. Без обзира да ли тражите елегантне
          комаде намештаја за вашу дневну собу, кухињске елементе који ће
          унапредити функционалност ваше кухиње или посебне прилагођене дизајне,
          ми смо ту да вам помогнемо да остварите ваше идеје и визије.
        </div>
        <div className={styles.row__pic}>
          <Image
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            src={require("@/images/company.jpg")}
            alt="Obrada drveta"
          />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.row__pic}>
          <Image
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            src={require("@/images/teamWork.png")}
            alt="Obrada drveta"
          />
        </div>
        <div className={styles.row__text}>
          <h1>Наш тим!</h1>
          Наш тим стручњака воли изазове и посвећен је пружању врхунског
          квалитета и пажње према детаљима у сваком пројекту који преузмемо.
          Својим креативним приступом и вештином рада с дрветом, радимо на
          стварању комада који не само да ће задовољити ваше потребе, већ ће и
          унети топлину и елеганцију у ваш простор.
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.partner__cont}>
        <div className={styles.partner__circle}>Наш партнер!</div>
        <div className={styles.partner__div}>
          <Image
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            src={require("@/images/teamWork.png")}
            alt="Obrada drveta"
          />
          <div className={styles.partner__text}>
            <h2>Мебле</h2>
            <p>
              Мебле је компанија која се бави производњом и продажом кухињских
              елемената. Наша сарадња са њима је дугогодишња и успешна.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
