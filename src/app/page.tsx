'use client'

import styles from "./page.module.css";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Reviews } from "./components/reviews";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <Reviews />
      </main>
    </div>
  );
}
