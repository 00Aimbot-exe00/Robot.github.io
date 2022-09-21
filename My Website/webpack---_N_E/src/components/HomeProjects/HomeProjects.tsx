import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import Projects from "../Projects";
import FadeIn from "../FadeIn";
import AnimatedLines, { ElementType } from "../AnimatedLines";
import styles from "./HomeProjects.module.scss";

const HomeProjects: FC = () => (
  <section className={styles.homeProjectsContainer}>
    <SmoothArea className={styles.homeProjects}>
      <FadeIn>
        <h4>02/</h4>
      </FadeIn>
      <AnimatedLines
        className={styles.titleTwo}
        elementType={ElementType.HEADING}
        text="Recent projects"
      />
      <AnimatedLines
        className={styles.titleThree}
        elementType={ElementType.HEADING}
        text="Creative development"
      />
      <Projects />
    </SmoothArea>
  </section>
);

export default HomeProjects;
