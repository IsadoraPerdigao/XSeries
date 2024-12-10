import styles from "./page.module.css";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button text="Teste bem maior que o outro" disabled={false} bgColor="buttonSquare"/>
      </main>
    </div>
  );
}
