import { useState, useEffect, useRef, FC } from "react";
import { CSSTransition } from "react-transition-group";

import BigAction, { ElementType } from "../BigAction";
import AnimatedLines from "../AnimatedLines";
import { ParallaxImage, initSticky } from "../SmoothArea";
import AreaCursor from "../AreaCursor";
import MobileClickArea from "../MobileClickArea";
import ProjectModal from "../ProjectModal";
import { MODAL_EXIT_DURATION } from "./Projects.data";
import { ProjectProps } from "./Projects.types";
import styles from "./Projects.module.scss";

const STICKY_TOP = 100;

const Project: FC<ProjectProps> = ({
  title,
  titleTwo,
  fullTitle,
  shortDescription,
  coverPhotoUrl,
  ...projectModalProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scaleCoverUp, setScaleCoverUp] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    initSticky({
      elementRef: detailsRef,
      ancestorRef: containerRef,
      top: STICKY_TOP,
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.project}>
      <div className={styles.details}>
        <div ref={detailsRef}>
          <h2>
            <BigAction
              text={title}
              textTwo={titleTwo}
              srText={fullTitle}
              onClick={openModal}
              elementType={ElementType.BUTTON}
              onMouseEnter={() => setScaleCoverUp(true)}
              onMouseLeave={() => setScaleCoverUp(false)}
              withAreaCursor
            />
          </h2>
          <AnimatedLines
            className={styles.shortDescription}
            text={shortDescription}
          />
        </div>
      </div>
      <div ref={coverRef} className={styles.cover} onClick={openModal}>
        <ParallaxImage
          src={coverPhotoUrl}
          className={styles.coverImage}
          containerClassName={styles.coverImageContainer}
          scaleUp={scaleCoverUp}
          scaleUpOnHover
        />
        <AreaCursor areaRef={coverRef} />
        <MobileClickArea />
      </div>

      <CSSTransition
        in={isModalOpen}
        timeout={MODAL_EXIT_DURATION}
        classNames={{ exitActive: styles.projectModalExit }}
        unmountOnExit
      >
        <ProjectModal onClose={closeModal} {...projectModalProps} />
      </CSSTransition>
    </div>
  );
};

export default Project;
