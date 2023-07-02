"use client";

import { useEffect, useState } from "react";

import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <div className={styles.container} id="container">
        <div className={styles.name}>
          <h1 className={styles.javier}>
            jav<text>ier </text>
          </h1>
          <h1 className={styles.lopez}>
            lo<text>pez </text>
          </h1>
          <h1 className={styles.cantero}>
            can<text>tero </text>
          </h1>
        </div>
        <h3>.developer</h3>
      </div>
      <div id="limit" />
    </>
  );
};
