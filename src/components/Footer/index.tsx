import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#pomodoro" className={styles.link}>
        Entenda a técnica pomodoro 🍅
      </a>
      <span className={styles.copy}>
        Chronos Pomodoro &copy; 2025 - Feito com 💚
      </span>
    </footer>
  );
}
