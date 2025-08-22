import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './services.module.scss';
import { getServices } from '@/actions/actions';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = async () => {
  const services = await getServices();

  return (
    <>
      <Header />
      <main className={styles.servicesPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Наши услуги</h1>
          <div className={styles.grid}>
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`} className={styles.serviceCard}>
                <Image src={service.icon} alt={service.name} width={50} height={50} />
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
