import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../services.module.scss';
import { getServices } from '@/actions/actions';

const ServiceDetailPage = async ({ params }: { params: { slug: string } }) => {
    const services = await getServices();
    const service = services.find(s => s.id === params.slug);

    if (!service) {
        return <div>Услуга не найдена</div>
    }

    return (
        <>
            <Header />
            <main className={styles.serviceDetailPage}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{service.name}</h1>
                    <p className={styles.description}>{service.description}</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ServiceDetailPage;
