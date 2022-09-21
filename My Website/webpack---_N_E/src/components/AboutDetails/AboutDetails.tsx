import type { FC } from "react";

import SmoothArea, { ParallaxImage } from "../SmoothArea";
import FadeIn from "../FadeIn";
import styles from "./AboutDetails.module.scss";

const AboutDetails: FC = () => (
  <section className={styles.aboutDetailsContainer}>
    <SmoothArea className={styles.aboutDetails}>
      <FadeIn className={styles.title}>
        <h4>A journey of curiosity and explorations</h4>
      </FadeIn>
      <FadeIn className={styles.details}>
        <p>
          I&#39;m a creative developer with years of experience in building
          products and appealing web experiences. I&#39;ve collaborated with
          individuals and teams to build experiences for SMEs and large
          enterprises including Wise, Google, Interswitch and Intelia.
          <br /> <br />
          Each project is an opportuinity to learn new concepts across multiple
          domains including arts, maths and physics.
        </p>
      </FadeIn>
      <ParallaxImage
        src="/images/about-details.jpg"
        className={styles.detailsImage}
        containerClassName={styles.detailsImageContainer}
        multiplier={0.1}
      />
    </SmoothArea>
  </section>
);

export default AboutDetails;
