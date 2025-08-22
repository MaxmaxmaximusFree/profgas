import React from 'react';

const EquipmentDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Оборудование: {params.slug}</h1>
      <p>Здесь будет подробное описание оборудования {params.slug}...</p>
    </div>
  );
};

export default EquipmentDetailPage;
