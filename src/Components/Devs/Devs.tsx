"use client";

import React, { useState } from "react";
import styles from "../../Styles/Devs.module.css";
import Image from "next/image";

interface TeamMember {
  id: number;
  image: string;
  title: string;
  description: string;
  type: string;
  secondaryImage?: string; // Imagen para el marco interior
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755112462/dani_image.jpg",
    title: "Dev Games",
    description:
      "Desarrollo de videojuegos con enfoque en rendimiento y optimización de mecánicas complejas. Experiencia en motores Unity y Unreal.",
    type: "Unity / Unreal",
    secondaryImage:
      "https://res.cloudinary.com/deek9levs/image/upload/v1757608227/game_frame.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755112470/jazz_image.jpg",
    title: "Diseño UI",
    description:
      "Diseño de interfaces intuitivas y visualmente atractivas. Experiencia en Figma y Photoshop, adaptando la UX a distintos dispositivos.",
    type: "Figma / Photoshop",
    secondaryImage:
      "https://res.cloudinary.com/deek9levs/image/upload/v1757608227/ui_frame.png",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755112469/fermin_image.jpg",
    title: "Música Code",
    description:
      "Integración de audio y programación interactiva, creación de experiencias multimedia en tiempo real con React y Tone.js.",
    type: "React / Tone.js",
    secondaryImage:
      "https://res.cloudinary.com/deek9levs/image/upload/v1757608227/music_frame.png",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755112461/facu_image.jpg",
    title: "3D Master",
    description:
      "Modelado 3D y animación para entornos interactivos. Optimización de recursos y texturizado avanzado en Blender y Three.js.",
    type: "Blender / Three.js",
    secondaryImage:
      "https://res.cloudinary.com/deek9levs/image/upload/v1757608227/3d_frame.png",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1755112463/emi_image.jpg",
    title: "Web Dev",
    description:
      "Desarrollo web fullstack moderno con Next.js y React. Implementación de e-commerce y soluciones escalables con buenas prácticas de código.",
    type: "React / Next.js",
    secondaryImage:
      "https://res.cloudinary.com/deek9levs/image/upload/v1757608227/web_frame.png",
  },
];

export default function Devs() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  const handleClick = (memberId: number) => {
    setActiveMember((prev) => (prev === memberId ? null : memberId));
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
          sizes="100vw"
        />
        <div className={styles.topBannerText}>NUESTRO EQUIPO</div>
      </div>

      {/* 🔹 SECCIÓN PRINCIPAL con ID "NOS" */}
      <section id="NOS" className={styles.teamSection}>
        <div className={styles.videosGrid}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`${styles.card} ${
                activeMember === member.id ? styles.active : ""
              }`}
              onClick={() => handleClick(member.id)}
            >
              {/* Marco exterior */}
              <div className={styles.outerFrame}>
                {/* Marco interior con imagen decorativa */}
                <div className={styles.innerFrame}>
                  {member.secondaryImage && (
                    <div className={styles.innerFrameImage}>
                      <Image
                        src={member.secondaryImage}
                        alt={`${member.title} frame`}
                        fill
                        className={styles.frameDecoration}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  {/* Imagen principal del miembro */}
                  <div className={styles.imageContainer}>
                    <Image
                      src={member.image}
                      alt={member.title}
                      fill
                      className={styles.memberImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              <p className={styles.title}>{member.title}</p>

              <div
                className={`${styles.description} ${
                  activeMember === member.id ? styles.visible : ""
                }`}
              >
                <p>
                  <strong>Tipo:</strong> {member.type}
                </p>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
