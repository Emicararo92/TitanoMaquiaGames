"use client";

import React, { useState, useCallback } from "react";
import styles from "../../Styles/Devs.module.css";
import Image from "next/image";

interface TeamMember {
  id: number;
  image: string;
  title: string;
  description: string;
  type: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646009/Daniel_h1tedo.jpg",
    title: "Dani",
    description:
      "Producer y Game Designer. Define la visión del juego y mantiene al equipo en sync.",
    type: "PRODUCER / GD",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646011/Facu_xzilbu.jpg",
    title: "Facu",
    description:
      "Lead de modelado 3D. Se encarga de que todo se vea sólido y optimizado.",
    type: "Jefe de Modeladores",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646016/Lucas_Ignacio_Lobos_vsrszr.jpg",
    title: "Lucas",
    description:
      "Modelador 3D. Construye personajes y assets listos para gameplay.",
    type: "Modelador",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646009/emi_chsbls.jpg",
    title: "Emi",
    description:
      "Modelador 3D enfocado en detalles, texturas y rendimiento ingame.",
    type: "Modelador",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646014/Jazmin_Mart%C3%ADnez_zi3jhf.jpg",
    title: "Jazz",
    description:
      "Artista gráfica. Da identidad visual y estilo a cada proyecto.",
    type: "Artista Gráfica",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646015/Jose.jpg_hmzv4p.jpg",
    title: "José",
    description:
      "Lead programmer. Ordena el código y hace que todo funcione sin romperse.",
    type: "Jefe de Programación",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646016/Joaqu%C3%ADn_tcrvym.png",
    title: "Topo",
    description:
      "Programador gameplay. Mecánicas, lógica y optimización constante.",
    type: "Programador",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646018/Nico_r9vimz.jpg",
    title: "Eze",
    description:
      "Programador backend y sistemas. Performance y estabilidad primero.",
    type: "Programador",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646016/Joaqu%C3%ADn_tcrvym.png",
    title: "Lucas",
    description:
      "Programador gameplay. Integra features y pule la experiencia.",
    type: "Programador",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646019/Vero_oxe13d.jpg",
    title: "Vero",
    description: "CM / CCO. Comunidad, comunicación y presencia del estudio.",
    type: "CM / CCO",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646010/EmiCararo_fgtqaq.jpg",
    title: "Emi Cararo",
    description:
      "Web dev y diseño. La info al mundo online.",
    type: "Diseño Web",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Devs() {
  const [page, setPage] = useState(1);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const totalPages = Math.ceil(TEAM_MEMBERS.length / ITEMS_PER_PAGE);
  const membersToShow = TEAM_MEMBERS.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const handlePrevPage = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  return (
    <section id="NOS" className={styles.teamSection}>
      <div className={styles.topBanner}>
        <Image
          src="https://res.cloudinary.com/deek9levs/image/upload/v1757608227/Separador_Infinite_Path_1_axhchm.png"
          alt="Nuestro equipo"
          fill
          className={styles.topBannerImage}
          priority
        />
        <h2 className={styles.topBannerText}>NUESTRO EQUIPO</h2>
      </div>{" "}
      <div className={styles.videosGrid}>
        {membersToShow.map((member, index) => (
          <div
            key={member.id}
            className={`${styles.card} ${
              activeCard === member.id ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveCard(member.id)}
            onMouseLeave={() => setActiveCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Marco doble (tu estructura original) */}
            <div className={styles.outerFrame}>
              <div className={styles.innerFrame}>
                <div className={styles.imageContainer}>
                  <Image
                    src={member.image}
                    alt={`${member.title} - ${member.description}`}
                    fill
                    className={styles.memberImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
              </div>
            </div>

            {/* Título y descripción */}
            <p className={styles.title}>{member.title}</p>
            <div className={styles.description}>
              <p>{member.description}</p>
              <p className={styles.memberType}>{member.type}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Paginación simple (tu estructura) */}
      <div className={styles.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          aria-label="Página anterior"
        >
          ←
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          aria-label="Página siguiente"
        >
          →
        </button>
      </div>
    </section>
  );
}
