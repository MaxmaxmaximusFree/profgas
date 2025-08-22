import React from "react";
import Image from "next/image";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={styles.featureCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;
