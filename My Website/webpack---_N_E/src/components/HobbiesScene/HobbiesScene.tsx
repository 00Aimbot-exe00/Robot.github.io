import { useState, useEffect, useRef, Suspense, FC } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import cx from "classnames";

import AreaCursor, { Mode } from "../AreaCursor";
import { MODELS } from "./HobbiesScene.data";
import { HobbiesSceneProps } from "./HobbiesScene.types";
import styles from "./HobbiesScene.module.scss";

const HobbiesScene: FC<HobbiesSceneProps> = ({
  activeIndex,
  className,
  renderDelay,
}) => {
  const [renderScene, setRenderScene] = useState(!renderDelay);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (renderDelay) {
      setTimeout(() => {
        setRenderScene(true);
      }, renderDelay * 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className={cx(styles.sceneWrapper, className)}>
      <Canvas camera={{ fov: 2.5 }} dpr={[1, 2]}>
        <ambientLight intensity={2} />
        <pointLight intensity={2} position={[-4, 10, 10]} />
        <Suspense fallback={<mesh />}>
          {renderScene &&
            MODELS.map((Model, index) => (
              <PresentationControls
                // remount PresentationControls (and Model) to reset rotation and preserve initial animation
                key={
                  activeIndex === index ? `active-${index}` : `passive-${index}`
                }
                cursor={false}
                global={false}
                speed={activeIndex === index ? 2.5 : 0}
              >
                <Model visible={activeIndex === index} />
              </PresentationControls>
            ))}
        </Suspense>
      </Canvas>

      <AreaCursor areaRef={containerRef} mode={Mode.DRAG} />
    </div>
  );
};

export default HobbiesScene;
