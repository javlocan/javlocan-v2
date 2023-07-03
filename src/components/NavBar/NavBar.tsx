"use client";

import { useEffect } from "react";
import styles from "./NavBar.module.css";
import { useObserver } from "@/hooks";

export const NavBar = () => {
  useObserver({
    styles: styles.byeContainer,
    chivatoId: "aboutme",
    targetId: "title",
    rootMargin: -20,
    secondChivatoId: "chivato2",
  });
  useObserver({
    styles: styles.byeHeader,
    chivatoId: "chivato3",
    targetId: "nav",
    rootMargin: -40,
    secondChivatoId: "aboutme",
  });
  useObserver({
    styles: styles.byeContainer,
    chivatoId: "aboutme",
    targetId: "scroll",
    threshold: 0.1,
    rootMargin: -10,
    secondChivatoId: "chivato2",
  });

  return (
    <>
      <header className={styles.header + " " + styles.byeHeader} id="nav">
        <h4>JAVLOCAN.dev</h4>
      </header>

      <div className={styles.container} id="container">
        <div id="title" className={styles.title}>
          <div className={styles.name}>
            <div id="chivato2" />
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
        <a
          href="#aboutme"
          style={{ position: "absolute", bottom: "2rem" }}
          id="scroll"
        >
          <img
            src="/icons8-arrow-down-100.png"
            alt=""
            className={styles.scroll}
          />
        </a>
      </div>
      <div id="aboutme" />
    </>
  );
};
