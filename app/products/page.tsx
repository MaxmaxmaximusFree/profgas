import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './products.module.scss';
import { getProducts } from '@/actions/actions';
import Link from 'next/link';
import Image from 'next/image';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <Header />
      <main className={styles.productsPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Продукция</h1>
          <div className={styles.grid}>
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className={styles.productCard}>
                <Image src={product.images[0]} alt={product.name} width={300} height={300} objectFit="cover" />
                <h2>{product.name}</h2>
                <p>{product.shortDescription}</p>
                <span>{product.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
