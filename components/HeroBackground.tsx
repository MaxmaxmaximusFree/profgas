import React from "react";
import styles from "./HeroBackground.module.scss";

interface HeroBackgroundProps {
  images: string[];
  slideDuration: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  images,
  slideDuration,
}) => {
  const totalDuration = images.length * slideDuration;

  return (
    <div
      className={styles.backgroundContainer}
      style={{ "--total-duration": `${totalDuration}s` } as React.CSSProperties}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{
            backgroundImage: `url(${src})`,
            animationDelay: `${index * slideDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
