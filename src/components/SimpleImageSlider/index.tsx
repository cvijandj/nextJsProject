"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight,
} from "react-icons/bs";

export default function SimpleImageSlider({
  images,
  text,
}: {
  images: any[];
  text?: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      function changeImage() {
        setCurrentImage((prev) => (prev !== images.length - 1 ? prev + 1 : 0));
      }
      changeImage();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={styles.slider__container}>
        <div className={styles.slider}>
          <div className={styles.slider__imageDiv}>
            <Image
              height={400}
              className={styles.slider__image}
              src={images[currentImage]}
              alt="Obrada drveta rucno"
            />
          </div>
          <div
            onClick={() =>
              setCurrentImage(
                currentImage !== 0 ? currentImage - 1 : images.length - 1
              )
            }
            className={styles.slider__leftArrow}
          >
            <ArrowLeft
              style={{ width: "100%", height: "100%", color: "white" }}
            />
          </div>
          <div
            onClick={() =>
              setCurrentImage(
                currentImage !== images.length - 1 ? currentImage + 1 : 0
              )
            }
            className={styles.slider__rightArrow}
          >
            <ArrowRight
              style={{ width: "100%", height: "100%", color: "white" }}
            />
          </div>
        </div>
        {text && (
          <div className={styles.slider__text}>
            <p style={{ textAlign: "center" }}>{text}</p>
          </div>
        )}
      </div>
    </>
  );
}
