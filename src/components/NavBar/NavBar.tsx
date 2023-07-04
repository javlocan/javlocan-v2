"use client";

import Link from "next/link";

import { useObserverStyler } from "@/hooks/useObserverStyler";

import styles from "./NavBar.module.css";

export const NavBar = () => {
  useObserverStyler({
    styles: styles.bye,
    targetId: "nav",
    rootMargin: -40,
    chivatoId: "chivato",
    secondChivatoId: "aboutme",
  });

  return (
    <nav className={styles.nav + " " + styles.bye} id="nav">
      <h4>JAVLOCAN.dev</h4>
      <ul>
        <Link href="#toptop">
          <li>Home</li>
        </Link>
        <Link href="#aboutme">
          <li>About</li>
        </Link>
        <Link href="#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
