/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../Styles/HomeInfo.module.css";

interface CardData {
  id: number;
  imgSrc: string;
  altText: string;
  shortDesc: string;
  longDesc: string;
  isNew?: boolean;
}

const firstSectionCards: CardData[] = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.32.17_jgkt0a.jpg",
    altText: "Nuestro Paso por la Eva",
    shortDesc: "Nuestro Paso por la Eva",
    longDesc:
      "Una idea que parecía lejana se convirtió en una experiencia transformadora. Más que un destino, fue un punto de inflexión.",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1768223911/WhatsApp_Image_2026-01-07_at_17.33.38_yjaque.jpg",
    altText: "Nuestro Paso por Ventana Sur",
    shortDesc: "Ventana Sur – Palacio Libertad",
    longDesc:
      "Exploramos ideas, probamos juegos y nos empapamos de innovación en uno de los encuentros más importantes de la industria.",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.28.58_tdwevy.jpg",
    altText: "Vision Norte",
    shortDesc: "Visión Norte",
    longDesc:
      "Una experiencia que nos acercó al mundo del cine y al cruce entre lo audiovisual y los videojuegos.",
  },
  {
    id: 4,
    imgSrc: "https://res.cloudinary.com/deek9levs/image/upload/v1768223909/WhatsApp_Image_2026-01-07_at_17.27.12_jyurpw.jpg", // 👉 IMAGEN NOTICIA EXPOCON
    altText: "Nuestro paso por Expocon",
    shortDesc: "Expocon",
    longDesc:
      "Conectamos, compartimos y formamos parte de un espacio donde la industria se encuentra cara a cara.",
    isNew: true,
  },
];

const secondSectionData = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1761585767/A_eva2025_or4z78.png",
    altText: "Camino a la EVA 2025",
    title: "Camino a la EVA 2025",
    text: "Vamos a ir con prácticamente todo el equipo del 5 a 8 de noviembre, no dudes en pasar a saludar",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1761840569/IP_Steam_Noticia_tipo_A_xks4os.png",
    altText: "Ya estamos en Steam",
    title: "Ya estamos en Steam",
    text: "Ya estamos en Steam, puedes visitar nuestro juego en la plataforma:",
    steamLink: "https://store.steampowered.com/app/4012540/Infinite_Pathways/",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770044636/Mr.Maskoto_high_def._h432u1.png",
    altText: "Ya tenemos una mascota",
    title: "Ya tenemos una mascota",
    text: "Ningún estudio que se precie puede existir sin una mascota, y la nuestra en un ataque de originalidad extrema, le llamamos Mr. Maskoto",
  },
];

export default function HomeInfo() {
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (id: number) => {
    setActiveModalId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveModalId(null), 300);
  };

  const openInNewTab = (id: number) => {
    window.open(`/News/${id}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  return (
    <div className={styles.homeInfoContainer}>
      <div className={styles.gridThree}>
        {firstSectionCards.map(
          ({ id, imgSrc, altText, shortDesc, longDesc, isNew }) => (
            <div
              key={id}
              className={`${styles.card} ${isNew ? styles.newCard : ""}`}
            >
              {isNew && (
                <div className={styles.newBadge}>
                  <span>Nuevo</span>
                </div>
              )}
              <div className={styles.cardInner}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={imgSrc}
                    alt={altText}
                    className={styles.cardImage}
                    width={280}
                    height={180}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <p className={styles.shortDesc}>{shortDesc}</p>

                <button
                  className={styles.toggleBtn}
                  onClick={() => openInNewTab(id)}
                  aria-label={`Ver más sobre ${shortDesc}`}
                >
                  <span>Ver más</span>
                  <div className={styles.buttonHoverEffect}></div>
                </button>

                <div className={styles.cardGlow}></div>
              </div>
            </div>
          )
        )}
      </div>

      <div className={styles.gridTwo}>
        {secondSectionData.map(
          ({ id, imgSrc, altText, title, text, steamLink }) => (
            <div key={id} className={styles.featuredItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={imgSrc}
                  alt={altText}
                  width={400}
                  height={250}
                  className={styles.featuredImage}
                />
                <div className={styles.imageHoverEffect}></div>
              </div>
              <div className={styles.textContent}>
                <h3>{title}</h3>
                <p>{text}</p>
                {steamLink && (
                  <button
                    className={styles.steamBtn}
                    onClick={() =>
                      window.open(steamLink, "_blank", "noopener,noreferrer")
                    }
                  >
                    Ver en Steam
                  </button>
                )}
                <div className={styles.textGlow}></div>
              </div>
            </div>
          )
        )}
      </div>

      {isModalOpen && activeModalId && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalInner}>
              {firstSectionCards
                .filter((card) => card.id === activeModalId)
                .map((card) => (
                  <React.Fragment key={card.id}>
                    <div className={styles.modalImageContainer}>
                      <Image
                        src={card.imgSrc}
                        alt={card.altText}
                        width={400}
                        height={250}
                        className={styles.modalImage}
                      />
                      <div className={styles.modalImageGlow}></div>
                    </div>
                    <h3>{card.shortDesc}</h3>
                    <p>{card.longDesc}</p>
                    <button
                      className={styles.closeModalBtn}
                      onClick={closeModal}
                      aria-label="Cerrar modal"
                    >
                      <span>Cerrar</span>
                      <div className={styles.closeBtnEffect}></div>
                    </button>
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
