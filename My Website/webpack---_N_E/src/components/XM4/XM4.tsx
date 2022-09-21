import { useEffect, useRef, FC } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { MATERIAL_COLOR } from "./XM4.data";
import type { XM4Props, GLTFResult } from "./XM4.types";

const XM4: FC<XM4Props> = ({ visible = true }) => {
  const groupRef = useRef<THREE.Mesh>(null);

  const { nodes, materials } = useGLTF(
    "assets/XM4.glb"
  ) as unknown as GLTFResult;

  useFrame(() => {
    const group = groupRef.current;

    if (visible && group) {
      const scaleX = group.scale.x;

      if (scaleX < 0.7) {
        const currScale = scaleX + (0.7 - scaleX) * 0.09;
        group.scale.set(currScale, currScale, currScale);
      }
    }
  });

  useEffect(() => {
    if (materials) {
      materials.MainMaterial.color.set(MATERIAL_COLOR);
    }
  }, [materials]);

  return (
    <group
      ref={groupRef}
      dispose={null}
      scale={0.35}
      visible={visible}
      renderOrder={visible ? 1 : 0}
    >
      {/* Transparent box to avoid empty spaces in the group. PresentationControls don't grab empty spaces */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>
      <mesh
        geometry={nodes.ShMainL.geometry}
        material={materials.MainMaterial}
        position={[0.14, 0.04, 0]}
        rotation={[Math.PI * 0.1, Math.PI * 2.18, Math.PI * 1.7]}
      />
    </group>
  );
};

export default XM4;
