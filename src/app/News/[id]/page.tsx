"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../Styles/NewsDetail.module.css";

// ==============================
// DATOS DE NOTICIAS (NUEVAS)
// ==============================
const newsData = [
  {
    id: 1,
    imgSrc: "https://res.cloudinary.com/deek9levs/image/upload/v1768223911/WhatsApp_Image_2026-01-07_at_17.32.19_mjom5p.jpg", // 👉 IMAGEN PRINCIPAL (portada)
    altText: "EVA CABA - Experiencia del equipo",
    title: "EVA – CABA | Una aventura que nos llevó más lejos",
    shortDesc:
      "Una idea que parecía lejana se convirtió en una experiencia transformadora. Más que un destino, fue un punto de inflexión.",
    author: "TMG Studio",
    category: "Eventos",
    isNew: false,
    fullContent: `
      <h2>Una idea que se convirtió en experiencia</h2>
      <p>
        Todo empezó con una idea que parecía lejana: ir a la EVA, en CABA.
        Lo que siguió fue decisión, organización y muchas ganas de salir de la rutina.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.32.18_iwe5x5.jpg" alt="EVA CABA imagen 1" />
      </div>

      <p>
        Viajamos, convivimos y nos encontramos.
        Algunos pisaron la ciudad por primera vez, otros la conocían, pero todos la vivimos distinto.
        Compartimos espacios, charlas, aprendizajes y momentos que nos marcaron.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.32.17_jgkt0a.jpg" alt="EVA CABA imagen 2" />
      </div>

      <p>
        La EVA no fue solo un destino.
        Fue una experiencia que nos empujó a crecer, a pensar en grande y a crear nuevos sueños en conjunto.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223909/WhatsApp_Image_2026-01-07_at_17.32.14_poew3v.jpg" alt="EVA CABA imagen 3" />
      </div>

      <p>
        Hoy seguimos avanzando con lo que ese viaje nos dejó:
        más equipo, más visión y nuevas metas por delante.
      </p>

      <p>
        Porque cuando una idea se convierte en acción, el futuro empieza a tomar forma.
      </p>
    `,
  },
  {
    id: 2,
    imgSrc: "https://res.cloudinary.com/deek9levs/image/upload/v1768223911/WhatsApp_Image_2026-01-07_at_17.33.38_yjaque.jpg",
    altText: "Ventana Sur - Palacio Libertad",
    title:
      "Ventana Sur – Palacio Libertad | Donde el juego se encuentra con el futuro",
    shortDesc:
      "Exploramos ideas, probamos juegos y nos empapamos de innovación en uno de los encuentros más importantes de la industria.",
    author: "TMG Studio",
    category: "Eventos",
    isNew: false,
    fullContent: `
      <h2>Una ventana real al futuro del gaming</h2>
      <p>
        La semana pasada, Ventana Sur se vivió en el Palacio Libertad,
        y parte de nuestro equipo estuvo ahí para ser parte de uno de los encuentros más importantes de la industria.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223911/WhatsApp_Image_2026-01-07_at_17.33.39_vc0j9n.jpg" alt="Ventana Sur imagen 1" />
      </div>

      <p>
        Fuimos a conocer, a disfrutar y, sobre todo, a aprender.
        Probamos nuevos juegos, exploramos ideas frescas y nos conectamos con miradas que amplían nuestra forma de crear.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223911/WhatsApp_Image_2026-01-07_at_17.33.44_hkp4vh.jpg" alt="Ventana Sur imagen 2" />
      </div>

      <p>
        Cada evento como Ventana Sur es una ventana real al futuro del gaming:
        inspiración, innovación y comunidad en movimiento.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223911/WhatsApp_Image_2026-01-07_at_17.33.40_foqyuo.jpg" alt="Ventana Sur imagen 3" />
      </div>

      <p>
        Seguimos jugando, observando y creciendo.
        Porque estar presentes también es una forma de evolucionar.
      </p>
    `,
  },
  {
    id: 3,
    imgSrc: "https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.28.58_tdwevy.jpg",
    altText: "Visión Norte - Formación y comunidad",
    title: "Visión Norte | Aprender, compartir y crear",
    shortDesc:
      "Una experiencia que nos acercó al mundo del cine y al cruce entre lo audiovisual y los videojuegos.",
    author: "TMG Studio",
    category: "Eventos",
    isNew: false,
    fullContent: `
      <h2>Formación, comunidad y nuevas miradas</h2>
      <p>
        Participamos de Visión Norte, una experiencia que nos permitió acercarnos aún más al mundo del cine
        y a su vínculo con la creación audiovisual y los videojuegos.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.29.05_d1tqd2.jpg" alt="Vision Norte imagen 1" />
      </div>

      <p>
        Formamos parte de clínicas y espacios de aprendizaje donde escuchamos, compartimos ideas y exploramos nuevas miradas creativas,
        mientras esperamos los próximos lanzamientos que se vienen gestando en la industria.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.29.01_zsziym.jpg" alt="Vision Norte imagen 2" />
      </div>

      <p>
        Estos encuentros refuerzan el valor de la formación continua y del trabajo en comunidad.
        Cada experiencia suma conocimiento, inspira nuevas ideas y fortalece nuestro camino creativo.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.29.02_vhodbr.jpg" alt="Vision Norte imagen 3" />
      </div>

      <p>
        Agradecemos al equipo de Visión Norte por abrirnos las puertas y permitirnos ser parte de una experiencia tan valiosa.
        Seguimos aprendiendo, creciendo y mirando hacia adelante.
      </p>
    `,
  },
  {
    id: 4,
    imgSrc: "https://res.cloudinary.com/deek9levs/image/upload/v1768223909/WhatsApp_Image_2026-01-07_at_17.27.12_jyurpw.jpg", 
    altText: "Expocon - Comunidad e industria",
    title: "Expocon | Presencia, comunidad y nuevas oportunidades",
    shortDesc:
      "Conectamos, compartimos y formamos parte de un espacio donde la industria se encuentra cara a cara.",
    author: "TMG Studio",
    category: "Eventos",
    isNew: false,
    fullContent: `
      <h2>Un espacio para encontrarnos y crecer</h2>
      <p>
        Estuvimos en Expocon, una experiencia que nos permitió conectar, compartir y ser parte de un espacio
        donde la industria se encuentra cara a cara.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223909/WhatsApp_Image_2026-01-07_at_17.27.13_yxh1pm.jpg" alt="Expocon imagen 1" />
      </div>

      <p>
        Participamos del evento, recorrimos stands, acompañamos lanzamientos y celebramos el talento que sigue creciendo.
        Hubo charlas, intercambios valiosos y paneles donde se pusieron en común ideas, miradas y desafíos del presente y del futuro.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.27.48_dyg7c0.jpg" alt="Expocon imagen 2" />
      </div>

      <p>
        Más allá de las actividades, lo más importante fue el factor humano:
        conocer gente increíble, generar vínculos y fortalecer la red que impulsa a la industria creativa y tecnológica.
      </p>

      <div class="${styles.inlineImage}">
        <img src="https://res.cloudinary.com/deek9levs/image/upload/v1768223910/WhatsApp_Image_2026-01-07_at_17.27.47_qcdxkv.jpg" alt="Expocon imagen 3" />
      </div>

      <p>
        Estos encuentros confirman algo esencial: estar presentes, participar y compartir es parte del camino para seguir avanzando.
        Seguimos construyendo comunidad, aprendiendo y mirando hacia lo que viene.
      </p>
    `,
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
      <div className={styles.backgroundAnimation}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.contentWrapper}>
        <article className={styles.newsArticle}>
          <header className={styles.newsHeader}>
            <h1 className={`${styles.newsTitle} mt-10`}>{newsItem.title}</h1>
            <p className={styles.newsExcerpt}>{newsItem.shortDesc}</p>

            <div className={styles.authorInfo}>
              <span>{newsItem.author}</span>
            </div>
          </header>

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

          <div
            className={styles.newsContent}
            dangerouslySetInnerHTML={{ __html: newsItem.fullContent }}
          />

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
