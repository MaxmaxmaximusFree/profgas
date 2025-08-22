import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './articles.module.scss';
import { getArticles } from '@/actions/actions';
import Link from 'next/link';
import Image from 'next/image';

const ArticlesPage = async () => {
  const articles = await getArticles();

  return (
    <>
      <Header />
      <main className={styles.articlesPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Статьи</h1>
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className={styles.articleCard}>
                <Image src={article.imageUrl} alt={article.title} width={400} height={250} objectFit="cover" />
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <span>{article.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticlesPage;
