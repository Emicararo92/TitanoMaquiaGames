"use client";

import { Suspense, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import SingleModel from "../SingleModel3D/SingleModel";
import styles from "../../../../Styles/MG3D.module.css";

const modelPaths = [
  "/cubeA.glb",
  "/cubeB.glb",
  "/cubeC.glb",
  "/cubeD.glb",
  "/cubeE.glb",
  "/cubeF.glb",
];

export default function ModelGallery3D() {
  const [expandedModel, setExpandedModel] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoizar las cards para evitar re-renderizados innecesarios
  const modelCards = useMemo(
    () =>
      modelPaths.map((model, index) => (
        <div
          key={index}
          className={`${styles.modelCard} ${
            expandedModel === model ? styles.hidden : ""
          }`}
          onClick={() => handleModelClick(model)}
        >
          <Canvas
            camera={{ position: [0, 0, 3], fov: 50 }}
            className={styles.canvas}
          >
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <Suspense
              fallback={<div className={styles.loading}>Cargando...</div>}
            >
              <SingleModel
                modelPath={model}
                shouldRotate={!expandedModel}
                scale={1}
              />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      )),
    [expandedModel]
  );

  const handleModelClick = (model: string) => {
    setIsTransitioning(true);
    setExpandedModel(model);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleCloseExpanded = () => {
    setIsTransitioning(true);
    setExpandedModel(null);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className={styles.container}>
      {expandedModel && (
        <div
          className={`${styles.modelOverlay} ${
            isTransitioning ? styles.transitioning : ""
          }`}
          onClick={handleCloseExpanded}
        />
      )}

      <div className={styles.cardsGrid}>{modelCards}</div>

      {expandedModel && (
        <div
          className={`${styles.expandedView} ${
            isTransitioning ? styles.transitioning : ""
          }`}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense
              fallback={<div className={styles.loading}>Cargando...</div>}
            >
              <SingleModel
                modelPath={expandedModel}
                shouldRotate={false}
                scale={1.5}
              />
              <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
              />
            </Suspense>
            <Preload all />
          </Canvas>
          <button className={styles.closeButton} onClick={handleCloseExpanded}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}
