"use client";

import React from "react";
import styles from "./PopularProducts.module.scss";
import Button from "@/widgets/Button";
import SectionTitle from "@/widgets/SectionTitle";
import Grid from "@/widgets/Grid";
import Card from "@/widgets/Card";
import AnimateOnScroll from "./AnimateOnScroll";

interface Product {
  id: string;
  name: string;
  images: string[];
  price: string;
}

interface PopularProductsProps {
  products: Product[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  return (
    <section className={styles.popularProducts}>
      <div className={styles.container}>
        <SectionTitle>Популярные товары и услуги</SectionTitle>
        <Grid>
          {products.map((product) => (
            <AnimateOnScroll key={product.id}>
              <Card
                href={`/products/${product.id}`}
                title={product.name}
                image={product.images[0]}
              >
                <div className={styles.productInfo}>
                  <div className={styles.price}>{product.price}</div>
                  <Button
                    variant="primary"
                    className={styles.actionButton}
                    onClick={() =>
                      alert(`Добавлено в корзину: ${product.name}`)
                    }
                  >
                    В корзину
                  </Button>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default PopularProducts;
