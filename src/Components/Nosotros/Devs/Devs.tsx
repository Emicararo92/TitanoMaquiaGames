"use client";

import React, { useState } from "react";
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
    thumbnail:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755123072/pkmd_mx9muu.png",
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112462/Dani_sibbcs.mp4",
    title: "Dev Games",
    description:
      "Cuando el código compila a la primera pero el juego sigue teniendo más bugs que un hormiguero. Especialista en 'features no documentadas'.",
    type: "Unity/Unreal",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755123072/pkmb_rygsmb.jpg",
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112470/Jazz_kazkvk.mp4",
    title: "Diseño UI",
    description:
      "'¿Quieres que se vea bonito o que funcione?' - Pregunta que nunca hace. Cree que los dropdowns son para cobardes y que todo debe caber en un solo viewport.",
    type: "Figma/Photoshop",
  },
  {
    id: 3,
    thumbnail:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755123072/pkme_lnhmdc.png",
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112469/Fermin_dbe8l1.mp4",
    title: "Música Code",
    description:
      "Programa en ritmo de jazz: a veces sincopado, a veces fuera de tiempo, pero siempre con estilo. Su IDE tiene plugins de auto-tune.",
    type: "React Tone.js",
  },
  {
    id: 4,
    thumbnail:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755123180/pkm1_aatqcf.png",
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112461/Facu_udtttj.mp4",
    title: "3D Master",
    description:
      "Cuando tus modelos tienen más polígonos que líneas de código. Especialista en 'optimización creativa' (aka reducir calidad hasta que no se note).",
    type: "Blender/Three.js",
  },
  {
    id: 5,
    thumbnail:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755123072/pkmc_r7yxco.jpg",
    video:
      "https://res.cloudinary.com/deek9levs/video/upload/v1755112463/Emi_Cararo_khgaq8.mp4",
    title: "Web Dev",
    description:
      "'Funciona en mi localhost' - Últimas palabras famosas. Cree que CSS es magia negra y que JavaScript es un lenguaje serio (pobrecito).",
    type: "React/Next.js",
  },
];

export default function Devs() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className={styles.videosGrid}>
      {videos.map((item) => (
        <div
          key={item.id}
          className={styles.card}
          onMouseEnter={() => setActiveVideo(item.id)}
          onMouseLeave={() => setActiveVideo(null)}
          onClick={() =>
            setActiveVideo(activeVideo === item.id ? null : item.id)
          }
        >
          <div className={styles.videoWrapper}>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={250}
              height={250}
              className={`${styles.thumbnail} ${
                activeVideo === item.id ? styles.hidden : ""
              }`}
            />
            <video
              src={item.video}
              className={`${styles.video} ${
                activeVideo === item.id ? styles.visible : ""
              }`}
              muted
              loop
              playsInline
              autoPlay={activeVideo === item.id}
            />
          </div>
          <p className={styles.title}>{item.title}</p>
          {activeVideo === item.id && (
            <div className={styles.description}>
              <p>
                <strong>Tipo:</strong> {item.type}
              </p>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
