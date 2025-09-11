/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useRef } from "react";
import styles from "../../../Styles/Devs.module.css";
import Image from "next/image";

interface VideoItem {
  id: number;
  thumbnail: string;
  video: string;
  title: string;
  description: string;
  type: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112462/Dani_sibbcs.mp4",
    title: "Dev Games",
    description:
      "Desarrollo de videojuegos con enfoque en rendimiento y optimización de mecánicas complejas. Experiencia en motores Unity y Unreal.",
    type: "Unity / Unreal",
    thumbnail: "",
  },
  {
    id: 2,
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112470/Jazz_kazkvk.mp4",
    title: "Diseño UI",
    description:
      "Diseño de interfaces intuitivas y visualmente atractivas. Experiencia en Figma y Photoshop, adaptando la UX a distintos dispositivos.",
    type: "Figma / Photoshop",
    thumbnail: "",
  },
  {
    id: 3,
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112469/Fermin_dbe8l1.mp4",
    title: "Música Code",
    description:
      "Integración de audio y programación interactiva, creación de experiencias multimedia en tiempo real con React y Tone.js.",
    type: "React / Tone.js",
    thumbnail: "",
  },
  {
    id: 4,
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112461/Facu_udtttj.mp4",
    title: "3D Master",
    description:
      "Modelado 3D y animación para entornos interactivos. Optimización de recursos y texturizado avanzado en Blender y Three.js.",
    type: "Blender / Three.js",
    thumbnail: "",
  },
  {
    id: 5,
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112463/Emi_Cararo_khgaq8.mp4",
    title: "Web Dev",
    description:
      "Desarrollo web fullstack moderno con Next.js y React. Implementación de e-commerce y soluciones escalables con buenas prácticas de código.",
    type: "React / Next.js",
    thumbnail: "",
  },
];

export default function Devs() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (itemId: number) => {
    const video = videoRefs.current[itemId];
    if (video) {
      video.currentTime = 0;
      video.muted = true; // Preview siempre silenciado
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (itemId: number) => {
    const video = videoRefs.current[itemId];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleClick = (itemId: number) => {
    const video = videoRefs.current[itemId];
    if (!video) return;

    if (activeVideo === itemId) {
      // Pausar si ya está activo
      video.pause();
      video.muted = true; // reset a mute
      setActiveVideo(null);
    } else {
      // Reproducir con sonido
      video.currentTime = 0;
      video.muted = false;
      video.play().catch(() => {});
      setActiveVideo(itemId);
    }
  };

  return (
    <>
      {/* 🔹 Banner divisor arriba del grid */}
      <div className={styles.topBanner}>
        <Image
          src="https://res.cloudinary.com/deek9levs/image/upload/v1757608227/Separador_Infinite_Path_1_axhchm.png"
          alt="Infinite Pathways"
          fill
          className={styles.topBannerImage}
          priority
        />
        <div className={styles.topBannerText}>NUESTRO EQUIPO</div>
      </div>

      <div className={styles.videosGrid}>
        {videos.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
            onClick={() => handleClick(item.id)}
          >
            <div className={styles.videoWrapper}>
              {/* Thumbnail inicial: puede ser la primera frame del video */}
              {!item.thumbnail && (
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el;
                  }}
                  src={item.video}
                  className={`${styles.video} ${
                    activeVideo === item.id ? styles.visible : ""
                  }`}
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              )}

              {/* Video principal */}
              <video
                ref={(el) => {
                  videoRefs.current[item.id] = el;
                }}
                src={item.video}
                className={`${styles.video} ${
                  activeVideo === item.id ? styles.visible : ""
                }`}
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
            <p className={styles.title}>{item.title}</p>
            <div className={styles.description}>
              <p>
                <strong>Tipo:</strong> {item.type}
              </p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
