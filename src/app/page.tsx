import styles from "./page.module.css";

import { Contact } from "@/components/Contact";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h2>About me</h2>
        <p>This is the home page</p>
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
