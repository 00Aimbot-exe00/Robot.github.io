import type { FC } from "react";

import SmoothArea, { ParallaxImage } from "../SmoothArea";
import FadeIn from "../FadeIn";
import BigText from "../BigText";
import {
  HERO_NUMBER_ANIMATION_DELAY,
  HERO_TEXT_ANIMATION_DELAY,
  COVER_ANIMATION_DELAY,
} from "./AboutHero.data";
import styles from "./AboutHero.module.scss";

const AboutHero: FC = () => (
  <section className={styles.aboutHeroContainer}>
    <SmoothArea className={styles.aboutHero}>
      <FadeIn
        animationDelay={HERO_NUMBER_ANIMATION_DELAY}
        animateIntoView={false}
      >
        <h4>01/</h4>
      </FadeIn>
      <h2 className={styles.title}>
        <BigText
          text="Passionate"
          animationDelay={HERO_TEXT_ANIMATION_DELAY}
          animateIntoView={false}
        />
        <br />
        <BigText
          text="creative"
          animationDelay={HERO_TEXT_ANIMATION_DELAY}
          animateIntoView={false}
        />
        <br />
        <BigText
          text="developer"
          animationDelay={HERO_TEXT_ANIMATION_DELAY}
          animateIntoView={false}
        />
      </h2>
      <ParallaxImage
        src="/images/about-cover.jpg"
        className={styles.coverImage}
        containerClassName={styles.coverImageContainer}
        multiplier={0.1}
        animationDelay={COVER_ANIMATION_DELAY}
        animateIn
      />
      <h2 className={styles.title}>
        <BigText text="based in" />
        <br />
        <BigText text="London" />
      </h2>
    </SmoothArea>
  </section>
);

export default AboutHero;
