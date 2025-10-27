/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useRef } from "react";
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
      "https://res.cloudinary.com/deek9levs/image/upload/v1761599540/eva-2025-black-500x500-1_axilzp.png",
    altText: "Nuestro Paso por la Eva",
    shortDesc: "Nuestro Paso por la Eva",
    longDesc:
      "Vive intensas batallas llenas de acción y estrategia en cada partida.",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1761599540/argencon_expocon_110625-1024x576_lt095e.jpg",
    altText: "Nuestro Paso por la Expocon 2025",
    shortDesc: "Nuestro Paso por la Expocon 2025",
    longDesc:
      "Descubre héroes con habilidades especiales y estilos de combate únicos.",
    isNew: false,
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
    altText: "Mundo abierto del juego",
    shortDesc: "Exploración libre",
    longDesc:
      "Explora vastos mundos abiertos con misiones y secretos escondidos.",
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
      "https://res.cloudinary.com/deek9levs/image/upload/v1761585767/C_Proximamente_rbtkei.png",
    altText: "Ya estamos en Steam",
    title: "Ya estamos en Steam",
    text: "En nada vamos a subir el link para que puedas ver nuestro juego, y vamos a estar en muchos otros lugares",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/deek9levs/image/upload/v1761585767/B_Mr.Maskoto_h3apt6.png",
    altText: "Ya tenemos una mascota",
    title: "Ya tenemos una mascota",
    text: "Ningún estudio que se precie puede existir sin una mascota, y la nuestra en un ataque de originalidad extrema, le llamamos Mr. Maskoto",
  },
];

export default function HomeInfo() {
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto para controlar el scroll del body cuando el modal está abierto
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

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  return (
    <div className={styles.homeInfoContainer}>
      {/* Sección 1: 3 cards */}
      <div className={styles.gridThree}>
        {firstSectionCards.map(
          ({ id, imgSrc, altText, shortDesc, longDesc, isNew }) => (
            <div
              key={id}
              className={`${styles.card} ${isNew ? styles.newCard : ""}`}
            >
              {isNew && (
                <div className={styles.newBadge}>
                  <span>Próximamente</span>
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

      {/* Sección 2: map dinámico para evitar repetir imágenes y textos */}
      <div className={styles.gridTwo}>
        {secondSectionData.map(({ id, imgSrc, altText, title, text }) => (
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
              <div className={styles.textGlow}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
