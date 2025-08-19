/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import DivLineSmall from "../../../utils/DivLine/DivLineSmall";
import Image from "next/image";
import styles from "../../../Styles/HomeInfo.module.css";

interface CardData {
  id: number;
  imgSrc: string;
  altText: string;
  shortDesc: string;
  longDesc: string;
}

const firstSectionCards: CardData[] = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/e_ygor7y.jpg",
    altText: "Escena épica de batalla en juego",
    shortDesc: "Batallas épicas",
    longDesc:
      "Vive intensas batallas llenas de acción y estrategia en cada partida.",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/c_wu8zp5.jpg",
    altText: "Personaje principal en acción",
    shortDesc: "Héroes únicos",
    longDesc:
      "Descubre héroes con habilidades especiales y estilos de combate únicos.",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
    altText: "Mundo abierto del juego",
    shortDesc: "Exploración libre",
    longDesc:
      "Explora vastos mundos abiertos con misiones y secretos escondidos.",
  },
  {
    id: 4,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/b_ci6cky.jpg",
    altText: "Interfaz de usuario del juego",
    shortDesc: "Interfaz intuitiva",
    longDesc:
      "Disfruta de una interfaz diseñada para facilitar tu experiencia de juego.",
  },
];

const secondSectionData = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019644/k_opm6js.jpg",
    altText: "Captura de una misión especial",
    title: "Misiones especiales",
    text: "Participa en misiones especiales que desafían tus habilidades y recompensan tu progreso.",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019642/h_f8iob9.jpg",
    altText: "Personajes colaborando en equipo",
    title: "Juego cooperativo",
    text: "Únete a tus amigos y disfruta de modos cooperativos para lograr objetivos juntos.",
  },
];

export default function HomeInfo() {
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto para controlar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

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
    // Pequeño delay para permitir la animación de salida
    setTimeout(() => setActiveModalId(null), 300);
  };

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className={styles.homeInfoContainer}>
      {/* Sección 1: 4 cards */}
      <div className={styles.gridFour}>
        {firstSectionCards.map(
          ({ id, imgSrc, altText, shortDesc, longDesc }) => (
            <div key={id} className={styles.card}>
              <a href="#" className={styles.cardLink} aria-label={altText}>
                <Image
                  src={imgSrc}
                  alt={altText}
                  className={styles.cardImage}
                  width={120}
                  height={120}
                />
              </a>
              <p className={styles.shortDesc}>{shortDesc}</p>
              <button
                className={styles.toggleBtn}
                onClick={() => openModal(id)}
                aria-label={`Ver más sobre ${shortDesc}`}
              >
                Ver más
              </button>
            </div>
          )
        )}
      </div>

      {/* Sección 2: grid 2x2 imagen|texto - texto|imagen */}
      <div className={styles.gridTwo}>
        <a href="#" className={styles.imageLink}>
          <Image
            src={secondSectionData[0].imgSrc}
            alt={secondSectionData[0].altText}
            width={120}
            height={120}
          />
        </a>
        <div className={styles.text}>
          <h3>{secondSectionData[0].title}</h3>
          <p>{secondSectionData[0].text}</p>
        </div>
        <div className={styles.text}>
          <h3>{secondSectionData[1].title}</h3>
          <p>{secondSectionData[1].text}</p>
        </div>
        <a href="#" className={styles.imageLink}>
          <Image
            src={secondSectionData[1].imgSrc}
            alt={secondSectionData[1].altText}
            width={120}
            height={120}
          />
        </a>
      </div>

      {/* Modal - Renderizado condicional mejorado */}
      {isModalOpen && activeModalId && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {firstSectionCards
              .filter((card) => card.id === activeModalId)
              .map((card) => (
                <React.Fragment key={card.id}>
                  <Image
                    src={card.imgSrc}
                    alt={card.altText}
                    width={300}
                    height={200}
                  />
                  <h3>{card.shortDesc}</h3>
                  <p>{card.longDesc}</p>
                  <button
                    className={styles.closeModalBtn}
                    onClick={closeModal}
                    aria-label="Cerrar modal"
                  >
                    Cerrar
                  </button>
                </React.Fragment>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
