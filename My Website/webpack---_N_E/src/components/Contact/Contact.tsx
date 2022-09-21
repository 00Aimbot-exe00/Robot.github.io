import { useEffect, FC } from "react";

import SmoothArea from "../SmoothArea";
import EmailAddress from "../EmailAddress";
import BigAction from "../BigAction";
import FadeIn from "../FadeIn";
import { setBodyTextColor } from "../../utils";
import {
  EMAIL_TITLE_ANIMATION_DELAY,
  HERO_TEXT_ANIMATION_DELAY,
  SOCIAL_TITLE_ANIMATION_DELAY,
} from "./Contact.data";
import styles from "./Contact.module.scss";

const Contact: FC = () => {
  useEffect(() => {
    setBodyTextColor("--white");

    return () => {
      setBodyTextColor("--black");
    };
  }, []);

  return (
    <>
      <div className={styles.fullBg} />
      <section className={styles.contactContainer}>
        <SmoothArea className={styles.contact}>
          <h4 className={styles.emailTitle}>
            <FadeIn
              animationDelay={EMAIL_TITLE_ANIMATION_DELAY}
              animateIntoView={false}
            >
              SEND ME A MESSAGE
            </FadeIn>
          </h4>

          <div className={styles.emailAddress}>
            <EmailAddress
              animationDelay={HERO_TEXT_ANIMATION_DELAY}
              animateIntoView={false}
              inverse
            />
          </div>

          <h4 className={styles.socialsTitle}>
            <FadeIn
              animationDelay={SOCIAL_TITLE_ANIMATION_DELAY}
              animateIntoView={false}
            >
              OR CONNECT WITH <br /> ME ON SOCIALS
            </FadeIn>
          </h4>

          <div className={styles.socials}>
            <span>
              <a
                href="https://twitter.com/ekwonye"
                rel="noreferrer"
                target="_blank"
              >
                <BigAction text="Twitter" srText="Twitter" inverse />
              </a>
            </span>

            <span>
              <a
                href="https://www.instagram.com/ekwonyenoob"
                rel="noreferrer"
                target="_blank"
              >
                <BigAction text="Instagram" srText="Instagram" inverse />
              </a>
            </span>

            <span>
              <a
                href="https://github.com/ekwonye-richard"
                rel="noreferrer"
                target="_blank"
              >
                <BigAction text="Github" srText="Github" inverse />
              </a>
            </span>
          </div>
        </SmoothArea>
      </section>
    </>
  );
};

export default Contact;
