import { useState, FC } from "react";
import cx from "classnames";

import Item from "./Item";
import type { AccordionProps } from "./Accordion.types";
import styles from "./Accordion.module.scss";

const Accordion: FC<AccordionProps> = ({ data, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const onToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <div className={cx(styles.accordion, className)}>
      {data.map((item, index) => (
        <Item
          key={index}
          index={index}
          isActive={activeIndex === index}
          onToggle={onToggle}
          {...item}
        />
      ))}
    </div>
  );
};

export default Accordion;
