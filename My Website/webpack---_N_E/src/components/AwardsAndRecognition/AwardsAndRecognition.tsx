import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import FadeIn from "../FadeIn";
import BigText from "../BigText";
import { AWARDS_AND_RECOGNITION } from "./AwardsAndRecognition.data";
import styles from "./AwardsAndRecognition.module.scss";

const AwardsAndRecognition: FC = () => (
  <section className={styles.awardsAndRecognitionContainer}>
    <SmoothArea className={styles.awardsAndRecognition}>
      <FadeIn>
        <h4>04/</h4>
      </FadeIn>

      <h2 className={styles.title}>
        <BigText text="Awards and" />
        <br />
        <BigText text="recognition" />
      </h2>

      <h2 className={styles.mobileTitle}>
        <BigText text="Awards" srText="Awards &#38; recognition" />
        <br />
        <BigText text="&#38; recog" withoutSrText />
        <br />
        <BigText text="-nition" withoutSrText />
      </h2>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span className={styles.project}>Project</span>
          <span className={styles.platform}>Award or platform</span>
          <span className={styles.year}>Year</span>
        </div>
        <div className={styles.tableBody}>
          {AWARDS_AND_RECOGNITION.map(({ project, platform, year }, index) => (
            <div key={index} className={styles.tableRow}>
              <span className={styles.project}>{project}</span>
              <span className={styles.platform}>{platform}</span>
              <span className={styles.year}>{year}</span>
            </div>
          ))}
        </div>
      </div>
    </SmoothArea>
  </section>
);

export default AwardsAndRecognition;
