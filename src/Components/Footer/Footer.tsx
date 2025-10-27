// components/Footer/Footer.tsx (Actualizado)
import { Youtube, Linkedin, Instagram, Sword } from "lucide-react";
import styles from "../../Styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a target="blank" href="https://www.youtube.com/@TitanomaquiaGames" aria-label="YouTube">
            <Youtube className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/company/titanomaquiagames" aria-label="LinkedIn">
            <Linkedin className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/titanomaquiagames/" aria-label="Instagram">
            <Instagram className={styles.icon} />
          </a>
        </div>

        <div className={styles.legal}>
          <p>© TitanoMaquiaGames. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
          </div>
        </div>

        <div className={styles.gameCredits}>
          <Sword className={styles.icon} />
          <p>Infinity Pathways</p>
        </div>
      </div>
    </footer>
  );
}
