"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Почетна", href: "/" },
  { name: "Галерија", href: "/gallery" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <a href="/">
            <Image
              width={40}
              height={30}
              src={require("../../images/Logo.png")}
              alt="logo"
            />
          </a>
        </div>
        <div className={styles.navbar__links}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <p
                className={isActive ? styles.active__link : styles.link}
                onClick={() => router.push(link.href)}
                key={link.name}
              >
                {link.name}
              </p>
            );
          })}
        </div>
      </nav>
    </>
  );
}
