import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import FadeIn from "../FadeIn";
import AnimatedLines, { ElementType } from "../AnimatedLines";
import HobbiesCarousel from "../HobbiesCarousel";
import styles from "./PersonalInterests.module.scss";

const PersonalInterests: FC = () => (
  <section className={styles.personalInterestsContainer}>
    <SmoothArea className={styles.personalInterests}>
      <FadeIn>
        <h4>03/</h4>
      </FadeIn>
      <AnimatedLines
        className={styles.titleTwo}
        elementType={ElementType.HEADING}
        text="Personal interests"
      />
      <AnimatedLines
        className={styles.titleThree}
        elementType={ElementType.HEADING}
        text="Drag around"
      />
      <HobbiesCarousel />
    </SmoothArea>
  </section>
);

export default PersonalInterests;
