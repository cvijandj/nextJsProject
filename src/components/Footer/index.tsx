import Image from "next/image";
import styles from "./index.module.css";
import { MdLocationPin as MapPin } from "react-icons/md";
import { AiFillInstagram as Instagram } from "react-icons/ai";

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.sections__div}>
        <div className={styles.section}>
          <h3>О НАМА</h3>
          <p>Власник: Симикић Вукашин</p>
          <a style={{ cursor: "pointer" }} href="/gallery">
            Чиме се ми бавимо?
          </a>
        </div>
        <div className={styles.section}>
          <h3>КОНТАКТ</h3>
          <a
            style={{ cursor: "pointer" }}
            href="https://www.instagram.com/atelje_simikic/"
            target="_blank"
          >
            <Instagram />
            {` `}
            Инстаграм
          </a>
          <a
            href="https://www.google.com/maps/place/%D0%90%D1%82%D0%B5%D1%99%D0%B5+%D0%A1%D0%B8%D0%BC%D0%B8%D0%BA%D0%B8%D1%9B/@44.8671503,20.0969606,15z/data=!4m6!3m5!1s0x475a459655fcfd67:0x62496b765e184163!8m2!3d44.8671503!4d20.0969606!16s%2Fg%2F11h02jr899?sa=X&ved=2ahUKEwimsaPHkob-AhXRCOwKHXu-BlQQ_BJ6BAhYEAg&coh=164777&entry=tt&shorturl=1"
            target="_blank"
          >
            <MapPin />
            {` `}
            Адреса: Дечка 65, Шимановци
          </a>
        </div>
        <div className={styles.section}>
          <a href="/">
            <Image
              src={require("../../images/Logo.png")}
              alt="Logo"
              width={100}
              height={60}
            />
          </a>
          <h1>Атеље Симикић</h1>
        </div>
      </div>
      <div>
        <h3>© {getCurrentYear()} Атеље Симикић</h3>
      </div>
    </div>
  );
}
