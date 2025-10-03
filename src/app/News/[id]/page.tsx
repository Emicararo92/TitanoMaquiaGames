"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../Styles/NewsDetail.module.css";

// Datos de las noticias
const newsData = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/e_ygor7y.jpg",
    altText: "Escena épica de batalla en juego",
    title: "Batallas épicas",
    shortDesc: "Vive intensas batallas llenas de acción y estrategia",
    fullContent: `
      <h2>Batallas Épicas: Una Nueva Dimensión en el Combate</h2>
      <p>Sumérgete en intensas batallas llenas de acción y estrategia en cada partida. Nuestro sistema de combate ha sido diseñado para ofrecer una experiencia única donde cada decisión cuenta.</p>
      
      <h3>Características principales:</h3>
      <ul>
        <li>Sistema de combate táctico por turnos</li>
        <li>Más de 50 habilidades únicas para descubrir</li>
        <li>Entornos interactivos que afectan el combate</li>
        <li>Bosses épicos con mecánicas únicas</li>
      </ul>
      
      <p>Los jugadores podrán formar equipos estratégicos y desarrollar sinergias entre personajes para superar los desafíos más difíciles.</p>
    `,
    date: "15 Diciembre 2024",
    author: "Equipo de Desarrollo",
    category: "Gameplay",
    isNew: false,
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/c_wu8zp5.jpg",
    altText: "Personaje principal en acción",
    title: "Héroes únicos",
    shortDesc: "Descubre héroes con habilidades especiales",
    fullContent: `
      <h2>Héroes Únicos: Cada Personaje Tiene Su Historia</h2>
      <p>Descubre un elenco diverso de héroes, cada uno con habilidades especiales y estilos de combate únicos que se adaptan a diferentes enfoques de juego.</p>
      
      <h3>Nuevos Personajes Próximamente:</h3>
      <ul>
        <li><strong>Aetherius</strong> - Maestro de las energías cósmicas</li>
        <li><strong>Lyra</strong> - Guerrero con dominio del tiempo</li>
        <li><strong>Kael</strong> - Experto en combate cuerpo a cuerpo</li>
      </ul>
      
      <p>Cada héroe viene con su propia historia de fondo, misiones personales y desarrollo de personaje que afecta directamente la narrativa del juego.</p>
    `,
    date: "10 Diciembre 2024",
    author: "Equipo de Diseño",
    category: "Personajes",
    isNew: true,
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
    altText: "Mundo abierto del juego",
    title: "Exploración libre",
    shortDesc: "Explora vastos mundos abiertos",
    fullContent: `
      <h2>Exploración Libre: Mundos por Descubrir</h2>
      <p>Explora vastos mundos abiertos repletos de misiones emocionantes y secretos escondidos. Cada región ofrece experiencias únicas y recompensas para los jugadores más curiosos.</p>
      
      <h3>Regiones Disponibles:</h3>
      <ul>
        <li><strong>Bosque Ancestral</strong> - Tierras místicas llenas de magia</li>
        <li><strong>Montañas del Alba</strong> - Picos desafiantes y vistas impresionantes</li>
        <li><strong>Ciudad Perdida</strong> - Ruinas antiguas con tesoros ocultos</li>
      </ul>
      
      <p>El sistema de exploración dinámica asegura que cada visita a estas regiones pueda revelar nuevos secretos y eventos aleatorios.</p>
    `,
    date: "5 Diciembre 2024",
    author: "Equipo de Mundo Abierto",
    category: "Mundo",
    isNew: false,
  },
];

export default function NewsDetail() {
  const params = useParams();
  const newsId = parseInt(params.id as string);

  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <div className={styles.notFound}>
        <h1>Noticia no encontrada</h1>
        <p>La noticia que buscas no existe o ha sido removida.</p>
        <Link href="/" className={styles.backButton}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.newsDetailContainer}>
      {/* Fondo animado con partículas naranjas */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.contentWrapper}>
        <article className={styles.newsArticle}>
          {/* Header de la noticia */}
          <header className={styles.newsHeader}>
            <div className={styles.metaInfo}>
              <span className={styles.category}>{newsItem.category}</span>
              <span className={styles.date}>{newsItem.date}</span>
              {newsItem.isNew && <span className={styles.newBadge}>NUEVO</span>}
            </div>

            <h1 className={styles.newsTitle}>{newsItem.title}</h1>
            <p className={styles.newsExcerpt}>{newsItem.shortDesc}</p>

            <div className={styles.authorInfo}>
              <span>Por: {newsItem.author}</span>
            </div>
          </header>

          {/* Imagen principal */}
          <div className={styles.newsImageContainer}>
            <Image
              src={newsItem.imgSrc}
              alt={newsItem.altText}
              fill
              className={styles.newsImage}
              priority
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.imageBorder}></div>
          </div>

          {/* Contenido */}
          <div
            className={styles.newsContent}
            dangerouslySetInnerHTML={{ __html: newsItem.fullContent }}
          />

          {/* Footer */}
          <footer className={styles.newsFooter}>
            <Link href="/" className={styles.backButton}>
              ← Volver al inicio
            </Link>
            <div className={styles.shareSection}>
              <span>Compartir:</span>
              <button className={styles.shareButton}>Twitter</button>
              <button className={styles.shareButton}>Facebook</button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
