import {
  Play,
  History as HistoryIcon,
  Settings as SettingsIcon,
  Sun,
} from "lucide-react";
import styles from "./Navigation.module.css";

type NavigationProps = {
  activeScreen?: "home" | "history" | "settings";
};

export function Navigation({ activeScreen }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <a
        href="/"
        className={`${styles.button} ${activeScreen === "home" ? styles.active : ""}`}
        aria-label="Home"
        aria-current={activeScreen === "home" ? "page" : undefined}
      >
        <Play size={20} />
      </a>
      <a
        href="/history"
        className={`${styles.button} ${activeScreen === "history" ? styles.active : ""}`}
        aria-label="Histórico"
        aria-current={activeScreen === "history" ? "page" : undefined}
      >
        <HistoryIcon size={20} />
      </a>
      <a
        href="/settings"
        className={`${styles.button} ${activeScreen === "settings" ? styles.active : ""}`}
        aria-label="Configurações"
        aria-current={activeScreen === "settings" ? "page" : undefined}
      >
        <SettingsIcon size={20} />
      </a>
      <button className={styles.button} aria-label="Tema">
        <Sun size={20} />
      </button>
    </nav>
  );
}
