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
    title: "Daniel",
    description: "Programador",
    type: "Programador",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646019/Vero_oxe13d.jpg",
    title: "Vero",
    description: "CM",
    type: "CM",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646016/Joaqu%C3%ADn_tcrvym.png",
    title: "Joaquín",
    description: "Programador",
    type: "Programador",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646022/Fermin_rkocyv.png",
    title: "Fermín",
    description: "Música",
    type: "Música",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646018/Nico_r9vimz.jpg",
    title: "Nico",
    description: "Programador",
    type: "Programador",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646016/Lucas_Ignacio_Lobos_vsrszr.jpg",
    title: "Lucas Ignacio Lobos",
    description: "Programador",
    type: "Programador",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646015/Jose.jpg_hmzv4p.jpg",
    title: "José",
    description: "Programador",
    type: "Programador",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646014/Jazmin_Mart%C3%ADnez_zi3jhf.jpg",
    title: "Jazmín Martínez",
    description: "Diseño",
    type: "Diseño",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646011/Facu_xzilbu.jpg",
    title: "Facu",
    description: "Programador",
    type: "Programador",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646010/EmiCararo_fgtqaq.jpg",
    title: "Emi Cararo",
    description: "Diseño Web",
    type: "Diseño Web",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/deek9levs/image/upload/v1770646009/emi_chsbls.jpg",
    title: "Emi",
    description: "Programador",
    type: "Programador",
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
