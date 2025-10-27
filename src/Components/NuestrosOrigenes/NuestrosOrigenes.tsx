import Image from "next/image";
import styles from "../../Styles/NuestrosOrigenes.module.css";

export default function OurOrigins() {
  return (
    <>
      {/* Banner superior - MISMA ESTRUCTURA que el ejemplo */}
      <div className={styles.topBanner}>
        <Image
          src="https://res.cloudinary.com/deek9levs/image/upload/v1757608227/Separador_Infinite_Path_1_axhchm.png"
          alt="Nuestros Orígenes"
          fill
          className={styles.topBannerImage}
          priority
        />
        <div className={styles.topBannerText}>NUESTROS ORÍGENES</div>
      </div>

      <div className={styles.contentGrid}>
        {/* Header descriptivo */}
        <div className={styles.header}>
          <p className={styles.subtitle}>
            Venimos de todos lados, muchos ni siquiera eramos parte
            <br />
            de esta hermosa industria, este es un pequeño
            <br />
            recordatorio de donde venimos y que crecer es el único
            <br />
            camino posible
          </p>
        </div>

        {/* Cards de proyectos */}
        <div className={styles.cardsContainer}>
          {/* Primer proyecto - Neon Nebula */}

          {/* Segundo proyecto */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="https://res.cloudinary.com/deek9levs/image/upload/v1761599850/Neon_Nebula_derecha_ns0ojq.jpg"
                alt="Proyecto de desarrollo"
                fill
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Neon Nebula</h3>
              <p className={styles.cardDescription}>
                Este es el primer juego que se hizo como equipo, <br />{" "}
                conformando nuestra marca y ahora es nuestro pequeño gran
                orgullo.
              </p>
              <div className={styles.cardMeta}>
                <span className={styles.metaTag}>El Principio</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="https://res.cloudinary.com/deek9levs/image/upload/v1761599851/Sin_nombre_izquierda_acmmi3.png"
                alt="Neon Nebula - Nuestro primer juego"
                fill
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Las Raices</h3>
              <p className={styles.cardDescription}>
                Este es el primer juego que se hizo <br /> como parte de un
                proyecto en CoderHouse
              </p>
              <div className={styles.cardMeta}>
                <span className={styles.metaTag}>
                  Proyecto final de CoderHouse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
