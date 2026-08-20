import { Timer, Play } from "lucide-react";
import { Heading } from "../../components/Heading";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import styles from "./Home.module.css";

export function Home() {
  const cycleDots = [
    { id: 1, color: "var(--warning)" },
    { id: 2, color: "var(--primary)" },
    { id: 3, color: "var(--warning)" },
    { id: 4, color: "var(--primary)" },
    { id: 5, color: "var(--warning)" },
    { id: 6, color: "var(--primary)" },
    { id: 7, color: "var(--primary)" },
    { id: 8, color: "var(--info)" },
  ];

  return (
    <div className={styles.page}>
      <Heading>
        <div className={styles.brand}>
          <Timer size={36} className={styles.brandIcon} />
          <span>Chronos</span>
        </div>
      </Heading>

      <Navigation activeScreen="home" />

      <main className={styles.main}>
        <div className={styles.timerDisplay}>00:00</div>

        <div className={styles.taskGroup}>
          <label htmlFor="task" className={styles.taskLabel}>
            task:
          </label>
          <input
            id="task"
            type="text"
            defaultValue="Estudar"
            className={styles.taskInput}
          />
        </div>

        <p className={styles.instruction}>
          Nesse ciclo <strong>foque</strong> por <strong>25 min</strong>.
        </p>

        <div className={styles.cycles}>
          <span className={styles.cyclesLabel}>Ciclos:</span>
          <div className={styles.dotsGroup}>
            {cycleDots.map((dot) => (
              <span
                key={dot.id}
                className={styles.dot}
                style={{ backgroundColor: dot.color }}
              />
            ))}
          </div>
        </div>

        <button className={styles.startButton} aria-label="Iniciar ciclo">
          <Play size={24} fill="currentColor" />
        </button>
      </main>

      <Footer />
    </div>
  );
}
