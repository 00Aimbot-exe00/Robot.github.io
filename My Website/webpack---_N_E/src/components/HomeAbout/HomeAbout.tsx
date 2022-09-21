import type { FC } from "react";

import SmoothArea, { ParallaxImage } from "../SmoothArea";
import FadeIn from "../FadeIn";
import AnimatedLines, { ElementType } from "../AnimatedLines";
import BigText from "../BigText";
import UnderlinedLink from "../UnderlinedLink";
import styles from "./HomeAbout.module.scss";

const HomeAbout: FC = () => (
  <section className={styles.homeAboutContainer}>
    <SmoothArea className={styles.homeAbout}>
      <FadeIn>
        <h4>03/</h4>
      </FadeIn>
      <div className={styles.hobbies}>
        <h2>
          <BigText text="Football," />
        </h2>
        <ParallaxImage
          src="/images/home-about-cover.jpg"
          className={styles.coverImage}
          containerClassName={styles.coverImageContainer}
          multiplier={0.1}
        />
        <h2>
          <BigText text="Gaming," />
        </h2>
        <h2>
          <BigText text="Music." />
        </h2>
      </div>
      <AnimatedLines
        className={styles.title}
        elementType={ElementType.HEADING}
        text="About me"
      />
      <FadeIn className={styles.description}>
        <p>
          My hobbies take up a good portion of my leisure time. I&#39;m either
          cheering up FC Bayern Munich, winning a game of FIFA with them,
          exploring VR experiences or listening to delightful music.
        </p>
      </FadeIn>
      <div className={styles.aboutLink}>
        <UnderlinedLink href="/about">More about me</UnderlinedLink>
      </div>
    </SmoothArea>
  </section>
);

export default HomeAbout;
