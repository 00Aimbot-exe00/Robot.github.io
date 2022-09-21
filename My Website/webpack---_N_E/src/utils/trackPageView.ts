// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const trackPageView = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
