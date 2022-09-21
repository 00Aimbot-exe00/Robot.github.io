import { FC } from "react";
import { createPortal } from "react-dom";

import styles from "./Layout.module.scss";

const LayoutWipe: FC = () => {
  return createPortal(<div className={styles.layoutWipe} />, document.body);
};

export default LayoutWipe;
