import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, excerpt, href }) => {
  return (
    <Link href={href} className={styles.articleCard}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.readMore}>Читать далее →</div>
      </div>
    </Link>
  );
};

export default ArticleCard;
