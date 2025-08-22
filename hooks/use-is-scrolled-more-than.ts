"use client";

import { useGlobalScroll } from "./use-global-scroll";

export const useIsScrolledMoreThan = (threshold: number) => {
  const scrollY = useGlobalScroll();
  return scrollY > threshold;
};
