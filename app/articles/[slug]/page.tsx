import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../articles.module.scss';
import { getArticles } from '@/actions/actions';

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const ArticleDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const articles = await getArticles();
    const article = articles.find(a => a.id === slug);

    if (!article) {
        return <div>Статья не найдена</div>
    }

    return (
        <>
            <Header />
            <main className={styles.articleDetailPage}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{article.title}</h1>
                    <p>{article.date}</p>
                    <p className={styles.excerpt}>{article.excerpt}</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ArticleDetailPage;
