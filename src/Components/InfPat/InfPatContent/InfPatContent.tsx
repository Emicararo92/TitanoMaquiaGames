"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../Styles/InfPatContent.module.css";

interface MenuItem {
  id: number;
  title: string;
  image: string;
  desc: string;
}

interface GameMenuTabsProps {
  menuItems?: MenuItem[];
}

export default function GameMenuTabs({
  menuItems: defaultItems,
}: GameMenuTabsProps) {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  const menuItems = defaultItems || [
    {
      id: 1,
      title: "Desarrollo",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/e_ygor7y.jpg",
      desc: "Motor gráfico con WebGL y físicas avanzadas para una experiencia de juego inmersiva.",
    },
    {
      id: 2,
      title: "Música",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/c_wu8zp5.jpg",
      desc: "Banda sonora épica compuesta por orquesta sinfónica que eleva cada momento del juego.",
    },
    {
      id: 3,
      title: "Diseño",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
      desc: "Arte conceptual premiado internacionalmente con atención meticulosa a cada detalle.",
    },
    {
      id: 4,
      title: "Narrativa",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/b_ci6cky.jpg",
      desc: "Historia no lineal con múltiples finales que reacciona a tus decisiones y acciones.",
    },
  ];

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setActiveItem((prev) => (prev % menuItems.length) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoScroll, menuItems.length]);

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <>
      {/* Banner superior como imagen */}
      <div className={styles.topBanner}>
        <Image
          src="https://res.cloudinary.com/deek9levs/image/upload/v1757608227/Separador_Infinite_Path_1_axhchm.png"
          alt="Infinite Pathways"
          fill
          className={styles.topBannerImage}
          priority
        />
        <div className={styles.topBannerText}>INFINITE PATHWAYS</div>
      </div>

      {/* Banner principal */}
      <div className={styles.banner}>
        <Image
          src="https://res.cloudinary.com/deek9levs/image/upload/v1757608229/Imagen_Infinite_zhotzl.png"
          alt="Banner del juego"
          fill
          className={styles.bannerImage}
          priority
        />
      </div>

      {/* Contenedor principal */}
      <div className={styles.container}>
        {/* Panel izquierdo */}
        <div className={styles.menuPanel}>
          <div className={styles.menuHeader}>
            <h3>Características</h3>
            <div className={styles.headerUnderline}></div>
          </div>

          <div className={styles.menuItems}>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`${styles.menuItem} ${
                  activeItem === item.id ? styles.active : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <div className={styles.menuItemContent}>
                  <span className={styles.menuItemText}>{item.title}</span>
                  <div className={styles.menuItemIndicator}>
                    <div className={styles.indicatorDot}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.menuFooter}>
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollText}>Auto Scroll</div>
              <div
                className={`${styles.scrollToggle} ${
                  autoScroll ? styles.active : ""
                }`}
              >
                <div className={styles.toggleKnob}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel derecho */}
        <div className={styles.contentPanel}>
          <div className={styles.contentDisplay}>
            <div className={styles.imageContainer}>
              <Image
                src={
                  menuItems.find((item) => item.id === activeItem)?.image || ""
                }
                alt={
                  menuItems.find((item) => item.id === activeItem)?.title || ""
                }
                fill
                className={styles.contentImage}
                priority
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.cornerDecoration}></div>
            </div>

            <div className={styles.textContainer}>
              <h2 className={styles.contentTitle}>
                {menuItems.find((item) => item.id === activeItem)?.title}
              </h2>
              <p className={styles.contentDescription}>
                {menuItems.find((item) => item.id === activeItem)?.desc}
              </p>
            </div>

            <div className={styles.navigationHint}>
              <span>Selecciona una opción para ver más detalles</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
