import React from "react";
import styles from "./News.module.scss";
import Button from "@/widgets/Button";
import SectionTitle from "@/widgets/SectionTitle";
import NewsItem from "./NewsItem";
import AnimateOnScroll from "./AnimateOnScroll";

const newsItems = [
  {
    date: "12.08.2022",
    title: "Цены на гелий существенно снижены",
    excerpt:
      "Мы рады сообщить о значительном снижении цен на гелий всех марок. Это стало возможным благодаря оптимизации логистики и...",
    href: "/news/geliy-price-drop",
  },
  {
    date: "27.08.2020",
    title: "Новые баллоны российского и импортного производства",
    excerpt:
      "Ассортимент нашей продукции пополнился новыми моделями газовых баллонов от ведущих российских и зарубежных производителей...",
    href: "/news/new-cylinders-2020",
  },
  {
    date: "08.05.2019",
    title: "Система менеджмента качества соответствует ИСО 9001-2015",
    excerpt:
      "Наша компания успешно прошла сертификацию и подтвердила соответствие системы менеджмента качества международным стандартам...",
    href: "/news/iso-9001-2015",
  },
];

const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <SectionTitle>Новости компании</SectionTitle>
        <div className={styles.newsList}>
          {newsItems.map((item, index) => (
            <AnimateOnScroll key={index}>
              <NewsItem
                date={item.date}
                title={item.title}
                excerpt={item.excerpt}
                href={item.href}
              />
            </AnimateOnScroll>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <Button href="/news" variant="outline">
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
