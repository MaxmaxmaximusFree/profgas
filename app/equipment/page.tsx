
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Equipment from '@/components/Equipment'; // I can reuse the component from the main page
import styles from './equipment.module.scss';

const EquipmentPage = () => {
  return (
    <>
      <Header />
      <main className={styles.equipmentPage}>
        <div className={styles.container}>
            <h1 className={styles.title}>Наше оборудование</h1>
            <Equipment />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EquipmentPage;
