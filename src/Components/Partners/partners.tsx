import Image from "next/image";
import styles from "../../Styles/partners.module.css";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <h1 className={styles.title}>Partners</h1>

      <div className={styles.logos}>
        <Image
          alt="imagen de nuestro partner"
          src={
            "https://res.cloudinary.com/deek9levs/image/upload/v1770644659/Brinca_G_burs7q.png"
          }
          width={150}
          height={150}
        />
        <Image
          alt="imagen de nuestro partner"
          src={
            "https://res.cloudinary.com/deek9levs/image/upload/v1770644659/Logo_G_DantoGames_uo8lzp.png"
          }
          width={150}
          height={150}
        />
        <Image
          alt="imagen de nuestro partner"
          src={
            "https://res.cloudinary.com/deek9levs/image/upload/v1770648052/Logo_Text_Mind_The_Clown_ltklxt.png"
          }
          width={150}
          height={150}
        />
      </div>
    </section>
  );
}
