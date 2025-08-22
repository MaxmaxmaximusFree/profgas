
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Solutions from '@/components/Solutions'; // I can reuse the component from the main page
import styles from './solutions.module.scss';

const SolutionsPage = () => {
  return (
    <>
      <Header />
      <main className={styles.solutionsPage}>
        <div className={styles.container}>
            <h1 className={styles.title}>Решения для отраслей</h1>
            <Solutions />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SolutionsPage;
