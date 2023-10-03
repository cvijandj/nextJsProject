import Image from "next/image";
import styles from "./page.module.css";
import SimpleImageSlider from "@/components/SimpleImageSlider";

const images = [
  require("@/images/projekt1.png"),
  require("@/images/projekt2.png"),
  require("@/images/projekt3.png"),
  require("@/images/projekt4.png"),
  require("@/images/projekt5.png"),
  require("@/images/projekt6.png"),
  require("@/images/projekt7.png"),
  require("@/images/projekt8.png"),
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Image
          className={styles.main__picture}
          src={require("@/images/bacground.jpg")}
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
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "450px",
              borderRadius: "10px",
            }}
            src={require("@/images/secondTable.jpg")}
            alt="Obrada drveta"
          />
        </div>
      </div>
      <div className={styles.divider} />
      <div
        style={{
          backgroundColor: "#eeeeee",
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.row}>
          <div className={styles.row__pic}>
            <SimpleImageSlider images={images} />
          </div>
          <div className={styles.row__text}>
            <h1>Наше услуге:</h1>
            Наш тим стручњака воли изазове и посвећен је пружању врхунског
            квалитета и пажње према детаљима. ми се бавимо: <br />
            -Обрадом дрвета на ЦНЦ
            <br />
            -Израдом дубореза и рељефа
            <br />
            -Израдом ограда
            <br />
            -Израдом намештаја
            <br />
            -Израдом различитих облика по вашим жељама
            <br />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.partner__cont}>
        <div className={styles.partner__circle}>Наш партнер!</div>
        <a href="http://www.minidekor.co.rs/" target="_blank">
          <div className={styles.partner__div}>
            <Image
              style={{
                width: "80%",
                maxWidth: "300px",
                height: "auto",
                maxHeight: "300px",
              }}
              src={require("@/images/partnerLogo.png")}
              alt="Obrada drveta"
            />

            <div className={styles.partner__text}>
              <h2>
                <a href="http://www.minidekor.co.rs/" target="_blank">
                  Мини Декор
                </a>
              </h2>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
