// components/Hero/Hero.tsx
"use client";

import Image from "next/image";
import styles from "../../../Styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      {/* Navbar (asumiendo altura de 80px) */}
      <nav className="h-[80px] bg-[#a05040] w-full fixed top-0 z-50">
        {/* Tu navbar aquí */}
      </nav>

      <section className={styles.hero}>
        {/* Banner de fondo */}
        <div className={styles.bannerContainer}>
          <Image
            src="/Banner.png"
            alt="Banner principal"
            fill
            priority
            quality={85}
            className={styles.bannerImage}
          />
        </div>

        {/* Logo con overlay y slogan */}
        <div className={styles.logoOverlay}>
          <Image
            src="/Icon.png"
            alt="Logo central"
            className={styles.heroLogo}
            width={250}
            height={250}
          />
        </div>
      </section>
    </>
  );
}
