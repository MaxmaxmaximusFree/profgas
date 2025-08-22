import React from 'react';

const SolutionDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Решение для отрасли: {params.slug}</h1>
      <p>Здесь будет подробное описание решения для отрасли {params.slug}...</p>
    </div>
  );
};

export default SolutionDetailPage;
