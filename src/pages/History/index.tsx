import { Timer, Trash2, ArrowUp } from "lucide-react";
import { Heading } from "../../components/Heading";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import styles from "./History.module.css";

interface HistoryRecord {
  id: string;
  task: string;
  duration: number;
  date: string;
  status: string;
  type: string;
}

const mockRecords: HistoryRecord[] = [
  {
    id: "1",
    task: "Estudar",
    duration: 5,
    date: "17/03/2025 18:43",
    status: "Interrompida",
    type: "Descanso Curto",
  },
  {
    id: "2",
    task: "Estudar",
    duration: 25,
    date: "17/03/2025 18:43",
    status: "Interrompida",
    type: "Trabalho",
  },
  {
    id: "3",
    task: "Estudar",
    duration: 5,
    date: "17/03/2025 18:43",
    status: "Interrompida",
    type: "Descanso Curto",
  },
  {
    id: "4",
    task: "Estudar",
    duration: 25,
    date: "17/03/2025 18:43",
    status: "Interrompida",
    type: "Trabalho",
  },
];

export function History() {
  return (
    <div className={styles.page}>
      <Heading>
        <div className={styles.brand}>
          <Timer size={36} className={styles.brandIcon} />
          <span>Chronos</span>
        </div>
      </Heading>

      <Navigation activeScreen="history" />

      <main className={styles.main}>
        <div className={styles.titleRow}>
          <h2>History</h2>
          <button className={styles.clearButton} aria-label="Limpar histórico">
            <Trash2 size={18} />
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  Task <ArrowUp size={14} className={styles.sortIcon} />
                </th>
                <th>
                  Duração <ArrowUp size={14} className={styles.sortIcon} />
                </th>
                <th>
                  Date <ArrowUp size={14} className={styles.sortIcon} />
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {mockRecords.map((item) => (
                <tr key={item.id}>
                  <td>{item.task}</td>
                  <td>{item.duration}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
