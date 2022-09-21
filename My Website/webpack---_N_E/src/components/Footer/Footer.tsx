import type { FC } from "react";

import SmoothArea from "../SmoothArea";
import FadeIn from "../FadeIn";
import styles from "./Footer.module.scss";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <SmoothArea>
      <FadeIn className={styles.footerGrid}>
        <div className={styles.title}>
          Richard Ekwonye <br /> Creative developer
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://twitter.com/ekwonye"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/ekwonyenoob"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="https://github.com/ekwonye-richard"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className={styles.team}>
          <div>Development Richard Ekwonye</div>
          <div>
            Design{" "}
            <a
              href="https://www.gilhuybrecht.com"
              rel="noreferrer"
              target="_blank"
            >
              Gil Huybrecht
            </a>
          </div>
        </div>
      </FadeIn>
    </SmoothArea>
  </footer>
);

export default Footer;
