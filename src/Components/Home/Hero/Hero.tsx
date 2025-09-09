// components/Hero/Hero.tsx
"use client";

import styles from "../../../Styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.centerText}>
        Somos un estudio indie argentino, <br /> que hace video juegos, un
        equipo lleno de conviccion <br /> que cree en los resultados del
        esfuerzo
      </div>
    </section>
  );
}
