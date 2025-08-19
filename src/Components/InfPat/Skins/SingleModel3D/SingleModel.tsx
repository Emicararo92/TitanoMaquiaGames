"use client";

import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SingleModel({
  modelPath,
  shouldRotate = true,
  scale = 1,
}: {
  modelPath: string;
  shouldRotate?: boolean;
  scale?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  // Clonar la escena para evitar problemas de referencia
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame(() => {
    if (groupRef.current && shouldRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={clonedScene} rotation={[0, Math.PI / 4, 0]} />
    </group>
  );
}
