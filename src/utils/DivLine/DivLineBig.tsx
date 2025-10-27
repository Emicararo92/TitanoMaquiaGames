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
            🔥 Ya estamos en Steam 🔥
          </span>
          <span className={styles.tickerItem}>⭐ Nos vemos en la Eva ⭐</span>
          <span className={styles.tickerItem}>🎮 ¡¡Vienen Novedades!! 🎮</span>
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
