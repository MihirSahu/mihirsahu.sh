"use client";

import { useState, useEffect } from "react";

export function useDeviceDetect() {
  const [isIOS, setIsIOS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Detect iOS
    const iosDetected =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    // Detect mobile (small screen)
    const mobileDetected = window.innerWidth < 768;

    setIsIOS(iosDetected);
    setIsMobile(mobileDetected);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isIOS, isMobile, isIOSMobile: isIOS && isMobile };
}
