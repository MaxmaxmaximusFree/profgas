import React from 'react';
import Link from 'next/link';
import styles from './NewsItem.module.scss';

interface NewsItemProps {
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ date, title, excerpt, href }) => {
  return (
    <Link href={href} className={styles.newsItem}>
      <div className={styles.date}>{date}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.readMore}>Читать далее →</div>
    </Link>
  );
};

export default NewsItem;
