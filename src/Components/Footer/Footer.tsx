// components/Footer/Footer.tsx (Actualizado)
import { Youtube, Linkedin, Instagram, Sword } from "lucide-react";
import styles from "../../Styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://titanomaquiagames.itch.io/neon-nebula"
            aria-label="Neon Nebula en Itch.io"
          >
            <Youtube className={styles.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/titanomaquiagames"
            aria-label="LinkedIn"
          >
            <Linkedin className={styles.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/titanomaquiagames/"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linktr.ee/titanomaquiagames"
            aria-label="Linktree"
          >
            <Sword className={styles.icon} />
          </a>
        </div>

        <div className={styles.legal}>
          <p>© TitanoMaquiaGames. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Términos
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Privacidad
            </a>
          </div>
        </div>

        <div className={styles.gameCredits}>
          <p>Infinite Pathways</p>
        </div>
      </div>
    </footer>
  );
}
