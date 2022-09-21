export const throttle = (callback: () => void, interval: number) => {
  let enableCall = true;

  return (...args: []) => {
    if (!enableCall) {
      return;
    }

    enableCall = false;
    callback.call(null, ...args);
    setTimeout(() => (enableCall = true), interval);
  };
};
