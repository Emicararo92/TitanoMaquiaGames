/* eslint-disable react/no-unescaped-entities */
 
"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "../../../../Styles/MG3D.module.css";
import type { GLTF } from "three-stdlib";
import * as THREE from "three";

// Datos de las skins actualizados según instrucciones
const skinImages = [
  "/cubeA.glb",
  "/cubeB.glb",
  "/cubeC.glb",
  "/cubeD.glb",
  "/cubeE.glb",
  "/cubeF.glb",
].map((path, index) => {
  useGLTF.preload(path);

  // Asignar rarezas según instrucciones
  let rarity = "";
  let description = "";

  if (index < 3) {
    rarity = "Iniciales";
    description = "Skins básicas disponibles desde el inicio de tu aventura.";
  } else if (index < 5) {
    rarity = "Intenta desbloquearlo";
    description =
      "Desafía tus habilidades para conseguir estas skins exclusivas.";
  } else {
    rarity = "";
    description =
      "Descubre nuevas formas de personalizar tu experiencia de juego.";
  }

  return {
    id: index + 1,
    modelPath: path,
    title: index === 5 ? "Mucho más" : `Skin ${index + 1}`,
    description: description,
    rarity: rarity,
  };
});

// Cubo 3D con rotación y animación de escala
function Cube({
  modelPath,
  scale = 1,
  rotationSpeed = 0.01,
  isSelected = false,
}: {
  modelPath: string;
  scale?: number;
  rotationSpeed?: number;
  isSelected?: boolean;
}) {
  const gltf = useGLTF(modelPath) as GLTF;
  const ref = useRef<THREE.Object3D>(null!);
  const targetScale = isSelected ? scale * 1.8 : scale;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
      ref.current.rotation.x += rotationSpeed / 2;

      // Animación de scale suave
      ref.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return <primitive ref={ref} object={gltf.scene} />;
}

export default function ModelGallery3D() {
  const [selectedSkin, setSelectedSkin] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.galleryTitle}>Nuestra "Piel"</h2>
      <p className={styles.gallerySubtitle}>
        En cualquier momento, puedes detener todo y cambiar de skin por otra que
        te guste más, igual que hacer con la música
      </p>

      <div className={styles.cardsGrid}>
        {skinImages.map((skin) => (
          <div
            key={skin.id}
            className={`${styles.skinCard} ${
              skin.id === 6 ? styles.specialCard : ""
            }`}
            onClick={() =>
              setSelectedSkin(selectedSkin === skin.id ? null : skin.id)
            }
          >
            <div className={styles.skinImageContainer}>
              <Canvas style={{ width: "100%", height: "300px" }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Cube
                  modelPath={skin.modelPath}
                  scale={2}
                  rotationSpeed={0.02}
                  isSelected={selectedSkin === skin.id}
                />
                <OrbitControls enableZoom={true} />
              </Canvas>

              {/* Solo mostrar rarity badge si no es la skin 6 y tiene rarity */}
              {skin.id !== 6 && skin.rarity && (
                <div className={styles.rarityBadge} data-rarity={skin.rarity}>
                  {skin.rarity}
                </div>
              )}
            </div>
            <div className={styles.skinInfo}>
              <h3
                className={`${styles.skinTitle} ${
                  skin.id === 6 ? styles.specialTitle : ""
                }`}
              >
                {skin.title}
              </h3>
              <p
                className={`${styles.skinDescription} ${
                  skin.id === 6 ? styles.specialDescription : ""
                }`}
              >
                {skin.description}
              </p>
            </div>
            <div className={styles.skinHoverEffect}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
