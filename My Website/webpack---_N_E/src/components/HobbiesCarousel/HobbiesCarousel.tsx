import { useState, useRef, useEffect, FC } from "react";
import cx from "classnames";

import BigText from "../BigText";
import AnimatedLines, { ElementType } from "../AnimatedLines";
import FadeIn from "../FadeIn";
import HobbiesScene from "../HobbiesScene";
import {
  HOBBIES,
  UPDATE_CONTROLS_DELAY,
  RESTORE_CONTROLS_TRANSITION_DELAY,
} from "./HobbiesCarousel.data";
import {
  generateControlList,
  updateControlList,
} from "./HobbiesCarousel.utils";
import type { OnControlClick } from "./HobbiesCarousel.types";
import styles from "./HobbiesCarousel.module.scss";

const HobbiesCarousel: FC = () => {
  const [controlList, setControlList] = useState(generateControlList(HOBBIES));
  const [activeId, setActiveId] = useState(0);
  const [isUpdatingControls, setIsUpdatingControls] = useState(false);

  {
    /*
    Handle animated chars flicker on chrome caused by rerender when updating controlList
    */
  }
  const selectedKey = useRef(0);
  const hasAnimatedKeysIn = useRef(false);

  const controlsContainerRef = useRef<HTMLDivElement>(null);

  const onControlClick: OnControlClick = ({ e, id, key }) => {
    if (isUpdatingControls) {
      return;
    }

    const controlsContainer = controlsContainerRef.current as HTMLDivElement;
    const target = e.target as HTMLButtonElement;
    const left =
      target.getBoundingClientRect().left -
      controlsContainer.getBoundingClientRect().left;
    controlsContainer.style.transform = `translate3d(${-left}px, 0, 0)`;
    setActiveId(id);
    selectedKey.current = key;

    if (key > 2) {
      setIsUpdatingControls(true);
      setTimeout(() => updateControls(key), UPDATE_CONTROLS_DELAY);
    }
  };

  const updateControls = (key: number) => {
    const controlsContainer = controlsContainerRef.current as HTMLDivElement;
    controlsContainer.style.transition = "none";
    controlsContainer.style.transform = "";
    setControlList(updateControlList(controlList, key));

    setTimeout(() => {
      controlsContainer.style.transition = "";
      setIsUpdatingControls(false);
    }, RESTORE_CONTROLS_TRANSITION_DELAY);
  };

  const canForceSkipAnimatedKeys = () => {
    hasAnimatedKeysIn.current = true;
  };

  useEffect(() => {
    const forceSkipAnimatedKeys = () => {
      if (!hasAnimatedKeysIn.current) {
        return;
      }

      if (selectedKey.current > 2) {
        window.removeEventListener("resize", forceSkipAnimatedKeys);
        return;
      }

      updateControls(selectedKey.current);
      window.removeEventListener("resize", forceSkipAnimatedKeys);
    };

    window.addEventListener("resize", forceSkipAnimatedKeys);

    return () => {
      if (selectedKey.current < 3) {
        window.removeEventListener("resize", forceSkipAnimatedKeys);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.hobbiesCarousel}>
      <div ref={controlsContainerRef} className={styles.controls}>
        {controlList.map(({ id, title, key }) => (
          <button
            key={key}
            className={cx(styles.control, {
              [styles.active]: activeId === id,
            })}
            onClick={(e) => onControlClick({ e, id, key })}
          >
            <BigText
              text={title}
              animateIntoView={key < 3}
              isStatic={key > 2}
              intersectionRootMargin="0px 100px"
              snapOnAnimationEnd={
                key === 2 ? canForceSkipAnimatedKeys : undefined
              }
            />
          </button>
        ))}
      </div>
      <div className={styles.mobileControls}>
        {HOBBIES.map(({ id, title }) => (
          <button
            key={id}
            className={cx(styles.control, {
              [styles.active]: activeId === id,
            })}
            onClick={() => setActiveId(id)}
          >
            <BigText text={title} />
          </button>
        ))}
      </div>
      <div className={styles.items}>
        <div className={styles.itemDetailsWrapper}>
          {HOBBIES.map(({ id, descriptionTitle, description }) => (
            <div
              key={id}
              className={cx(styles.itemDetails, {
                [styles.active]: activeId === id,
              })}
            >
              <AnimatedLines
                text={descriptionTitle}
                elementType={ElementType.HEADING}
              />
              <FadeIn>
                <p>{description}</p>
              </FadeIn>
            </div>
          ))}
        </div>
        <div className={styles.itemsScene}>
          <HobbiesScene renderDelay={0} activeIndex={activeId} />
        </div>
      </div>
    </div>
  );
};

export default HobbiesCarousel;
