'use client'

import styles from "./page.module.css";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Reviews } from "./components/reviews";
import { AboutIconsList } from "./components/aboutIconsList";
import { About } from "./components/about";
import { Amenities } from "./components/amenities";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <Reviews />
        <AboutIconsList />
        <About />
        <Amenities />
      </main>
    </div>
  );
}
