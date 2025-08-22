'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/products/product-detail.module.scss';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image src={mainImage} alt={name} width={600} height={600} objectFit="cover" />
      </div>
      <div className={styles.thumbnailGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.thumbnail} onClick={() => setMainImage(img)}>
            <Image src={img} alt={`${name} thumbnail ${index + 1}`} width={100} height={100} objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;