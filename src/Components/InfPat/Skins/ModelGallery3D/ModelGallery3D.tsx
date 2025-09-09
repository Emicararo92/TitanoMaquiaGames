/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../../../Styles/MG3D.module.css";

// Reemplazamos las rutas de modelos 3D con imágenes estáticas
const skinImages = [
  "/cubeA.glb", // Reemplazar con rutas reales de imágenes
  "/cubeB.glb",
  "/cubeC.glb",
  "/cubeD.glb",
  "/cubeE.glb",
  "/cubeF.glb",
].map((_, index) => ({
  id: index + 1,
  image: `https://res.cloudinary.com/dcn7oqg4l/image/upload/v175501964${index}/skin-${
    index + 1
  }.jpg`, // URLs de ejemplo
  title: `Skin ${index + 1}`,
  description: `Descripción exclusiva de la skin ${
    index + 1
  } con detalles especiales.`,
  rarity: ["Común", "Poco común", "Rara", "Épica", "Legendaria", "Mítica"][
    index % 6
  ],
}));

export default function ModelGallery3D() {
  const [selectedSkin, setSelectedSkin] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {/* Título de la sección */}
      <h2 className={styles.galleryTitle}>Nuestras Skins</h2>
      <p className={styles.gallerySubtitle}>
        Descubre nuestras skins exclusivas con efectos únicos
      </p>

      {selectedSkin !== null && (
        <div
          className={styles.skinOverlay}
          onClick={() => setSelectedSkin(null)}
        />
      )}

      <div className={styles.cardsGrid}>
        {skinImages.map((skin, index) => (
          <div
            key={skin.id}
            className={styles.skinCard}
            onClick={() => setSelectedSkin(skin.id)}
          >
            <div className={styles.skinImageContainer}>
              <div className={styles.skinPlaceholder}>
                <div className={styles.skinIcon}>🎮</div>
              </div>
              <div className={styles.skinOverlay}></div>
              <div className={styles.rarityBadge} data-rarity={skin.rarity}>
                {skin.rarity}
              </div>
            </div>
            <div className={styles.skinInfo}>
              <h3 className={styles.skinTitle}>{skin.title}</h3>
              <p className={styles.skinDescription}>{skin.description}</p>
            </div>
            <div className={styles.skinHoverEffect}></div>
          </div>
        ))}
      </div>

      {selectedSkin !== null && (
        <div className={styles.expandedView}>
          <div className={styles.expandedContent}>
            <div className={styles.expandedImageContainer}>
              <div className={styles.expandedPlaceholder}>
                <div className={styles.expandedIcon}>🎮</div>
              </div>
              <div className={styles.expandedOverlay}></div>
              <div
                className={styles.expandedRarity}
                data-rarity={skinImages[selectedSkin - 1].rarity}
              >
                {skinImages[selectedSkin - 1].rarity}
              </div>
            </div>

            <div className={styles.expandedDetails}>
              <h2 className={styles.expandedTitle}>
                {skinImages[selectedSkin - 1].title}
              </h2>
              <p className={styles.expandedDescription}>
                {skinImages[selectedSkin - 1].description}
              </p>

              <div className={styles.skinStats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Disponibilidad:</span>
                  <span className={styles.statValue}>Limitada</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Efectos:</span>
                  <span className={styles.statValue}>Partículas únicas</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Precio:</span>
                  <span className={styles.statValue}>1.200 créditos</span>
                </div>
              </div>

              <button className={styles.purchaseButton}>Adquirir Skin</button>
            </div>
          </div>

          <button
            className={styles.closeButton}
            onClick={() => setSelectedSkin(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
