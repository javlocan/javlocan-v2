"use client";

import Link from "next/link";
import styles from "./Title.module.css";

import Image from "next/image";
import { useObserverStyler } from "@/hooks/useObserverStyler";
export const Title = () => {
  useObserverStyler({
    styles: styles.byeContainer,
    chivatoId: "aboutme",
    targetId: "title",
    rootMargin: -20,
    secondChivatoId: "name",
  });
  useObserverStyler({
    styles: styles.byeContainer,
    chivatoId: "aboutme",
    targetId: "scroll",
    threshold: 0.1,
    rootMargin: -10,
    secondChivatoId: "name",
  });
  return (
    <div className={styles.container} id="container">
      <div id="title" className={styles.title}>
        <div id="top" className={styles.toptop} />

        <div className={styles.name}>
          <div id="name" />
          <h1 className={styles.javier}>
            jav<text>ier </text>
          </h1>
          <h1 className={styles.lopez}>
            lo<text>pez </text>
          </h1>
          <h1 className={styles.cantero}>
            can<text>tero </text>
          </h1>
          <div id="chivato3" />
        </div>

        <h3>.developer</h3>
      </div>

      <Link
        href="#aboutme"
        style={{ position: "absolute", bottom: "2rem" }}
        id="scroll"
      >
        <Image
          src="/icons8-arrow-down-100.png"
          alt=""
          className={styles.scroll}
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};
