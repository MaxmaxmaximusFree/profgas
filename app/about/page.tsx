import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './about.module.scss';
import { getSiteInfo } from '@/actions/actions';

const AboutPage = async () => {
  const siteInfo = await getSiteInfo();

  return (
    <>
      <Header />
      <main className={styles.aboutPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>{siteInfo.about.title}</h1>
          <p className={styles.description}>
            {siteInfo.about.text}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;