import { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import cx from "classnames";

import FadeIn from "../FadeIn";
import BigText from "../BigText";
import { NAV_LINKS } from "../Header";
import {
  FADE_ANIMATION_DELAY,
  BIG_TEXT_ANIMATION_DELAY,
} from "./MobileMenu.data";
import type { MobileMenuProps } from "./MobileMenu.types";
import styles from "./MobileMenu.module.scss";

const MobileMenu: FC<MobileMenuProps> = ({ activePath, onClose }) => {
  const [hasAnimatedActiveLink, setHasAnimatedActiveLink] = useState(false);

  const onNavItemTextAnimationEnd = (path: string) => {
    if (activePath === path) {
      setHasAnimatedActiveLink(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <section className={styles.mobileMenu}>
      <header>
        <FadeIn
          className={styles.headerRow}
          animationDelay={FADE_ANIMATION_DELAY}
          animateIntoView={false}
        >
          <Link href="/" scroll={false}>
            <a>Richard Ekwonye</a>
          </Link>
          <span onClick={onClose}>Close</span>
        </FadeIn>
      </header>

      <div className={styles.menuContent}>
        <ul
          className={cx(styles.navLinks, {
            [styles.activeLinkUnderlinePassive]: !hasAnimatedActiveLink,
          })}
        >
          <li>
            <Link href="/" scroll={false}>
              <a
                className={cx({
                  [styles.activeNavLink]: activePath === "/",
                })}
              >
                <BigText
                  text="Home"
                  className={styles.navItem}
                  animationDelay={BIG_TEXT_ANIMATION_DELAY}
                  animateIntoView={false}
                  snapOnAnimationEnd={() => onNavItemTextAnimationEnd("/")}
                />
              </a>
            </Link>
          </li>
          {NAV_LINKS.map(({ link, label }, index) => (
            <li key={index}>
              <Link href={link} scroll={false}>
                <a
                  className={cx({
                    [styles.activeNavLink]: activePath === link,
                  })}
                >
                  <BigText
                    text={label}
                    className={styles.navItem}
                    animationDelay={BIG_TEXT_ANIMATION_DELAY}
                    animateIntoView={false}
                    snapOnAnimationEnd={() => onNavItemTextAnimationEnd(link)}
                  />
                </a>
              </Link>
            </li>
          ))}
          <li></li>
        </ul>

        <FadeIn
          className={styles.currentRole}
          animationDelay={FADE_ANIMATION_DELAY}
          animateIntoView={false}
        >
          <p>
            Currently Design <br /> Engineer at Stripe
          </p>
        </FadeIn>

        <FadeIn
          className={styles.location}
          animationDelay={FADE_ANIMATION_DELAY}
          animateIntoView={false}
        >
          <p>
            Based in London <br /> United Kingdom
          </p>
        </FadeIn>
      </div>
    </section>,
    document.body
  );
};

export default MobileMenu;
