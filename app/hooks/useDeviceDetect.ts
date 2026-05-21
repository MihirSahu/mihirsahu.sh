"use client";

import { useSyncExternalStore } from "react";

const getIsIOS = () => {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgent = navigator.userAgent || navigator.vendor;

  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

const getIsMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 768;

const getServerSnapshot = () => false;

const subscribeToResize = (onStoreChange: () => void) => {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
};

const subscribeToStaticSnapshot = () => () => {};

export function useDeviceDetect() {
  const isIOS = useSyncExternalStore(
    subscribeToStaticSnapshot,
    getIsIOS,
    getServerSnapshot,
  );
  const isMobile = useSyncExternalStore(
    subscribeToResize,
    getIsMobile,
    getServerSnapshot,
  );

  return { isIOS, isMobile, isIOSMobile: isIOS && isMobile };
}
