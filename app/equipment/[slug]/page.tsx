import React from 'react';

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const EquipmentDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    return (
        <div>
            <h1>Оборудование: {slug}</h1>
            <p>Здесь будет подробное описание оборудования {slug}...</p>
        </div>
    );
};

export default EquipmentDetailPage;
