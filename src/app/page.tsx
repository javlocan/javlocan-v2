import styles from "./page.module.css";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { NavBar } from "@/components/NavBar";
import { Skills } from "@/components/Skills";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <>
      <div id="top" className={styles.top} />
      <NavBar />
      <Title />
      <div id="chivato" className={styles.chivato} />

      <main className={styles.main}>
        <div id="aboutme" className={styles.aboutme} />
        <About />
        <Skills />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
