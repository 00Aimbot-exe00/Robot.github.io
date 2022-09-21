import { useEffect, useRef, FC } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { setMaterialsColor } from "./DualSense.utils";
import type { DualSenseProps } from "./DualSense.types";

const DualSense: FC<DualSenseProps> = ({ visible = true }) => {
  const groupRef = useRef<THREE.Mesh>(null);

  const { scene } = useGLTF("assets/DualSense.glb") as unknown as GLTF;

  useFrame(() => {
    const group = groupRef.current;

    if (visible && group) {
      const scaleX = group.scale.x;

      if (scaleX < 1) {
        const currScale = scaleX + (1 - scaleX) * 0.09;
        group.scale.set(currScale, currScale, currScale);
      }
    }
  });

  useEffect(() => {
    if (scene) {
      setMaterialsColor(scene);
    }
  }, [scene]);

  return (
    <group
      ref={groupRef}
      dispose={null}
      scale={0.65}
      position={[0, 0.03, 0]}
      rotation={[0, Math.PI * 1.79, 0]}
      visible={visible}
      renderOrder={visible ? 1 : 0}
    >
      {/* Transparent box to avoid empty spaces in the group. PresentationControls don't grab empty spaces */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>
      <primitive object={scene} />
    </group>
  );
};

export default DualSense;
