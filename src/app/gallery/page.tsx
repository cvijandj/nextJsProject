import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const jobs = [
  {
    text: "Услужном обрадом дрвета на ЦНЦ (CNC) машинама, као и ручном обрадом дрвета.",
    htext: "Обрадом дрвета на ЦНЦ (CNC)",
    image: "projekt2",
  },
  {
    text: "Израдом свих врста дубореза и рељефа",
    htext: "Израдом дубореза и рељефа",
    image: "projekt3",
  },
  {
    text: "Израдом свих врста ограда, стубова, у различитим величинама и облицима.",
    htext: "Израдом ограда",
    image: "projekt4",
  },
  {
    text: "Израда намештаја по вашим мерама и вашим жељама.",
    htext: "Израдом намештаја",
    image: "projekt7",
  },
  {
    text: "Израдом украса, оквира, лампа, свега што можете замислити, а да је изводљиво измоделирати и израдити.",
    htext: "Израдом различитих облика",
    image: "projekt6",
  },
];

export default function Page() {
  return (
    <main className={styles.main}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "fit-content",
          display: "flex",
        }}
      >
        <Image
          className={styles.main__picture}
          src={require("@/images/galleryBackground.jpg")}
          alt="Obrada drveta rucno"
        />
        <div className={styles.main__text__container}>
          {/*<p className={styles.main__text1}>Погледајте</p>*/}
          <p className={styles.main__text2}>Чиме се ми бавимо?</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.divider}>
          <p>
            Добродошли на нашу страницу! Ми смо страствена компанија која се
            посвећује уметности и вештини прераде дрвета. Кроз године посвећеног
            рада, развили смо дубоко разумевање и стручност у раду са овим
            природним материјалом.{" "}
          </p>
        </div>
        {jobs.map((job, i) => (
          <div key={i} className={styles.column}>
            <div className={styles.card}>
              <div className={styles.card__desc}>
                <div className={styles.card__desc__text}>
                  <h3>{job.htext}</h3>
                  <p>{job.text}</p>
                </div>
              </div>
              <Image
                src={require("../../images/" + job.image + ".png")}
                alt="Picture of the author"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
