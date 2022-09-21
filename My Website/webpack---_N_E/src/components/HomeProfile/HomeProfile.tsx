import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import UnderlinedLink from "../UnderlinedLink";
import FadeIn from "../FadeIn";
import AnimatedLines, { Size } from "../AnimatedLines";
import styles from "./HomeProfile.module.scss";

const HomeProfile: FC = () => (
  <section className={styles.homeProfileContainer}>
    <SmoothArea className={styles.homeProfile}>
      <FadeIn>
        <h4>01/</h4>
      </FadeIn>
      <div className={styles.bio}>
        <AnimatedLines
          size={Size.LG}
          text="Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences."
        />
        <AnimatedLines
          className={styles.personalInterests}
          size={Size.LG}
          text="When I'm not building or exploring new web experiences, I'm probably playing games or watching football."
        />
      </div>
      <FadeIn className={styles.advantageTitle}>
        <h4>A blend of UI and product engineering.</h4>
      </FadeIn>
      <FadeIn className={styles.advantage}>
        <p>
          With a background in design, I work closely with design focused teams
          to build websites and microsites for companies and individuals. I have
          years of experience working and collaborating on product teams and
          leading engineering efforts.
          <br /> <br />
          With my experience in UI and product engineering, I solve product
          problems and build appealing usable web experiences.
        </p>
      </FadeIn>
      <div className={styles.aboutLink}>
        <UnderlinedLink href="/about">
          More about me and services
        </UnderlinedLink>
      </div>
    </SmoothArea>
  </section>
);

export default HomeProfile;
