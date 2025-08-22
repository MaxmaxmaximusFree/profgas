"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useEffect,
} from "react";
import styles from "./Spotlight.module.scss";

interface SpotlightContextType {
  onTargetEnter: (e: React.MouseEvent<HTMLElement>) => void;
  onTargetLeave: () => void;
}

const SpotlightContext = createContext<SpotlightContextType | null>(null);

export const useSpotlight = () => {
  const context = useContext(SpotlightContext);
  if (!context) {
    throw new Error("useSpotlight must be used within a SpotlightProvider");
  }
  return context;
};

const shineColors = [
  "9, 105, 218", // Accent Blue
  "26, 127, 55", // Success Green
  "139, 87, 214", // A nice purple
  "212, 149, 44", // Attention Yellow-ish
];

interface SpotlightContainerProps {
  children: ReactNode;
  className?: string;
}

export const SpotlightContainer: React.FC<SpotlightContainerProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [currentColor, setCurrentColor] = useState(shineColors[0]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.toggle("is-hovered", opacity > 0);
    }
  }, [opacity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onTargetEnter = (e: React.MouseEvent<HTMLElement>) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const shineMultiplier = 2;
    setSize({
      width: cardRect.width * shineMultiplier,
      height: cardRect.height * shineMultiplier,
    });

    const availableColors = shineColors.filter((c) => c !== currentColor);
    const newColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
    setCurrentColor(newColor);

    setOpacity(1);
  };

  const onTargetLeave = () => {
    setOpacity(0);
  };

  const wrapperStyle = {
    opacity,
    width: `${size.width}px`,
    height: `${size.height}px`,
    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
    "--spotlight-rgb": currentColor,
  } as React.CSSProperties;

  return (
    <SpotlightContext.Provider value={{ onTargetEnter, onTargetLeave }}>
      <div
        className={className}
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.spotlightWrapper} style={wrapperStyle}>
          <div className={`${styles.spotlight} ${styles.layer1}`} />
          <div className={`${styles.spotlight} ${styles.layer2}`} />
          <div className={`${styles.spotlight} ${styles.layer3}`} />
        </div>
        {children}
      </div>
    </SpotlightContext.Provider>
  );
};
