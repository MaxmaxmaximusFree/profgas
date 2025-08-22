"use client";

import React, { Children, cloneElement } from "react";
import styles from "./AnimateOnScroll.module.scss";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationName?: "fadeInUp" | "fadeIn";
  delay?: string; // e.g., '0.2s'
  duration?: string; // e.g., '1s'
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className,
  animationName = "fadeInUp",
  delay,
  duration,
  onMouseEnter,
  onMouseLeave,
}) => {
  const child = Children.only(children);

  if (!React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
    return <>{children}</>;
  }

  const animationStyle = {
    "--animation-delay": delay,
    "--animation-duration": duration,
  } as React.CSSProperties;

  return cloneElement(child, {
    className: `${child.props.className || ""} ${styles.animate} ${
      styles[animationName]
    } ${className || ""}`,
    style: { ...child.props.style, ...animationStyle },
    onMouseEnter,
    onMouseLeave,
  });
};

export default AnimateOnScroll;
