import { useState, useRef, FC, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

import SmoothArea from "../SmoothArea";
import MobileMenu from "../MobileMenu";
import { NAV_LINKS, MOBILE_MENU_EXIT_DURATION } from "./Header.data";
import { isMobile } from "../../utils";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [isMobileDevice] = useState(isMobile());
  const [activePath] = useState(router.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cx(styles.header, { [styles.stickyHeader]: isMobileDevice })}
    >
      <SmoothArea inverseElementRefs={[titleRef, navRef]}>
        <div className={styles.headerGrid}>
          <div ref={titleRef} className={styles.title}>
            <Link href="/" scroll={false}>
              <a>Richard Ekwonye</a>
            </Link>
          </div>
          <div className={styles.currentRole}>
            <p>
              Currently Design <br /> Engineer at Stripe
            </p>
          </div>
          <div className={styles.location}>
            <p>
              Based in London <br /> United Kingdom
            </p>
          </div>
          <div ref={navRef} className={styles.navArea}>
            <nav className={styles.lgNav}>
              {NAV_LINKS.map(({ link, label }, index) => (
                <Fragment key={index}>
                  <Link href={link} scroll={false}>
                    <a
                      className={cx(styles.navLink, {
                        [styles.active]: activePath === link,
                      })}
                    >
                      {label}
                    </a>
                  </Link>
                  {index !== NAV_LINKS.length - 1 && ", "}
                </Fragment>
              ))}
            </nav>
            <nav className={styles.mobileNav}>
              <span
                className={styles.mobileMenu}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                Menu
              </span>
            </nav>
          </div>
        </div>

        <CSSTransition
          in={isMobileMenuOpen}
          timeout={MOBILE_MENU_EXIT_DURATION}
          classNames={{ exitActive: styles.mobileMenuExit }}
          unmountOnExit
        >
          <MobileMenu
            activePath={activePath}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </CSSTransition>
      </SmoothArea>
    </header>
  );
};

export default Header;
