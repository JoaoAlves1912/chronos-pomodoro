import { Timer, Save } from "lucide-react";
import { Heading } from "../../components/Heading";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import styles from "./Settings.module.css";

export function Settings() {
  return (
    <div className={styles.page}>
      <Heading>
        <div className={styles.brand}>
          <Timer size={36} className={styles.brandIcon} />
          <span>Chronos</span>
        </div>
      </Heading>

      <Navigation activeScreen="settings" />

      <main className={styles.main}>
        <h2 className={styles.title}>Configurações</h2>
        <p className={styles.subtitle}>
          Configure os minutos para as etapas do Pomodoro.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label htmlFor="focus">Foco (min):</label>
            <input
              id="focus"
              type="number"
              defaultValue={25}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="shortBreak">Descanso curto (min):</label>
            <input
              id="shortBreak"
              type="number"
              defaultValue={5}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="longBreak">Descanso longo (min):</label>
            <input
              id="longBreak"
              type="number"
              defaultValue={15}
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            className={styles.saveButton}
            aria-label="Salvar"
          >
            <Save size={22} />
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
