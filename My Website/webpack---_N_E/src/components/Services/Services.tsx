import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import FadeIn from "../FadeIn";
import BigText from "../BigText";
import Accordion from "../Accordion";
import { SERVICES } from "./Services.data";
import styles from "./Services.module.scss";

const Services: FC = () => (
  <section className={styles.servicesContainer}>
    <SmoothArea className={styles.services}>
      <FadeIn>
        <h4>02/</h4>
      </FadeIn>
      <h2 className={styles.title}>
        <BigText text="Services" />
      </h2>
      <Accordion className={styles.accordion} data={SERVICES} />
    </SmoothArea>
  </section>
);

export default Services;
