import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { TransitionGroup, Transition } from "react-transition-group";
import type { AppProps } from "next/app";

import Loader from "../components/Loader";
import Layout, { LayoutWipe } from "../components/Layout";
import { initTabKeyNavigation } from "../components/SmoothArea";
import { trackPageView } from "../utils";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
const ENTER_TRANSITION_DELAY = 1050;
const EXIT_TRANSITION_DELAY = 1030;

export const fixTimeoutTransition = (timeout: number): void => {
  Router.events.on("beforeHistoryChange", () => {
    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
    // later on when the transition finishes.
    const nodes = document.querySelectorAll(
      "link[rel=stylesheet], style:not([media=x])"
    );
    const copies = [...nodes].map((el) => el.cloneNode(true) as HTMLElement);

    for (const copy of copies) {
      // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
      // change process.
      copy.removeAttribute("data-n-p");
      copy.removeAttribute("data-n-href");

      // Add duplicated nodes to the DOM.
      document.head.appendChild(copy);
    }

    const handler = () => {
      // Emulate a `.once` method using `.on` and `.off`
      Router.events.off("routeChangeComplete", handler);

      window.setTimeout(() => {
        for (const copy of copies) {
          // Remove previous page's styles after the transition has finalized.
          document.head.removeChild(copy);
        }
      }, timeout);
    };

    Router.events.on("routeChangeComplete", handler);
  });
};

fixTimeoutTransition(ENTER_TRANSITION_DELAY);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const [hasLoaded, setHasLoaded] = useState(false);
  const [initialPathname] = useState(router.pathname);
  const [canRenderWipeLayoutWipe, setCanRenderWipeLayoutWipe] = useState(false);

  useEffect(() => {
    if (!canRenderWipeLayoutWipe && router.pathname !== initialPathname) {
      setCanRenderWipeLayoutWipe(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    initTabKeyNavigation();

    // styles fix for first load
    if (router.pathname === "/404") {
      router.push(router.pathname);
    } else {
      router.push(router.asPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Richard Ekwonye</title>
        <meta
          name="description"
          content="Creative developer passionate about building appealing and interactive web experiences."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.richardekwonye.com/"
        />
        <meta property="twitter:title" content="Richard Ekwonye" />
        <meta
          property="twitter:description"
          content="Creative developer passionate about building appealing and interactive web experiences."
        />
        <meta
          property="twitter:image"
          content="https://www.richardekwonye.com/images/app-cover.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.richardekwonye.com/" />
        <meta property="og:title" content="Richard Ekwonye" />
        <meta
          property="og:description"
          content="Creative developer building appealing and interactive web experiences."
        />
        <meta
          property="og:image"
          content="https://www.richardekwonye.com/images/app-cover.png"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#e1dfdd" />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Loader onComplete={setHasLoaded} />

      {canRenderWipeLayoutWipe && <LayoutWipe key={router.pathname} />}

      {hasLoaded && (
        <TransitionGroup>
          <Transition
            key={router.pathname}
            timeout={{
              enter: ENTER_TRANSITION_DELAY,
              exit: EXIT_TRANSITION_DELAY,
            }}
            onEntered={() => window.scrollTo(0, 0)}
          >
            {(state) => (
              <Layout state={state}>
                <Component {...pageProps} />
              </Layout>
            )}
          </Transition>
        </TransitionGroup>
      )}
    </>
  );
};

export default MyApp;
