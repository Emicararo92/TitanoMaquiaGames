// components/Hero/Hero.tsx
"use client";

import styles from "../../../Styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.centerText}>
      Somos un estudio de videojuegos argentino <br/>Somos un equipo lleno de conviccion que cree en los resultados del esfuerzo y superarse dia a dia
      </div>
    </section>
  );
}
