import { useEffect, useRef, FC } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { MATERIAL_COLOR } from "./Football.data";
import type { FootballProps, GLTFResult } from "./Football.types";

const Football: FC<FootballProps> = ({ visible = true }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const { nodes, materials } = useGLTF(
    "assets/football.glb"
  ) as unknown as GLTFResult;

  useFrame(() => {
    const mesh = meshRef.current;

    if (visible && mesh) {
      const scaleX = mesh.scale.x;

      if (scaleX < 1) {
        const currScale = scaleX + (1 - scaleX) * 0.09;
        mesh.scale.set(currScale, currScale, currScale);
      }
    }
  });

  useEffect(() => {
    if (materials) {
      materials.black.color.set(MATERIAL_COLOR);
    }
  }, [materials]);

  return (
    <group dispose={null} scale={0.2} visible={visible}>
      {/* Transparent box to avoid empty spaces in the group. PresentationControls don't grab empty spaces */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>
      <mesh
        ref={meshRef}
        scale={0.65}
        geometry={nodes.Soccer_Ball_Clean.geometry}
        material={materials.black}
      />
    </group>
  );
};

export default Football;
