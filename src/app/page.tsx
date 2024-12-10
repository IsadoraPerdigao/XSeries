import styles from "./page.module.css";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        Teste
      </main>
    </div>
  );
}
