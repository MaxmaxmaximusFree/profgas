import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../services.module.scss';
import { getServices } from '@/actions/actions';

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const ServiceDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const services = await getServices();
    const service = services.find(s => s.id === slug);

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
