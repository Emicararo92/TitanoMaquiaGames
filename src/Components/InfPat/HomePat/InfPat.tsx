"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../Styles/InfPat.module.css";

export default function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const tabs = [
    {
      id: 1,
      title: "Desarrollo",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/e_ygor7y.jpg",
      desc: "Motor gráfico con WebGL y físicas avanzadas",
    },
    {
      id: 2,
      title: "Música",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/c_wu8zp5.jpg",
      desc: "Banda sonora compuesta por orquesta sinfónica",
    },
    {
      id: 3,
      title: "Diseño",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
      desc: "Arte conceptual premiado internacionalmente",
    },
    {
      id: 4,
      title: "Narrativa",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/b_ci6cky.jpg",
      desc: "Historia no lineal con múltiples finales",
    },
  ];

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Efecto para el cambio automático de tabs
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev % tabs.length) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll, tabs.length]);

  // Manejar clic en tab
  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    setAutoScroll(false);

    // Reanudar auto-scroll después de 10 segundos
    setTimeout(() => setAutoScroll(true), 10000);
  };

  // Navegación manual con botones (solo para desktop)
  const scrollToTab = (direction: "prev" | "next") => {
    if (isMobile) return; // No hacer nada en mobile

    setAutoScroll(false);

    let newTab;
    if (direction === "next") {
      newTab = (activeTab % tabs.length) + 1;
    } else {
      newTab = activeTab === 1 ? tabs.length : activeTab - 1;
    }

    setActiveTab(newTab);

    // Reanudar auto-scroll después de 10 segundos
    setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <div className={styles.container}>
      <h2 id="INF" className={styles.title}>
        ¿Cómo lo hicimos?
      </h2>

      {/* Controles de navegación */}
      <div className={styles.controls}>
        {/* Flechas solo visible en desktop */}
        {!isMobile && (
          <>
            <button
              className={styles.navButton}
              onClick={() => scrollToTab("prev")}
              aria-label="Anterior"
            >
              ‹
            </button>
          </>
        )}

        <div className={styles.tabButtons}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Flechas solo visible en desktop */}
        {!isMobile && (
          <>
            <button
              className={styles.navButton}
              onClick={() => scrollToTab("next")}
              aria-label="Siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className={styles.tabContent}>
        <div className={styles.imageWrapper}>
          <Image
            src={tabs.find((t) => t.id === activeTab)?.image || ""}
            alt={tabs.find((t) => t.id === activeTab)?.title || ""}
            fill
            className={styles.image}
            priority
          />
          <div className={styles.imageOverlay}></div>
        </div>
        <p className={styles.description}>
          {tabs.find((t) => t.id === activeTab)?.desc}
        </p>
      </div>
    </div>
  );
}
