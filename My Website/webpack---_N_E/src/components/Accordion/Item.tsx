import { useEffect, useRef, FC } from "react";
import cx from "classnames";

import { toTwoDigits } from "../../utils";
import { throttle } from "../../utils";
import type { ItemProps } from "./Accordion.types";
import styles from "./Accordion.module.scss";

const Item: FC<ItemProps> = ({ title, content, index, isActive, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current as HTMLDivElement;

    if (isActive) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0px";
    }
  }, [isActive]);

  useEffect(() => {
    const resetMaxHeight = () => {
      const content = contentRef.current as HTMLDivElement;

      if (content.style.maxHeight !== "0px") {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    };

    const throttledResizeCallback = throttle(resetMaxHeight, 100);

    window.addEventListener("resize", throttledResizeCallback);

    return () => {
      window.removeEventListener("resize", throttledResizeCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.item}>
      <button className={styles.control} onClick={() => onToggle(index)}>
        <span className={styles.itemNumber}>{toTwoDigits(index + 1)}</span>
        <h4 className={styles.title}>{title}</h4>
        <span
          className={cx(styles.stateSymbol, { [styles.passive]: !isActive })}
        />
      </button>
      <div ref={contentRef} className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Item;
