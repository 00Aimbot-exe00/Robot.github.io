import { useState, FC } from "react";
import cx from "classnames";

import BigAction from "../BigAction";
import {
  COPY_LABEL,
  COPIED_LABEL,
  COPIED_STATE_DELAY,
} from "./EmailAddress.data";
import type { EmailAddressProps } from "./EmailAddress.types";
import styles from "./EmailAddress.module.scss";

const Arrow: FC<EmailAddressProps> = ({
  className,
  animationDelay,
  animateIntoView,
  inverse,
}) => {
  const [hasCopiedToClipboard, setHasCopiedToClipboard] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("hello@richardekwonye.com");

    setTimeout(() => {
      setHasCopiedToClipboard(true);
    }, COPIED_STATE_DELAY * 1000);
  };

  const resetCopyState = () => {
    setHasCopiedToClipboard(false);
  };

  return (
    <>
      <BigAction
        onClick={copyToClipboard}
        className={cx(
          styles.clipboardText,
          styles.emailAddressBigText,
          className
        )}
        text="hello@richard"
        textTwo="ekwonye.com"
        withAreaCursor
        animationDelay={animationDelay}
        animateIntoView={animateIntoView}
        inverse={inverse}
        areaCursorLabel={hasCopiedToClipboard ? COPIED_LABEL : COPY_LABEL}
        areaCursorClassName={styles.areaCursor}
        onAreaCursorExit={resetCopyState}
        srText="hello@richardekwonye.com"
      />
      <a
        className={styles.emailToAddress}
        href="mailto:hello@richardekwonye.com"
      >
        <BigAction
          className={styles.emailAddressBigText}
          text="hello@"
          inverse={inverse}
          srText="hello@richardekwonye.com"
        />
        <BigAction
          className={styles.emailAddressBigText}
          text="richard"
          inverse={inverse}
        />
        <BigAction
          className={styles.emailAddressBigText}
          text="ekwonye"
          inverse={inverse}
        />
        <BigAction
          className={styles.emailAddressBigText}
          text=".com"
          inverse={inverse}
        />
      </a>
    </>
  );
};

export default Arrow;
