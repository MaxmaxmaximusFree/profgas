import React from "react";
import Button from "@/widgets/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {/* Заголовок и подзаголовок удалены в соответствии с принципом "Visual First" */}
        <div className={styles.ctaButtons}>
          <Button href="/products" variant="primary">
            Перейти в каталог
          </Button>
          <Button href="/solutions" variant="glass">
            Решения для отраслей
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
