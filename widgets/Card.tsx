import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.scss";

interface CardProps {
  href: string;
  image?: string;
  title: string;
  description?: string;
  showArrow?: boolean;
  children?: React.ReactNode;
  variant?: "default" | "popular";
}

const Card: React.FC<CardProps> = ({
  href,
  image,
  title,
  description,
  showArrow = false,
  children,
  variant = "default",
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <Link href={href} className={styles.cardLink}>
        {" "}
        {/* Link теперь внутри div */}
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h3 className={styles.cardTitle}>{title}</h3>
            {description && (
              <p className={styles.cardDescription}>{description}</p>
            )}
          </div>
          {showArrow && (
            <div className={styles.footer}>
              <span className={styles.readMore}>
                Подробнее
                <span className={styles.arrow}>→</span>
              </span>
            </div>
          )}
        </div>
      </Link>
      {children} {/* Children теперь вне Link */}
    </div>
  );
};

export default Card;
