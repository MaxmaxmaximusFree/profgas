import React from "react";

import styles from "../product-detail.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/widgets/Button";
import { getProductBySlug } from "@/actions/actions";
import ProductGallery from "@/components/ProductGallery";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <>
      <Header />
      <main className={styles.productDetailPage}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            <ProductGallery images={product.images} name={product.name} />
            <div className={styles.details}>
              <h1 className={styles.productName}>{product.name}</h1>
              <div className={styles.price}>{product.price}</div>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.actionButton}>
                <Button href={`/products/${product.id}`} variant="primary">
                  В корзину
                </Button>
              </div>
              <div className={styles.sku}>Артикул: {product.sku}</div>
            </div>
          </div>
          <div className={styles.specifications}>
            <h2 className={styles.sectionTitle}>Технические характеристики</h2>
            <ul className={styles.specList}>
              {product.specifications.map((spec, index) => (
                <li key={index}>
                  <span className={styles.specName}>{spec.name}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
