import { useState, useEffect, useRef, FC } from "react";
import cx from "classnames";

import AreaCursor, { Mode } from "../AreaCursor";
import { initDraggableCover } from "./DraggableMaskCover.utils";
import type { DraggableMaskCoverProps } from "./DraggableMaskCover.types";
import styles from "./DraggableMaskCover.module.scss";

const DraggableMaskCover: FC<DraggableMaskCoverProps> = ({
  animationDelay,
}) => {
  const [isReady, setIsReady] = useState(!animationDelay);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const hotspotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationDelay) {
      initDraggableCover(imageContainerRef, hotspotRef);
    } else {
      setTimeout(() => {
        setIsReady(true);
        initDraggableCover(imageContainerRef, hotspotRef);
      }, animationDelay * 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx(styles.cover, { [styles.passive]: !isReady })}>
      <div className={styles.coverImageContainer} ref={imageContainerRef}>
        <img
          className={styles.coverImage}
          src="/images/hero-cover.jpg"
          alt="Richards"
        />
      </div>
      <div ref={hotspotRef} className={styles.hotspot} />
      <AreaCursor areaRef={hotspotRef} mode={Mode.DRAG} />
    </div>
  );
};

export default DraggableMaskCover;
