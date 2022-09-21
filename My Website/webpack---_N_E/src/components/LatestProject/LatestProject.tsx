import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import Projects from "../Projects";
import FadeIn from "../FadeIn";
import AnimatedLines, { ElementType } from "../AnimatedLines";
import styles from "./LatestProject.module.scss";

const LatestProject: FC = () => (
  <section className={styles.latestProjectContainer}>
    <SmoothArea className={styles.latestProject}>
      <FadeIn>
        <h4>05/</h4>
      </FadeIn>
      <AnimatedLines
        className={styles.titleTwo}
        elementType={ElementType.HEADING}
        text="See latest project"
      />
      <AnimatedLines
        className={styles.titleThree}
        elementType={ElementType.HEADING}
        text="Creative development"
      />
      <Projects maxCount={1} />
    </SmoothArea>
  </section>
);

export default LatestProject;
