
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './delivery.module.scss';

const DeliveryPage = () => {
  return (
    <>
      <Header />
      <main className={styles.deliveryPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Доставка и оплата</h1>
          <p className={styles.description}>
            Мы осуществляем доставку по всей территории России. Стоимость доставки рассчитывается индивидуально в зависимости от региона и объема заказа. Оплата производится по безналичному расчету.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DeliveryPage;
