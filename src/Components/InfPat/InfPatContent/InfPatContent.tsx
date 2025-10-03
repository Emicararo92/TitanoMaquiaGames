"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../Styles/InfPatContent.module.css";

interface MenuItem {
  id: number;
  title: string;
  image: string;
  desc: string;
  verMasText?: string;
  galleryImages?: string[];
}

interface GameMenuTabsProps {
  menuItems?: MenuItem[];
}

export default function GameMenuTabs({
  menuItems: defaultItems,
}: GameMenuTabsProps) {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const menuItems = defaultItems || [
    {
      id: 1,
      title: "Qué es Infinite PathWays",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/e_ygor7y.jpg",
      desc: "Infinite Pathways es un juego de puzzles abstracto de dificultad variable donde el foco principal esta en el Mood del jugador.",
      verMasText: `El objetivo principal consiste en mover un cubo el cual rota sobre sí mismo para desplazarse, y cada una de sus caras interactúa con las celdas que están en el suelo para progresar.\n\nBajo la premisa de "fácil de aprender pero difícil de perfeccionar" el juego pondrá en todo tipo de situaciones donde aun manteniendo una base tan simple, las reglas cambian todo el tiempo cambiando la percepción del juego.\n\nA no preocuparse, el juego es muy flexible en sus propuestas y configuraciones, tenemos desafíos de un nivel extremo pero también se ofrece una experiencia mucho más calmada, ¿y lo mejor? es el jugador quien elige.`,
    },
    {
      id: 2,
      title: "Características",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/c_wu8zp5.jpg",
      desc: "¿Quieres vivir una aventura lineal con exploración y narrativa a través de mundos oníricos o prefieres simplemente sentarte a tu ritmo a resolver los puzzles que te ofrecemos?",
      verMasText: `El título ofrece dos modos de juego, uno para cada perfil, Modo Aventura y Modo Desafío.\n\nEn el modo Aventura ofrece la posibilidad de tratar de escapar de una prisión onírica, donde el tiempo se detuvo y no parece haber una explicación clara de qué está pasando, explora, descubre y supera cada prueba.\n\nEn el modo desafío, no hay historia ni progresión, sino distintos modos de juegos que ofrecen todo tipo de experiencias a resolver, desde modos tipo zen donde no podemos perder y solo es relax, hasta modos contrarreloj pasando por tableros que progresivamente se hacen más pequeños.\n\nPara el jugador más Hardcore, sumado a los 6 modos de juegos que nos ofrece la sección de desafíos, tendremos la posibilidad de habilitar un modo especial que modifica los mismo haciéndolos increíblemente más difíciles, solo para los más perseverantes.`,
    },
    {
      id: 3,
      title: "Galería",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
      desc: "Nos enorgullece profundamente decir que todo lo que compone a nuestro juego fue hecho a mano y con una intencionalidad estética clara, minimalista y sumamente cargada de una impronta personal de parte de todo el equipo",
      galleryImages: [
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1753377842/Tezza-6300_tiskkq.jpg",
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1753377842/Tezza-8012_twdw7s.jpg",
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1753377841/Tezza-2575_m3e7zp.jpg",
      ],
    },
    {
      id: 4,
      title: "Nuestro sonido",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/b_ci6cky.jpg",
      desc: "Nuestro juego usa 'Radios' las cuales puedes cambiar cuando quieras, cada una de ellas pensada para un Mood particular",
      verMasText: `Quieres música clásica? ¿qué te parece algo de jazz? y si mejor escuchamos el agradable sonido de la lluvia?\n\nEl trabajo sonoro fue nuestro mayor desafío y uno de nuestros grandes orgullos, nuestro compositor tuvo la titánica tarea de hacer música de géneros y estilos completamente distintos, y como si fuera poco, también hizo los SFX de audio de toda la obra.\n\nEl proceso fue doble, por un lado seleccionar el estilo que sea acorde a la obra, pero por el otro, hacer que cada radio tenga una cierta lógica, no solo interna, sino en relación con la siguiente radio a sintonizar.`,
    },
  ];

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  const activeMenuItem = menuItems.find((item) => item.id === activeItem);

  return (
    <>
      {/* Banner superior */}
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
            <h3>Que es Infinite PathWays</h3>
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
        </div>

        {/* Panel derecho */}
        <div className={styles.contentPanel}>
          <div className={styles.contentDisplay}>
            <div className={styles.imageContainer}>
              <Image
                src={activeMenuItem?.image || ""}
                alt={activeMenuItem?.title || ""}
                fill
                className={styles.contentImage}
                priority
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.cornerDecoration}></div>
            </div>

            <div className={styles.textContainer}>
              <h2 className={styles.contentTitle}>{activeMenuItem?.title}</h2>
              <p className={styles.contentDescription}>
                {activeMenuItem?.desc}
              </p>
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.verMasButton} onClick={handleOpenModal}>
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Mejorado */}
      {showModal && (
        <div
          className={`${styles.modalOverlay} ${
            isClosing ? styles.closing : ""
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`${styles.modalContent} ${
              isClosing ? styles.closing : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={handleCloseModal}
              aria-label="Cerrar modal"
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{activeMenuItem?.title}</h3>
            </div>

            <div className={styles.modalBody}>
              {/* Si es Galería mostramos carrusel */}
              {activeMenuItem?.galleryImages ? (
                <div className={styles.galleryContainer}>
                  {activeMenuItem.galleryImages.map((img, index) => (
                    <div key={index} className={styles.galleryImage}>
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        className={styles.galleryImg}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.textContent}>
                  {activeMenuItem?.verMasText}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
