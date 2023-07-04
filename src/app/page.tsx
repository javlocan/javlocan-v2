"use client";

import styles from "./page.module.css";

import { Contact } from "@/components/Contact";
import { NavBar } from "@/components/NavBar";
import { Title } from "@/components/Title/Title";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div id="top" className={styles.top} />
      <NavBar />
      <Title />
      <div id="chivato" className={styles.chivato} />
      <div id="aboutme" />
      <main className={styles.main}>
        <h2>About me</h2>
        <Parallax speed={20}></Parallax>
      </main>
      <footer>
        <Contact />
      </footer>
    </ParallaxProvider>
  );
}
