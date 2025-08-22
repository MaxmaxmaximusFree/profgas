import React from "react";
import styles from "./Articles.module.scss";
import SectionTitle from "@/widgets/SectionTitle";
import Button from "@/widgets/Button";
import ArticleCard from "./ArticleCard";
import AnimateOnScroll from "./AnimateOnScroll";

const articleItems = [
  {
    image:
      "https://images.unsplash.com/photo-1581093458791-9a6685b3e41a?q=80&w=2070&auto=format&fit=crop", // Заменить
    title: "О перспективах производства гелия в России",
    excerpt:
      "Гелий относится к стратегическому ресурсу, который определяет развитие ключевых отраслей промышленности, экономический и военный потенциал любой страны...",
    href: "/articles/helium-production-russia",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop", // Заменить
    title: "Специальная оценка условий труда",
    excerpt:
      "Компания «Профгаз» провела мероприятия по специальной оценке условий труда работников, подтвердив высокий уровень безопасности на производстве...",
    href: "/articles/special-assessment-of-working-conditions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea55ce2a26?q=80&w=2070&auto=format&fit=crop", // Заменить
    title: "Новые стандарты безопасности для газовых баллонов",
    excerpt:
      "С 1 января 2023 года вступают в силу новые требования к безопасности при работе с газовыми баллонами. Узнайте, что изменилось...",
    href: "/articles/new-safety-standards",
  },
];

const Articles = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <SectionTitle>Полезные статьи</SectionTitle>
        <div className={styles.grid}>
          {articleItems.map((item, index) => (
            <AnimateOnScroll key={index}>
              <ArticleCard
                image={item.image}
                title={item.title}
                excerpt={item.excerpt}
                href={item.href}
              />
            </AnimateOnScroll>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <Button href="/articles" variant="outline">
            Все статьи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
