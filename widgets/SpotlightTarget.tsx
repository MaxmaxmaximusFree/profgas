"use client";

import React, { cloneElement, Children } from "react";
import { useSpotlight } from "./SpotlightContainer";

interface SpotlightTargetProps {
  children: React.ReactNode;
}

export const SpotlightTarget: React.FC<SpotlightTargetProps> = ({
  children,
}) => {
  const { onTargetEnter, onTargetLeave } = useSpotlight();
  const child = Children.only(children);

  if (!React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
    return <>{children}</>;
  }

  return cloneElement(child, {
    onMouseEnter: onTargetEnter,
    onMouseLeave: onTargetLeave,
  });
};
