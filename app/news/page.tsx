
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import News from '@/components/News'; // I can reuse the component from the main page
import styles from './news.module.scss';

const NewsPage = () => {
  return (
    <>
      <Header />
      <main className={styles.newsPage}>
        <div className={styles.container}>
            <h1 className={styles.title}>Новости</h1>
            <News />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
