import { Timer } from "lucide-react";
import { Heading } from "../../components/Heading";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.page}>
      <Heading>
        <div className={styles.brand}>
          <Timer size={36} className={styles.brandIcon} />
          <span>Chronos</span>
        </div>
      </Heading>

      <Navigation />

      <main className={styles.main}>
        <h2 className={styles.title}>404 - Página não encontrada 🚀</h2>

        <div className={styles.textBlock}>
          <p>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
            perdido em algum lugar entre dois buracos negros. 🌌
          </p>

          <p>
            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
            segurança para a{" "}
            <a href="/" className={styles.link}>
              página principal
            </a>{" "}
            ou{" "}
            <a href="/history" className={styles.link}>
              para o histórico
            </a>{" "}
            — ou pode ficar por aqui e fingir que achou uma página secreta que
            só os exploradores mais legais conseguem acessar. 🧭✨
          </p>

          <p>
            Se você acha que essa página deveria existir (ou se quiser bater um
            papo sobre viagem no tempo e buracos de minhoca), é só entrar em
            contato. Caso contrário, use o menu para voltar ao mundo real.
          </p>

          <p className={styles.quote}>
            Enquanto isso, fica aqui uma reflexão: &ldquo;Se uma página não
            existe na internet, será que ela existiu de verdade?&rdquo; 🤔💭
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
