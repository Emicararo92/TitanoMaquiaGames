"use client";

import styles from "../../Styles/DivLine.module.css";

export default function NewsBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <span className={styles.tickerItem}>
            🎮 ¡SE VIENE INFINITE PATWAYS! 🎮
          </span>
          <span className={styles.tickerItem}>
            🔥 STEAM NOS DA LA BIENVENIDA 🔥
          </span>
          <span className={styles.tickerItem}>⭐ ACTUALIZACIONES 2025 ⭐</span>
          <span className={styles.tickerItem}>🎮 MODOS DE JUEGO 🎮</span>
          <span className={styles.tickerItem}>
            🔥 TODO LO QUE SE VIENE EN TITANOMAQUIA 🔥
          </span>
          <span className={styles.tickerItem}>
            ⭐ CONOCENOS - VISITA NUESTRAS REDES ⭐
          </span>
        </div>
      </div>
    </div>
  );
}
