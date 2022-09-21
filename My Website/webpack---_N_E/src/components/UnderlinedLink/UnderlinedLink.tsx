import type { FC } from "react";
import Link from "next/link";
import cx from "classnames";

import FadeIn from "../FadeIn";
import type { UnderlinedLinkProps } from "./UnderlinedLink.types";
import styles from "./UnderlinedLink.module.scss";

const UnderlinedLink: FC<UnderlinedLinkProps> = ({
  children,
  href,
  className,
}) => (
  <FadeIn>
    <Link href={href} scroll={false}>
      <a className={cx(styles.underlinedLink, className)}>{children}</a>
    </Link>
  </FadeIn>
);

export default UnderlinedLink;
