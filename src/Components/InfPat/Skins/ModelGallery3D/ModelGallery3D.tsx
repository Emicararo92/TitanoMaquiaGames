/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "../../../../Styles/MG3D.module.css";
import type { GLTF } from "three-stdlib";
import * as THREE from "three";

// Datos de las skins
const skinImages = [
  "/cubeA.glb",
  "/cubeB.glb",
  "/cubeC.glb",
  "/cubeD.glb",
  "/cubeE.glb",
  "/cubeF.glb",
].map((path, index) => {
  useGLTF.preload(path);
  return {
    id: index + 1,
    modelPath: path,
    title: `Skin ${index + 1}`,
    description: `Descripción exclusiva de la skin ${
      index + 1
    } con detalles especiales.`,
    rarity: ["Común", "Poco común", "Rara", "Épica", "Legendaria", "Mítica"][
      index % 6
    ],
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
      <h2 className={styles.galleryTitle}>Nuestras Skins</h2>
      <p className={styles.gallerySubtitle}>
        Descubre nuestras skins exclusivas con efectos únicos
      </p>

      <div className={styles.cardsGrid}>
        {skinImages.map((skin) => (
          <div
            key={skin.id}
            className={styles.skinCard}
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
    </div>
  );
}
