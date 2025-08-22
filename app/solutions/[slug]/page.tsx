import React from 'react';

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const SolutionDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    return (
        <div>
            <h1>Решение для отрасли: {slug}</h1>
            <p>Здесь будет подробное описание решения для отрасли {slug}...</p>
        </div>
    );
};

export default SolutionDetailPage;
